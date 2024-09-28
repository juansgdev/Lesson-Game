(() => {
    const scene = document.getElementById("scene");
    const context = scene.getContext("2d");
    const button = document.getElementById("button");

    // context.fillStyle = '#000';
    // context.fillRect(0,0, 100, 100);

    const asset = new Image();
    asset.src = "./src/assets/general_characters.png";
    let recX = 48;
    
    asset.onload = () => {
        // 68
        context.drawImage(asset, recX, 68, 16, 16, 0, 0, 64, 64);
    };

    let animacaoControl = false;
    let posY = 0;
    let loop = false;
    let loop2 = false;
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

                // recX += 16;
                // if (recX == (16*5)) {
                //     recX = 48;
                // }
                control += 18;
                context.clearRect(0, 0, 300, 300);
                context.drawImage(asset, recX, 68, 16, 16, 0, posY, 64, 64);
            }
        }, 20);

        // loop2 = setInterval(() => {
        //     recX += 16;
        //     if (recX == (16*5)) {
        //         recX = 48;
        //     }
        //     context.clearRect(0, 0, 300, 300);
        //     context.drawImage(asset, recX, 68, 16, 16, 0, posY, 64, 64);
        // }, 350);
    }

    // CRIAR UM VARIAVEL QUE CONTROLA PARA QUE A CADA 20 SEGUNDOS TROQUE E RENDERIZE A
    // POSICAO E SOMENTE APOS 350 MUDE  A SPRITE
    // button.onclick = () => {
    //     animacao;
    // };

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
            // clearInterval(loop2);
            loop = false;
            // loop2 = false;
            animacaoControl = false;
        }
    };
})();