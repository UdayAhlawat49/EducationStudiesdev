  
    $(document).ready(function(){
 
  //  *************************************** collapse show more and show less 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
  })


   // Use a common class for all forms
$(".form-validation").each(function () {
    $(this).validate({
        rules: {
            // Define rules for each form
            firstName: "required",
            email: {
                required: true,
                email: true,
            },
            mobileNum: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
            },
            Courses: "required",
            Address: "required",
        },
        messages: {
            // Define messages for each form
            firstName: "Please enter your first name",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address",
            },
            mobileNum: {
                required: "Please enter your mobile number",
                number: "Please enter a valid number",
                minlength: "Mobile number must be 10 digits",
                maxlength: "Mobile number must be 10 digits",
            },
            Courses: "Please enter the courses",
            Address: "Please enter your address",
        },
        errorPlacement: function (error, element) {
            // Customize error placement if needed
            error.insertAfter(element);
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            // Your existing AJAX logic goes here

            $.ajax({
                type: "POST",
                url: "/admin",
                data: $(form).serialize(),
                success: function (data, status) {
                    console.log("DataReturn:", data);
                    console.log("Status:", status);

                    // Remove previous error messages
                    $(form).find('.error-message').remove();
                    $(form).find('.success').remove();

                    if (data.errors) {
                        data.errors.forEach(err => {
                            var inputName = err.path;
                            var errorMessage = err.msg;
                            $('[name="' + inputName + '"]', form).after('<div class="error-message">' + errorMessage + '</div>');
                        });
                    }

                    if (data.msg && status === "success") {
                        const message = data.msg;
                        console.log("message", message);

                        // Check for specific messages related to email and phone duplication
                        if (message === "Email already exists" || message === "Mobile number already exists" || message === "Email and Mobile number already exist") {
                            $(form).append('<div class="error-message">' + message + '</div>');
                        } else {
                            // Display success message for other cases
                            $(form).append('<h4 class="success">' + message + '</h4>');
                        }
                    }
                    // Additional logic after successful submission
                },
                error: function (xhr, status, error) {
                    console.error("Error:", error);
                }
            });
        },
    });
});

 
    // Custom email validation using regex
//     $.validator.addMethod("customEmail", function (value, element) {
//                 // Modify the regular expression according to your needs
//                 return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
//             }, "Please enter a valid email address");

//   $("#addRegisterForm").validate({
//       rules: {
//           firstName: "required",
//           email: {
//                         required: true,
//                         customEmail: true
//                     },
//           mobileNum: {
//                         required: true,
//                         number: true,
//                         minlength: 10,
//                         maxlength: 10
//                     },
//           Courses: "required",
//           Address: "required",
//       },
//       messages: {
//           firstName: "Please enter your first name",
//           email: {
//                         required: "Please enter your email address"
//                     },
//           mobileNum: {
//                         required: "Please enter your mobile number",
//                         number: "Please enter a valid number",
//                         minlength: "Mobile number must be 10 digits",
//                         maxlength: "Mobile number must be 10 digits"
//                     },
//           Courses: "Please enter the courses",
//           Address: "Please enter your address",
//       },
      
//                 errorPlacement: function (error, element) {
//                     // Customize error placement if needed
//                     error.insertAfter(element);
//                 },
//       submitHandler:function(form ,event){
       
//         event.preventDefault()
//         // console.log($(form).serialize())
//         $.ajax({
//                 type: "POST",
//                 url: "/admin",
//                 data: $(form).serialize(),
//                 success: function (data, status) {
//                     console.log("DataReturn:", data);
//                     console.log("Status:", status);

//                     // Remove previous error messages
//                     $('.error-message').remove();
//                     $('.success').remove();

//                     if (data.errors) {
//                         data.errors.forEach(err => {
//                             var inputName = err.path;
//                             var errorMessage = err.msg;
//                             $('[name="' + inputName + '"]').after('<div class="error-message">' + errorMessage + '</div>');
//                         });
//                     }

//                     if (data.msg && status === "success") {
//                         const message = data.msg;
//                         console.log("message" , message)
//                         // Check for specific messages related to email and phone duplication
//                         if (message === "Email already exists") {
//                             $('#addRegisterForm').append('<div class="error-message">' + message + '</div>');
//                         } else if (message === "Mobile number already exists") {
//                             $('#addRegisterForm').append('<div class="error-message">' + message + '</div>');
//                         } else if (message === "Email and Mobile number already exist") {
//                             // Handle the case where both email and mobile are duplicated
//                             $('#addRegisterForm').append('<div class="error-message">' + message + '</div>');
//                         } else {
//                             // Display success message for other cases
//                             $('#addRegisterForm').append('<h4 class="success">' + message + '</h4>');
//                         }
//                     }
//                     // Additional logic after successful submission
//                 },
//                 error: function (xhr, status, error) {
//                     console.error("Error:", error);
//                 }
//             });

//     }
//   });

 

  
})

document.addEventListener("DOMContentLoaded", function () {
    // Check if the form pop-up has been displayed
    if (!localStorage.getItem("formPopupDisplayed")) {
        // Show the form pop-up
        showFormPopup();
    }
});

function showFormPopup() {
    var formPopup = document.getElementById("formPopup");
    if (formPopup) {
        formPopup.style.display = "flex";
    }
}

function closeFormPopup() {
    var formPopup = document.getElementById("formPopup");
    if (formPopup) {
        formPopup.style.display = "none";
        // Mark the form pop-up as displayed in local storage
        localStorage.setItem("formPopupDisplayed", "true");
    }
}
   