function contactform(){
    $('#contact-form').submit(function(e){
        var firstname=document.getElementById('inputFirstName'),
            lastname=document.getElementById('inputLastName'),
            email=document.getElementById('inputEmail'),
            std=document.getElementById('inputStandard'),
            msg=document.getElementById('inputMessage');

        if(!firstname.value || !lastname.value || !email.value || !std.value || !msg.value){
            alertify.error('please check your entries')
        }else{
            $.ajax({
                url:"https://formspree.io/shivanirmishra007@gmail.com",
                method:"POST",
                data:$(this).serialize(),
                dataType:"json"
            });
            e.preventDefault()
            $(this).get(0).reset()
            alertify.success('message sent')
        }
        
    })
}
