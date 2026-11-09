'use strict';

/* Banco de perguntas. "correta" é o índice (começando em 0) da alternativa certa. */
const PERGUNTAS = [
  {
    pergunta: 'O que é phishing?',
    alternativas: [
      'Um tipo de antivírus',
      'Uma fraude que usa mensagens ou sites falsos para obter seus dados',
      'Uma rede Wi-Fi sem senha',
      'Um programa para acelerar a internet'
    ],
    correta: 1,
    explicacao: 'Phishing combina um recurso técnico (mensagem ou site falso) com engenharia social para enganar a vítima e obter seus dados.'
  },
  {
    pergunta: 'Você recebe a mensagem: "Oi, mãe! Troquei de número, salva esse. Faz um Pix urgente para mim?". O que fazer primeiro?',
    alternativas: [
      'Fazer o Pix, para não deixar a pessoa esperando',
      'Responder pedindo mais detalhes',
      'Confirmar com a pessoa pelo contato de sempre antes de qualquer pagamento',
      'Salvar o número novo e esperar'
    ],
    correta: 2,
    explicacao: 'Esse é o golpe do "número novo". Confirme a identidade por outro meio, como uma ligação para o número antigo, antes de transferir qualquer valor.'
  },
  {
    pergunta: 'Ao receber um boleto, o que ajuda a evitar uma fraude?',
    alternativas: [
      'Pagar rápido, porque o desconto pode acabar',
      'Conferir se a cobrança é devida e se o beneficiário (nome e CNPJ) é o fornecedor que você contratou',
      'Confiar se o boleto chegou por WhatsApp',
      'Pagar primeiro e verificar depois'
    ],
    correta: 1,
    explicacao: 'Em um boleto falso, o dinheiro vai para a conta do golpista. Confira o valor, o nome e o CNPJ de quem recebe antes de pagar.'
  },
  {
    pergunta: 'Qual das opções abaixo é a mais adequada como senha?',
    alternativas: [
      'Sua data de nascimento',
      'qwerty123',
      'O nome do seu time de futebol',
      'Três palavras aleatórias, sem relação entre si, com números e símbolos'
    ],
    correta: 3,
    explicacao: 'Senhas longas e imprevisíveis são mais difíceis de descobrir. Evite datas, nomes, sequências de teclado e palavras de listas conhecidas.'
  },
  {
    pergunta: 'Por que não é seguro usar a mesma senha em várias contas?',
    alternativas: [
      'Porque os sistemas bloqueiam senhas repetidas',
      'Porque senhas repetidas expiram mais rápido',
      'Porque, se uma conta for descoberta, as outras também ficam expostas',
      'Não há risco nenhum'
    ],
    correta: 2,
    explicacao: 'Basta o golpista descobrir uma senha para tentar entrar em todas as outras contas em que ela é usada. Use uma senha diferente para cada conta.'
  },
  {
    pergunta: 'Alguém pede que você informe um código de verificação que chegou por mensagem. O que fazer?',
    alternativas: [
      'Informar, para resolver logo',
      'Nunca passar o código a ninguém',
      'Passar apenas se a pessoa disser que é do banco',
      'Encaminhar para um amigo conferir'
    ],
    correta: 1,
    explicacao: 'O código de verificação é a segunda etapa de proteção da sua conta. Quem tem o código consegue entrar nela. Não o compartilhe com ninguém.'
  },
  {
    pergunta: 'Qual destes é um dado pessoal sensível, segundo a LGPD?',
    alternativas: [
      'Informação sobre a saúde de uma pessoa',
      'O nome completo',
      'O endereço residencial',
      'O número do sapato'
    ],
    correta: 0,
    explicacao: 'Dados sobre saúde, vida sexual, religião, opinião política, origem racial ou étnica, além de dados genéticos e biométricos, são sensíveis e exigem cuidado extra.'
  },
  {
    pergunta: 'Se uma empresa não resolve um problema com seus dados pessoais, a quem você pode recorrer depois do encarregado de dados?',
    alternativas: [
      'À ANPD (Agência Nacional de Proteção de Dados)',
      'Ao fabricante do celular',
      'Ao provedor de internet',
      'A nenhum órgão'
    ],
    correta: 0,
    explicacao: 'A ANPD recebe petições de titulares de dados e denúncias de infrações à LGPD quando o titular não consegue resolver diretamente com a organização.'
  },
  {
    pergunta: 'Um aplicativo de jogo pede acesso à sua lista de contatos. Qual a atitude mais prudente?',
    alternativas: [
      'Autorizar tudo, para o jogo funcionar',
      'Autorizar só o que for essencial para o funcionamento e negar o que não fizer sentido',
      'Autorizar e desinstalar depois',
      'Instalar o jogo em vários aparelhos'
    ],
    correta: 1,
    explicacao: 'Alguns acessos pedidos por aplicativos são abusivos. Autorize apenas o essencial e apague os aplicativos que você não usa mais.'
  },
  {
    pergunta: 'Você está em um aeroporto com Wi-Fi gratuito. O que é mais seguro fazer?',
    alternativas: [
      'Acessar o aplicativo do banco para aproveitar a conexão',
      'Fazer compras online',
      'Evitar operações sensíveis na rede pública e usar a rede móvel para elas',
      'Conectar automaticamente a todas as redes disponíveis'
    ],
    correta: 2,
    explicacao: 'Em redes públicas, evite acessar o banco, fazer pagamentos ou informar dados pessoais. Para isso, use a rede móvel ou uma conexão de confiança.'
  },
  {
    pergunta: 'Por que é importante manter o sistema e os aplicativos atualizados?',
    alternativas: [
      'Para o aparelho ficar mais bonito',
      'Para gastar mais bateria',
      'Porque as atualizações só mudam o visual',
      'Porque as atualizações corrigem falhas de segurança que golpistas podem explorar'
    ],
    correta: 3,
    explicacao: 'Falhas não corrigidas (vulnerabilidades) são portas abertas para invasões e infecções. Ative as atualizações automáticas sempre que possível.'
  },
  {
    pergunta: 'Qual é a forma mais segura de instalar um aplicativo?',
    alternativas: [
      'Pelo link recebido em uma mensagem',
      'Em qualquer site que ofereça o programa de graça',
      'Por um arquivo enviado por um conhecido',
      'Pela loja oficial do sistema, conferindo o nome do aplicativo e o desenvolvedor'
    ],
    correta: 3,
    explicacao: 'As lojas oficiais têm regras mais rígidas e removem aplicativos maliciosos com mais rapidez. Mesmo assim, confira o nome e o desenvolvedor, porque existem aplicativos falsos.'
  }
];

/* Verifica se o banco está bem formado. Erros aparecem no console do navegador (F12). */
function validarBanco(banco) {
  const erros = [];
  banco.forEach(function (p, i) {
    const n = i + 1;
    if (!p.pergunta) { erros.push('Pergunta ' + n + ': texto vazio.'); }
    if (!Array.isArray(p.alternativas) || p.alternativas.length !== 4) {
      erros.push('Pergunta ' + n + ': precisa ter exatamente 4 alternativas.');
    } else if (!Number.isInteger(p.correta) || p.correta < 0 || p.correta > 3) {
      erros.push('Pergunta ' + n + ': índice da resposta correta inválido.');
    }
    if (!p.explicacao) { erros.push('Pergunta ' + n + ': falta a explicação.'); }
  });
  return erros;
}

function embaralhar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copia[i];
    copia[i] = copia[j];
    copia[j] = temp;
  }
  return copia;
}

(function () {
  const erros = validarBanco(PERGUNTAS);
  if (erros.length > 0) {
    console.error('Banco de perguntas inválido:\n' + erros.join('\n'));
    return;
  }

  const el = function (id) { return document.getElementById(id); };
  const inicio = el('quiz-inicio');
  const area = el('quiz-area');
  const resultado = el('quiz-resultado');
  const progresso = el('quiz-progresso');
  const legenda = el('quiz-pergunta');
  const opcoes = el('quiz-opcoes');
  const feedback = el('quiz-feedback');
  const btnComecar = el('quiz-comecar');
  const btnResponder = el('quiz-responder');
  const btnProxima = el('quiz-proxima');
  const btnRefazer = el('quiz-refazer');

  let ordem = [];
  let indice = 0;
  let pontos = 0;
  let respondida = false;
  let perguntaAtual = null;

  function comecar() {
    ordem = embaralhar(PERGUNTAS.map(function (_, i) { return i; }));
    indice = 0;
    pontos = 0;
    inicio.hidden = true;
    resultado.hidden = true;
    area.hidden = false;
    mostrarPergunta();
  }

  function mostrarPergunta() {
    respondida = false;
    perguntaAtual = PERGUNTAS[ordem[indice]];

    progresso.textContent = 'Pergunta ' + (indice + 1) + ' de ' + PERGUNTAS.length;
    legenda.textContent = perguntaAtual.pergunta;
    opcoes.textContent = '';

    embaralhar([0, 1, 2, 3]).forEach(function (i) {
      const rotulo = document.createElement('label');
      rotulo.className = 'opcao';

      const entrada = document.createElement('input');
      entrada.type = 'radio';
      entrada.name = 'alternativa';
      entrada.value = String(i);
      entrada.addEventListener('change', function () { btnResponder.disabled = false; });

      const texto = document.createElement('span');
      texto.textContent = perguntaAtual.alternativas[i];

      rotulo.appendChild(entrada);
      rotulo.appendChild(texto);
      opcoes.appendChild(rotulo);
    });

    feedback.className = 'quiz-feedback';
    feedback.textContent = '';
    btnResponder.hidden = false;
    btnResponder.disabled = true;
    btnProxima.hidden = true;
    legenda.focus();
  }

  function marcar(rotulo, texto) {
    const marca = document.createElement('strong');
    marca.textContent = ' (' + texto + ')';
    rotulo.querySelector('span').appendChild(marca);
  }

  function responder() {
    if (respondida) { return; }
    const marcada = opcoes.querySelector('input:checked');
    if (!marcada) { return; }

    respondida = true;
    const escolhida = Number(marcada.value);
    const acertou = escolhida === perguntaAtual.correta;
    if (acertou) { pontos++; }

    opcoes.querySelectorAll('label.opcao').forEach(function (rotulo) {
      const entrada = rotulo.querySelector('input');
      entrada.disabled = true;
      const valor = Number(entrada.value);
      if (valor === perguntaAtual.correta) {
        rotulo.classList.add('correta');
        marcar(rotulo, 'resposta correta');
      } else if (valor === escolhida) {
        rotulo.classList.add('errada');
        marcar(rotulo, 'sua resposta');
      }
    });

    feedback.className = 'quiz-feedback ' + (acertou ? 'feedback-ok' : 'feedback-erro');
    feedback.textContent = '';
    const titulo = document.createElement('strong');
    titulo.textContent = acertou ? 'Correto! ' : 'Resposta incorreta. ';
    feedback.appendChild(titulo);
    feedback.appendChild(document.createTextNode(perguntaAtual.explicacao));

    btnResponder.hidden = true;
    btnProxima.textContent = (indice === PERGUNTAS.length - 1) ? 'Ver resultado' : 'Próxima pergunta';
    btnProxima.hidden = false;
    btnProxima.focus();
  }

  function proxima() {
    indice++;
    if (indice >= PERGUNTAS.length) {
      mostrarResultado();
    } else {
      mostrarPergunta();
    }
  }

  function mostrarResultado() {
    const total = PERGUNTAS.length;
    const percentual = Math.round((pontos / total) * 100);
    let mensagem;
    if (percentual >= 80) {
      mensagem = 'Muito bem! Você domina os cuidados principais. Que tal compartilhar este site com alguém que possa se beneficiar?';
    } else if (percentual >= 50) {
      mensagem = 'Bom resultado! Releia as páginas dos temas em que você errou e tente novamente.';
    } else {
      mensagem = 'Vale revisar os conteúdos do site com calma e refazer o questionário. Aprender leva tempo!';
    }

    area.hidden = true;
    resultado.hidden = false;
    el('quiz-pontuacao').textContent = 'Você acertou ' + pontos + ' de ' + total + ' perguntas (' + percentual + '%).';
    el('quiz-mensagem').textContent = mensagem;
    el('quiz-resultado-titulo').focus();
  }

  btnComecar.addEventListener('click', comecar);
  btnResponder.addEventListener('click', responder);
  btnProxima.addEventListener('click', proxima);
  btnRefazer.addEventListener('click', comecar);
})();