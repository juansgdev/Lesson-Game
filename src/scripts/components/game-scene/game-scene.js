export class Scene extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build () {
        const game = document.createElement("div");
        game.classList.add("game");

        game.innerHTML = `
        <canvas id="scene" width="320" height="180">
            Seu navegador não suporta Canvas!
        </canvas>
        `;

        const scene = game.querySelector("#scene");
        const context = scene.getContext("2d");
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
    
        const asset = new Image();
        asset.src = "../../assets/general_characters.png";
        let recX = 48;
        
        asset.onload = () => {
            context.drawImage(asset, recX, 68, 16, 16, 0, 0, 64, 64);
        };
    
        let animacaoControl = false;
        let posX = 0;
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
                    context.drawImage(asset, recX, 68, 16, 16, posX, posY, 64, 64);
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

        return game;
    }

    style () {
        const styles = document.createElement("style");

        styles.textContent = `
        .game {
            display: flex;
            margin: 0 auto;
        }

        #scene {
            /* display: none; */
            margin: 0 auto;
            border: 2px solid blueviolet;
        }
        `;

        return styles;
    }
}