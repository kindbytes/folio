// Aguarda o carregamento completo do DOM antes de executar qualquer script
document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     CONTROLE DE ABAS (NAVEGAÇÃO)
  =============================== */
  // Seleciona todas as abas
  const tabs = document.querySelectorAll('.tab');

  // Seleciona todas as seções de conteúdo
  const sections = document.querySelectorAll('.content-section');

  // Percorre todas as abas
  tabs.forEach((tab) => {

    // Adiciona evento de clique em cada aba
    tab.addEventListener('click', () => {

      // Obtém o valor do atributo data-target
      const targetId = tab.dataset.target;

      // Seleciona a seção correspondente
      const targetSection = document.getElementById(targetId);

      // Remove a classe "active" de todas as abas
      tabs.forEach((t) => t.classList.remove('active'));

      // Remove a classe "active" de todas as seções
      sections.forEach((sec) => sec.classList.remove('active'));

      // Ativa a aba clicada
      tab.classList.add('active');

      // Exibe a seção correspondente
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });

  });

  /* ===============================
     FORMULÁRIO DE CONTATO
  =============================== */

  // Seleciona o formulário
  const form = document.getElementById('formContato');

  // Seleciona o elemento de status
  const status = document.getElementById('status');

  // Garante que os elementos existam
  if (form && status) {

    // Evento de envio do formulário
    form.addEventListener('submit', (event) => {

      // Impede o envio padrão da página
      event.preventDefault();

      // Limpa mensagens anteriores
      status.textContent = '';
      status.className = 'status';

      // Captura os valores dos campos
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      // Validação de campos obrigatórios
      if (!nome || !email || !mensagem) {
        status.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        status.classList.add('status-error');
        return;
      }

      // Validação simples de e-mail
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        status.textContent = 'Por favor, informe um e-mail válido.';
        status.classList.add('status-error');
        return;
      }

      // Simulação de envio bem-sucedido
      status.textContent = 'Mensagem enviada com sucesso! 😊';
      status.classList.add('status-success');

      // Limpa os campos do formulário
      form.reset();
    });
  }

});
