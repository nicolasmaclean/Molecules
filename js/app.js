var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var w = 500;

// var par1 = new Particle(100, 200, 4, -4, 80, "blue");
// var par2 = new Particle(500, 400, -3, 3, 100, "black");

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

window.addEventListener('click', () =>{
    init();
})

var particles;

function init(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particles = [];
    
    if(canvas.height < canvas.width){
        w = canvas.height/3;
    } else {
        w = canvas.width/3;
    }

    for(let i = 0; i < w; i++){
        let radius = 10;
        let x = radius + Math.random()*(canvas.width-radius*2);
        let y = radius + Math.random()*(canvas.height-radius*2);
        let dx = Math.random()*6-3;
        let dy = Math.random()*6-3;
        let color = "black";
        if(i % 20 === 0)
            color = "blue";

        particles.push(new Particle(x, y, dx, dy, radius, color));
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < particles.length; i++){
        particles[i].update();
    }
    for(let i = 0; i < particles.length; i++){
        particles[i].checkCollision();
    }
}

init();
animate();