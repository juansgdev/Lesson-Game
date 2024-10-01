import { setRoute } from "../../scripts/route-controller.js";

const currentPage = "home";
setRoute(currentPage);

(() => {
    const scene = document.getElementById("scene");
    const context = scene.getContext("2d");
    // const button = document.getElementById("button");

    const asset = new Image();
    asset.src = "../../assets/general_characters.png";
    let recX = 48;
    
    asset.onload = () => {
        // 68
        context.drawImage(asset, recX, 68, 16, 16, 0, 0, 64, 64);
    };

    let animacaoControl = false;
    let posY = 0;
    let loop = false;
    let control = 0;
    const animacao = () => {
        if (loop) return false;

        loop = setInterval(() => {
            if (animacaoControl == true) {
                posY += 1;

                if (control == 360) {
                    control = 0;
                    recX += 16;
                    if (recX == (16*5)) {
                        recX = 48;
                    }
                }

                control += 18;
                context.clearRect(0, 0, 300, 300);
                context.drawImage(asset, recX, 68, 16, 16, 0, posY, 64, 64);
            }
        }, 20);
    }

    window.onkeydown = (e) => {
        if (e.keyCode == 40) {
            if (animacaoControl == false) {
                animacaoControl = true;
                animacao();
            }
        }
    };
    window.onkeyup = (e) => {
        if (e.keyCode == 40) {
            clearInterval(loop);
            loop = false;
            animacaoControl = false;
        }
    };
})();