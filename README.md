"Neste primeiro semestre de Análise e Desenvolvimento de Sistemas na faculdade Anhanguera, a professora Maiara Sacramento nos propôs uma atividade com três opções de desenvolvimento em áreas distintas: Dev (Front-end e Back-end), Data Geek e Dados. Escolhi a proposta voltada para Dev Front-end, área com a qual mais me identifico e onde quero focar minhas habilidades!"
Na atv pedia para implementar um programa que simule a logica de cartão de credito usando qualquer linguagem de programação, a escolhida foi JavaScript.

 Objetivo do Código
A função `calcularFatura` permite que o usuário insira o valor de várias compras e, com base no dia do pagamento informado, calcula o valor total da fatura. Se o pagamento ocorrer após o dia 25, a função aplica uma taxa de juros ao total.

 Explicação do Código Passo a Passo

1. **Declaração de Variáveis**
   ```javascript
   let compras = [];
   let continuarComprando = true;
   ```
   - `compras` é um array que armazenará os valores de cada compra inserida pelo usuário.
   - `continuarComprando` é um booleano que controla o loop para adicionar compras enquanto o usuário quiser.

2. **Loop para Adicionar Compras**
   ```javascript
   while (continuarComprando) {
       let valorCompra = parseFloat(prompt("Informe o valor da compra: R$ "));
       compras.push(valorCompra);
       let continuar = prompt("Essa foi a última compra? (s/n): ");
       if (continuar.toLowerCase() === 's') {
           continuarComprando = false;
       }
   }
   ```
   - O loop `while` continua a rodar enquanto `continuarComprando` for `true`.
   - Em cada iteração:
     - Pede-se ao usuário o valor da compra, que é convertido para número com `parseFloat` e, então, adicionado ao array `compras`.
     - O usuário é questionado se deseja continuar comprando. Caso responda com "s", a variável `continuarComprando` passa a ser `false`, encerrando o loop.

3. **Calcular o Total da Fatura**
   ```javascript
   let totalFatura = compras.reduce((a, b) => a + b, 0);
   ```
   - `totalFatura` é calculado somando todos os valores do array `compras` com a função `reduce`.

4. **Entrada do Dia de Pagamento**
   ```javascript
   let diaPagamento = parseInt(prompt("Informe o dia do pagamento da fatura: "));
   ```
   - O usuário é solicitado a informar o dia de pagamento, que é convertido para um número inteiro com `parseInt`.

5. **Condição para Calcular Juros**
   ```javascript
   if (diaPagamento <= 25) {
       alert(`Total da fatura a ser pago: R$ ${totalFatura.toFixed(2)}`);
   } else {
       let diasAtraso = diaPagamento - 25;
       let totalJuros = 0.03 * totalFatura + (0.01 * diasAtraso * totalFatura);
       let totalFaturaComJuros = totalFatura + totalJuros;
       alert(`Total da fatura com juros a ser pago: R$ ${totalFaturaComJuros.toFixed(2)}`);
   }
   ```
   - Caso o pagamento seja até o dia 25, o usuário paga apenas o valor da `totalFatura`.
   - Caso o pagamento ocorra após o dia 25, são aplicados juros:
     - `diasAtraso` calcula quantos dias o pagamento está atrasado.
     - `totalJuros` aplica 3% de multa ao valor da fatura mais 1% adicional para cada dia de atraso.
     - O `totalFaturaComJuros` é então exibido ao usuário com os juros incluídos.

6. **Chamando a Função**
   ```javascript
   calcularFatura();
   ```
   - A função é chamada para iniciar o processo.

Este código permite ao usuário registrar múltiplas compras e calcula o valor final da fatura, aplicando juros em caso de atraso no pagamento.
