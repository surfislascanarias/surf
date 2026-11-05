function enviarWhatsApp() {
  const nivel = document.getElementById("nivel").value;
  const zona = document.getElementById("zona").value;

  const mensaje = `Hola 👋 quiero una clase de surf. Nivel: ${nivel}. Zona: ${zona}`;

  const url = "https://wa.me/34XXXXXXXXX?text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}
