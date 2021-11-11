$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            surname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6,
                maxlength:16

            },
            day:{
                required:true
            },
            gender:{
                required:true
            },
            messages:{
                fname:"Enter first name  ",
                surname :{
                    required:"THis field is required",
                    minlength:"There should be atleast 4 characters"
                }
          }

        }
        
    })
})