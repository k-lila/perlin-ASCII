var perlin_ascii = function (p) {
  p.width = window.innerWidth;
  p.height = window.innerHeight;
  p.density = " _.,-=+:;cba!?0123456789$W#@Ñ";
  p.size = parseInt(document.getElementById("font-size").value);
  p.textModifier = 0.5 / p.density.length;
  p.noiseScale = parseInt(document.getElementById("scale").value);
  p.inc = parseFloat(document.getElementById("increment").value);
  p.timePassage = parseFloat(
    document.getElementById("time-passage").value * 0.001
  );
  p.cols = Math.floor(p.width / p.size);
  p.rows = Math.floor(p.height / p.size);
  p.paleta = ["#ffffff", "#eeeeee", "#8b0000", "#bf0000", "#ff0000"];
  p.time = 0;
  p.test = true;
  p.test_counter = 0;
  p.font;
  p.frameCounterElement = document.getElementById("frame-counter");
  p.preload = function () {
    p.font = p.loadFont("./Silkscreen-Regular.ttf");
  };
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.textAlign(p.RIGHT, p.CENTER);
    p.textFont(p.font);
  };
  p.draw = function () {
    p.background(0);
    p.textSize(p.size * 1.25);

    let x_perlin = 0;
    let locationX = p.size;

    for (let i = 0; i < p.cols; i++) {
      let y_perlin = 0;
      let locationY = 0;
      for (let j = 0; j < p.rows; j++) {
        const ruido = p.noise(
          x_perlin * p.noiseScale,
          y_perlin * p.noiseScale,
          p.time * p.noiseScale
        );
        const caracter = Math.floor(p.density.length * ruido);
        const color = Math.floor(p.paleta.length * ruido);
        p.fill(p.paleta[color]);
        p.text(p.density[caracter], locationX, locationY);
        y_perlin += p.inc;
        locationY += p.size;
      }
      x_perlin += p.inc;
      locationX += p.size;
    }
    p.time += p.timePassage;

    const fps = Math.floor(p.frameRate());
    p.frameCounterElement.innerHTML = fps;
    if (p.test) {
      if (fps > 9) {
        p.size -= 1;
        p.cols = Math.floor(p.width / p.size);
        p.rows = Math.floor(p.height / p.size);
        document.getElementById("font-size").value = p.size;
        document.getElementById("font-size-num").innerHTML = p.size;
      } else {
        p.test_counter += 1;
      }
      if (p.test_counter == 10) {
        p.test = false;
      }
    }
  };
};

export { perlin_ascii };
