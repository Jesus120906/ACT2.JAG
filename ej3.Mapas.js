let libros = new Map(); 

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
            let titulo = window.prompt("Titulo: ");
            let autor = window.prompt("Autor: ");
            let num_ejem = parseInt(window.prompt("Número de ejemplares: "));

            if(libros.has(ISBN)){
                window.alert("El ISBN coincide con uno ya creado. ");
            } else {
                libros.set(ISBN, titulo, autor, num_ejem);
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

            if(libros.has(ISBN_consult)){
                console.log("ISBN: "+ ISBN_consult + ", ");
            } else {
                window.alert("No exixte este ISBN.");
            }
            console.log();
            break;
        case "k":
            salir = true
            window.alert("Has salido.");
            break;
    }

} while (!salir);