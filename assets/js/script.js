var datos = [
    {
        nombre: "bicicleta de Ruta",
        id: 1,
        genero: "masculino",
        categoria: "bicicletas",
        precio: 1590000,
        stock: 5,
        img: "./img/BicicletaAdulto.png"
    },
    {
        nombre: "zapatillas ciclismo",
        id: 2,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 90000,
        stock: 8,
        img: "./img/ZapatillasCiclismo.jpeg"
    },
    {
        nombre: "casco adulto",
        id: 3,
        genero: "masculino",
        categoria: "seguridad",
        precio: 79990,
        stock: 3,
        img: "./img/CascoAdulto.png"
    },
    {
        nombre: "casco niño/a",
        id: 4,
        genero: "unisex",
        categoria: "seguridad",
        precio: 39990,
        stock: 13,
        img: "./img/CascoNinio.png"
    },
    {
        nombre: "bicicleta mujer",
        id: 5,
        genero: "femenino",
        categoria: "bicicletas",
        precio: 100000,
        stock: 12,
        img: "./img/bicicletaMujer.webp"
    },
    {
        nombre: "bicicleta niño/a",
        id: 6,
        genero: "unisex",
        categoria: "bicicletas",
        precio: 530900,
        stock: 10,
        img: "./img/BiciNinio.jpeg"
    },
    {
        nombre: "guantes ciclismo",
        id: 7,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 12000,
        stock: 20,
        img: "./img/Guanteciclismo.webp"
    },
    {
        nombre: "scooter eléctrico",
        id: 8,
        genero: "unisex",
        categoria: "e-move",
        precio: 149900,
        stock: 4,
        img: "./img/ScooterElectrico.png"
    },
    {
        nombre: "foco Led Blanco",
        id: 9,
        genero: "unisex",
        categoria: "accesorios",
        precio: 20000,
        stock: 9,
        img: "./img/LuzBicicleta.jpeg"
    },
    {
        nombre: "conjunto Ciclismo",
        id: 10,
        genero: "unisex",
        categoria: "indumentaria",
        precio: 11900,
        stock: 11,
        img: "./img/ConjuntoCiclismo.jpeg"
    }
]

function renderTarjetas() {

    var contenidoPrincipal = document.querySelector('#contenidoPrincipal');
    contenidoPrincipal.setAttribute('class', 'container')
    var contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.setAttribute('class', 'row');


    datos.forEach( function(producto) {
        var contenedorTarjeta = document.createElement('div');
        var imagen = document.createElement('img');
        var contenedorCuerpoTarjeta = document.createElement('div');
        var tituloTarjeta = document.createElement('h5');
        var parrafoTarjeta = document.createElement('p');
        var listaTarjeta = document.createElement('ul');
        var listaItemUno = document.createElement('li');
        var listaItemDos = document.createElement('li');
        var listaItemTres = document.createElement('li');
        var btnAgregar = document.createElement('button');
        contenedorTarjeta.setAttribute('class', 'card col-3 m-3');
        contenedorTarjeta.setAttribute('style', 'width: 18rem;');
        imagen.setAttribute('class', 'card-img-top');
        imagen.setAttribute('alt', producto.nombre);
        imagen.setAttribute('src', `assets/${producto.img}`);
        contenedorCuerpoTarjeta.setAttribute('class', 'card-body');
        tituloTarjeta.setAttribute('class', 'card-title');
        tituloTarjeta.innerHTML = producto.nombre;
        parrafoTarjeta.setAttribute('class', 'card-text');
        parrafoTarjeta.innerHTML = producto.genero;
        listaTarjeta.setAttribute('class', 'list-group list-group-flush');
        listaItemUno.setAttribute('class', 'list-group-item');
        listaItemUno.innerHTML = producto.categoria;
        listaItemDos.setAttribute('class', 'list-group-item');
        listaItemDos.innerHTML = producto.precio;
        listaItemTres.setAttribute('class', 'list-group-item');
        listaItemTres.innerHTML = producto.stock;
        btnAgregar.setAttribute('class', 'btn btn-primary mb-3');
        btnAgregar.innerHTML = 'Agregar al Carrito';
        contenedorCuerpoTarjeta.append(tituloTarjeta,parrafoTarjeta);
        listaTarjeta.append(listaItemUno, listaItemDos, listaItemTres);
        contenedorTarjeta.append(imagen, contenedorCuerpoTarjeta, listaTarjeta);
        contenedorPrincipal.append(contenedorTarjeta);
        contenedorTarjeta.append(btnAgregar);
    });
    contenidoPrincipal.append(contenedorPrincipal);
}

renderTarjetas();

/* <div class="card" style="width: 18rem;">
<img src="assets/img/BicicletaAdulto.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Nombre Producto</h5>
  <p class="card-text">Categoria</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Genero</li>
  <li class="list-group-item">Precio</li>
  <li class="list-group-item">Stock</li>
</ul>
</div> */
