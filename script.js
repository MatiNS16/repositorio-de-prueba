// Esta función, cuando se llame, mostrará una alerta del navegador con el mensaje
function showAlert() {alert('Hola, esta es una alerta desde JavaScript'); }
// Es un oyente de eventos al formulario para manejar el evento “submit"
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    // se utiliza “event.preventDefault()” para evitar que el formulario se envíe de la manera predeterminada, 
    // lo que permite realizar la validación antes de enviar los datos.
  event.preventDefault();
  validateForm();
});
// la función “validateEmail()” indica que el mail contenga un “@” y un “.” para ser válido.
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }