The cedalion-web Framework
===

### What is it?
cedalion-web is a web application framework based on the [Cedalion] (http://cedalion.org) programming language.

Cedalion's power is in allowing its users to extend the language with new syntax and semantics, 
to tackle problems most programming languages have hard time addressing.
This makes it well suited to the challenging world of web applications.

Many of the tasks of developing a web application are not handled well by common programming languages
(e.g., HTML rendering, site configuration and more).
The solution is often to use a web framework, that (usually) adds some template language(s) 
and/or configuration language(s) on top of the regular programming language.
This brings up the question of why do we need another one...

### Why another web framework?
When it comes to web frameworks, there are [A LOT] (http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks) of them around.
So why do we need another one?

The answer is, that cedalion-web was created BECAUSE there are so many of them around, not in spite of this fact. It is there to solve the
problem causing this amazing number of frameworks.

So why are there so many frameworks in the first place? I believe the reason is that this is related to the power/control trade-off.
The more power a framework gives you (the easier it is to create a fully-functional application), the less control you get over the details.
Think of the extreme case of a "single click" framework, one that builds a web application for you in a single click.
It gives you awesome power, but no control. 
On the other hand, think of CGI. It gives you all the control you ever wanted, but you need to do everything yourself (no power).

Most web frameworks reside somewhere in the middle on that line, and differ in the power and control features they provide.
The sad truth is, that because this is such a delicate issue, many companies develop their own framework alongside their applications,
just so that they can have control...

cedalion-web is no where on that line, as it provides both power and control.

### cedalion-web in control
cedalion-web is a browser-centric web framework.
This means that when you program in cedalion-web, you actually program a web-page running on the browser, 
similar to [GWT] (https://developers.google.com/web-toolkit/) and [DART] (http://www.dartlang.org/).
Running on the browser does not mean not being able to access the the server. Like both GWT and DART, cedalion-web also allows for
code to run on the server, and it makes such access mostly transparent (you do not need to write the communication code, just make the call
to the server-side code).

The advantage of running from the client is in that this way, you get full control. It's not very different than having a main() function in
a regular program, from which you can do anything. It's much harder to get this kind of control from the server side, since what the server sees
are separate requests that often go to different physical servers. With a main() on the browser, everything is at the same place.
From here we can call libraries to handle the complex tasks, but we can choose which libraries to use and when and where to use them.
We are in control...

### The power of cedalion-web
cedalion-web gains its power from the programming language it is built on: [Cedalion] (http://cedalion.org).
Cedalion is not you everyday programming language. It is not object oriented, imperative programming language like Java, Python, Ruby
and most other languages used for building modern web applications.
Instead, it is a language that does one thing very well. Grows.

Cedalion is capable of growing new syntax with its respective semantics.
To do so, Cedalion uses something called [Projectional Editing] (http://martinfowler.com/bliki/ProjectionalEditing.html) instead of the regular
text-editing / parsing scheme used by most programming languages. Cedalion code is therefore edited using a dedicated projectional editor
provided as part of the Cedalion implementation, as an Eclipse plug-in.
While the concept of projectional editing takes a bit of time getting used to, it has a lot of benefit.
First, you do not have learn new syntax. You just select the syntactic elements you want from the menues it provides you.
Second, it provides users with full freedom in selecting syntax for new constructs, without having to worry about 
ambiguity and the capabilities of parser generators like ANTLR and YACC.
Third, it allows users to use colors, font styles, layouts and more as part of the syntax.
With that, you can make a new construct representing, e.g., an HTML button, to look like an actual button.

With Cedalion on our side we can tackle the difficult tasks related to web application. For example, we can create constructs to represent
HTML elements, and then use them in concert with constructs that loop over database query results.

cedalion-web provides some libraries for common web-related tasks. Since it also provides full control, third party libraries can be added
on top of those.

### Development status
Development of cedalion-web is currently on hold, as we are currently persuing other research direction (see http://github.com/brosenan/vercast).  At one point we plan to go back and combine these new ideas with cedalion-web to create a real useful web framework.

Please feel free to contact us for more information.
