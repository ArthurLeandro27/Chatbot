window.onload = function () {
  const config = window.chatbotConfig || {};

  const botaoBackground = config.buttonBackground || 'linear-gradient(to right, #005c78, #007892)';
  const botaoTextoColor = config.buttonTextColor || 'white';
  const botaoPosicao = config.position || 'bottom-right'; // 'bottom-right', 'bottom-left'

  const chatWidth = config.width || 400;
  const chatHeight = config.height || 500;

  const chatUrl = config.chatUrl || 'https://copilotstudio.microsoft.com/environments/adf5ac63-1957-eee0-afc2-9e64db5c7cea/bots/cr6ae_botTest/webchat?__version__=2';

  const positionStyle = botaoPosicao === 'bottom-left'
    ? { right: 'auto', left: '20px' }
    : { right: '20px', left: 'auto' };

  // Criação do botão flutuante
  const botao = document.createElement('div');
  botao.id = 'botaoChat';
  Object.assign(botao.style, {
    position: 'fixed',
    bottom: '20px',
    ...positionStyle,
    background: botaoBackground,
    color: botaoTextoColor,
    display: 'flex',
    borderRadius: '30px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    zIndex: 9999
  });

  botao.innerHTML = `
    <div style="padding: 10px 15px; font-size: 14px;">
      Reclamar da distribuidora?<br>Consultar um protocolo ANEEL?
    </div>
    <div style="background-color: #00344a; padding: 10px 15px; font-weight: bold;">
      CLIQUE<br>AQUI
    </div>
  `;
  document.body.appendChild(botao);

  // Criação do container do chat
  const container = document.createElement('div');
  container.id = 'chatContainer';
  Object.assign(container.style, {
    display: 'none',
    position: 'fixed',
    bottom: '80px',
    ...positionStyle,
    width: chatWidth + 'px',
    height: chatHeight + 'px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    zIndex: 9998,
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    backgroundColor: 'white'
  });

  container.innerHTML = `
    <button id="fecharChat" style="
      position: absolute;
      top: 5px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
      z-index: 10000;
    ">×</button>
    <iframe src="${chatUrl}" width="100%" height="100%" frameborder="0"></iframe>
  `;
  document.body.appendChild(container);

  // Ações do botão
  botao.addEventListener('click', function () {
    container.style.display = 'block';
    botao.style.display = 'none';
  });

  container.querySelector('#fecharChat').addEventListener('click', function () {
    container.style.display = 'none';
    botao.style.display = 'flex';
  });
};
