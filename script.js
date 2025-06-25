$(function() {
    $.ajax({
       'url':'conteudo.html',
       //'method':'post', //Usado no back end
       //data:{'nome': 'Guilherme','idade':'23'} //Item vindo do formulário
    }).done(function(data) {
         $('#container').append(data); //Irá copiar os elementos da página conteudo.html
    });
});