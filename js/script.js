var stages = document.querySelectorAll('.stage');
let floor = document.querySelector('#floor');
let apartments = document.querySelector('#apartment');

stages.forEach(element => {
    element.addEventListener("mouseenter", () => {
        
        var dataFloor = element.getAttribute('data-floor')
        var dataApartment = element.getAttribute('data-apartment')

        floor.innerText = dataFloor;
        apartments.innerText = dataApartment;
    })
});