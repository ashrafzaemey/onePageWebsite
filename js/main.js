//Validating Form using jQuery for the Buy Section
    $(document).ready(function() {
		// <!-- Real-time Validation -->
 
        // <!--Full Name can't be blank and should be alphabets-->
        $('#fullName').blur('input', function() {
            var input=$(this);
            var regx = /^[a-zA-Z.!*-/=?^_`{|}~-]*$/;
            var is_name=regx.test(input.val());
            if ( input.val().length > 0 && is_name ) {
                input.removeClass("invalid").addClass("valid");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("valid").addClass("invalid");
                input.next("span").remove();                        
                input.after('<span style="color:#cecece;margin-right:111px;font-size:13px;font-weight:100;"><br/>First Name is required. Digits NOT allowed.<br/></span>');
            }
        });

        // <!--Email must be an email address format-->
        $('#email').blur('input', function() {
            var input=$(this);
            var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var is_email=regx.test(input.val());
            if ( input.val().length > 0 && is_email ) {
                input.removeClass("invalid").addClass("valid");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("valid").addClass("invalid");
                input.next("span").remove();                        
                input.after('<span style="color:#cecece;font-size:13px;font-weight:100;"><br/>Email address is required.<br/></span>');
            }
        });  

        //validates if the field are not empty
		$("#submitButton").click(function() {
		    if($("#fullName").val().length==0 || $("#email").val().length==0 ) {
		    	$("#buy-form").text("ERROR!!! Fill the required fields. TRY AGAIN >>").dialog({title:"Error"});
			}
			else {
				$("#buy-form").text("Taking you to process payment through PayPall...").dialog({title:"Successful"});
			}
		});                      
    })
