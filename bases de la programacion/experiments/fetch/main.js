const ul = document.querySelector('ul');
let eliminar = document.getElementById('eliminar');








eliminar.addEventListener('click', () => {
    location.reload();
    }
);
let button = document.querySelector('button');
button.addEventListener('click', loaddata);



// !Creacion de un fetch sin async await
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(post => {
//             const li = document.createElement('li');
//             li.textContent = post.userId + ' - ' + post.title;
//             ul.appendChild(li);
//         });
//     });


// !creacion de un fetch con async await
async function loaddata() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await respuesta.json();
    data.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.userId + ' - ' + post.title;
        ul.appendChild(li);
    });
}