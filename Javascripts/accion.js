const db = firebase.firestore();


const = document.getElementById('formu-la');

formu-la.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = formu-la['tarea-name'].value;
    const apellido = formu - la['tarea-apellido'].value;

        //Funcin para buscar Id del elemento seleccionado en los radios
        function BuscaRadio() {
        var x = document.getElementById().checked;
        if (document.hasFocus()) {
            //obten el Id;
        } else {
            // dejalo en blanco
        }
        }
    const horario = formu-la['tarea-hora'].value
    
    const responde = await db.collection('oradores').doc().set(
        {
            nombre,
            apellido,
            horario
        }
    );

})