// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest'

// Import and rename a variable exported by autoform-bootstrap3.js.
import { name as packageName } from 'meteor/akoerp:autoform-bootstrap3'

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-bootstrap3 - example', function (test) {
  test.equal(packageName, 'autoform-bootstrap3')
})
