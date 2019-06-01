<!-- Extra large modal -->


<div class="modal fade bd-example-modal-xl modal-{{$exercicio}}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">EXECUÇÃO</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="carouselExampleIndicators-{{$exercicio}}" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" style="margin-bottom: -20px" >
    <li data-target="#carouselExampleIndicators-{{$exercicio}}" data-slide-to="0" class="active" style="background-color: #005dff; "></li>
    <li data-target="#carouselExampleIndicators-{{$exercicio}}" data-slide-to="1" style="background-color: #005dff"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="embed-responsive embed-responsive-16by9">
        {{-- <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe> --}}
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{{$demonstracao}}" allowfullscreen></iframe>
      </div>
    </div>
    <div class="carousel-item">
      <img src="{{asset('storage/musculos/'.$imagem)}}" class="d-block w-100 img-fluid" alt="Imagem do musculo trabalhando" style="max-height: 350px">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators-{{$exercicio}}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true" style="color: red"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators-{{$exercicio}}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <hr style="border-top:1px solid  #B95922">
        <div>
          <h3>DESCRIÇÃO</h3>
          <p class="descplanos" style="text-align: justify; font-size: 18px">{{$descricao}}</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btnlaranja" data-dismiss="modal">FECHAR</button>
      </div>
    </div>
     
    
  </div>
</div>
