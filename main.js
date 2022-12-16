array_palabras = ["relampago" , "pantano" , "corazon" , "realista", "abaco" , "arandano"]
let palabra = array_palabras[Math.floor(Math.random()*array_palabras.length)]
let palabraGuion = palabra.replace(/./g,"_ ")
array_guion = palabraGuion.split(" ")

let contadorfallos = 0

    document.getElementById("base").textContent = palabraGuion

function elegirLetra(letra) {
    
    if(palabra.includes(letra)){
        for (let i = 0; i < palabra.length + 1; i++) {
            if (letra == palabra[i]) {
                array_guion[i] = letra
                document.getElementById("base").textContent = array_guion.join(' ')
            }
        }
    }else{
        switch(contadorfallos){
            case 0:
                document.getElementById("papanoel2").removeAttribute("hidden")
            break;

            case 1:
                document.getElementById("papanoel3").removeAttribute("hidden")
            break;

            case 2:
                document.getElementById("papanoel4").removeAttribute("hidden")
            break;

            case 3:
                document.getElementById("papanoel5").removeAttribute("hidden")
            break;

            case 4:
                document.getElementById("papanoel6").removeAttribute("hidden")
            break;

            case 5:
                document.getElementById("papanoel7").removeAttribute("hidden")
                document.getElementById("calavera").removeAttribute("hidden")
                document.getElementById("reiniciar").removeAttribute("hidden")
                document.getElementById("borroso").style.filter='blur(6px)'
            break;
        }
        contadorfallos+=1
    }
}

function cambioColor(letracolor){
    document.getElementById("button"+(letracolor)).style.backgroundColor='rgb(252, 163, 163, .6)'
}


// EFECTO NIEVE

document.addEventListener("DOMContentLoaded", function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = function () {
     particlesJS("snow", {
      particles: {
       number: {
        value: 500,
        density: {
         enable: true,
         value_area: 1350
        }
       },
       color: {
        value: "#ffffff"
       },
       opacity: {
        value: 0.7,
        random: false,
        anim: {
         enable: false
        }
       },
       size: {
        value: 3.7,
        random: true,
        anim: {
         enable: false
        }
       },
       line_linked: {
        enable: false
       },
       move: {
        enable: true,
        speed: 1.39,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
         enable: true,
         rotateX: 300,
         rotateY: 1200
        }
       }
      },
      interactivity: {
       events: {
        onhover: {
         enable: false
        },
        onclick: {
         enable: false
        },
        resize: false
       }
      },
      retina_detect: true
     });
    };
    document.head.append(script);
   });

