//Crea un objeto cine con las siguientes propiedades
//comida con los valores ['Palomitas', 'Nachos', 'Refresco', 'Dulces']
//butacas con valor de 50
//salas con valor de 4
//pelicula con los valores ['Minios', 'Spiderman no way home', 'Avengers', 'Dumbo']

const cine = {
    comida: ['Palomitas', 'Nachos', 'Refresco', 'Dulces'],
    butacas: 50,
    salas: 5,
    pelicula: ['Minios', 'Spiderman no way home', 'Avengers', 'Dumbo']
}

//Imprime en la consola el objeto cine
console.log(cine);

//Imprime en la consola la propiedad pelicula del objeto cine
console.log(cine.pelicula);

//Agrega una propiedad nueva cajasCobrar con valor de 6
cine.cajasCobrar = 6;

//Modifica el valor de la propiedad butacas a 75 del objeto cine
cine.butacas = 75;

//Imprime el objeto cine
console.log(cine);