//RESTAURANTE
var precoKg, consumG, total;
precoKg = parseFloat(prompt("Bem-vindo. Insira o preço por quilo estabelecido"));
consumG = parseInt(prompt("Insira a quantidade consumida pelo cliente, em gramas"));
total = consumG/1000*precoKg;
alert("O valor a ser pago é de R$"+ total);

//DURAÇÃO_EVENTO
var dH1, dH2, H1, H2, M1, M2, S1, S2, dEv;
H1 = parseInt(prompt("Insira hora de começo"));
M1 = parseInt(prompt("Insira minuto de começo"));
S1 = parseInt(prompt("Insira segundo de começo"));
H2 = parseInt(prompt("Insira hora de término"));
M2 = parseInt(prompt("Insira minuto de término"));
S2 = parseInt(prompt("Insira segundo de término"));
dH1 = H1*3600 + M1*60 + S1;
dH2 = H2*3600 + M2*60 + S2;
dEv = (dH2 > dH1) ? parseInt((dH2-dH1)/60): parseInt((86400-dH1+dH2)/60);
alert("O evento dem duração de "+ dEv +" minutos");

//DISTÂNCIA
var x1, y1, x2, y2, d;
x1 = parseFloat(prompt("Insira x1"));
y1 = parseFloat(prompt("Insira y1"));
x2 = parseFloat(prompt("Insira x2"));
y2 = parseFloat(prompt("Insira y2"));
d = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
alert("A distância é: " + d);

//SALÁRIO
var nome, qntCar, valVen, salar;
nome = prompt("Insira o nome do vendedor");
qntCar = parseInt(prompt("Quantidade de carros venidida"));
valVen = parseFloat(prompt("Valor total das vendas"));
salar = 500 + qntCar*50 + valVen*0.05;
alert("O salário de "+ nome +" será R$:"+ salar);
