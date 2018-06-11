const testAll = require('./testAll');

describe('Misc', () => {
  testAll([{
    scss: `
      @include block('block') {
        @include element('element') {
          #id {
            color: blue;
          }
        }
      }
    `,
    css: `
      .block__element #id { color: blue; }
    `,
  }, {
    scss: `
      @include block('block') {
        > .children {
          color: blue;
        }
      }
    `,
    css: `
      .block > .children { color: blue; }
    `,
  }, {
    scss: `
      #container {
        .block {
          @include element('element') {
            color: blue;
          }
        }
      }
    `,
    css: `
      #container .block__element { color: blue; }
    `,
  }]);
});
