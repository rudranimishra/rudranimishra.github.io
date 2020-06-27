function contactform(){
    $('#contact-form').submit(function(e){
        var Name=document.getElementById('inputFirstName'),
            Surname=document.getElementById('inputLastName'),
            Email=document.getElementById('inputEmail'),
            Phone_no=document.getElementById('inputPhone'),
            Message=document.getElementById('inputMessage');

        if(!firstname.value || !lastname.value || !email.value || !phone.value || !msg.value){
            alertify.error('please check your entries')
        }else{
            $.ajax({
                url:"https://formspree.io/rudrani.mishra2@gmail.com",
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
