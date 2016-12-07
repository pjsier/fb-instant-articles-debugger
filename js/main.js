
$('.run').on('click', function(){
  //Clear outputs.
  $('.html-output textarea').val('');
  $('.log-output textarea').val('');

  //Send to server.
  $.post('transform.php', {
    "input-html": $('.html-input textarea').val(),
    "input-rules": $('.rules-input textarea').val()
  })
  .then( function(response){
    //Show results.
    $('.html-output textarea').val(response.result);
    $('.log-output textarea').val(response.log);
  },
  function(err){
    console.error(err);
    if( err.responseJSON.error ){
      $('.log-output textarea').val("Error: "+err.responseJSON.error );
    }
  });
});