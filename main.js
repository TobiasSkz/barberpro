// Capturamos el formulario por la ID

const formReserva = document.getElementById('form-reserva');

formReserva.addEventListener('submit', function(e) {

// Evitamos que la página vuelva a cargarse

e.preventDefault();

// Obtenemos los valores ingresados

const nombre = document.getElementById('nombre').value;
const telefono = document.getElementById('telefono').value;
const servicio = document.getElementById('servicio').value;
const fecha = document.getElementById('fecha').value;

// Número de WhatsApp del barbero

const numeroWhatsApp = '#'; // Reemplazar con el número de WhatsApp del barbero (sin espacios ni símbolos)

// Formateamos el mensaje con estilo en negritas para WhatsApp

const mensaje = `¡Buenas! Me gustaría reservar un turno.%0A%0A` +
                `*Nombre:* ${nombre}%0A` +
                `*Teléfono:* ${telefono}%0A` +
                `*Servicio:* ${servicio}%0A` +
                `*Fecha:* ${fecha}%0A%0A` +
                `¿Tenes disponibilidad?`;

// Armamos la URL oficial de WhatsApp

const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

// Abrimos la URL en una nueva pestaña (Abre la app en el celular o WhatsApp Web/Desktop en PC)

window.open(urlWhatsApp, '_blank');
});