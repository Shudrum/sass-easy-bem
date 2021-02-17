const testAll = require('./testAll');

describe('Modifier', () => {
  testAll([{
    scss: `
      $modifier-separator: '_';
      @include block('block') {
        @include element('element') {
          @include modifier('modifier') {
            color: blue;
          }
        }
      }
    `,
    css: `
      .block__element.block__element_modifier { color: blue; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
      @include block('block') {
        @include modifier('modifier') {
          color: red;
        }
      }
    `,
    css: `
      .block.block_modifier { color: red; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block.block_modifier { color: red; }
      .block.block_modifier .block__element { color: blue; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block.block_modifier { color: red; }
      .block.block_modifier .block__element { color: blue; }
      .block.block_modifier .block__element.block__element_second-modifier { color: green; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block.block_modifier { color: red; }
      .block.block_modifier .block__element { color: blue; }
      .block.block_modifier .block__element.block__element_second-modifier { color: green; }
      .block.block_modifier .block__element.block__element_second-modifier.block__element_third-modifier { color: yellow; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block.block_modifier { color: red; }
      .block.block_modifier .block__element { color: blue; }
      .block.block_modifier .block__element.block__element_second-modifier { color: green; }
      .block.block_modifier .block__element.block__element_second-modifier.block__element_third-modifier { color: yellow; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block.block_modifier { color: red; }
      .block.block_modifier .block__element { color: blue; }
      .block.block_modifier .block__element.block__element_second-modifier { color: green; }
      .block.block_modifier .block__element.block__element_second-modifier.block__element_third-modifier { color: yellow; }
      .block.block_modifier .block__element.block__element_second-modifier.block__element_third-modifier.block__element_never-ending-modifier { color: purple; }
    `,
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block__element.block__element_modifier .block__second-element.block__second-element_second-modifier.block__second-element_third-modifier { color: red; }
    `
  }, {
    scss: `
      $modifier-separator: '_';
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
      .block__element.block__element_modifier .block__second-element { color: blue; }
      .block__element.block__element_modifier .block__second-element.block__second-element_second-modifier.block__second-element_third-modifier { color: red; }
    `
  }]);
});
