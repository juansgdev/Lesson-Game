export const renderProperties = {
    recX: 48,
    recY: 68,
    posX: 0,
    posY: 0
};

const context = scene.getContext("2d");
context.mozImageSmoothingEnabled = false;
context.webkitImageSmoothingEnabled = false;
context.msImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;

// Vai virar dinamico
const asset = new Image();
asset.src = "../../assets/general_characters.png";
let recX = 48;
let recY = 68;
asset.onload = () => {


    context.drawImage(asset, recX, recY, 16, 16, 0, 0, 64, 64);
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
            context.drawImage(asset, recX, recY, 16, 16, posX, posY, 64, 64);
        }
    }, 20);
}