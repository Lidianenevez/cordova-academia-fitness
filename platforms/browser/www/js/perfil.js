$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/perfil-aluno',
	    headers: {
	        'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
	    },
        success: function(response) {
            if(response.ficha == null) {
                $('#aviso').text('Ficha ainda não criada, por favor, procure o seu instrutor');
            }
        	$('#modalidade').text(response.aluno.modalidade);
            $('#instrutor').text(response.aluno.nomeDoInstrutor);
            $('#pagamento').text(response.aluno.data_de_pagamento);
            $('#proxima_avaliacao').text(response.aluno.proxima_avaliacao_formatado);
            $('#nome').text(response.aluno.name);
            if(response.aluno.imagem != null) {
                $("#foto-aluno").attr("src","http://127.0.0.1:8000/storage/"+response.aluno.imagem);
            }
            if(response.aluno.avaliacao != null) {
                $("#avaliacao-aluno").attr("href","http://127.0.0.1:8000/storage/avaliacoes/"+response.aluno.avaliacao);
            }
        },
        error: function(erro) {
            console.log('Não funciona né');
            console.log(erro);
        }
    });
});

$('#form-imagem').on('submit', function(event) {

    event.preventDefault();
    jQuery.support.cors = true;

    form = new FormData(this);
    // form.append($(this).imagem)

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/upload-imagem',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
        },
        data: form,
        crossDomain: true,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data",
        success: function(response) {
            location.reload();
        },
        error: function(erro) {
            console.log('Não funciona né');
            console.log(erro);
        }
    });

//   var data = new FormData();
// data.append("imagem", "/home/natan/Imagens/filipe google.jpg");

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "http://127.0.0.1:8000/api/upload-imagem");
// xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjllN2E4ZTZiM2ZkMjlhNDdkNzc0YTE2NmQ2YWYxYzlhYmQ5MWJkNWY0YjI5YzRhNDkzOGE2YTMzNGRkYTFlNGQyYjViMzk2NDVmZjA3ZTBhIn0.eyJhdWQiOiIxIiwianRpIjoiOWU3YThlNmIzZmQyOWE0N2Q3NzRhMTY2ZDZhZjFjOWFiZDkxYmQ1ZjRiMjljNGE0OTM4YTZhMzM0ZGRhMWU0ZDJiNWIzOTY0NWZmMDdlMGEiLCJpYXQiOjE1NTk3NzY4NDMsIm5iZiI6MTU1OTc3Njg0MywiZXhwIjoxNTkxMzk5MjQzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.PVKUlMXO4a4_IXed2VUwz_sDoHxNgzJNGjcZkIAel_D65RayFMwfH7Dn-RAV5JF7C3y0wZzwG-Of65fFer-2y94FYxDisStcf-xlcoHAScKOvXmUcSnN_63JlH1iD8xO7wYyA_rOjcQWERW04JunmL6qEyaXveHNaIliFg9K_TIQ_3Cza4GinpLU7SxikSKPmlIyLfhuJN0UAbWaGSbX4-4MxbblnE5wMzv_63oUB5Df-4QGz04OEaYCWxD766C8kiWeK4RkkaX-pLSBKdP1axHxVf1SHHxrTapF9Ql6-H24XkIp6jHkNjgvVyLCSqz0moGOlU-mH1kbE437Nmf9Uqpcs0tZxoXiOxcaXljX6m3_0CMrE3lBprwiN7YEI9cvXjfMuYVMGqLoOHPOfNmMiIDYRiokAIOWTbobo_HAdEG90XS1oYiVRw9wwZSRZTonwMMLFPbZtdMdaKnm5qwIt-pzryj4N_KtAp_WJN1XdBulBiv_3wzxvTZWoGeNUedSxoD1WOf2OGebytbg3ehJgshOKgFeXloM6M4g57F_JZY5TYkPa0U3qV1hn5kF8jYDJmuYEW94bDtVnKgHXx9xAvRGTag39AFCaEUp9POcI-Vh-sFZS99sqmcnya6KwhSU3HkJoMmbAfY2sJINkMF9aNqxKZ6CyioY3P9T78ubkCE");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("Postman-Token", "ea416cd6-858e-4455-95db-2689d1bbb222");

// xhr.send(data);
});


