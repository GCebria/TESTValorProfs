$(document).ready(function(){
  var id = sessionStorage.getItem('idProduct');
  detailsProduct(id);

});


function detailsProduct(id){
  $.ajax({
    type: 'get',
    url: 'http://localhost/TESTValorProfs/api-slim/api-product.php/product/'+id,
    dataType: 'json',
    data: {
      Id: '',
      Name: '',
      Avaliable: '',
      Price: '',
      Description: '',
      DateCreated: ''
    },
    success: function(data){
      var html = "<tr><td>Id: </td><td>"+data.Id+"</td></tr>"+
      "<tr><td>Name: </td><td>"+data.Name+"</td></tr>"+
      "<tr><td>Avaliable: </td><td>"+data.Avaliable+"</td></tr>"+
      "<tr><td>Price: </td><td>"+data.Price+"</td></tr>"+
      "<tr><td>Description: </td><td>"+data.Description+"</td></tr>"+
      "<tr><td>DateCreated: </td><td>"+data.DateCreated+"</td></tr>";
      $('#product-details').append(html);
    }
  });
}
