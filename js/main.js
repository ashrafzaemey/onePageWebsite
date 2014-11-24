//Validating Form using jQuery for the Buy Section
    $(document).ready(function() {
		// <!-- Real-time Validation -->
 
		//validating for the Buy Section

        // <!--Full Name can't be blank and should be alphabets-->
        $('#fullName').blur('input', function() {
            var input=$(this);
            var regx = /^[a-zA-Z.!*-/=?^_`{|}~-]*$/;
            var is_name=regx.test(input.val());
            if ( input.val().length > 0 && is_name ) {
                input.removeClass("info").addClass("success");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("success").addClass("info");
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
                input.removeClass("info").addClass("success");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("success").addClass("info");
                input.next("span").remove();                        
                input.after('<span style="color:#cecece;font-size:13px;font-weight:100;"><br/>Email address format is incorrect.<br/></span>');
            }
        });  

        //validates if the field are not empty
		$("#submitButton").click(function() {
		    if($("#fullName").val().length==0 || $("#email").val().length==0 ) {
		    	$("#buy-form").html('<p class="text-center" style="font-size:21px;font-weight:700;">ERROR!!! Fill the required fields.</p>').dialog({title:"Error"});
			}
			else {
				$("#buy-form").html('<p class="text-center" style="font-size:21px;font-weight:700;">Taking you to process payment through PayPall...</p>').dialog({title:"Successful"});
				var url = "http://PayPall.com";    
				$(location).attr('href',url);
			}
		});

		//Validating for the Contact Section

        // <!--Name can't be blank and should be alphabets-->
        $('#name-contact').blur('input', function() {
            var input=$(this);
            var regx = /^[a-zA-Z.!*-/=?^_`{|}~-]*$/;
            var is_name=regx.test(input.val());
            if ( input.val().length > 0 && is_name ) {
                input.removeClass("info").addClass("success");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("success").addClass("info");
                input.next("span").remove();                        
                input.after('<span style="color:#333333;margin-right:111px;font-size:13px;font-weight:100;"><br/>Name is required. Digits NOT allowed.<br/></span>');
            }
        });

        // <!--Email must be an email address format-->
        $('#email-contact').blur('input', function() {
            var input=$(this);
            var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var is_email=regx.test(input.val());
            if ( input.val().length > 0 && is_email ) {
                input.removeClass("info").addClass("success");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("success").addClass("info");
                input.next("span").remove();                        
                input.after('<span style="color:#333333;font-size:13px;font-weight:100;"><br/>Email address format is incorrect.<br/></span>');
            }
        }); 

        // <!--Email must be an email address format-->
        $('#comment-contact').blur('input', function() {
            var input=$(this);
            var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-][a-zA-Z0-9-]+)*$/;
            var is_email=regx.test(input.val());
            if ( input.val().length > 0 && is_email ) {
                input.removeClass("info").addClass("success");
                input.next("span").remove();                        
            }
            else{
                input.removeClass("success").addClass("info");
                input.next("span").remove();                        
                input.after('<span style="color:#333333;font-size:13px;font-weight:100;"><br/>Email address is required.<br/></span>');
            }
        }); 

	    //validates if the field are not empty for the form with id SEND
		$("#send").click(function() {
		    if($("#name-contact").val().length==0 || $("#email-contact").val().length==0  || $("#comment-contact").val().length==0) {
		    	$("#contact-form").html('<p class="text-center" style="font-size:21px;font-weight:700;">ERROR!!! Fill the required fields.</p>').dialog({title:"Error"});
			}
			else {
				$("#contact-form").html('<p class="text-center" style="font-size:21px;font-weight:700;">Thank you for your contact, we will get back to you as soon as possible.</p>').dialog({title:"Successful"});
			}
		});                       
    })
