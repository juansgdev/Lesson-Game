export function isValid (array) {
    let valid = true;
    array.forEach(e => {
        if (e[1] === (undefined || null || "")) {
            valid = false;
        }
    });

    return valid;
}