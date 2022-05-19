export class MusicLog {
  orange: string = "orange";
  blue: string = "blue";
  red: string = "red";
  constructor() {}

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

  onMutation(mutations: MutationRecord[]) {
    console.log(mutations);

    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        let nodeL = node as HTMLElement;
        if (!nodeL.tagName) {
          continue; // not an element
        } else {
          if (nodeL.classList.contains("superelement")) {
            console.log(node);
          }
        }
      }
    }
  }
}
