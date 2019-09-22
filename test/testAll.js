const assert = require('chai').assert;
const sass = require('node-sass');

const equal = (scss, css) => {
  scss = `@import 'sass-easy-bem'; ${scss}`;
  const compiledCss = (sass.renderSync({ data: scss })).css.toString();
  const minifiedCompiledCss = compiledCss.replace(/(\s){2,}/g, ' ').trim();
  const minifiedCss = css.replace(/(\s){2,}/g, ' ').trim();
  return {
    success: minifiedCompiledCss === minifiedCss,
    minifiedCss,
    minifiedCompiledCss,
  };
};

module.exports = (list) => {
  list.forEach(({ scss, css }, id) => {
    it(scss.trim(), () => {
      const test = equal(scss, css);
      assert(
        test.success, `Compiled CSS is invalid.
          The compiled CSS:
          ${test.minifiedCompiledCss}
          Should equal:
          ${test.minifiedCss}`,
      );
    });
  });
}
