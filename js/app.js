//function comprar() {
//    let tipo = document.getElementById('tipo-ingresso').value;
//    let quantidade = document.getElementById('qtd').value;
//    let lista = document.getElementById(`qtd-${tipo}`);
//    if (quantidade <= lista.textContent && quantidade > 0) {
//        lista.innerHTML = lista.innerHTML - quantidade;
//        document.getElementById('qtd').value = '';
//        alert('Compra realizada com sucesso!');
//    } else if (quantidade < 0) {
//        alert('Valor para quantidade de ingressos não é válido, tente novamente.')
//    } else {
//        alert(`Quantidade indisponível para ${tipo}`);
//    }
//}
//
function teste(palavra) {
    return (parseInt(palavra))
}

if (teste('oi') ==  NaN) {
    alert (teste('oi'))
}