# Learning ES6 Through Egghead

This repository is a project that has been set up to reflect learnings from the Egghead course ["Learn ES6 (ECMAScript 2015)"](https://egghead.io/courses/learn-es6-ecmascript-2015). Each relevant lesson has its own file which is indicated by the filename.

## Project Setup

The project has been set up using:

* **Babel** to allow for the use of ES6.
* **Mocha** for the testing framework.
* **Chai** for the assertion library.

## Learnings

* [Arrow functions](https://egghead.io/lessons/javascript-arrow-function-in-es6) introduces a shorthand for creating functions.
* [Default Values](https://egghead.io/lessons/javascript-default-values-for-function-parameters-in-es6) allows for default values to be assigned to parameters to be used when no value has been parsed to the parameter.
* [Constant Declaration](https://egghead.io/lessons/javascript-const-declarations-in-es6-es2015) introduces read-only variables.
* [Object Enhancements](https://egghead.io/lessons/javascript-object-enhancements-in-es6) introduces a shorthand to assign an object properties.
* [Spread Operator](https://egghead.io/lessons/javascript-using-the-es6-spread-operator) allows you to take an array and spread it into individual elements.
* [Object Destructuring](https://egghead.io/lessons/javascript-destructuring-assignment-in-es6) introduces a method of assigning an object's property to be called just by the property itself.
* [Promises](https://egghead.io/lessons/javascript-promises-with-es6) are functions which allow for asynchronous operations to be performed in a synchronous-like matter.
* [Rest Parameters](https://egghead.io/lessons/javascript-es6-rest-parameters) utilises a keyword which is used in parameters to return the rest of the parsed variables into an array.

## Running Tests

Run `npm test`. If `npm test` returns an error, run `npm install && npm test`.