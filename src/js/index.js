
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

