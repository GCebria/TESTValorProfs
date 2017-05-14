$(document).ready(function(){
    var user = sessionStorage.getItem("SessionName");


    $('#formAddProduct').submit(function(event){
      $.ajax({
        type: 'post',
        url: 'http://localhost/TESTValorProfs/api-slim/api-product.php/product',
        dataType: 'json',
        data: {
          Id: $('#createId').val(),
          Name: $('#createName').val(),
          Avaliable: $('#createAvaliable').val(),
          Price: $('#createPrice').val(),
          Description: $('#createDescription').val(),
          DateCreated: $('#createDateCreated').val()
        },
        success: function(data){
          if(data.STATUS === 'true'){
            location.reload();
          }else{
            console.log('error on update');
          }
        }
      });
      event.preventDefault();
    });

    $('#formUpdateProduct').submit(function(event){
      $.ajax({
        type: 'put',
        url: 'http://localhost/TESTValorProfs/api-slim/api-product.php/product/'+$('#updateId').val(),
        dataType: 'json',
        data: {
          Id: $('#updateId').val(),
          Name: $('#updateName').val(),
          Avaliable: $('#updateAvaliable').val(),
          Price: $('#updatePrice').val(),
          Description: $('#updateDescription').val(),
          DateCreated: $('#updateDateupdated').val()
        },
        success: function(data){
          if(data.STATUS === 'true'){
            location.reload();
          }else{
            console.log('error on update');
          }
        }
      });
    event.preventDefault();
  });
});

  function loadProductUpdate(id){
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
        $('.updateModal-body').empty();
        var html = "Id: <input type='text' id='updateId' value='"+data.Id+"'/></br>"+
          "Name: <input type='text' id='updateName'value='"+data.Name+"'/></br>"+
          "Avaliable: <input type='text' id='updateAvaliable' value='"+data.Avaliable+"'/></br>"+
          "Price: <input type='text' id='updatePrice' value='"+data.Price+"'/></br>"+
          "Description: <input type='text' id='updateDescription' value='"+data.Description+"'/></br>"+
          "Data created: <input type='text' id='updateDateupdated' value='"+data.DateCreated+"' /></br>";
      $('.updateModal-body').append(html);
      }
    });
  }


function deleteProduct(Id){
  $.ajax({
    type: 'delete',
    url: 'http://localhost/TESTValorProfs/api-slim/api-product.php/product/'+Id,
    dataType: 'json',
    data: {
      STATUS: '',
      message: ''
    },
    success: function(data){
      if(data.STATUS === 'true'){
        location.reload();
      }else{
      }
    }
  });

}
