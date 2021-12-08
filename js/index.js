document.addEventListener('DOMContentLoaded', function(){
fetchHotCoffee()
fetchIcedCoffee()
})

function fetchHotCoffee(){
fetch('https://api.sampleapis.com/coffee/hot')
.then(resp => resp.json())
.then(data => {
    console.log(data)
    // First Card
    document.querySelector('#coffee-1-title').textContent = data[14].title
    document.querySelector('#description-1').textContent = data[14].description
    document.querySelector('#ingredients-1').textContent = data[14].ingredients

    // Second Card
    document.querySelector('#coffee-2-title').textContent = data[16].title
    document.querySelector('#description-2').textContent = data[16].description
    document.querySelector('#ingredients-2').textContent = data[16].ingredients
    })
}

function fetchIcedCoffee(){
fetch('https://api.sampleapis.com/coffee/iced/')
.then(resp => resp.json())
.then(data => {
    console.log(data)
    // Third Card

    document.querySelector('#coffee-3-title').textContent = data[2].title
    document.querySelector('#description-3').textContent = data[2].description
    document.querySelector('#ingredients-3').textContent = data[2].ingredients
})
}