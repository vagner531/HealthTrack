$(function(){
   $("#peso-form").submit(function (event) {
       event.preventDefault()
   }).validate({
       rules: {
           peso: {
            required: true,
            number: true
           },
           altura: {
            required: true,
            number: true
           },
           submitHander: function(form){
              // $(form).ajaxSubmit();
              alert("Olá")
           }
        
        }
   })
})