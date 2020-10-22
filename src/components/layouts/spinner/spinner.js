import $ from "jquery";
$(document).ready(function () {
  const preloaderFadeOutTime = 2000;
  function hidePreloader() {
    var preloader = $(".spinner-box");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});
