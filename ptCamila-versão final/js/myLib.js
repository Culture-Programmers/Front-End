A = {
    scroll: null,
	valFormsContact: null,
	valFormsDownload: null,
    init: function () {
        A.scroll();
		A.valFormsContact();
		A.valFormsDownload();
    },
    scroll: function () {
        jQuery(document).ready(function () {
            $(".ancora").click(function (e) {
                e.preventDefault();
                var id = $(this).attr('href'),
                    targetOffset = $(id).offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 500);
            });
        })
    },
    valFormsContact: function () {
        
		var checkform = function(){
            var nome = form.input_nome.value;
            var email = form.input_email.value;
            var assunto = form.input_mensagem.value;
            if(nome != '' && email != '' && mensagem != ''){
                alert('Enviado com sucesso.');
                form.submit();
            } else {
                if(nome == ''){
                    alert('Nome é obrigatório.');
                }
                if(email == ''){
                    alert('Email é obrigatório.');
                }
                if(assunto == ''){
                    alert('Mensagem é obrigatório.');
                }
            }
        }
        jQuery(document).ready(function($) { 
            $("btnEnviar").click(function(event){        
                event.preventDefault();
                checkform();
           });
        });
	},
	valFormsDownload: function(){
		var checkform = function(){
            var nome = form.input_nome.value;
            var email = form.input_email.value;
			var celular = form.input_celular.value;
			var cidade = form.input_cidade.value;
            if(nome != '' && email != '' && assunto != '' && celular != ''){
                alert('Enviado com sucesso.');
                form.submit();
            } else {
                if(nome == ''){
                    alert('Nome é obrigatório.');
                }
                if(email == ''){
                    alert('Email é obrigatório.');
				}
				if(celular == ''){
					alert('Celular é obrigatório');
				}
                if(cidade == ''){
                    alert('Cidade é obrigatório.');
                }
            }
        }
        jQuery(document).ready(function($) { 
            $("btnDownload").click(function(event){        
                event.preventDefault();
                checkform();
           });
        });
	}
}
A.init();