# dr-promise

This module exposes a promise which resolves when the DOM is ready:

``` js
require('dr-promise').then(function () {
  // Dom is ready!
});
```

It is really just a very small, simple wrapper around [`domready`].

# Deprecation Notice

As of version `1.0.0`, support for IE `6`-`8` and Firefox `< 4` has been
dropped. If you require this level of support, please use version [`0.3.0`].

## Browser Support

* IE `9+` (Before `Edge` requires `Promise` polyfill)
* Firefox `4+` (Before `29` requires `Promise` polyfill)
* Safari `3+` (Before `7.1` requires `Promise` polyfill)
* Chrome `*` (Before `33` requires `Promise` polyfill)
* Opera `*` (Before `20` requires `Promise` polyfill)

If you don’t want to use a global polyfill, you can pass a custom `Promise` constructor:

```js
const {Promise} = require('es6-promise');
const domReady = require('dr-promise/custom-promise')(Promise);
```

## Testing

```sh
npm test
```

This will spin up a server which serves a very simple test document. The URL to
the server is printed in your terminal.

## License

**The MIT License**

Copyright (c) 2014 Kenneth Powers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[`domready`]: https://github.com/ded/domready "domReady"
[`0.3.0`]: https://github.com/KenPowers/dr-promise/tree/v0.3.0 "v0.3.0"
