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


Installation
=======
1. Install the necessary global dependencies, these include bower and grunt.

  `$ npm -g install grunt-cli bower`
  
2. Install Mongodb
  ```
  $ brew update
  $ brew install mongodb
  ```
  
3. Start your mongodb

  `$ mongod`

4. Build the project

  `$ grunt dev`

5. Visit your server at /api/article-read to see a fake endpoint

  `http://localhost:3000/api/article-read`

6. Visit your client in the root directory to see a module

  `http://localhost:9001/`

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
```
server/
-- config/
---- <configurations>
-- controllers/
-- models/
-- views
```

#####Design philosophy
The node/express back-end is built in a typical MVC fashion and its primarily function is to act as a RESTful api. 
