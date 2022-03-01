const qs = (e) => document.querySelector(e);
const qsa = (e) => document.querySelectorAll(e);

const inputSearch = qs(".search");
const liItems = qsa("li");

//function
const showList = () => {
    for (const i of liItems) {
        const inputLCase = inputSearch.value.toLowerCase();
        const liLCase = i.textContent.toLowerCase();
        if (liLCase.includes(inputLCase)) {
            i.classList.remove("display");
        } else {
            i.classList.add("display");
        }
    }
};

//EventLIstener
inputSearch.addEventListener("keyup", showList);
