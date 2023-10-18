// npm install prompt-sync
console.log(
  "\nInstale no terminal o pacote prompt-sync com o comando 'npm install prompt-sync'\n"
);
const prompt = require('prompt-sync')({ sigint: true });

var tempwin = prompt('Digite o número de vitórias do seu jogador: ');
var winners = parseInt(tempwin);
var temploser = prompt('Digite o número de derrotas do seu jogador: ');
var loser = parseInt(temploser);

function jogada(winners, loser) {
  results = winners - loser
  if (results < 10) {
      nível = 'Ferro';
  }
  if (results >= 11 && results <= 20) {
    nível = 'Bronze';
  }
  if (results >= 21 && results <= 50) {
    nível = 'Prata';
  }
  if (results >= 51 && results <= 80) {
    nível = 'Ouro';
  }
  if (results >= 81 && results <= 90) {
    nível = 'Diamante';
  }
  if (results >= 91 && results <= 100) {
    nível = 'Lendário';
  }
  if (results >= 101) {
    nível = 'Imortal';
  }
  return console.log('O Herói tem um saldo ' + results + ' está no nível ' + nível);
}

jogada(winners, loser);
