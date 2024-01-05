const perlin = document.getElementById('perlin-noise');
const width = window.innerWidth;
const height = window.innerHeight;
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let size = 10;
let inc = 0.001;
let noiseScale = 10;
let timePassage = 0.000005;

// const paleta = ['#2b2318', '#524835', '#56704b', '#5d9e7e', '#78b3a4']
const paleta = ['#541e35', '#df5d2e', '#ffb43e', '#a4c972', '#6bb38e']
// const paleta = ['black', 'red'];
// const paleta = ['blue', 'green', 'brown'];

const cols = Math.floor(width/size);
const rows = Math.floor(height/size);
var time = 0;

function setup() {
    createCanvas(width, height);
    textSize(size);
    textAlign(RIGHT, CENTER);
}

function draw() {
    background(0);
    let x_perlin = 0;
    for (let i=0; i<cols; i++) {
        let y_perlin = 0;
        for (let j=0; j<rows; j++) {
            let x = size + i*size;
            let y = size + j*size;
            let ruido = noise(x_perlin * noiseScale, y_perlin * noiseScale, time * noiseScale);
            let caracter = Math.floor(density.length * ruido)
            let color = Math.floor(paleta.length * ruido)
            text(density[caracter], x, y);
            fill(paleta[color]);
            noStroke();
            y_perlin += inc;
    }
    x_perlin += inc;
    time += timePassage;
    }
    let fps = Math.floor(frameRate());
    document.getElementById('frame-counter').innerHTML = fps
    // noLoop()
}