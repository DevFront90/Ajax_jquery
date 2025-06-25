# 📡 AJAX com jQuery – Exemplo prático e explicação

Este repositório demonstra como utilizar **AJAX com jQuery** para realizar requisições assíncronas a um servidor **sem recarregar a página**. É útil para formulários, carregamento de dados dinâmicos, consumo de APIs e muito mais.

---

## 🚀 O que é AJAX?

AJAX (*Asynchronous JavaScript and XML*) permite que páginas web façam requisições HTTP em segundo plano, trocando dados com o servidor e atualizando partes específicas da página **sem precisar fazer um reload completo**.

---

## 🛠️ Tecnologias usadas

- HTML5
- jQuery
- AJAX
- JSON (exemplo de formato de resposta)

---

## 📄 Exemplo de código AJAX com jQuery

```html
<!-- Formulário simples -->
<form id="formContato">
  <input type="text" name="nome" placeholder="Seu nome">
  <input type="email" name="email" placeholder="Seu e-mail">
  <button type="submit">Enviar</button>
</form>

<div id="resposta"></div>
javascript
Copiar
Editar
// AJAX com jQuery
$(function() {
  $('#formContato').submit(function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    $.ajax({
      url: 'processa.php', // URL do arquivo PHP ou API
      type: 'POST',
      data: $(this).serialize(), // Envia todos os campos do formulário
      success: function(response) {
        $('#resposta').html(response); // Exibe resposta do servidor
      },
      error: function() {
        $('#resposta').html('Erro ao enviar. Tente novamente.');
      }
    });
  });
});
✅ O que esse código faz?
Captura o envio do formulário com submit

Envia os dados para um servidor (arquivo processa.php)

Exibe a resposta no elemento <div id="resposta">

Evita recarregar a página com e.preventDefault()

📦 Estrutura de arquivos
bash
Copiar
Editar
/ajax-jquery-exemplo
│
├── index.html       # HTML com formulário
├── script.js        # Código JavaScript com AJAX
└── processa.php     # Backend que processa os dados (exemplo em PHP)
🔄 Formatos de resposta
Você pode adaptar o backend para retornar:

HTML (para inserir diretamente na página)

JSON (para manipular via JS)

Mensagens customizadas (sucesso, erro, etc.)
