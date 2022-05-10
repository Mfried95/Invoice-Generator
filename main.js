// ARRAY FOR SERVICES AND PRICES
const serviceItems = ["Car Wash", "Mow Lawn", "Pull Weeds"]
const Item1 = "10"
const Item2 = "20"
const Item3 = "30"


// LINKS ITEM LIST TO SERVICE BUTTONS
const itemCar = document.querySelector(".item1") 
const itemLawn = document.querySelector(".item2")
const itemWeeds = document.querySelector(".item3")

// SERVICES
function renderItems(){
    for (let i = 0; i <serviceItems.length; i++){
        console.log(serviceItems[i])
    }
}


// CAR WASH BUTTON 
const carWash = document.querySelector("#car-wash") 
const carPrice = document.querySelector(".price1")
carWash.addEventListener("click", function(){
    itemCar.textContent = serviceItems[0]
    carPrice.textContent =  '$' + Item1
})


// MOW LAWN BUTTON
const mowLwan = document.querySelector("#mow-lawn")
const lawnPrice = document.querySelector(".price2")
mowLwan.addEventListener("click", function(){
    itemLawn.textContent = serviceItems[1]
    lawnPrice.textContent = '$' + Item2
})


// WEEDS
const pullWeeds = document.querySelector("#pull-weeds")
const weedPrice = document.querySelector(".price3")
pullWeeds.addEventListener("click", function(){
    itemWeeds.textContent = serviceItems[2]
    weedPrice.textContent = '$' + Item3
    priceTotal()
})


// RENDER TOTAL PRICE
function priceTotal(){
    const allCharges = parseInt(Item1) + parseInt(Item2)  + parseInt(Item3) 
    totalPrice.textContent =  "$" + allCharges
}

const totalPrice = document.querySelector("#total-amount")



//INVOICE BUTTON
const invoiceBtn = document.querySelector(".invoice-btn")
invoiceBtn.addEventListener("click", function(){
    resetbtn()
})


//RESET BUTTON
function resetbtn(){
    carPrice.textContent = ""
    itemCar.textContent = ""
    itemLawn.textContent = ""
    lawnPrice.textContent = ""
    itemWeeds.textContent = ""
    weedPrice.textContent = ""
    totalPrice.textContent =  "$0"
}


