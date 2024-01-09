var perlin_ascii = function(p) {
    p.width = window.innerWidth;
    p.height = window.innerHeight;
    p.density = ' _.,-=+:;cba!?0123456789$W#@Ñ';
    p.size = parseInt(document.getElementById('font-size').value);
    p.textModifier = 0.5 / p.density.length;
    p.noiseScale = parseInt(document.getElementById('scale').value);
    p.inc = parseFloat(document.getElementById('increment').value);
    p.timePassage = parseFloat(document.getElementById('time-passage').value);
    p.cols = Math.floor(p.width/p.size);
    p.rows = Math.floor(p.height/p.size);
    p.paleta = ['#541e35', '#df5d2e', '#ffb43e', '#a4c972', '#6bb38e'];
    // p.paleta = ['red', 'white'];
    // p.paleta = ['#001219', '#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702', '#BB3E03', '#AE2012', '#9B2226'];
    p.time = 0;
    p.test = true;
    p.test_counter = 0;
    p.font;

    p.preload = function() {
        p.font = p.loadFont('./Silkscreen-Regular.ttf')
    }

    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.textAlign(p.RIGHT, p.CENTER);
        p.textFont(p.font)

    }
    p.draw = function() {
        p.background(0);
        let x_perlin = 0;
        for (let i=0; i<p.cols; i++) {
            let y_perlin = 0;
            for (let j=0; j<p.rows; j++) {
                const x = p.size + i*p.size;
                const y = p.size + j*p.size;
                const ruido = p.noise(x_perlin * p.noiseScale, y_perlin * p.noiseScale, p.time * p.noiseScale);
                const caracter = Math.floor(p.density.length * ruido);
                const color = Math.floor(p.paleta.length * ruido);
                var modifier = (p.textModifier * caracter) + 1;
                modifier = modifier.toFixed(2);
                p.text(p.density[caracter], x, y);
                p.fill(p.paleta[color]);
                p.textSize(p.size * modifier);
                p.strokeWeight(modifier * 0.3);                
                p.stroke(p.paleta[color]);
                y_perlin += p.inc;
        }
        x_perlin += p.inc;
        p.time += p.timePassage;
        }
        const fps = Math.floor(p.frameRate());
        document.getElementById('frame-counter').innerHTML = `fps: ${fps}`;
        
        if (p.test) {
            if (fps > 10) {
                p.size -= 1;
                p.cols = Math.floor(p.width/p.size);
                p.rows = Math.floor(p.height/p.size);
                document.getElementById('font-size').value = p.size;
                document.getElementById('font-size-num').innerHTML = p.size;
            } else {
                p.test_counter += 1;
            }
            if (p.test_counter == 10) {
                p.test = false
            }
        }
    }
}

export { perlin_ascii };
