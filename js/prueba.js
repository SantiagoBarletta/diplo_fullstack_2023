// let vocales = ["a", "e", "i", "o", "u"];
// let texto = "fdfdsfqrqerony23957t0495t1045t0iuhfssssaaaaaaaaaaagbfo";

// function contarVocales() {
    
//     let caracteres = texto.split('');

//     let cantVocales = 0;

//     for (let i = 0; i < caracteres.length; i++) {
//         if (vocales.includes(caracteres[i])) {
//             cantVocales++;
//         }
//     }

//     return cantVocales;
// }

// document.write(contarVocales(texto));


// API GOOGLE
function initMap() {
    const centroMapa = { lat: -34.294237, lng: -59.094442 };
    const Mapa = new google.maps.Map(document.getElementById('map-container'), {
        center: centroMapa,
        zoom: 15,
    });

    const marcador = new google.maps.Marker({
        position: centroMapa,
        map: Mapa,
        title: 'mi marcador'
    });
}

function cargarScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDomNTL69c5SxfJ2pj1OJDwmRsyUgl6wmE&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

cargarScript()