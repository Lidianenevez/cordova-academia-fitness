$(document).ready(function() {
	getTreino();
});
$('#seleciona-treino').on('submit', function(event) {
	event.preventDefault();
	getTreino($('#treino').val())
});

function getTreino(treino = null) {
    $.ajax({
        type: 'GET',
        url: APP_URL + '/api/ficha',
	    headers: {
	        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
	    },
	    data: {
	    	treino: treino
	    },
        success: function(response) {

        	if(response.novo_usuario == 1) {
        		window.location.href = "/novasenha.html";
        		return 0;
        	}

        	if(response.ficha == null) {
        		window.location.href = "/perfil.html";
        	}

        	$('#sequencia').empty();
        	$('#campo-exercicio').empty();
        	$('#treino-de-hoje-id').val(response.treinoDeHoje.id);
        	$('#ficha').val(response.ficha.id);
        	$('#treino-hoje').text(response.treinoDeHoje.treino);
        	$('#instrutor').text(response.instrutor);
        	$('#objetivo').text(response.ficha.objetivo);
        	$('#criacao').text(response.ficha.created_at_formatado);
        	$('#revisao').text(response.ficha.revisao_formatado);
        	$('#metodo').text(response.ficha.metodo);
        	$('#aerobico').text(response.ficha.treino_aerobico);
        	$('#tempo_aerobico').text(response.ficha.tempo_aerobico);
        	$('#aquecimento').text(response.ficha.aquecimento);
        	$('#intervalo').text(response.ficha.intervalo);
        	$('#observacoes').text(response.ficha.observacoes);
        	$(response.treino).each(function(index, exercicio) {
	            $('#campo-exercicio').append(
					`<div class="card mb-3 exercicio" style="max-width: 510px; border-radius: 20px; border: 2px solid #060A4B">
					  <div class="row">
					    <div class="col-4 text-center">
					      <center>
					       <button type="button" class="btn" data-toggle="modal" data-target=".modal-${exercicio.exercicio.id}" style="border-radius: 20%; background-color: #fff0; border: none; outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(253, 254, 255, 0.25)">
					                <img src="../img/play.svg" style="max-width: 70px; margin-top:20px; margin-left: 20px">
					                
					              </button>  
					          </center>
					      <div class="custom-control custom-switch" style="margin-top: 10px; padding-left: 3.25rem;">
					        <input type="checkbox" class="custom-control-input" id="customSwitch${exercicio.id}">
					        <label class="custom-control-label" for="customSwitch${exercicio.id}"></label>
					      </div>
					    </div>
					    <div class="col-8">
					      <div class="card-body text-center" style="margin-right: 20px">
					        
					         <h5 class="card-title ficha " ><strong>${exercicio.exercicio.titulo}</strong></h5>
					        <p class="card-text ficha " style="font-size:16px"><strong>Série:${exercicio.series}  X ${exercicio.repeticoes}</strong> <img src="../img/repeat.png" class="img-fluid" style="max-width: 25px"> </p>
					        <p class="card-text ficha " style="font-size:16px"><strong>Peso: ${exercicio.peso}kg </strong> <img src="../img/barbell1.png" class="img-fluid" style="max-width: 25px">  </p>
					      </div>
					    </div>
					  </div>
					</div>`
	            );
	            $('#campo-modal').append(
					`<div class="modal fade bd-example-modal-xl modal-${exercicio.exercicio.id}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
					  <div class="modal-dialog modal-xl">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h3 class="modal-title">EXECUÇÃO</h3>
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
					      <div class="modal-body">
					        <div id="carouselExampleIndicators-${exercicio.exercicio.id}" class="carousel slide" data-ride="carousel">
					  <ol class="carousel-indicators" style="margin-bottom: -20px" >
					    <li data-target="#carouselExampleIndicators-${exercicio.exercicio.id}" data-slide-to="0" class="active" style="background-color: #005dff; "></li>
					    <li data-target="#carouselExampleIndicators-${exercicio.exercicio.id}" data-slide-to="1" style="background-color: #005dff"></li>
					  </ol>
					  <div class="carousel-inner">
					    <div class="carousel-item active">
					      <div class="embed-responsive embed-responsive-16by9">
					        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${exercicio.exercicio.demonstracao}" allowfullscreen></iframe>
					      </div>
					    </div>
					    <div class="carousel-item">
					      <img src="http://127.0.0.1:8000/storage/musculos/${exercicio.exercicio.tipo_exercicio.imagem}" class="d-block w-100" alt="...">
					    </div>
					  </div>
					  <a class="carousel-control-prev" href="#carouselExampleIndicators-${exercicio.exercicio.id}" role="button" data-slide="prev">
					    <span class="carousel-control-prev-icon " aria-hidden="true" style="color: red"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#carouselExampleIndicators-${exercicio.exercicio.id}" role="button" data-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>
					        <hr style="border-top:1px solid  #B95922">
					        <div>
					          <h3>DESCRIÇÃO</h3>
					          <p class="descplanos text-justify" >${exercicio.exercicio.descricao}</p>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button type="button" class="btn btnlaranja" data-dismiss="modal">FECHAR</button>
					      </div>
					    </div>
					     
					    
					  </div>
					</div>`
	            );
        	});
        	$(response.sequencia).each(function(index, treino) {
        		$('#sequencia').append(
        			`${treino.treino}  <i class="fa fa-hand-o-right playicon" aria-hidden="true"></i>`
        		)
        	})
        },
        error: function(erro) {
            console.log('esse caralho não tá funcionadno');
            console.log(erro);
        }
    });
}

$('#finaliza').on('submit', function(event) {
	event.preventDefault();
    $.ajax({
        type: 'POST',
        url: APP_URL + '/api/ultimo-treino',
	    headers: {
	        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
	    },
	    data: {
	    	treino: $('#treino-de-hoje-id').val(),
	    	ficha: $('#ficha').val()
	    },
        success: function(respo11nse) {
        	location.reload();
        },
        error: function(erro) {
            console.log('esse caralho não tá funcionadno');
            console.log(erro);
        }
    });
});

// $(document).ready(function() {
//   $('successtreino').submit() {
//     alert('Mais um pra conta!');
//   }
// });
// $('#suss').click() {
//   $('#idfinaliza').submit();
// }