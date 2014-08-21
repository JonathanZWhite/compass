Compass
=======

Lightweight full stack javascript boilerplate that makes using Mongo, Node, Angular, and Express a breeze.

Motivation
=======
This boilerplate was written in order to let you get started on a MEAN stack project right away without having to worry about all the boilerplate code. 

Quick Start
=======
```
$ git clone https://github.com/JonathanZWhite/compass.git
$ cd compass
$ npm install
$ grunt dev
```

Prerequisites
=======
- [Nodejs](http://nodejs.org/download/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/installing-grunt)
- [Mongodb](http://docs.mongodb.org/manual/installation/)


Detailed Installation
=======
Install the necessary global dependencies, these include bower and grunt.
`npm -g install grunt-cli bower`

Architecture
=======
###Front-end
```
client/ 
-- src/
---- app/
------ <modules i.e. home, about, etc.>/
------ app.js
---- assets
------ <static files>
---- components
------ <reusable components>
---- less
------ <general less files>
```

#####Design philosophy
The Angular front-end is built in a module fashion. Each module represents a respective page and contains a `controller`, `template`, and `less file`. This design is in order to reduce the need to visit multiple directories in order to modify one page. Instead, everything is located in its respective module. Likewise, components follow the same philosophy. Components may contain a `directive`, `service`, and `template`. Think components as reusable snippets of code designed to keep your code DRY and can be injected into your modules. This line of thought borrows heavily from the philosphy behind the [React framework](http://facebook.github.io/react/). 

###Back-end
The node/express back-end is built in a typical MVC fashion and its primarily function is to act as a RESTful api. 
