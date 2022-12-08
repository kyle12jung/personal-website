const seeDetails1 = document.querySelector('#project-header-1').children[2]
seeDetails1.addEventListener('click', () => {
    if (seeDetails1.innerHTML === "See Details") {
        document.querySelector('#project-description-1').style.display = 'block';
        seeDetails1.innerHTML = "Close Details"
    } else {
        document.querySelector('#project-description-1').style.display = 'none';
        seeDetails1.innerHTML = "See Details"
    }
})

const seeDetails2 = document.querySelector('#project-header-2').children[2]
seeDetails2.addEventListener('click', () => {
    if (seeDetails2.innerHTML === "See Details") {
        document.querySelector('#project-description-2').style.display = 'block';
        seeDetails2.innerHTML = "Close Details"
    } else {
        document.querySelector('#project-description-2').style.display = 'none';
        seeDetails2.innerHTML = "See Details"
    }
})