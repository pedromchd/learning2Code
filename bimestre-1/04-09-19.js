/* Três amigos foram jantar em um restaurante e querem dividir a conta a pagar. 
Faça um
programa que leia o valor do consumo dos três e o percentual de gorgeta para o garçom. 
Calcule
e apresente o valor total da conta e o valor que cada um que cada um deverá pagar. */

var cons, gorg, valTotal;
cons = parseFloat(prompt("Insira o valor do consumo total dos três"));
gorg = parseFloat(prompt("Insira o percentual da gorgeta ao garçom"));
valTotal = cons + cons*(gorg/100);
alert("Valor total: R$" + valTotal.toFixed(2) + " Cada um deverá pagar: R$" + (valTotal/3).toFixed(2));
console.log(cons +", "+ gorg +", "+ valTotal +", "+ valTotal/3);  


/* Daniel precisa calcular a duração de um evento em dias.
Para ajudá-lo, faça um programa que
calcule o total de dias entre duas datas 
(D1, M1, A1 e D2, M2, A2), considerando meses de 30
dias e a segunda data posterior à primeira. */

var d1, m1, a1, d2, m2, a2;
var convert1, convert2;
var totalEvento;
d1 = parseInt(prompt("Insira o dia do início"))
m1 = parseInt(prompt("Insira o mês de início"));
a1 = parseInt(prompt("Insira o ano de início"));
d2 = parseInt(prompt("Insira o dia de término"))
m2 = parseInt(prompt("Insira o mês de término"));
a2 = parseInt(prompt("Insira o ano de término"));
convert1 = a1*360 + m1*30 + d1
convert2 = a2*360 + m2*30 + d2
totalEvento = convert2 - convert1;
alert(totalEvento);


/* Escreva um programa que leia os coeficientes a,b,c,d,e e f e calcule e mostra os valores de x e y
x=(c*e-b*f)/(a*e-b*d) e y=(a*f-c*d)/(a*e-b*d) */

var a, b, c, d, e, f;
var x, y;
a = parseFloat(prompt("Insira o valor de a"));
b = parseFloat(prompt("Insira o valor de b"));
c = parseFloat(prompt("Insira o valor de c"));
d = parseFloat(prompt("Insira o valor de d"));
e = parseFloat(prompt("Insira o valor de e"));
f = parseFloat(prompt("Insira o valor de f"));
x = (c*e-b*f)/(a*e-b*d);
y = (a*f-c*d)/(a*e-b*d);
alert("x = " + x + " e " + "y = " + y);


/*  Elaborar um programa que leia um número, calcule e informe os números pares mais próximos
(anterior e posterior) a ele. */

var n, pp, pa;
n = parseInt(prompt('Insira um número inteiro e descubra seu par anterior e posterior'));
pa = n -(2 -(n %2));
pp = n +(2 -(n %2));
alert('O par anterior e o posterior de ' + n + ' é ' + pa + ' e ' + pp);
