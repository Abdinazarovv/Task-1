let elList = document.querySelector(".list");
let newLi = document.createElement("li");
elList.appendChild(newLi);
let users = [
    {
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    }
];



function findUser(array, number) {
    let user = "";
    for (const item of array) {
        if (item.telNumber == number) {
            user = item.name;
        } else {
            newLi.textContent = user;
            console.log(user);;
        }
    }
    
    return user
}
newLi.textContent = (findUser(users, 998911777767));