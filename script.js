function startExperience(){

document
.getElementById("music")
.play();

confetti({

particleCount:200,

spread:100,

origin:{
y:.6
}

});

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}

function cake(){

confetti({

particleCount:500,

spread:200

});

alert(

"Happy Birthday Nayla ❤️"

);

}