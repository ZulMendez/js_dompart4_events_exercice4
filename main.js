let boite = document.querySelector('#box');
console.log(boite);

boite.style.border = "1px solid black";
boite.style.height = '300px';
boite.style.width = '300px';
boite.style.transition = "all 2s ease";

// itération
let cpt = 0;

boite.addEventListener('mouseover', () => {
    cpt++
    if (cpt == 1) {
        boite.style.borderRadius = "50%";
    } else if (cpt == 2) {
        boite.style.backgroundColor = "red";
    } else {
        boite.style.borderRadius = "";
        boite.style.backgroundColor = "";
        cpt = 0
    }
})

// boite.setAttribute('style', 'border: solid 4px black');
// boite.addEventListener('mouseover', () =>{
//     boite.style.borderRadius = '55%';
//     boite.style.backgroundColor = 'red';
//     boite.style.width = '50%';
//     boite.style.height = '450px';
//     boite.style.transition = '3s'
// }, true); 
