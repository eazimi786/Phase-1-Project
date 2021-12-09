
document.addEventListener('DOMContentLoaded', function(){
    fetchBeers()
// fetchHotCoffee()
// fetchIcedCoffee()
// fetchAllHotCoffee()
// fetchAllIcedCoffee()
})

// function fetchHotCoffee(){
// fetch('https://api.sampleapis.com/coffee/hot', {mode: 'no-cors'})
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
//     // First Card
//     document.querySelector('#coffee-1-title').textContent = data[14].title
//     document.querySelector('#description-1').textContent = data[14].description
//     document.querySelector('#ingredients-1').textContent = data[14].ingredients

//     // Second Card
//     document.querySelector('#coffee-2-title').textContent = data[16].title
//     document.querySelector('#description-2').textContent = data[16].description
//     document.querySelector('#ingredients-2').textContent = data[16].ingredients
//     })
// }

// function fetchIcedCoffee(){
// fetch('https://api.sampleapis.com/coffee/iced/', {mode: 'no-cors'})
// .then(resp => resp.json())
// .then(data => {
   
//      // Third Card
//     document.querySelector('#coffee-3-title').textContent = data[2].title
//     document.querySelector('#description-3').textContent = data[2].description
//     document.querySelector('#ingredients-3').textContent = data[2].ingredients
// })
// }

// function fetchAllHotCoffee(){
//     fetch('https://api.sampleapis.com/coffee/hot', {mode: 'no-cors'})
//     .then(resp => resp.json())
//     .then(data => {
//         data.forEach(obj => {
//             const p = document.createElement('p');
//             p.className = 'coffee-names';
//             p.textContent = obj.title
//             document.querySelector('#hot-coffee-list').append(p)
//         })
//     })
// }
// function fetchAllIcedCoffee(){
//     fetch('https://api.sampleapis.com/coffee/iced/', {mode: "no-cors"})
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(obj => {
//             const p = document.createElement('p');
//             p.className = 'coffee-names';
//             p.textContent = obj.title
//             document.querySelector('#iced-coffee-list').append(p);
//         })
        
//     })
// }

// Likes
// let likeCountOne = 0;
// let likeCountTwo = 0;
// let likeCountThree = 0;
   
// document.querySelector('#button-1').addEventListener('click', (e) => {
//     e.target = likeCountOne++
//     document.querySelector('#upvote-count-1').textContent = likeCountOne + " Upvotes"
// })

// document.querySelector('#button-2').addEventListener('click', (e) => {
//     e.target = likeCountTwo++
//     document.querySelector('#upvote-count-2').textContent = likeCountTwo + " Upvotes"
// })

// document.querySelector('#button-3').addEventListener('click', (e) => {
//     e.target = likeCountThree++
//     document.querySelector('#upvote-count-3').textContent = likeCountThree + " Upvotes"
// })

// // Comments - Add and Remove
// document.querySelector('#comment-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const li = document.createElement('li');
//     li.textContent = comment.value
//     document.querySelector('#comments').append(li)
//     li.addEventListener('click', e =>{
//         e.target.remove()
//     })
// })

// // Adding Your Own Coffee
//     console.log(document.querySelector('#add-button'))
//     document.querySelector('#add-button').addEventListener('submit', e => {
//         e.preventDefault(); 
//         renderCoffee()
//     })

// function renderCoffee(title, img, des){
//     let card = document.createElement('div')
//     card.className = 'card'
//     card.innerHTML = `
//     <h2 class='title'> ${title} </h2>
//     <img class='image' src='${img}' height='225px' width='300px' />
//     <p> ${des} </p>`
//     document.querySelector('.main-content-container').append(card)
// }

function fetchBeers(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
        console.log(data)
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
