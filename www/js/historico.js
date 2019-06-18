$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: APP_URL + '/api/perfil-aluno',
	    headers: {
	        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
	    },
        success: function(response) {
            if(response.treinos != null) {

            	$(response.treinos).each(function(index, treino) {
            		$('#historico').append(
            			`<li style="list-style-type: none;">
            				<i class="fa fa-arrow-down" aria-hidden="true"></i>${treino.treino.treino}  
            				<i class="fa fa-hand-o-right playicon" aria-hidden="true"></i> 
            				<span class="Nomeperfil">${treino.data}</span>
            			</li>`
            		);
            	});
            } else {
                $('#historico').append(`<div>Ainda não foram realizados exercícios!</div>`);
            }
        },
        error: function(erro) {
            console.log('esse caralho não tá funcionadno');
            console.log(erro);
        }
    });
});