const modalBody = document.getElementById('modal-body')
let cardArray = []

// Card Objects for vehicles
let carObject = {
    vehicle: "Car",
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
    description: 'Lorem, ipsum dolor sit amet consectb tenetur fuga corrupti sapiente laboriosam.',
    farePerKilo: 3,
    capacity: 4
}
let busObject = {
    vehicle: "Bus",
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Lorem, ipsum dolor sit amet consectb tenetur fuga corrupti sapiente laboriosam.',
    farePerKilo: 2,
    capacity: 50
}

let bikeObject = {
    vehicle: "Bike",
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60',
    description: 'Lorem, ipsum dolor sit amet consectb tenetur fuga corrupti sapiente laboriosam.',
    farePerKilo: 5,
    capacity: 2
}

// Function for making cards
function services(service) {
    const cardSection = document.getElementById('card-section')

    const cardDiv = document.createElement('div')
    cardDiv.innerHTML = `
        <div class="w-3/4 mx-auto bg-white rounded-md mt-5 p-2 flex items-center border">
            <div class="w-1/3">
                <img src="${service.imageUrl}"
                    alt="">
            </div>
            <div class="w-2/3 pl-3">
                <h4 class="text-2xl font-semibold">${service.vehicle}</h4>
                <p class="text-sm">${service.description}</p>
                <div class="pl-1">
                    <span class="text-sm text-gray-500">Fare per kilo : <span>${service.farePerKilo}</span></span>
                    <span class="text-sm text-gray-500 pl-5">Capacity : <span>${service.capacity}</span></span>
                </div>
                <button id="modal-opening-btn" class="modal-opening-btn bg-blue-600 hover:bg-blue-700 text-white rounded px-2 py-1 " type="button">Book Now</button>
            </div>
        </div>
    `

    cardSection.appendChild(cardDiv)
}

// Call Function to Create cards
services(carObject)
services(busObject)
services(bikeObject)


// Modal Body
function setElementToModal() {
    for (let i = 0; i < cardArray.length; i++) {

        modalBody.innerHTML = `
            <div class=''>
                <img class='h-40 mx-auto' src="${cardArray[i].image}" alt="">
                <h4 class="text-2xl font-semibold text-white">${cardArray[i].name}</h4>
                <div class="pl-2 mt-2 text-white">
                    <span>Fare per Kilo: ${cardArray[i].farePerKilo}</span>
                    <span>Capacity: ${cardArray[i].capacity}</span>
                </div>
                <div class="text-white">
                    <p class="mt-1">Fare: <span id="fare-count"></span></p>
                    <p class="mt-1">Tax: <span id="tax-count"></span></p>
                    <p class="mt-1">Total-cost: <span id="total-cost-count"></span></p>
                </div>
                <div class="flex justify-between mt-2">
                    <input id="distance" class="border rounded-md p-1 w-1/3" type="text" name="" placeholder="Koto kilo?">
                    <input id="vehicles" class="border rounded-md p-1 w-1/3" type="text" name="" placeholder="Koyta gari?">
                    <button id="submit-button" class="border border-green-400 text-green-400 w-1/4 px-3 py-1 rounded-md">Submit</button>
                </div>
            </div>
        `





        // Submit button onclick
        document.getElementById('submit-button').addEventListener('click', function () {
            const distance = Number(document.getElementById('distance').value)
            const vehicles = Number(document.getElementById('vehicles').value)
            const fareCount = document.getElementById('fare-count')
            // const taxCount = document.getElementById('tax-count')
            // const totalCostCount = document.getElementById('total-cost-count')

            fareCount.innerText = distance * vehicles * cardArray[i].farePerKilo
        })
    }
}


// Modal open by clicking Book Now button
const modalBtns = document.getElementsByClassName('modal-opening-btn')
for (const modalBtn of modalBtns) {
    modalBtn.addEventListener('click', function (event) {
        document.getElementById('defaultModal').style.display = 'block'



        const newArray = {
            image: event.target.parentNode.parentNode.children[0].children[0].src,
            name: event.target.parentNode.parentNode.children[1].children[0].innerText,
            farePerKilo: event.target.parentNode.parentNode.children[1].children[2].children[0].children[0].innerText,
            capacity: event.target.parentNode.parentNode.children[1].children[2].children[1].children[0].innerText
        }

        cardArray.push(newArray)

        setElementToModal()



    })
}




// Modal close by clicking cros button
document.getElementById('minimize-btn').addEventListener('click', function () {
    document.getElementById('defaultModal').style.display = 'none'

    // To clean the card Array
    cardArray = []
})

















