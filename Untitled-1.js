 JavaScript:


function calcularFatura() {
  let compras = [];
  let continuarComprando = true;

  while (continuarComprando) {
    let valorCompra = parseFloat(prompt("Informe o valor da compra: R$ "));
    compras.push(valorCompra);
    let continuar = prompt("Essa foi a última compra? (s/n): ");
    if (continuar.toLowerCase() === 's') {
      continuarComprando = false;
    }
  }

  let totalFatura = compras.reduce((a, b) => a + b, 0);
  let diaPagamento = parseInt(prompt("Informe o dia do pagamento da fatura: "));

  if (diaPagamento <= 25) {
    alert(`Total da fatura a ser pago: R$ ${totalFatura.toFixed(2)}`);
  } else {
    let diasAtraso = diaPagamento - 25;
    let totalJuros = 0.03 * totalFatura + (0.01 * diasAtraso * totalFatura);
    let totalFaturaComJuros = totalFatura + totalJuros;
    alert(`Total da fatura com juros a ser pago: R$ ${totalFaturaComJuros.toFixed(2)}`);
  }
}

calcularFatura();


