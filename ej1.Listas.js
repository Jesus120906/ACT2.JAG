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
        let notaI = parseInt(window.prompt("Introduce la nota: "));
        notas_alumnos.unshift(notaI);
        console.table(notas_alumnos);
        break;
    
    case "b":
        let notaF = parseInt(window.prompt("Introduce la nota: "));
        notas_alumnos.push(notaF);
        console.table(notas_alumnos);
        break;
    
    case "c":
        let notaS = parseInt(window.prompt("Sube X puntos las notas: "));
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
        let media = 0;
        let acumulador = 0;
        for (let i = 0; i < notas_alumnos.length; i++) {
            media = notas_alumnos[i] + media;
            acumulador++;
        }

        notas_alumnos.sort();
        notaMin = notas_alumnos[0];
        notas_alumnos.reverse();
        notaMax = notas_alumnos[0]; 
        
        let media_completa = media / acumulador;

        console.log(media);

       window.alert("Estadisticas: " +
            "\n Maxima nota: "+ notaMax +
            "\n Minima nota: "+ notaMin +
            "\n Nota media: "+ media_completa
        );
        
        break;
        case "e":
        window.alert("Vaciar array: ");
        notas_alumnos.length = 0;
        console.log(notas_alumnos);
        window.alert("Has vaciado la lista");
        break;

        case "f":
        let num_notas = parseInt(window.prompt("Introduce el número de notas: "));
        let notas = parseInt(window.prompt("Introduce las notas: "));

        for(let i = 0; i > notas_alumnos.length; i++){
            notas_alumnos[i] = notas_alumnos + num_notas;
        }
        console.table(notas_alumnos);
        break;

        case "g":
        window.alert("Elimina el primer elemento de la lista: ");

        notas_alumnos.shift();

        console.table(notas_alumnos);
        break;

        case "h":
        window.alert("Elimina el segundo elemento de la lista: ");
        if(notas_alumnos.length >= 2){
        notas_alumnos.splice(1, "")

        } else {
            window.alert("No hay posición 2");
        }

        console.table(notas_alumnos);
        break;

        case "i": 
        window.alert("Establecer a 0 todos los suspensos: ");

        for(let i = 0; i< notas_alumnos.length; i++){
            if(notas_alumnos[i] < 5){
                notas_alumnos[i] = 0;
            }
        }

        console.table(notas_alumnos);
        break;
        case "j":
        window.alert("Sustituir Nota: ");

        let nota_origen = parseInt(window.prompt("Nota de origen: "));
        let sustituir_nota = parseInt(window.prompt("Que nota quieres añadir: "));

        for(let i = 0; i < notas_alumnos.length; i++){
            
            if(notas_alumnos[i] == nota_origen){
                notas_alumnos[i] = sustituir_nota;
            } else {
                window.alert("Esa nota no esta en el array");
            }
        }
        console.table(notas_alumnos);
        break;

        case "k":
        let nota_soli = parseInt(window.prompt("Añade una nota: "));
        let posición = parseInt(window.prompt("Posición que quieres añadir: "));

        notas_alumnos.splice(posición, 0, nota_soli);

        console.table(notas_alumnos);
        break;
        
        case "l":
        window.alert("Cuenta el número de suspensos");

        let num_suspensos = 0;

        for(i = 0; i < notas_alumnos.length; i++){
            if(notas_alumnos[i] > 5){
                num_suspensos++;
            } else{
                window.alert("No hay ningun suspenso.");
            }
        }
        console.log(num_suspensos);

        window.alert(num_suspensos);

        break;
    case "m":
        salir = true;
        window.alert("Has salido.");
        break;
}

} while (!salir);
