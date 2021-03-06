//++ incremento
var x = 10;
x++;

//-- decremento
var y = 10;
y--;

/* 
Operador | Exemplo | Equivale a
  =         x = y     x = y
  +=        x += y    x = x + y
  -=        x -= y    x = x - y
  +=        x *= y    x = x * y
  /=        x /= y    x = x / y
  %=        x %= y    x = x % y
*/

var x = 10;
x += 5;

txt1 = 'Lógica ';
txt1 += 'de Programação';

x = 5 + 5; //10
y = '5' + 5; //'55'
y = '5' * 5; //25
z = 'Ola' + 5; //'Ola5'

/*
switch (variavel) {
  case n:
    comandos;
    break;
  case m:
    comandos;
    break;
  default:
    comandos;
}

//break = sai do switch
//default == else
*/

//DIAS DA SEMANA
var dia = '';
var n = parseInt(prompt('Digite um número de 0 a 6'));
switch (n) {
  case 0:
    dia = 'Domingo';
    break;
  case 1:
    dia = 'Segunda-feira';
    break;
  case 2:
    dia = 'Terça-feira';
    break;
  case 3:
    dia = 'Quarta-feira';
    break;
  case 4:
    dia = 'Quinta-feira';
    break;
  case 5:
    dia = 'Sexta-feira';
    break;
  case 6:
    dia = 'Sábado';
    break;
}
alert(dia);

//FIM DE SEMANA
var n, text;
text = '';
n = parseInt(prompt('Número de 0 a 6'));
switch (n) {
  case 0:
    text = 'Hoje é sábado!';
    break;
  case 6:
    text = 'Hoje é domingo!';
    break;
  default:
    text = 'Não é fim de semana!';
}
alert(text);

//CALCULADORA
var n1, n2, op, res;
n1 = parseInt(prompt('Insira o primeiro número'));
op = prompt('Insira a operação [+] [-] [*] [/]');
n2 = parseInt(prompt('Insira o segundo número'))
switch (op) {
  case '+':
    res = n1 + n2;
    break;
  case '-':
    res = n1 - n2;
    break;
  case '*':
    res = n1 * n2;
    break;
  case '/':
    res = n1 / n2;
    break;
}
alert(res);

//FIM DE SEMANA
var text = '';
var d = parseInt(prompt('Digite um número:'));
switch (n) {
  case 1:
  case 2:
  case 3:
  default:
    text = 'Não é fim de semana!';
    break;
  case 4:
  case 5:
    text = 'Perto do fim de semana!';
    break;
  case 0:
  case 6:
    text = 'Fim de semana!';
}
alert(text);

//INCREMENTO
/*
var x = 10;
x++;
x;

var x = 10;
++x;
*/

//TERNÁRIO
// condição ? 'Valor, se True' : 'VAlor, se False'
var categ, idade;
idade = parseInt(prompt('Insira uam idade'));
categ = (idade >= 18) ? 'Adulto' : 'Juvenil';
alert(categ);

var x = 10;
(x%2 == 0) ? alert('Par') : alert('Ímpar');

//PEDRA PAPEL TESOURA
var VC, PC, PPT;
VC = parseInt(prompt('1 - PEDRA \n2 - PAPEL \n3 - TESOURA'));
PC = Math.ceil(Math.random()*3);
if (VC != PC) {
  PPT = '' + VC + PC;
  switch (PPT) {
    case '12':
    case '31':
    case '23':
      alert('Perdestes, chorastes??');
      break;
    case '21':
    case '12':
    case '32':
      alert('Ganhastes o jogo');
  }
} else {
  alert('Empatouou')
}

/*
1 1 EM
2 2 EM
3 3 EM
1 2 PC
2 1 VC
1 3 VC
3 1 PC
2 3 PC
3 2 VC
*/
