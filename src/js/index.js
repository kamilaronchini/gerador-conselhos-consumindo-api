const botao = document.getElementById('botao')
const numeroConselho = document.getElementById('id-conselho')
const descricaoConselho = document.getElementById('descricao-conselho')


async function gerarConselhoAleatorio() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const conteudoConselho = await resposta.json()
    const idConselho = `Conselho nº #${conteudoConselho.slip.id}`;
    const textoConselho = `"${conteudoConselho.slip.advice}"`

    numeroConselho.innerHTML = idConselho
    descricaoConselho.innerHTML = textoConselho
}

gerarConselhoAleatorio()

botao.addEventListener('click', () => {
    gerarConselhoAleatorio()
})