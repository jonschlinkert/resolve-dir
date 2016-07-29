/*!
 * resolve-dir <https://github.com/jonschlinkert/resolve-dir>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var os = require('os');
var assert = require('assert');
var gm = require('global-modules');
var resolve = require('./');

describe('resolve', function() {
  it('should return a local directory path unchanged:', function() {
    assert.equal(resolve('a'), 'a');
  });

  it('should resolve the path to user home:', function() {
    assert.equal(resolve('~'), os.homedir());
    assert.equal(resolve('~/foo'), os.homedir() + '/foo');
  });

  it('should resolve the path to global npm modules:', function() {
    assert.equal(resolve('@'), gm);
    assert.equal(resolve('@/foo'), gm + '/foo');
  });
});
