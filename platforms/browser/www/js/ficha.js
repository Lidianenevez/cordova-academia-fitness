$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/ficha',
	    headers: {
	        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
	    },
        success: function(response) {
        	$('#objetivo').text(response.ficha.objetivo);
        	$('#metodo').text(response.ficha.metodo);
        	$('#aerobico').text(response.ficha.treino_aerobico);
        	$('#tempo_aerobico').text(response.ficha.tempo_aerobico);
        	$('#aquecimento').text(response.ficha.aquecimento);
        	$('#intervalo').text(response.ficha.intervalo);
        	$('#observacoes').text(response.ficha.observacoes);
        	$(response.treino).each(function(index, exercicio) {
        		console.log(exercicio);
	            $('#campo-exercicio').append(
					`<div class="card mb-3 exercicio" style="max-width: 510px; border-radius: 20px; border: 2px solid #060A4B">
					  <div class="row">
					    <div class="col-4 text-center">
					      <center>
					       <button type="button" class="btn" data-toggle="modal" data-target=".bd-example-modal-xl" style="border-radius: 20%; background-color: #fff0; border: none">
					                <img src="../img/play.svg" style="max-width: 70px; margin-top:20px; margin-left: 20px">
					                
					              </button>  
					          </center>
					      <div class="custom-control custom-switch" style="margin-top: 10px; padding-left: 3.25rem;">
					        <input type="checkbox" class="custom-control-input" id="customSwitch1">
					        <label class="custom-control-label" for="customSwitch1"></label>
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
        	})
        },
        error: function(erro) {
            console.log('esse caralho não tá funcionadno');
            console.log(erro);
        }
    });
});

