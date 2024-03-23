https://reqres.in/api/users?delay=3

document.addEventListener('DOMContentLoaded', () => { //escuchar, lanza eventos cuando se cargue contenido al DOM

    let botonClick = 0;

    const botonUsuarios = document.getElementById("btn-usuarios");
    botonUsuarios.addEventListener('click', () => { //onclick o click
        //funciones que se ejecutaran cuando le de click al boton

        //fetch(url de donde saca los datos)
        fetch("https://reqres.in/api/users?delay=3")
            .then(respuestaDatosSolicitud => {
                
                if (respuestaDatosSolicitud.ok)
                    return respuestaDatosSolicitud.json()
                else
                    throw new Error('Error al obtener los datos');
            })

            .then(datosUsuarios => {
                console.log(datosUsuarios);
                for (let index = 0; index < datosUsuarios.data.length; index++) {
                    const element = datosUsuarios.data[index];
                    //console.log(index); //verificando que me los index
                    const filaUsuarios = document.createElement("tr");
                    filaUsuarios.innerHTML = ` 
                    <td> ${element.id} </td>
                    <td> ${element.first_name} </td>
                    <td> ${element.last_name}</td>
                    <td> ${element.email} </td>
                    <td> <img src=" ${element.avatar} " > </td>
                      ` //contenido a la fila 
                    document.getElementById("usuariosBody").appendChild(filaUsuarios); //agrega contendio al html usurios body 

                }
                
               //vamos a almacenar los datos obtenidos en el local storage
               //vamos a obtener la fecha en ms
               //almacenar la fecha en el local storage 
               //
                
               const datosJSON = JSON.stringify(datosUsuarios.data);
               localStorage.setItem("misDatos", datosJSON);

               const horaStorage = new Date().getHours();
               localStorage.setItem("horaSolicitud", horaStorage );
               
               const minutosStorage = new Date().getMinutes();
               localStorage.setItem("minutosSolicitud", minutosStorage );

               const fechaStorage = new Date().getDate();
               localStorage.setItem("fechaSolicitud", fechaStorage );
                console.log(fechaStorage, horaStorage, minutosStorage, fechaStorage);

                const fechaCompleta = new Date().toLocaleString();
                localStorage.setItem("fechaCompleta", fechaCompleta);

                const tiempoPrimerClick = new Date().getTime();
                const tiempoSegundoClick = new Date().getTime();


                const restaFechas = (tiempoSegundoClick - tiempoPrimerClick) / 60000;
                if (restaFechas<1){
                    console.log("Ha pasado menos de 1 minuto, espera unos segudnos ");
                }

               
/*             document.getElementById("mostrarUsuarios").innerHTML = datosJSON; 
 */            document.getElementById("mostrarFechaCompleta").innerHTML = fechaCompleta;
            /* document.getElementById("mostrarHora").innerHtml = horaStorage;  */

            




            }) //en este punto tengo los datos json de la url y con el then me interpreta la solicitud 
    botonClick++;
    
    });

});

if ( botonClick == 0 || restaFechas > 1){ }

