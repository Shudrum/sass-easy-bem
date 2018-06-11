const testAll = require('./testAll');

describe('Element', () => {
  testAll([{
    scss: `
      @include block('block') {
        @include element('element') {
          color: blue;
        }
      }
    `,
    css: `
      .block__element { color: blue; }
    `,
  }, {
    scss: `
      @include block('block') {
        color: red;
        @include element('element') {
          color: blue;
        }
      }
    `,
    css: `
      .block { color: red; }
      .block__element { color: blue; }
    `,
  }, {
    scss: `
      @include block('block') {
        color: red;
        @include element('element') {
          color: blue;
          @include element('second-element') {
            color: green;
          }
        }
      }
    `,
    css: `
      .block { color: red; }
      .block__element { color: blue; }
      .block__second-element { color: green; }
    `
  }, {
    scss: `
      @include block('block') {
        color: red;
        @include block('second-block') {
          color: purple;
          @include element('element') {
            color: blue;
            @include element('second-element') {
              color: green;
            }
          }
        }
      }
    `,
    css: `
      .block { color: red; }
      .second-block { color: purple; }
      .second-block__element { color: blue; }
      .second-block__second-element { color: green; }
    `
  }]);
});
