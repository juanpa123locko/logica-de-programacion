fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
const ul = document.getElementById('ul');
button = document.createElement('button')
button.innerHTML = 'Click me'
document.body.appendChild(button)
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                const li = document.createElement('li')
                li.innerHTML = json[i].title
                ul.appendChild(li)
            }
        })


})