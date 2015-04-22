function Estructura() {
    arreglo = new Array();
    keys = []
    property = []

    arreglo.push({
        "Nombre": "John",
        "Apellido": "Galindez",
        "Cedula": "24843057",
        "Correo": "galindezj2@gmail.com"
    });

    arreglo.push({
        "Nombre": "Juan",
        "Apellido": "Galindez",
        "Cedula": "10487746",
        "Correo": "jgalindez2@gmail.com"
    });

    for (var i = 0; i < arreglo.length; i++) {
        for (var k in arreglo[i]) {
          	property.push(k)
          	keys.push(arreglo[i][k])
            }
        };

nombre_p = document.getElementById('nombre_p');
nombre_p.innerHTML = property[0];

apellido_p = document.getElementById('apellido_p');
apellido_p.innerHTML = property[1];

cedula_p = document.getElementById('cedula_p');
cedula_p.innerHTML = property[2];

correo_p = document.getElementById('correo_p');
correo_p.innerHTML = property[3];




nombre_k = document.getElementById('nombre_k');
nombre_k.innerHTML = keys[0];

apellido_k = document.getElementById('apellido_k');
apellido_k.innerHTML = keys[1];

cedula_k = document.getElementById('cedula_k');
cedula_k.innerHTML = keys[2];

correo_k = document.getElementById('correo_k');
correo_k.innerHTML = keys[3];



nombre_k2 = document.getElementById('nombre_k2');
nombre_k2.innerHTML = keys[4];

apellido_k2 = document.getElementById('apellido_k2');
apellido_k2.innerHTML = keys[5];

cedula_k2 = document.getElementById('cedula_k2');
cedula_k2.innerHTML = keys[6];

correo_k2 = document.getElementById('correo_k2');
correo_k2.innerHTML = keys[7];

}

b = Estructura();