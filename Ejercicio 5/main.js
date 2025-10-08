/**
 * Paso 1:
 * Muestra un mensaje de alerta inicial al usuario.
 * Si el usuario cierra la alerta, el código continúa.
 */
if (alert("This is an alert message, click me to move on!!!")) {
  /**
   * Paso 2:
   * Pide una confirmación al usuario (Aceptar o Cancelar).
   * @type {boolean}
   */
  const confirm_alert = confirm(
    "Show me if an alert if you clicked on ok or false"
  );

  /**
   * Paso 3:
   * Muestra un mensaje diferente según lo que eligió el usuario.
   */
  if (confirm_alert) {
    alert("You clicked on true! Click me to move on!!!");
  } else {
    alert("You clicked on false! Click me to move on!!!");
  }

  /**
   * Paso 4:
   * Solicita al usuario que escriba algo.
   * @type {string|null} 
   */
  const user_input = prompt(
    "Show me in an alert the message typed",
    "Type something"
  );

  /**
   * Paso 5:
   * Si se escribió algo, muestra el texto ingresado y su tipo de dato.
   */
  if (user_input) {
    alert(`You typed: ${user_input}\n(Type: ${typeof user_input})`);
  }
}
