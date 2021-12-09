
document.addEventListener('DOMContentLoaded', function(){
    fetchBeers()
    populateList()
    renderGallery()
})

// Fetch Section

// Retreive Info From API
function fetchBeers(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {

        document.querySelector('#beer-title-1').textContent = data[9].name
        document.querySelector('#tagline-1').textContent = data[9].tagline
        document.querySelector('#beer-img-1').src = data[9].image_url
        document.querySelector('#description-1').textContent = data[9].description

        document.querySelector('#beer-title-2').textContent = data[23].name
        document.querySelector('#tagline-2').textContent = data[23].tagline
        document.querySelector('#beer-img-2').src = data[23].image_url
        document.querySelector('#description-2').textContent = data[23].description

        document.querySelector('#beer-title-3').textContent = data[11].name
        document.querySelector('#tagline-3').textContent = data[11].tagline
        document.querySelector('#beer-img-3').src = data[11].image_url
        document.querySelector('#description-3').textContent = data[11].description
    })
}

// Populate the Beer List
function populateList(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(obj => {
            const p = document.createElement('p')
            p.className = 'beer'
            p.textContent = obj.name.toUpperCase()
            document.querySelector('#beer-list').append(p)
        })
    })
}

// Populate Beer Gallery
function renderGallery(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            const img = document.createElement('img')
            img.className = 'gallery-image'
            img.src = obj.image_url
            document.querySelector('#gallery').append(img)
        })
    })
}


// User Inferface Section

// Likes
let likeCountOne = 0;
let likeCountTwo = 0;
let likeCountThree = 0;
   
document.querySelector('#button-1').addEventListener('click', (e) => {
    e.target = likeCountOne++
    document.querySelector('#upvote-count-1').textContent = likeCountOne + " Upvotes"
})

document.querySelector('#button-2').addEventListener('click', (e) => {
    e.target = likeCountTwo++
    document.querySelector('#upvote-count-2').textContent = likeCountTwo + " Upvotes"
})

document.querySelector('#button-3').addEventListener('click', (e) => {
    e.target = likeCountThree++
    document.querySelector('#upvote-count-3').textContent = likeCountThree + " Upvotes"
})

// Comments - Add and Remove
document.querySelector('#comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = comment.value
    document.querySelector('#comments').append(li)
    li.addEventListener('click', e =>{
        e.target.remove()
    })
})

