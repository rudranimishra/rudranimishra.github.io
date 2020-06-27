function contactform(){
    $('#contact-form').submit(function(e){
        var Name=document.getElementById('inputName'),
            Email=document.getElementById('inputEmail'),
            Phone_no=document.getElementById('inputPhone_no'),
            Message=document.getElementById('inputMessage');

        if(!Name.value || !Email.value || !Phone_no.value || !Message.value){
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
