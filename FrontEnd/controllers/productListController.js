$(document).ready(function(){
  $.getScript("./model/product.js", function(){
    var user = sessionStorage.getItem("SessionName");
    if(user===null){
      window.location.href = "index.html"
    }
    getUserRole(user);


  function getUserRole(user){
    $.ajax({
       type: 'post',
       url: 'http://localhost/TESTValorProfs/api-slim/api-authorization.php/authorization',
       dataType: 'json',
       data: {
         user:user
       },
       success: function(user){
         alert
         var userAdmin = user.admin;
          getProductList(userAdmin);
       }
     });
  }

  function getProductList(userAdmin){
    $.ajax({
       type: 'get',
       url: 'http://localhost/TESTValorProfs/api-slim/api-productList.php/product-list',
       dataType: 'json',
       data: Product,
       success: function(Product){
          processProducList(Product, userAdmin);
       }
     });
  }

  function processProducList(Product, userAdmin){
    if (userAdmin===true){
      $.each(Product, function(index, product){
        var html = "<tr>"+
                  "<td>"+product.Id+"</td>"+
                  "<td>"+product.Name+"</td>"+
                  "<td>"+product.Avaliable+"</td>"+
                  "<td>"+product.Price+"</td>"+
                  "<td><a href='#' onclick='redirect("+product.Id+")'>Details</a></td>"+
                  "<td><a href='#' class='btn btn-info' data-toggle='modal' data-target='#updateProduct-modal' onclick='loadProductUpdate("+product.Id+")'>Update</a></td>"+
                  "<td><a href='#' class='btn btn-danger' onclick='deleteProduct("+product.Id+")'>Delete</a></td>"+
                  "</tr>";
        $("#product-list").append(html);
      });
      $('.container').append("<button type='button' class='btn btn-success btn-lg' data-toggle='modal' data-target='#addProduct-modal'>New product</button>")
    } else if(userAdmin===false){
      $.each(Product, function(index, product){
        var html = "<tr>"+
                  "<td>"+product.Id+"</td>"+
                  "<td>"+product.Name+"</td>"+
                  "<td>"+product.Avaliable+"</td>"+
                  "<td>"+product.Price+"</td>"+
                  "</tr>";
        $("#product-list").append(html);
      });
    }else{
      window.location('index.php');
    }
  }


});

});


function redirect(id){
  sessionStorage.setItem('idProduct', id);
  window.location.href="productDetail.html";
}
