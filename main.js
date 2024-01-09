import { perlin_ascii } from "./perlin_ascii.js";
window.addEventListener('load', () => {
    const perlinAscii = new p5(perlin_ascii);
    let size_btn = document.getElementById('font-size');
    size_btn.addEventListener('change', () => {
        document.getElementById('font-size-num').innerHTML = size_btn.value
        perlinAscii.size = parseInt(size_btn.value);
        perlinAscii.cols = Math.floor(perlinAscii.width/perlinAscii.size);
        perlinAscii.rows = Math.floor(perlinAscii.height/perlinAscii.size);
    });
    let scale_btn = document.getElementById('scale');
    scale_btn.addEventListener('change', () => {
        document.getElementById('scale-num').innerHTML = scale_btn.value
        perlinAscii.noiseScale = parseFloat(scale_btn.value);
    });
    let increment_btn = document.getElementById('increment');
    increment_btn.addEventListener('change', () => {
        document.getElementById('increment-num').innerHTML = increment_btn.value
        perlinAscii.inc = parseFloat(increment_btn.value);
    });
    let time_btn = document.getElementById('time-passage');
    time_btn.addEventListener('change', () => {
        document.getElementById('time-passage-num').innerHTML = time_btn.value
        perlinAscii.timePassage = parseFloat(time_btn.value);
    });

    let teste = document.getElementsByTagName('canvas');
    console.log(teste[1].style)
})