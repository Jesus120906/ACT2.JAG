let notas_alumnos = [];

let salir = false;

do {
    let opcion = window.prompt("Elige una opción: "+
        "\n a. Introduce una nota al principio: "+
        "\n b. Introduce una nota al final: "+
        "\n c. Subir todas las notas X puntos: "+
        "\n d. Calcular estadisticas: "+
        "\n e. Vacias notas: "+
        "\n f. Inizializar N notas a valor X: "+
        "\n g. Eliminar la primera nota: "+
        "\n h. Eliminar la segunda nota: "+
        "\n i. Establecer a 0 todos los suspensos: "+
        "\n j. Sustituir una nota por otra: "+
        "\n k. Añadir una noya en una posición determinada: "+
        "\n l. Contar número de suspensos: "+
        "\n m. Salir"

    );

switch (opcion) {
    case "a":
        let notaI = window.prompt("Introduce la nota: ");
        notas_alumnos.unshift(notaI);
        console.table(notas_alumnos);
        break;
    
    case "b":
        let notaF = window.prompt("Introduce la nota: ");
        notas_alumnos.push(notaF);
        console.table(notas_alumnos);
        break;
    
    case "c":
        let notaS = window.prompt("Sube X puntos las notas: ");
            for(let i = 0; i >= notas_alumnos.length; i++){

                if(notas_alumnos[i] + notaS >= 10){
                    notas_alumnos[i] = 10;
                } else {
                    notas_alumnos[i] = notas_alumnos[i] + notaS;
                }
            }
        console.table(notas_alumnos);
        break;
    case "d":
        let notaMax;
        let notaMin;
        let media;
        for (let i = 0; i < notas_alumnos.length; i++) {
            media = notas_alumnos[i] / notas_alumnos.length; 
        }
        let estadisticas = window.prompt("Estadisticas: "+
            "\n Maxima nota: "+ notaMax +
            "\n Minima nota: "+ notaMin +
            "\n Nota media: "+ media
        );
    
    case "m":
        salir = true;
        window.alert("Has salido.");
        break;
}

} while (!salir);