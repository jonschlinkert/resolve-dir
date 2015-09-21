/*!
 * resolve-dir <https://github.com/jonschlinkert/resolve-dir>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var userhome = require('user-home');

var gm = require('global-modules');
var resolve = require('./');

describe('resolve', function () {
  it('should return a local directory path unchanged:', function () {
    assert.equal(resolve('a'), 'a');
  });

  it('should resolve the path to user home:', function () {
    assert.equal(resolve('~'), userhome);
    assert.equal(resolve('~/foo'), userhome + '/foo');
  });

  it('should resolve the path to global npm modules:', function () {
    assert.equal(resolve('@'), gm);
    assert.equal(resolve('@/foo'), gm + '/foo');
  });
});
