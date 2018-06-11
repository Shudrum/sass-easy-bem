const testAll = require('./testAll');

describe('Block', () => {
  testAll([{
    scss: `
      @include block('block') {
        color: red;
      }
    `,
    css: `
      .block { color: red; }
    `,
  }, {
    scss: `
      @include b('block') {
        color: red;
      }
    `,
    css: `
      .block { color: red; }
    `,
  }, {
    scss: `
      @include b('block') {
        color: red;
        @include b('second-block') {
          color: blue;
        }
      }
    `,
    css: `
      .block { color: red; }
      .second-block { color: blue; }
    `,
  }, {
    scss: `
      @include b('block') {
        @include m('modifier') {
          color: red;
          @include b('second-block') {
            color: blue;
          }
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
      .second-block { color: blue; }
    `,
  }]);
});
