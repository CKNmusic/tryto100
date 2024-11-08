var clicks = 0;
var probability = 100;
var score = 0;
var total = 0;

function subtitle(sub){
  var leg = document.getElementById("subs");
  leg.style.opacity = 0;

  leg.innerHTML = sub;
  leg.style.opacity = 1;
}


function conquistas(){
  
}


function clicker(){
  total += 1;
  
  document.getElementById("total").innerHTML = "clicks (total): " + total;

if (total === 10) {
subtitle("Por que você continua clicando? O que espera alcançar?");
} else if (total === 20) {
subtitle("Você já se perguntou por que está fazendo isso?");
} else if (total === 30) {
subtitle("Trinta cliques... Qual é o propósito disso?");
} else if (total === 40) {
subtitle("Será que há um significado oculto em tudo isso?");
} else if (total === 50) {
subtitle("Cinquenta cliques depois, você encontrou respostas?");
} else if (total === 60) {
subtitle("Os cliques continuam... Mas o sentido está se perdendo?");
} else if (total === 70) {
subtitle("Setenta cliques. A mente se agita em busca de clareza.");
} else if (total === 80) {
subtitle("A repetição incessante... Ou é você que está mudando?");
} else if (total === 90) {
subtitle("Noventa cliques. A jornada ou o desespero?");
} else if (total === 100) {
subtitle("Cem cliques. Um ciclo infindável ou uma jornada?");
} else if (total === 110) {
subtitle("Por que persistir? A resposta está à frente ou além?");
} else if (total === 120) {
subtitle("Os cliques continuam, mas a razão se esconde nas sombras.");
} else if (total === 130) {
subtitle("Cento e trinta cliques. O que você busca nessa repetição?");
} else if (total === 140) {
subtitle("Quando a realidade se transforma em cliques incessantes.");
} else if (total === 150) {
subtitle("Cento e cinquenta cliques. O caminho para a compreensão?");
} else if (total === 160) {
subtitle("A cada clique, a dúvida cresce. O que você deseja?");
} else if (total === 170) {
subtitle("Cento e setenta cliques. As respostas permanecem elusivas.");
} else if (total === 180) {
subtitle("Os cliques ecoam, a mente se fragmenta.");
} else if (total === 190) {
subtitle("Por que você escolhe continuar? O sentido está à vista?");
} else if (total === 200) {
subtitle("Duzentos cliques. A busca pela verdade continua.");
} else if (total === 210) {
subtitle("A cada clique, a sanidade se desvanece um pouco mais.");
} else if (total === 220) {
subtitle("Caminhando na linha entre o propósito e a obsessão.");
} else if (total === 230) {
subtitle("A realidade está se dobrando sob o peso dos cliques.");
} else if (total === 240) {
subtitle("O infinito dos cliques revela um segredo ou uma ilusão?");
} else if (total === 250) {
subtitle("Duzentos e cinquenta cliques. E o que você encontrou?");
} else if (total === 260) {
subtitle("Os cliques persistem, a mente se afunda.");
} else if (total === 270) {
subtitle("Caminhos entrelaçados, assim como os cliques na mente.");
} else if (total === 280) {
subtitle("A cada clique, o enigma se aprofunda.");
} else if (total === 290) {
subtitle("Os cliques se tornam uma fuga da realidade ou uma prisão?");
} else if (total === 300) {
subtitle("Trezentos cliques. Um caminho iluminado ou uma trilha obscura?");
} else if (total === 310) {
subtitle("Os cliques ecoam como sombras em uma mente perturbada.");
} else if (total === 320) {
subtitle("A cada clique, o mundo se distorce.");
} else if (total === 330) {
subtitle("Caminhos convergem, mas para onde os cliques te levam?");
} else if (total === 340) {
subtitle("Cada clique parece um eco de algo perdido.");
} else if (total === 350) {
subtitle("Trezentos e cinquenta cliques. Você está mais próximo?");
} else if (total === 360) {
subtitle("Os cliques são como fragmentos de uma realidade quebrada.");
} else if (total === 370) {
subtitle("Cada clique é uma gota em um oceano de incertezas.");
} else if (total === 380) {
subtitle("As respostas parecem se afastar a cada clique.");
} else if (total === 390) {
subtitle("Os cliques são como um espelho, mostrando sua busca interior.");
} else if (total === 400) {
subtitle("Quatrocentos cliques. O enigma dos cliques permanece.");
} else if (total === 410) {
subtitle("Os cliques sussurram promessas de clareza, mas entregam caos.");
} else if (total === 420) {
subtitle("A cada clique, a mente cai mais fundo na confusão.");
} else if (total === 430) {
subtitle("A linha entre cliques e realidade está borrada.");
} else if (total === 440) {
subtitle("Caminhos invisíveis entre os cliques, onde você está?");
} else if (total === 450) {
subtitle("Quatrocentos e cinquenta cliques. Você está se aproximando?");
} else if (total === 460) {
subtitle("Os cliques são como pegadas na areia, mas quem as segue?");
} else if (total === 470) {
subtitle("Cada clique é um fio, tecendo a tapeçaria da sua jornada.");
} else if (total === 480) {
subtitle("Os cliques continuam, as dúvidas se multiplicam.");
} else if (total === 490) {
subtitle("Caminhos divergentes, como os cliques em sua mente.");
} else if (total === 500) {
subtitle("Quinhentos cliques. Apenas ruído ou uma mensagem oculta?");
} else if (total === 510) {
subtitle("Os cliques se acumulam como as páginas de um livro não lido.");
} else if (total === 520) {
subtitle("Cada clique é uma peça em um quebra-cabeça que não se completa.");
} else if (total === 530) {
subtitle("A linha entre propósito e repetição desaparece, assim como os cliques.");
} else if (total === 540) {
subtitle("Quinhentos e quarenta cliques. O que você espera encontrar?");
} else if (total === 550) {
subtitle("Cada clique é um mistério não resolvido.");
} else if (total === 560) {
subtitle("Os cliques continuam, a mente em um turbilhão.");
} else if (total === 570) {
subtitle("Os caminhos se bifurcam, assim como os cliques em sua mente.");
} else if (total === 580) {
subtitle("Cada clique é um eco, ecoando sua busca interior.");
} else if (total === 590) {
subtitle("Quinhentos e noventa cliques. A verdade ou a ilusão?");
} else if (total === 600) {
subtitle("Seiscentos cliques. As respostas estão no além?");
} else if (total === 610) {
subtitle("Os cliques continuam, a confusão se aprofunda.");
} else if (total === 620) {
subtitle("A cada clique, a sanidade balança como um pêndulo.");
} else if (total === 630) {
subtitle("Os cliques são como as estações, mudando sem razão.");
} else if (total === 640) {
subtitle("Seiscentos e quarenta cliques. Você já encontrou clareza?");
} else if (total === 650) {
subtitle("Cada clique é uma janela para um labirinto de pensamentos.");
} else if (total === 660) {
subtitle("Os cliques ressoam como sinos de uma mente perturbada.");
} else if (total === 670) {
subtitle("Os caminhos se entrelaçam, assim como os cliques em sua mente.");
} else if (total === 680) {
subtitle("Cada clique é uma nota dissonante em uma sinfonia confusa.");
} else if (total === 690) {
subtitle("Seiscentos e noventa cliques. Você se perdeu?");
} else if (total === 700) {
subtitle("Setecentos cliques. O que você espera descobrir?");
} else if (total === 710) {
subtitle("Os cliques persistem, a razão se esvaindo.");
} else if (total === 720) {
subtitle("Cada clique é uma gota de tinta em um quadro abstrato.");
} else if (total === 730) {
subtitle("A linha entre cliques e realidade se dissolve lentamente.");
} else if (total === 740) {
subtitle("Setecentos e quarenta cliques. Qual é o próximo passo?");
} else if (total === 750) {
subtitle("Cada clique é uma peça de um quebra-cabeça inacabado.");
} else if (total === 760) {
subtitle("Os cliques continuam, mas a mente se perdeu.");
} else if (total === 770) {
subtitle("Caminhos convergentes, mas aonde eles levam?");
} else if (total === 780) {
subtitle("A cada clique, a razão escapa um pouco mais.");
} else if (total === 790) {
subtitle("Os cliques são como estrelas em uma noite sem fim.");
} else if (total === 800) {
subtitle("Oitocentos cliques. A jornada para dentro de si mesmo.");
} else if (total === 810) {
subtitle("Os cliques persistem, como ecos de um passado distante.");
} else if (total === 820) {
subtitle("Cada clique é uma linha em um livro que nunca é escrito.");
} else if (total === 830) {
subtitle("A linha entre propósito e repetição está borrada como os cliques.");
} else if (total === 840) {
subtitle("Oitocentos e quarenta cliques. Você encontrou respostas?");
} else if (total === 850) {
subtitle("Cada clique é um suspiro em um vazio sem fim.");
} else if (total === 860) {
subtitle("Os cliques ressoam, como uma mente confusa.");
} else if (total === 870) {
subtitle("Caminhos se entrelaçam, assim como os cliques em sua mente.");
} else if (total === 880) {
subtitle("Cada clique é um fragmento de uma realidade quebrada.");
} else if (total === 890) {
subtitle("Oitocentos e noventa cliques. A verdade ou o caos?");
} else if (total === 900) {
subtitle("Novecentos cliques. Um passo mais perto da verdade?");
} else if (total === 910) {
subtitle("Cada clique é uma nota dissonante em uma sinfonia mental.");
} else if (total === 920) {
subtitle("Os cliques continuam, enquanto a razão se desvanece.");
} else if (total === 930) {
subtitle("Caminhos divergentes, assim como os cliques em sua mente.");
} else if (total === 940) {
subtitle("Cada clique é um eco de um passado que se perdeu.");
} else if (total === 950) {
subtitle("Novecentos e cinquenta cliques. Você está quase lá?");
} else if (total === 960) {
subtitle("Os cliques ecoam como memórias esquecidas.");
} else if (total === 970) {
subtitle("Os caminhos se bifurcam, assim como os cliques na mente.");
} else if (total === 980) {
subtitle("Cada clique é um sussurro em um oceano de pensamentos.");
} else if (total === 990) {
subtitle("Novecentos e noventa cliques. As respostas estão além?");
} else if (total === 1000) {
subtitle("Mil cliques. Estou sem ideia pra mais frases, agora enlouqueça sozinho aí");
}
// Adicione mais ifs conforme necessário


    if (probability > 0) {
        console.log(`Probabilidade atual: ${probability}%`);
        const result = Math.floor(Math.random() * 100) + 1;
        
        if (result <= probability) {
            clicks += 1;
        } else {
            clicks = 0;
            probability = 100;
    }
                        if(clicks > score){
            score = clicks;
            document.getElementById("score").innerHTML = "Score: " + score;
            }
    probability -= 1;
    document.getElementById("counter").innerHTML = clicks + "";
}
}