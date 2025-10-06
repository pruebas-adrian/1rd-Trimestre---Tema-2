if (alert("This is an alert message, click me to move on!!!")) {
  const confirm_alert = confirm(
    "Show me if an alert if you clicked on ok or false"
  );
  if (confirm_alert) {
    alert("You clicked on true click me to move on!!!");
  } else {
    alert("You clicked on false click me to move on!!!");
  }
  const prompt = prompt(
    "Show me in an alert the message typed",
    "Type something"
  );
  if (prompt) {
    window.alert("You typed Try me!!! click me to move on!!!");
  }
}
