class Botao{
  constructor(cor, tamanho, texto){
    this.cor = cor
    this.tamanho = tamanho
    this.texto = texto
  }

  desenhaBotao(){
    const novoBotaoNoDom = document.createElement('button')
    novoBotaoNoDom.setAttribute("class", `${this.cor} ${this.tamanho}`)
    novoBotaoNoDom.innerHTML = this.texto
    document.getElementById("buttons-section").appendChild(novoBotaoNoDom)
    console.log(novoBotaoNoDom)
  }
}

const novoBotao = new Botao('verde', 'grande', 'click me!')
novoBotao.desenhaBotao()

const botaoRoxo = new Botao('roxo', 'pequeno', 'botao roxo')
botaoRoxo.desenhaBotao()