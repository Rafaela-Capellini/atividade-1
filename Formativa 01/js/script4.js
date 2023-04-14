function calcular() {
    let desconto = 0

    let inPercDesc = document.getElementById('inPercDesc')
    let percDesconto = 0

    let valorPedido = document.getElementById('inValorPedido').value

    let inValDesc = document.getElementById('inValDesc')

    let inValFinal = document.getElementById('inValFinal')



    if (valorPedido<=500) {
        percDesconto = 0
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }
    if (valorPedido>=500) {
        percDesconto = 0.5
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }
    if (valorPedido>=1000) {
        percDesconto = 0.8
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }
    if (valorPedido>=1500) {
        percDesconto = 1
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }
    if (valorPedido>=2000) {
        percDesconto = 1.5
        desconto = valorPedido*(percDesconto/100)
        valorLiq = valorPedido - desconto
    }
    
    inValDesc.value = desconto, 'R$'
    inPercDesc.value = percDesconto,'%'
    inValFinal.value = valorLiq, 'R$'
}