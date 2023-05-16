/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/slide/view.js ***!
  \***************************/
const {
  store
} = window.__experimentalInteractivity;
store({
  actions: {
    slideshow: {
      handleExit: stuff => {
        console.log(stuff);
      },
      init: () => {
        console.log('iniitted!');
      }
    }
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map