let likeCount = 0 + 1

// document.addEventListener('DOMContentLoaded', function(){
// fetchCoffee()
// })

console.log ("coffee")

// function fetchCoffee(){
// fetch('https://api.sampleapis.com/coffee/hot')
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
// })
// }
function likeAnimation(){
document.querySelector('.upvote-button').addEventListener('click', increaseLikes())
}

function increaseLikes(e){
    document.querySelector('.upvote-count').textContent = likeCount + ' Upvotes'
    e.target = likeCount++
}