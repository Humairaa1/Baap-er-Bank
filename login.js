document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passField = document.getElementById('pass-field');
    const password = passField.value;
     
    if (email === 'humaira71bd@gmail.com' && password === 'humaira'){
        window.location.href = ('bank.html');
    }
    else{
        alert('Your email or password are wrong');
    }
})