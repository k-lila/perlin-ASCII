import { perlin_ascii } from "./perlin_ascii.js";

function range_buttons(object) {
    const size_btn = document.getElementById('font-size');
    size_btn.addEventListener('change', () => {
        document.getElementById('font-size-num').innerHTML = size_btn.value;
        object.size = parseInt(size_btn.value);
        object.cols = Math.floor(object.width/object.size);
        object.rows = Math.floor(object.height/object.size);
    });
    const scale_btn = document.getElementById('scale');
    scale_btn.addEventListener('change', () => {
        document.getElementById('scale-num').innerHTML = scale_btn.value;
        object.noiseScale = parseFloat(scale_btn.value);
    });
    const increment_btn = document.getElementById('increment');
    increment_btn.addEventListener('change', () => {
        document.getElementById('increment-num').innerHTML = increment_btn.value;
        object.inc = parseFloat(increment_btn.value);
    });
    const time_btn = document.getElementById('time-passage');
    time_btn.addEventListener('change', () => {
        document.getElementById('time-passage-num').innerHTML = time_btn.value;
        object.timePassage = parseFloat(time_btn.value);
    });
}

function palete(object) {
    function updateColors() {
        var paleta = [];
        switchers.forEach((switch_btn, index) => {
            if (switch_btn.checked) {
                paleta.push(selected_colors[index].value);
            }
        })
        const list_a = object.paleta.join('');
        const list_b = paleta.join('');
        const comparison = list_a === list_b;
        if (!comparison) {object.paleta = paleta};
    }
    const switchers =  document.querySelectorAll('.onoff-color');
    const selected_colors = document.querySelectorAll('.color-selector');
    for (let i = 0; i < switchers.length; i++) {
        switchers[i].addEventListener('input', updateColors);
        selected_colors[i].addEventListener('input', updateColors);
    }
}

function resizeCanvas(object) {
    window.addEventListener('resize', () => {
        object.cols = Math.floor(window.innerWidth/object.size);
        object.rows = Math.floor(window.innerHeight/object.size);
        object.resizeCanvas(window.innerWidth, window.innerHeight);
    })
}

function main() {
    window.addEventListener('load', () => {
        const perlinAscii = new p5(perlin_ascii);
        resizeCanvas(perlinAscii)
        range_buttons(perlinAscii)
        palete(perlinAscii)
    })
}

document.addEventListener('DOMContentLoaded', main);