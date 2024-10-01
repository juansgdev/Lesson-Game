import { setRoute } from "./src/scripts/route-controller.js";
import { isValid } from "./src/scripts/validation.js";
import { formError } from "./src/scripts/handleError.js";

const currentPage = "index";
setRoute(currentPage);

const button = document.getElementById("submit-button");

button.onclick = () => {
    try {
        const userData = [
            ["username", document.getElementById("username").value],
            ["character", document.querySelector("input[name=character]:checked").value]
        ];

        if (isValid(userData)) {
            for (let i = 0; i < 3; i++) {
                localStorage.setItem(userData[i][0], userData[i][1]);
            }

            return false;
        }

        formError();
    } catch (error) {
        if (error == "TypeError: Cannot read properties of null (reading 'value')") {
            formError();
        }
    }
};