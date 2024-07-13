const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" style="background-color: #C71E1E;">
      <div id="autito" onmouseover="mover()" onmouseout="posIni()">
      <img src="imagenes-autito/autito logo.png" alt="Autito">
    </div>
    <img src="imagenes-autito/logo.png">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="principal.html">Principal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="quienes-somos.html">Quiénes somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contacto.html">Contáctanos</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="arreglos-motor.html">Arreglos de motor</a></li>
                <li><a class="dropdown-item" href="arreglo-transmision.html">Arreglos de transmisión</a></li>
                <li><a class="dropdown-item" href="arreglo-frenos.html">Arreglos de frenos</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit" style="color: white;">Buscar</button>
          </form>
          <button type="button" class="btn btn-outline-dark" style="margin:10px; color:white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg> Compras
          </button>
        </div>
      </div>
    </nav>`
footer.innerHTML = `
<br>
<div class="container">
  <div class="row">
    <div class="col-6">
      <h4 style="color:whitesmoke;text-align: center;">Web creada por Nicolás Carmona, Vicente Solorza y Sebastián Benavente</h4>
    </div>
    <div class="col-6">
      <h4 style="color:whitesmoke;text-align: center;">Esta es la idea de un footer, información cómo whatsapp de contacto, o correo electrónico, serían ideales</h4>
    </div>
  </div>
</div>
<br>`

function mover() {
  document.getElementById('autito').classList.add('moving');
}

function posIni() {
  document.getElementById('autito').classList.remove('moving');
}