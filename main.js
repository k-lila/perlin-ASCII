import { perlin_ascii } from "./perlin_ascii.js";
window.addEventListener('load', () => {
    const perlinAscii = new p5(perlin_ascii);
    let size_btn = document.getElementById('font-size');
    size_btn.addEventListener('change', () => {
        perlinAscii.size = parseInt(size_btn.value);
        perlinAscii.cols = Math.floor(perlinAscii.width/perlinAscii.size);
        perlinAscii.rows = Math.floor(perlinAscii.height/perlinAscii.size);
    });
    let scale_btn = document.getElementById('scale');
    scale_btn.addEventListener('change', () => {
        perlinAscii.noiseScale = parseFloat(scale_btn.value);
    });
    let increment_btn = document.getElementById('increment');
    increment_btn.addEventListener('change', () => {
        perlinAscii.inc = parseFloat(increment_btn.value);
    });
    let time_btn = document.getElementById('time-passage');
    time_btn.addEventListener('change', () => {
        perlinAscii.timePassage = parseFloat(time_btn.value);
    });
})