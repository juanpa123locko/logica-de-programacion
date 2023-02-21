

// 1. creamos variables que estan en el html
let ul = document.getElementById('ul');
let button = document.getElementById('button');

// 2. creamos un evento click para el boton
button.addEventListener('click', async () => {

    // 3. creamos una variable que va a contener la respuesta de la peticion fetch
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // 4. creamos una variable que va a contener la respuesta de la peticion fetch en formato json
    let data = await response.json();

    //5. lo mostramos en consola 
    console.log(data);

    // 6. creamos un forEach para recorrer el array de objetos
    data.forEach(post => {

        // 7. creamos un elemento li y le asignamos el titulo del objeto
        let li = document.createElement('li');
        li.innerHTML = post.title;

        // 8. agregamos el elemento li al elemento ul
        ul.appendChild(li);
    });
});
