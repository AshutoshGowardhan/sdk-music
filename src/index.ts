import * as querString from "query-string";
export class MusicLog {
  orange: string = "orange";
  blue: string = "blue";
  red: string = "red";
  constructor() {
    this.prt = this.prt.bind(this);
    this.injectYoutubeIframe = this.injectYoutubeIframe.bind(this);
  }

  logOrange(msg: string) {
    console.log(`%c ${msg}`, `color : ${this.orange}`);
  }
  logBlue(msg: string) {
    console.log(`%c ${msg}`, `color : ${this.blue}`);
  }
  logRed(msg: string) {
    console.log(`%c ${msg}`, `color : ${this.red}`);
  }

  mutationObserver() {
    const oberver = new MutationObserver(this.onMutation);
    oberver.observe(document, {
      childList: true,
      subtree: true,
    });
  }

  prt() {
    console.log("prt");
  }

  injectYoutubeIframe(node: HTMLElement) {
    // const youtubeId = querString.parseUrl(youtubeLink).query["v"];
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/JYs_94znYy0`;
    iframe.width = "400";
    iframe.height = "100";
    // iframe.frameBorder ="0";
    // iframe.scrolling = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    // (
    //   <iframe
    //     width="560"
    //     height="315"
    //     src=`https://www.youtube.com/embed/${youtubeId}`
    //     title="YouTube video player"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowfullscreen
    //   ></iframe>
    // );
    node.append(iframe);
  }

  onMutation(mutations: MutationRecord[]) {
    console.log(mutations);

    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        let nodeL = node as HTMLElement;
        if (!nodeL.tagName) {
          continue; // not an element
        } else {
          if (nodeL.classList.contains("superelement")) {
            console.log(node, nodeL);
            this.injectYoutubeIframe(nodeL);
          }
        }
      }
    }
  }
}
