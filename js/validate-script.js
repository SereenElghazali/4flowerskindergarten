/**
 * Created by sa on 09/26/2017.
 */
$(document).ready(function () {

    $('.login-btn').click(function () {
        var name=$('#name').val();
        var password=$("#password").val();

        if((name == '') || (password == "")){
            $("#warn").text(" * You must type name and password");
        }
        else{
            $("#warn").text("  You can login..... thanks");
        }
    });


    $('#regest-btn').click(function(e) {

        var sEmail = $('#email-val').val();

        if ($.trim(sEmail).length == 0) {
            $("#email-val-text").text('Please enter valid email address');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $("#email-val-text").text('Email is valid');
            e.preventDefault();
        }
        else {
            $("#email-val-text").text('Invalid Email Address');
            e.preventDefault();
        }

    });









});





function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}