import Car from "./Car";
import Wishlist from "./Wishlist";


// Form Selections 
let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modeInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");


// Display Selections
let wishListUl = document.querySelector("#wishListContainer > ul");
let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn")


// Script Values 
let wishlist = new Wishlist();



// Form is submitted
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Will receive make,model,year inputs 
    let make = makeInput.value;
    let model = modeInput.value;
    let year = yearInput.value;

    // Will make new car from inputs
    let car = new Car(make, model, year);

    // Will add new car to wishlist 
     wishlist.add (car);

    // Will update the DOM 
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = car.make +" "+ car.model;
    wishListUl.appendChild(li);

    // li is clicked 
    li.addEventListener("click",(event) => {
        // will display car details in vehicle card 
        makeP.textContent = car.make;
        modelP.textContent = car.model;
        yearP.textContent = car.year; 

        // enable remove button on vehicle card
        removeBtn.disabled = false;
        removeBtn.onclick = (event) => {
            // removes car from wishlist 
            wishlist.remove(car);

        // reset vehicle card display values 
        makeP.textContent = "";
        modelP.textContent = "";
        yearP.textContent = ""; 

        // disabled remove button 
        removeBtn.disabled = true;

        // remove li from DOM
        wishListUl.removeChild(li);
        };
    });
    
    
    

    // Clear Form inputs 
    makeInput.value = "";
    modeInput.value = "";
    yearInput.value = "";
});

  




