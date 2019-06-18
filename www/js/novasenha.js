$('#form-nova-senha').on('submit', function(event) {
    event.preventDefault();
    if($('#password').val() == $('#password_confirmation').val()) {

        $.ajax({
            type: 'POST',
            url: APP_URL + '/api/nova-senha',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
            },
            // data: {
            //     password: $('#password').val(),
            //     password-confirm: $('#password-confirm').val(),
            // },
            data: {
                password: $('#password').val(),
                password_confirmation: $('#password_confirmation').val(),
            },
            success: function(response) {
                if(response.error) {
                    $('#erro').text(response.error);
                    console.log(response.error);
                } else {
                    window.location.href = '/ficha.html';
                }
            },
            error: function(erro) {
                console.log('Não funciona né');
                console.log(erro);
            }
        });
    } else {
        console.log($('#password').val());
        console.log($('#password_confirmation').val());
        $('#erro').text('A confirmação da senha não confere');
    }
});