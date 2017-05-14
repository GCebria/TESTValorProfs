
$(document).ready(function(){

$('#formLogin').submit(function(event) {
 $.ajax({
    type: 'POST',
    url: 'http://localhost/TESTValorProfs/api-slim/api-authentication.php/authentication',
    dataType: 'json',
    data: {
      user: $("#user").val(),
      pass: $("#pass").val()
    },
    success: function(data){
      if(data.STATUS==='true'){
        sessionStorage.SessionName = $("#user").val();
        window.location.href = "productList.html";
      }else{
      $("#errorLogin").append("<p>Error in page login</p>")
      }

    }
});
    event.preventDefault();
});

$('#btnlogout').on('click', function(){
  sessionStorage.clear();
  window.location.href = "index.html";
});
});
