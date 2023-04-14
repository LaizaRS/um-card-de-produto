var vetor = document.querySelector('.vetor');
var sofa = document.querySelector('.sofa');
var sofaGif = document.querySelector('.sofaGif');

vetor.addEventListener('click', function() {
  if (sofa.style.display == "block" && document.querySelector('.fechar').style.display=="none") {
    sofa.style.display = "none";
    sofaGif.style.display = "block";
    document.querySelector('.fechar').style.display = "block";
    document.querySelector('.rotacao').style.display= "none";

  } else {
    sofa.style.display = "block";
    sofaGif.style.display = "none";
    document.querySelector('.fechar').style.display = "none";
    document.querySelector('.rotacao').style.display= "block";
  }
});