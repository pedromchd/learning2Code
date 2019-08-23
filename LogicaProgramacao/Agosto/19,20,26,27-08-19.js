/***********************
Pedro Machado - 11030373
Logica de Program 3o Bim
Profa. Raquel M. Barbosa
***********************/

var DF, NL, P4, P5, P6, P7, SO, HA, PS, TA, TE, PE, LE, CE, CH, OC, FI, LI, VD, TR, UP, PC, LC, DC;
do {
  do {
    DF = prompt('DESCUBRA A PALAVRA... \nENTER - Jogar \nR - Regras \nClique em CANCELAR para sair do jogo');
    if (DF == null) {
      break;
    }
    if (DF.toUpperCase() == 'R') {
      alert('REGRAS: \nNo jogo Descubra a Palavra, você escolhe a quantidade de letras com que deseja jogar e a quantidade de tentativas relativa à dificuldade. \nDepois, deve adivinhar a palavra sorteada pelo computador, seguindo as orientações dadas.');
    }
  } while (DF != '');
  if (DF == null) {
    do {
      DF = prompt('Deseja sair do jogo? S/N').toUpperCase();
    } while (DF != 'S' && DF != 'N');
  }
  if (DF == 'S') {
    break;
  } else if (DF == 'N') {
    DF = 'S';
    continue;
  }
  do {
    NL = parseInt(prompt('Escolha o número de letras com que deseja jogar: 4, 5, 6 ou 7 letras.'));
  } while (NL != 4 && NL != 5 && NL != 6 && NL != 7);
  do {
    do {
      DF = parseInt(prompt('DIFICULDADE: \n1 - FÁCIL (15 tentativas) \n2 - MÉDIO (10 tentativas) \n3 - DIFÍCIL (8 tentativas)'));
    } while (DF != 1 && DF != 2 && DF != 3);
    switch (DF) {
      case 1:
      DF = 15;
      break;
      case 2:
      DF = 10;
      break;
      case 3:
      DF = 8;
    }
  } while (DF != 15 && DF != 10 && DF != 8);
  alert('LETRAS COM ACENTO E C-CEDILHA NÃO SÃO PERMITIDAS');
  P4 = '-agua-arco-bala-bote-casa-cola-dado-dote-eixo-erro-faca-frio-gado-grau-halo-hoje-ilha-item-jaca-jogo-lago-lobo-mole-mofo-neto-nove-oleo-olho-pato-peru';
  P5 = '-ajuda-anexo-barco-beijo-carne-cisne-diabo-doido-esqui-etnia-forca-fruta-golpe-grama-honra-hotel-icone-ideia-jaula-jovem-leite-limbo-magia-motim-navio-nivel-ontem-opera-poder-prato';
  P6 = '-amanha-anciao-banana-batata-cheiro-contra-destro-digito-escopo-enxame-fossil-fresta-gloria-grande-habito-hafnio-imagem-insumo-jacare-jiboia-laguna-leitor-macula-motriz-nectar-nucleo-objeto-origem-plebeu-prisma';
  P7 = '-alegria-atitude-bolacha-bussola-capital-chacota-deboche-deserto-empatia-exotico-familia-fissura-gingado-governo-heresia-hortela-iconico-iguaria-jangada-jornada-lampejo-luxuria-maquina-mosaico-natural-nobreza-obliquo-ousadia-planeta-precoce';
  SO = Math.ceil(Math.random()*30);
  for (HA = -(++NL); SO > 0; SO--) {
    HA += NL;
  }
  NL--;
  switch (NL) {
    case 4:
    PS = P4.substr(++HA,NL);
    break;
    case 5:
    PS = P5.substr(++HA,NL);
    break;
    case 6:
    PS = P6.substr(++HA,NL);
    break;
    case 7:
    PS = P7.substr(++HA,NL);
  }
  console.log(PS);
  for (VD = false, TR = '_ '.repeat(NL), UP = PS, TA = '', TE = 1; TE <= DF; TE++) {
    do {
      PE = prompt(TR + '\nChute uma palavra de ' + NL + ' letras: \n' + TA).toLowerCase();
    } while (PE.length != NL);
    if (PE == PS) {
      VD = true;
    }
    for (LE = 0, CE = 0, CH = 0; CH < NL; CH++) {
      OC = PS.indexOf(PE.toLowerCase().charAt(CH));
      FI = PE.indexOf(PS[CH]);
      LI = PE.lastIndexOf(PS[CH]);
      if (OC == -1) {
        CE++;
      }
      if (FI == -1 && LI == -1) {
        LE++;
      } else if (FI == CH) {
        PE = PE.replace(PE[CH],PE[CH].toUpperCase());
        UP = UP.replace(UP[CH],UP[CH].toUpperCase());
      } else if (LI == CH) {
        PE = PE.slice(0,CH) + PE.slice(CH).replace(PE[CH],PE[CH].toUpperCase());
        UP = UP.slice(0,CH) + UP.slice(CH).replace(UP[CH],UP[CH].toUpperCase());
      }
    }
    (CE > LE) ? LE = CE: LE = LE;
    for (LC = '', TR = '', PC = 0; PC < NL; PC++) {
      if (UP.charCodeAt(PC) >= 65 && UP.charCodeAt(PC) <= 90) {
        TR += UP[PC] + ' ';
      } else {
        TR += '_ ';
        LC += UP[PC];
      }
    }
    TA += TE + ') ' + PE + ' - ' + LE + ' letra(s) errada(s) \n';
    if (TE%4 == 0) {
      DC = Math.ceil(Math.random()*LC.length);
      UP = UP.replace(LC[DC],LC[DC].toUpperCase());
      TA += 'DICA: A palavra possui a letra ' + LC[DC].toUpperCase() + '\n';
    }
    if (VD == true) {
      alert(TA.replace(PE.toUpperCase() + ' - 0 letra(s) errada(s)',TR) + '\nPARABÉNS, você descobriu a palavra!!');
      break;
    }
  }
  if (VD == false || TE > DF) {
    alert('VOCÊ PERDEU! A palavra correta era: ' + PS.toUpperCase());
  }
  do {
    DF = prompt('Deseja jogar novamente? S/N').toUpperCase();
  } while (DF != 'S' && DF != 'N');
} while (DF != 'N');

/*
DF - Dificuldade
NL - Número de letras
P4 - Palavras de 4 letras
P5 - Palavras de 5 letras
P6 - Palavras de 6 letras
P7 - Palavras de 7 letras
SO - Sorteador
HA - Hífem at
PS - Palavra sorteada
TA - Tentativa anterior
TE - Tentativa
PE - Palavra escolhida
LE - Letras erradas
CE - Characteres errados
CH - Character At
OC - Ocorrências do character
FI - First index of
LI - Last index of
VD - Vitória ou derrota
TR - Tracejado
UP - Upper case
PC - Percorredor de character
LC - Lower case
DC - Dica
*/

//MAIS PALAVRAS
//MELHORAR O DIFERENCIAL
//COMENTAR
//ADICIONAR A DICA
//CRÉDITOS
//REMOVER BATATA E ICONICO