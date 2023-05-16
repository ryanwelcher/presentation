/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/presentation/view.js ***!
  \**********************************/
const {
  store
} = window.__experimentalInteractivity;
store({
  actions: {
    slideshow: {
      startPresentation: _ref => {
        let {
          context
        } = _ref;
        const elem = document.querySelector('.entry-content');
        if (elem) {
          if (!context.presenting) {
            elem.requestFullscreen();
            context.presenting = true;
          } else {
            document.exitFullscreen();
            context.presenting = false;
          }
        }
      }
    }
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map