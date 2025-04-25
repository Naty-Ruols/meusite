<<<<<<< HEAD
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    newFunction();
    botaoMostrarProjetos.classList.add("remover")
})

function newFunction() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
=======
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    newFunction();
    botaoMostrarProjetos.classList.add("remover")
})

function newFunction() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
>>>>>>> 5e29e6ee1d2d2da502c53464852a9e67546efd7d
