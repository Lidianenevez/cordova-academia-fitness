/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

let APP_URL = 'http://127.0.0.1:8001';

$('#form-login').on('submit', function(event) {
    event.preventDefault();
    
    $.ajax({
        type: 'POST',
        url: APP_URL + '/api/login',
        data: {
            cpf: $('#cpf').val(),
            password: $('#password').val(),
        },
        success: function(response) {
            if(response.user.bloqueado == 1) {
                $('#erro').text('Usuário bloqueado. Por favor, contacte a administração');
            } else {            
                window.localStorage.setItem('token', response.success.token);
                console.log(window.localStorage.getItem('token'));
                window.location.href = "/ficha.html";
            }
        },
        error: function(erro) {
            $('#erro').text('CPF ou senha incorretos');
        }
    });
});

$('#sair').on('click', function() {
    $.ajax({
        type: 'POST',
        url: APP_URL + '/api/logout',
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
        },
        success: function(response) {
            console.log(response);
            window.localStorage.removeItem('token');
            window.location.href = "/index.html";
        },
        error: function(erro) {
            console.log(erro)
        }
    });
})

$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
