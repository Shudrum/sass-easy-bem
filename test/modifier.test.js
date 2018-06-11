const testAll = require('./testAll');

describe('Modifier', () => {
  testAll([{
    scss: `
      @include block('block') {
        @include element('element') {
          @include modifier('modifier') {
            color: blue;
          }
        }
      }
    `,
    css: `
      .block__element.block__element--modifier { color: blue; }
    `,
  }, {
    scss: `
      @include block('block') {
        @include modifier('modifier') {
          color: red;
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
    `,
  }, {
    scss: `
      @include block('block') {
        @include modifier('modifier') {
          color: red;
          @include element('element') {
            color: blue;
          }
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
      .block.block--modifier .block__element { color: blue; }
    `,
  }, {
    scss: `
      @include block('block') {
        @include modifier('modifier') {
          color: red;
          @include element('element') {
            color: blue;
            @include modifier('second-modifier') {
              color: green;
            }
          }
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
      .block.block--modifier .block__element { color: blue; }
      .block.block--modifier .block__element.block__element--second-modifier { color: green; }
    `,
  }, {
    scss: `
      @include block('block') {
        @include modifier('modifier') {
          color: red;
          @include element('element') {
            color: blue;
            @include modifier('second-modifier') {
              color: green;
              @include modifier('third-modifier') {
                color: yellow;
              }
            }
          }
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
      .block.block--modifier .block__element { color: blue; }
      .block.block--modifier .block__element.block__element--second-modifier { color: green; }
      .block.block--modifier .block__element.block__element--second-modifier.block__element--third-modifier { color: yellow; }
    `,
  }, {
    scss: `
      @include b('block') {
        @include m('modifier') {
          color: red;
          @include e('element') {
            color: blue;
            @include m('second-modifier') {
              color: green;
              @include m('third-modifier') {
                color: yellow;
              }
            }
          }
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
      .block.block--modifier .block__element { color: blue; }
      .block.block--modifier .block__element.block__element--second-modifier { color: green; }
      .block.block--modifier .block__element.block__element--second-modifier.block__element--third-modifier { color: yellow; }
    `,
  }, {
    scss: `
      @include block('block') {
        @include modifier('modifier') {
          color: red;
          @include element('element') {
            color: blue;
            @include modifier('second-modifier') {
              color: green;
              @include modifier('third-modifier') {
                color: yellow;
                @include modifier('never-ending-modifier') {
                  color: purple;
                }
              }
            }
          }
        }
      }
    `,
    css: `
      .block.block--modifier { color: red; }
      .block.block--modifier .block__element { color: blue; }
      .block.block--modifier .block__element.block__element--second-modifier { color: green; }
      .block.block--modifier .block__element.block__element--second-modifier.block__element--third-modifier { color: yellow; }
      .block.block--modifier .block__element.block__element--second-modifier.block__element--third-modifier.block__element--never-ending-modifier { color: purple; }
    `,
  }, {
    scss: `
      @include block('block') {
        @include element('element') {
          @include modifier('modifier') {
            @include element('second-element') {
              @include modifier('second-modifier') {
                @include modifier('third-modifier') {
                  color: red;
                }
              }
            }
          }
        }
      }
    `,
    css: `
      .block__element.block__element--modifier .block__second-element.block__second-element--second-modifier.block__second-element--third-modifier { color: red; }
    `
  }, {
    scss: `
      @include block('block') {
        @include element('element') {
          @include modifier('modifier') {
            @include element('second-element') {
              color: blue;
              @include modifier('second-modifier') {
                @include modifier('third-modifier') {
                  color: red;
                }
              }
            }
          }
        }
      }
    `,
    css: `
      .block__element.block__element--modifier .block__second-element { color: blue; }
      .block__element.block__element--modifier .block__second-element.block__second-element--second-modifier.block__second-element--third-modifier { color: red; }
    `
  }]);
});
