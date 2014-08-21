Compass
=======

Lightweight full stack javascript boilerplate that makes using Mongo, Node, Angular, and Express a breeze.

###Motivation
This boilerplate was written in order to let you get started on a MEAN stack project right away without having to worry about all the boilerplate code. 

###Quick Start
```
$ git clone https://github.com/JonathanZWhite/compass.git
$ cd compass
$ npm install
$ grunt dev
```

####Prerequisites
- [Nodejs](http://nodejs.org/download/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/installing-grunt)
- [Mongodb](http://docs.mongodb.org/manual/installation/)

####Architecture

#####Front-end
```
client/ 
-- components/
-- src/
---- app/
------ <modules i.e. home, about, etc.>
-------- <module files>
------ app.js
---- assets
---- components
------ <directives/services>
-------- <directive>
-------- <service>
---- less
------ main.less
------ typography.less
------ variables.less
```


#####Back-end
