export class MusicLog {
  orange: string = "orange";
  blue: string = "blue";
  red: string = "red";
  constructor() {}

  logOrange(msg: string) {
    console.log(msg, `color : ${this.orange}`);
  }
  logBlue(msg: string) {
    console.log(msg, `color : ${this.blue}`);
  }
  logRed(msg: string) {
    console.log(msg, `color : ${this.red}`);
  }

  mutationObserver(element: Node) {
    const oberver = new MutationObserver((mutations) => {
      console.log(mutations);
    });
    oberver.observe(element, {
      attributes: true,
    });
  }
}
