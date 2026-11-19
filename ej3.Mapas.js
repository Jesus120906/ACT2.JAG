let libros = new Map(); 

class Libro{
    constructor(titulo, autor, ejemplares){
        this.titulo = titulo;
        this.autor = autor;
        this.ejemplares = ejemplares;
    }

    toString(){
        return "Titulo: " + this.titulo, " Autor: " + this.autor, " Ejemplares: " + this.ejemplares;
    }
}

let salir = false;

do {
    let opcion = window.prompt("a. Añadir Libro. \n" +
        "b. Eliminar libro. \n" +
        "c. Consulta libro. \n" +
        "d. Mostrar catálago. \n" +
        "e. Modificar ejemplares. \n" +
        "f. Buscar libros de un autor. \n" +
        "g. Prestar libro. \n" +
        "h. Devolver libro. \n" +
        "i. Mostrar estadisticas. \n" +
        "j. Vaciar catalogo. \n" +
        "k. Salir"
    );

    switch (opcion) {
        case "a":
            let ISBN = parseInt(window.prompt("Introduce un ISBN: "));
            const titulo = window.prompt("Introduce el titulo: ");
            const autor = window.prompt("Introduce el autor: ");
            const num_ejem = window.prompt("Introdude los ejemplares: ");


            if(libros.has(ISBN)){
                window.alert("El ISBN coincide con uno ya creado. ");
            } else {
                let libro = new Libro(titulo, autor, num_ejem);
                let libro_completo = (ISBN, libro);
                libros.set(libro_completo);
            }
            console.table(libros);
            break;

        case "b":
            let ISBN_elim = parseInt(window.prompt("Introduce el ISBN que quieres eliminar: "));

            if(libros.has(ISBN_elim)){
                libros.delete(ISBN_elim);
                window.alert("Se ha eliminado.");
            } else {
                window.alert("El ISBN no exixte.");
            }

            console.table(libros);
            break;
        
        case "c":
            let ISBN_consult = parseInt(window.prompt("Introduce el ISBN: "));
            let titulo_consult = libros.titulo;
            if(libros.has(ISBN_consult)){
                console.log("ISBN: "+ libros.get(ISBN_consult).toString);
            } else {
                window.alert("No exixte este ISBN.");
            }
            break;

        case "d":
                

            break;
        case "k":
            salir = true
            window.alert("Has salido.");
            break;
    }

} while (!salir);