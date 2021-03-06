% Cedalion to Javascript Compiler
:- expects_dialect(swi).
:- op(1200, xfy, '~>').
:- op(100, xfx, ':').
:- op(100, fx, '$').
:- op(650, xfx, '::').
:- op(1, fx, '!').
:- op(0, xfx, (':=')).
:- op(0, yfx, ('div')).
:- op(0, yfx, ('xor')).

:-set_prolog_flag(unknown, error).

% If predicate
'builtin#if'(Cond, Then, _) :-
	Cond,
	!,
	Then.
'builtin#if'(_, _, Else) :-
	Else.

'builtin#if'(Cond, Then) :-
	'builtin#if'(Cond, Then, true).

% Parse a typed term to its name and arguments, or vice versa
parseTerm(Term::_, !(Func), TArgs) :-
	'builtin#if'(var(Term), 
		(
			makeTyped(Args, TArgs),
			Term =.. [Func | Args]
		),
		(
			Term =.. [Func | Args],
			makeTyped(Args, TArgs)
		)).

makeTyped([], []).
makeTyped([First | Rest], [First::_ | TRest]) :-
	makeTyped(Rest, TRest).

removeAnnotations(WithAnnot, NoAnnot) :-
	'builtin#if'(nonCompoundTerm(WithAnnot),
		NoAnnot = WithAnnot,
	%else
	(
		'builtin#if'(WithAnnot = 'annotation#escape'(Esc),
			NoAnnot = Esc,
		%else
		(
			WithAnnot =.. [Func | Args],
			'builtin#if'((atom_concat('annotation#', _, Func), Args = [First | _]),
				removeAnnotations(First, NoAnnot),
			%else
			(
				removeAnnotationsFromList(Args, ArgsNoAnnot),
				NoAnnot =.. [Func | ArgsNoAnnot]
			))
		))
	)).

removeAnnotationsFromList([], []).
removeAnnotationsFromList([First | Rest], [NoAnnot | NoAnnotList]) :-
	removeAnnotations(First, NoAnnot),
	removeAnnotationsFromList(Rest, NoAnnotList).

nonCompoundTerm(Term) :-
	var(Term).
nonCompoundTerm(Term) :-
	number(Term).
nonCompoundTerm(!(X)) :-
	atom(X).

% The basics
'builtin#true' :- true.
'builtin#fail' :- fail.
'builtin#equals'(A::_, B::_) :- A == B.
'builtin#var'(V::_) :- var(V).
'builtin#number'(N::_) :- number(N).
'builtin#string'(!(Atom)::_) :- atom(Atom).
'builtin#compound'(Term::_) :- \+var(Term), \+number(Term), \+(Term = !(_)).
'builtin#parseTerm'(TTerm, Func, TArgs) :- parseTerm(TTerm, Func, TArgs).
'builtin#succ'(X, XPlus1) :- 'builtin#if'(var(XPlus1), XPlus1 is X+1, X is XPlus1 - 1).
'builtin#length'(List, _Type, Len) :- length(List, Len).
'builtin#charCodes'(!(Atom), Codes) :- 'builtin#if'(number(Atom), number_codes(Atom, Codes), atom_codes(Atom, Codes)).
'builtin#strcat'(!S1, !S2, !S3) :- atomic_concat(S1, S2, S3).
'builtin#throw'(Exception) :- throw(Exception).
'builtin#catch'(Goal, Exception, AltGoal) :- catch(Goal, Exception, AltGoal).
'builtin#findall'(Template, _Type, Goal, List) :- findall(Template, Goal, List).
'builtin#safeUnify'(A, B) :- unify_with_occurs_check(A,B).
'builtin#termToString'(GTerm::_, VarNames, Depth, NsList, !(String)) :- term_to_atom(GTerm, String).
'builtin#ground'(Term::_) :- ground(Term).
'builtin#plus'(A,B,C) :- C is A+B.
'builtin#minus'(A,B,C) :- C is A-B.
'builtin#mult'(A,B,C) :- C is A*B.
'builtin#div'(A,B,C) :- C is A/B.
'builtin#idiv'(A,B,C) :- C is A//B.
'builtin#modulus'(A,B,C) :- C is A mod B.
'builtin#greaterThen'(A,B) :- A>B.
%'builtin#coinToss'(N,D) :- N>random(D).
'builtin#copyTerm'(TTermOrig,TTermCopy) :- copy_term(TTermOrig,TTermCopy).
'builtin#structurallyEqual'(TTerm1,TTerm2) :- TTerm1 =@= TTerm2.
'builtin#removeAnnotations'(With, Without) :- removeAnnotations(With, Without).

'compiler#trace'(Term) :- write('trace: '), write(Term), nl.
%'compiler#trace'(Term).

compileToJs :-
	consult('cedalion.pl'),
	'compiler#jsString'(!(Str)),
%	'/bootstrap#member'(JS, '/javascript/jsLogic#jsStatementsForClauses'('/javascript/jsLogic#allClauses'), '/javascript#statement'),
%	'compiler#trace'(JS),
%	'/Functional#eval'('/javascript#toString'(JS::'/javascript#statement'), '/bootstrap#string', Str),
	write(Str),
	nl,
	fail.

compileToJs.

:- compileToJs.

test(JS) :-
	'/bootstrap#member'(JS, '/javascript/jsLogic#jsStatementsForClauses'('/javascript/jsLogic#allClauses'), '/javascript#statement'),
	\+ '/Functional#eval'('/javascript#toString'(JS::'/javascript#statement'), '/bootstrap#string', _).
