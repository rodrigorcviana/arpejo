// Grupo 1
function acordeon() {
  document.getElementById("acordeon-p").innerHTML = `Cursos de acordeon Cursos de acordeon  Cursos de acordeon  Cursos de acordeon 
  Cursos de acordeon  Cursos de acordeon  Cursos de acordeon`;
  
  if(document.getElementById("bateria").classList.contains("show")) {
    document.getElementById("bateria").classList.remove("show");
  }
  if(document.getElementById("canto").classList.contains("show")) {
    document.getElementById("canto").classList.remove("show");
  }
  if(document.getElementById("contrabaixo").classList.contains("show")) {
    document.getElementById("contrabaixo").classList.remove("show");
  }
}

function bateria() {
  document.getElementById("bateria-p").innerHTML = `Cusos de bateria Cusos de bateria Cusos de bateria Cusos de bateria Cusos de bateria
  Cusos de bateria Cusos de bateria Cusos de bateria`; 

  if(document.getElementById("acordeon").classList.contains("show")) {
    document.getElementById("acordeon").classList.remove("show");
  }
  if(document.getElementById("canto").classList.contains("show")) {
    document.getElementById("canto").classList.remove("show");
  }
  if(document.getElementById("contrabaixo").classList.contains("show")) {
    document.getElementById("contrabaixo").classList.remove("show");
  }
}

function canto() {
  document.getElementById("canto-p").innerHTML = `Cursos de canto Cursos de canto Cursos de canto Cursos de canto Cursos de canto Cursos de canto
  Cursos de canto Cursos de canto Cursos de canto`;

  if(document.getElementById("acordeon").classList.contains("show")) {
    document.getElementById("acordeon").classList.remove("show");
  }
  if(document.getElementById("bateria").classList.contains("show")) {
    document.getElementById("bateria").classList.remove("show");
  }
  if(document.getElementById("contrabaixo").classList.contains("show")) {
    document.getElementById("contrabaixo").classList.remove("show");
  }
}

function contrabaixo() {
  document.getElementById("contrabaixo-p").innerHTML = `Cursos de contrabaixo Cursos de contrabaixo Cursos de contrabaixo Cursos de contrabaixo Cursos de contrabaixo
  Cursos de contrabaixo Cursos de contrabaixo Cursos de contrabaixo`;

  if(document.getElementById("acordeon").classList.contains("show")) {
    document.getElementById("acordeon").classList.remove("show");
  }
  if(document.getElementById("bateria").classList.contains("show")) {
    document.getElementById("bateria").classList.remove("show");
  }
  if(document.getElementById("canto").classList.contains("show")) {
    document.getElementById("canto").classList.remove("show");
  }
}

//Grupo 2
function flauta() {
  document.getElementById("flauta-p").innerHTML = `Cursos de flauta Cursos de flauta Cursos de flauta Cursos de flauta Cursos de flauta Cursos de flauta
  Cursos de flauta Cursos de flauta Cursos de flauta`;

  if(document.getElementById("guitarra").classList.contains("show")) {
    document.getElementById("guitarra").classList.remove("show");
  }
  if(document.getElementById("musicalizacao").classList.contains("show")) {
    document.getElementById("musicalizacao").classList.remove("show");
  }
  if(document.getElementById("percussao").classList.contains("show")) {
    document.getElementById("percussao").classList.remove("show");
  }
}

function guitarra() {
  document.getElementById("guitarra-p").innerHTML = `Cursos de guitarra Cursos de guitarra Cursos de guitarra Cursos de guitarra Cursos de guitarra Cursos de guitarra
  Cursos de guitarra Cursos de guitarra Cursos de guitarra`;

  if(document.getElementById("flauta").classList.contains("show")) {
    document.getElementById("flauta").classList.remove("show");
  }
  if(document.getElementById("musicalizacao").classList.contains("show")) {
    document.getElementById("musicalizacao").classList.remove("show");
  }
  if(document.getElementById("percussao").classList.contains("show")) {
    document.getElementById("percussao").classList.remove("show");
  }
}

function musicalizacao() {
  document.getElementById("musicalizacao-p").innerHTML = `Cursos de musicalização Cursos de musicalização Cursos de musicalização Cursos de musicalização Cursos de musicalização
  Cursos de musicalização Cursos de musicalização Cursos de musicalização`;

  if(document.getElementById("flauta").classList.contains("show")) {
    document.getElementById("flauta").classList.remove("show");
  }
  if(document.getElementById("guitarra").classList.contains("show")) {
    document.getElementById("guitarra").classList.remove("show");
  }
  if(document.getElementById("percussao").classList.contains("show")) {
    document.getElementById("percussao").classList.remove("show");
  }
}

function percussao() {
  document.getElementById("percussao-p").innerHTML = `Cursos de percussão Cursos de percussão Cursos de percussão Cursos de percussão Cursos de percussão Cursos de percussão 
  Cursos de percussão Cursos de percussão Cursos de percussão`;

  if(document.getElementById("flauta").classList.contains("show")) {
    document.getElementById("flauta").classList.remove("show");
  }
  if(document.getElementById("guitarra").classList.contains("show")) {
    document.getElementById("guitarra").classList.remove("show");
  }
  if(document.getElementById("musicalizacao").classList.contains("show")) {
    document.getElementById("musicalizacao").classList.remove("show");
  }
}

// Grupo 3
function teclado() {
  document.getElementById("teclado-p").innerHTML = `Cursos de teclado Cursos de teclado Cursos de teclado Cursos de teclado Cursos de teclado Cursos de teclado Cursos de teclado
  Cursos de teclado Cursos de teclado Cursos de teclado`;

  if(document.getElementById("violao").classList.contains("show")) {
    document.getElementById("violao").classList.remove("show");
  }
  if(document.getElementById("violino").classList.contains("show")) {
    document.getElementById("violino").classList.remove("show");
  }
  if(document.getElementById("ukulele").classList.contains("show")) {
    document.getElementById("ukulele").classList.remove("show");
  }
}

function violao() {
  document.getElementById("violao-p").innerHTML = `Cursos de violão Cursos de violão Cursos de violão Cursos de violão Cursos de violão Cursos de violão Cursos de violão
  Cursos de violão Cursos de violão Cursos de violão`;

  if(document.getElementById("teclado").classList.contains("show")) {
    document.getElementById("teclado").classList.remove("show");
  }
  if(document.getElementById("violino").classList.contains("show")) {
    document.getElementById("violino").classList.remove("show");
  }
  if(document.getElementById("ukulele").classList.contains("show")) {
    document.getElementById("ukulele").classList.remove("show");
  }
}

function violino() {
  document.getElementById("violino-p").innerHTML = `Cursos de violino Cursos de violino Cursos de violino Cursos de violino Cursos de violino Cursos de violino Cursos de violino
  Cursos de violino Cursos de violino Cursos de violino`;

  if(document.getElementById("teclado").classList.contains("show")) {
    document.getElementById("teclado").classList.remove("show");
  }
  if(document.getElementById("violao").classList.contains("show")) {
    document.getElementById("violao").classList.remove("show");
  }
  if(document.getElementById("ukulele").classList.contains("show")) {
    document.getElementById("ukulele").classList.remove("show");
  }
}

function ukulele() {
  document.getElementById("ukulele-p").innerHTML = `Cursos de ukulele Cursos de ukulele Cursos de ukulele Cursos de ukulele Cursos de ukulele Cursos de ukulele Cursos de ukulele
  Cursos de ukulele Cursos de ukulele Cursos de ukulele`;

  if(document.getElementById("teclado").classList.contains("show")) {
    document.getElementById("teclado").classList.remove("show");
  }
  if(document.getElementById("violao").classList.contains("show")) {
    document.getElementById("violao").classList.remove("show");
  }
  if(document.getElementById("violino").classList.contains("show")) {
    document.getElementById("violino").classList.remove("show");
  }
}