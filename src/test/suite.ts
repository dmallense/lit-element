/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// @ts-ignore This will be present when this is run as JavaScript in the
// browser.
const suiteChild = window.suiteChild;

suiteChild('Default Polyfills', '/base/test/runner.html');
suiteChild('ShadyDOM Polyfill', '/base/test/runner.html?wc-shadydom=true');
suiteChild(
    'CustomElements Polyfill',
    '/base/test/runner.html?wc-shadydom=true&wc-ce=true');
suiteChild(
    'Shim CSS Properties Polyfill',
    '/base/test/runner.html?wc-shadydom=true&wc-ce=true&wc-shimcssproperties=true');

// Currently Babel decorator compilation does not work on some older
// browsers due to use of some newish features; detect these and don't
// run babel-compiled tests on those browsers
const fnNameDesc = Object.getOwnPropertyDescriptor(function() {}, 'name');
const testBabel = fnNameDesc && fnNameDesc.configurable && Array.prototype.find;

if (testBabel) {
  suiteChild('Default Polyfills (Babel)', '/base/test/runner-babel.html');
  suiteChild(
      'ShadyDOM Polyfill (Babel)',
      '/base/test/runner-babel.html?wc-shadydom=true');
  suiteChild(
      'CustomElements Polyfill (Babel)',
      '/base/test/runner-babel.html?wc-shadydom=true&wc-ce=true');
  suiteChild(
      'Shim CSS Properties Polyfill (Babel)',
      '/base/test/runner-babel.html?wc-shadydom=true&wc-ce=true&wc-shimcssproperties=true');
}
