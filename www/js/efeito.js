
  $('document').ready(function(){
  var count = 0;
  $('.step').each(function(){
    count++;
   
  });
   
  var i = 0;
  //NEXT
  $('#next').on('click', function(){
    if(count > i +1 ){
        i++;
        $('.active').removeClass('active');
        $('.step').eq(i).addClass('active');
       }
  });
    //PREV
  $('#prev').on('click', function(){
   if(i > 0 ){
    i--;
    $('.active').removeClass('active');
    $('.step').eq(i).addClass('active');
   }
  });
});

  $(function(){
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 100) {
            $('.smoothscroll-top').addClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
        }
    });
    $('.smoothscroll-top').on('click', scrollToTop);
});
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
}

$('.carousel').carousel({
    pause: true,
    interval: false
});

//document.querySelector("form").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");

    // Show image
    fileInput.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');


      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   //return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML =  this.value.replace(/C:\\fakepath\\/i, '');
    canvas.style.display="block";
  //button.innerHTML =  this.value.replace(/C:\\fakepath\\/i, '');
});  


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
        canvas.height = img.height;
    }
    reader.readAsDataURL(e.target.files[0]);     
}


