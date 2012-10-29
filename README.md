The cedalion-web Framework
===

### What is it?
cedalion-web is a web application framework based on the [Cedalion] (http://cedalion.org) programming language.

Cedalion's power is in allowing its users to extend the language with new syntax and semantics, 
to tackle problems most programming languages have hard time addressing.
This makes it well suited to the challenging world of web applications.

Many of the tasks of developing a web application are not handled well by common programming languages
(e.g., HTML renderring, site configuration and more).
The solution is often to use a web framework, that (usually) adds some template language(s) 
and/or configuration language(s) on top of the regular programming language.
This brings up the question of why do we need another one...

### Why another web framework?
When it comes to web frameworks, there are [A LOT] (http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks) of them.
So what can this one give us, that no other framework does?

The answer is, that cedalion-web was created BECAUSE there are so many of them around, not in spite of this fact. It is there to solve the
problem causing this amazing number of frameworks.

So why are there so many frameworks in the first place? I believe the reason is that this is related to the power/control trade-off.
The more power a framework gives you (the easier it is to create a fully-functional application), the less control you get over the details.
Think of the extreme case of a "single click" framework, one that builds a web application for you in a single click.
It gives you awesome power, but no control. 
On the other hand, think of CGI. It gives you all the control you ever wanted, but you need to do everything yourself (no power).

Most web frameworks reside somewhere in the middle on that line, and differ in the power and control features they provide.
The sad truth is, that because this is such a delicate issue, many companies develop their own framework alongsides their applications,
just so that they can have control...



