function start() {
    // $.when(logo()).then(typeWriter());
    logo();
    typeWriter1();
    typeWriter2();
}


function typeWriter1() {
    var i = 0;
    var txt = "PRESENTS";
    var speed1 = 200;
    if(i < txt.length) {
        const t2 = setInterval(function() {
            if(i >= txt.length) clearInterval(t2);
            document.getElementById("text1").innerHTML += txt.charAt(i);
            i++;
        }, speed1);
    }
}

function typeWriter2() {
    var i = 0;
    var txt = "UNiTRON'23";
    var speed1 = 200;
    if(i < txt.length) {
        const t2 = setInterval(function() {
            if(i >= txt.length) clearInterval(t2);
            document.getElementById("text2").innerHTML += txt.charAt(i);
            i++;
        }, speed1);
    }
}

function logo() {
    var speed2 = 4;
    var i = 0;
    if(i <= 15) {
        const t1 = setInterval(function (){
            if(i >= 15) clearInterval(t1);
            i += 0.1;
            document.getElementById('ttt').style.width = document.getElementById('ttt').style.height = i.toString() + "%";
        }, speed2);
    }
      
}