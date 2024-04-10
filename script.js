const passwordsInputs = document.querySelectorAll('input[type=password]');
function passwordsMatch(){
    console.log(passwordsInputs[0]!=passwordsInputs[1] && passwordsInputs[0].value!='' && passwordsInputs[1].value!='')
    if(passwordsInputs[0].value=='' || passwordsInputs[1].value=='')
        document.getElementById('passwordError').style.visibility = 'hidden'
    else {
        if(passwordsInputs[0].value!=passwordsInputs[1].value)
            document.getElementById('passwordError').style.visibility = 'visible'
        else
            document.getElementById('passwordError').style.visibility = 'hidden'
    }
}