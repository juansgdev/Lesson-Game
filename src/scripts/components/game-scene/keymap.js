const keymap = () => {
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
};

const keys = [40];
const actions = ["down"];