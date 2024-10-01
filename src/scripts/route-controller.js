const paths = {
    index: "/index.html",
    home: "src/pages/home/home.html"
};

const cases = {
    isLoggedIn () {
        if (localStorage.getItem("username") === null) {
            return false;
        }

        return true;
    }
};

export const setRoute = (currentPage) => {
    if (currentPage == "index") {

        cases.isLoggedIn() ? window.location.href = paths.home : 
        document.getElementsByClassName("form")[0].style = "display: flex;";

    }

    if (currentPage == "home") {
        
        cases.isLoggedIn() ? document.getElementsByClassName("dashboard")[0].style = "display: block;" : 
        window.location.href = paths.index;

    }
};