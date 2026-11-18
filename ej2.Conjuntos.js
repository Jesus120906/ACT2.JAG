let set_alumnos = new Set();

let salir = false;

do {
    let opcion = window.prompt("a. Inscribir un participante. \n" +
        "b. Dar de baja un participante. \n" +
        "c. Comprobar inscripción. \n" +
        "d. Mostrar participantes. \n" +
        "e, Vaciar inscripciones. \n" + 
        "f. Salir.");

        switch (opcion) {
        case "a":
        window.alert("Inscribir participantes: ");
        let nom_parti = window.prompt("Introduce el nombre del participante: ");
        
        if(set_alumnos != nom_parti){
        set_alumnos.add(nom_parti);
        } else {
            window.alert("No se permiten nombres duplicados.");
        }

        console.table(set_alumnos);
        break;
    
        case "b":
        window.alert("Dar de baja participante. ");
        let baja_part = window.prompt("Nombre del partipante que quieres dar de baja: ");

        if(console.log(set_alumnos.has(baja_part)) == baja_part){
            console.log("No se ha encontrado nadie con el nombre " +baja_part);
        } else {
            set_alumnos.delete(baja_part);
        }
        
        break;

        case "c":
        window.alert("Comprobar Incripción. ");

        let nom_alum = window.prompt("Nombre del alumno: ");
        
        window.alert(set_alumnos.has(nom_alum));

        break;


        case "d": 
        window.alert("Monstrar participantes.");
        for(alums of set_alumnos){
        console.log(alums);
        }
        window.alert(set_alumnos.size);
        
        break;

        case "f":
        salir = true;
        window.alert("Has salido.");
        break;
    }
    
} while (!salir);
