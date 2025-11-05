window.addEventListener("load", () => {
    const elementos = document.querySelectorAll("header, .contenido, footer");
    elementos.forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});

/* == Cambio de Tema == */

const btnTema = document.getElementById("toggle-theme");
const bodyEl  = document.body;

// inicializa por preferencia guardada
if (localStorage.getItem('tema') === 'light') {
  bodyEl.classList.add('light');
  if (btnTema) btnTema.textContent = '☀️';
};

if (btnTema) {
  btnTema.addEventListener('click', () => {
    bodyEl.classList.toggle('light');
    const esClaro = bodyEl.classList.contains('light');
    btnTema.textContent = esClaro ? '☀️' : '🌙';
    localStorage.setItem('tema', esClaro ? 'light' : 'oscuro');
  });
};