var perlin_ascii = function(p) {
    p.width = window.innerWidth;
    p.height = window.innerHeight;
    p.density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
    p.size = parseInt(document.getElementById('font-size').value);
    p.noiseScale = parseInt(document.getElementById('scale').value);
    p.inc = parseFloat(document.getElementById('increment').value);
    p.timePassage = parseFloat(document.getElementById('time-passage').value);
    p.cols = Math.floor(p.width/p.size);
    p.rows = Math.floor(p.height/p.size);
    p.paleta = ['#541e35', '#df5d2e', '#ffb43e', '#a4c972', '#6bb38e'];
    p.time = 0;
    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.textAlign(p.RIGHT, p.CENTER);
    }
    p.draw = function() {
        p.background(0);
        p.textSize(p.size);
        let x_perlin = 0;
        for (let i=0; i<p.cols; i++) {
            let y_perlin = 0;
            for (let j=0; j<p.rows; j++) {
                let x = p.size + i*p.size;
                let y = p.size + j*p.size;
                let ruido = p.noise(x_perlin * p.noiseScale, y_perlin * p.noiseScale, p.time * p.noiseScale);
                let caracter = Math.floor(p.density.length * ruido)
                let color = Math.floor(p.paleta.length * ruido)
                p.text(p.density[caracter], x, y);
                p.fill(p.paleta[color]);
                p.noStroke();
                y_perlin += p.inc;
        }
        x_perlin += p.inc;
        p.time += p.timePassage;
        }
        let fps = Math.floor(p.frameRate());
        document.getElementById('frame-counter').innerHTML = fps
        // noLoop()
    }
}

export { perlin_ascii };
