$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/perfil-aluno',
	    headers: {
	        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
	    },
        success: function(response) {
        	$(response.treinos).each(function(index, treino) {
        		$('#historico').append(
        			`<li style="list-style-type: none;">
        				<i class="fa fa-arrow-down" aria-hidden="true"></i>${treino.treino.treino}  
        				<i class="fa fa-hand-o-right playicon" aria-hidden="true"></i> 
        				<span class="Nomeperfil">${treino.data}</span>
        			</li>`
        		)
        	})
        },
        error: function(erro) {
            console.log('esse caralho não tá funcionadno');
            console.log(erro);
        }
    });
});