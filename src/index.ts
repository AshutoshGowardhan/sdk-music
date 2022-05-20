import { MusicLog } from "./music-log";
// import canUseDom from "can-use-dom";

function init() {
  // const node = document.querySelectorAll("[data-kappa]");
  // console.log(node);
  window.addEventListener("DOMContentLoaded", () => {
    // DOM ready! Images, frames, and other subresources are still downloading.
    const node = document.querySelectorAll("[data-kappa]");
    console.log(node);
  });
}

// const initDOMLoadedElements = function () {
//   document.removeEventListener("DOMContentLoaded", initDOMLoadedElements);
//   window.removeEventListener("load", initDOMLoadedElements);

//   Array.prototype.forEach.call(
//     document.querySelectorAll("[data-kappa]"),
//     (el) => {
//       console.log(el);
//       // if (
//       //   el.getAttribute("data-simplebar") !== "init" &&
//       //   !SimpleBar.instances.has(el)
//       // )
//       //   new SimpleBar(el, getOptions(el.attributes));
//     }
//   );
// };

init();

export default MusicLog;
