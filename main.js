import { perlin_ascii } from "./perlin_ascii.js";

function main() {
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
        function updateColors() {
            var paleta = [];
            switchers.forEach((switch_btn, index) => {
                if (switch_btn.checked) {
                    paleta.push(selected_colors[index].value);
                }
            })
            const list_a = perlinAscii.paleta.join('');
            const list_b = paleta.join('');
            const teste = list_a === list_b;
            if (!teste) {perlinAscii.paleta = paleta};
        }
        let switchers =  document.querySelectorAll('.onoff-color');
        let selected_colors = document.querySelectorAll('.color-selector');
        for (let i = 0; i < switchers.length; i++) {
            switchers[i].addEventListener('input', updateColors);
            selected_colors[i].addEventListener('input', updateColors);
        }
    })
}

main();
