/* jshint node: true */
'use strict';

var stream = require('event-stream');
var gutil = require('gulp-util');
var extend = require('lodash.assign');

var testPlugin = function(noteText, data) {
  noteText = noteText + '\n' || '';

  return stream.map(function(file, cb){
    file.contents = Buffer.concat([
      new Buffer(gutil.template(noteText, extend({file : file}, data))),
      file.contents
    ]);
    gutil.log('Added a note.');
    cb(null, file);
  });
};

module.exports = testPlugin;
