// Linguagem de programação
// Abre "" fecha ;

// primeira parte Habilitado/Desabilidado
function ToggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // Troca o estado da classe .toggle para ativo
    menuToggle.classList.toggle('active')
    // troca o estado da classe .links para ativo
    links.classList.toggle('active')

}