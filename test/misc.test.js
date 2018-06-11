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
  }, {
    scss: `
      @include block('my-container') {
        @include modifier('allow-color-mixes') {
          @include element('my-button') {
            @include modifier('blue') {
              @include modifier('green') {
                color: cyan;
              }
            }
          }
        }
      }
    `,
    css: `
      .my-container.my-container--allow-color-mixes .my-container__my-button.my-container__my-button--blue.my-container__my-button--green { color: cyan; }
    `,
  }]);
});
