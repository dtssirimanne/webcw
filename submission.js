function nameValidate() {
    var name = document.getElementById('name').value.trim();
    var nameError = document.getElementById('name-error');

    if (name.length === 0) {
        nameError.innerHTML = 'Your name is required';
        nameError.style.textAlign = 'center';
        alert("Please enter your name.");
        return false;
    }

    nameError.innerHTML = '';
    return true;
}

function emailValidate() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');

    if (email.length === 0) {
        emailError.innerHTML = 'Your email is required';
        emailError.style.margin = '10px';
        emailError.style.textAlign = 'center';
        alert("Please enter your email.");
        return false;
    } else if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        emailError.innerHTML = 'Invalid Email entered';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}

function formValidation() {
    var isNameValid = nameValidate();
    var isEmailValid = emailValidate();

    // Ensure both name and email are valid before allowing form submission
    if (!isNameValid || !isEmailValid) {
        return false;
    }

    return true;
}


function navigate(){
    var noradiobutton = document.getElementById("no-first-time");
    var tip = document.getElementById("forms");

    if(noradiobutton.checked){
        tip.style.display = "block";

    }else{
        tip.style.display = "none";
    }
}
function previewForms() {
    const name = document.getElementsByName("name")[0].value;
    const visitYes = document.getElementById("yes-first-time");
    const visitNo = document.getElementById("no-first-time");
    const recommendYes = document.getElementById("yesrecommendation");
    const recommendNo = document.getElementById("norecommendation");
    const questions = document.getElementById("requests").value;

    let informations = "Name: " + name;

    if (visitYes.checked) {
        informations += "<br>Visited before: Yes";
    } else if (visitNo.checked) {
        informations += "<br>Visited before: No";
    }

    var rate = document.getElementsByName('rate');
    var ratings;

    for (var i = 0; i < rate.length; i++) {
        if (rate[i].checked) {
            ratings = rate[i].value;
            break;
        }
    }

    informations += "<br>Satisfaction out of 10: " + ratings;

    if (recommendYes.checked) {
        informations += "<br>Recommend to others?: Yes";
    } else if (recommendNo.checked) {
        informations += "<br>Recommend to others?: No";
    }
    
    informations += "<br>Questions: " + questions;

    // Open a new window
    var newWindow = window.open();
    
    // Write the preview content to the new window
    newWindow.document.write("<html><head><title>Feedback Form Preview</title><style>body { background-image: url(ocean.jpg); color: white; text-align: justify; }</style></head><body><h1 style='color: white; font-size: 32px;'><b>Preview</b></h1><br>" + informations + "<br><br><br><button onclick=\"window.opener.edit(); window.close();\">Edit</button></body></html>");

}


function edit() {
    let form = document.getElementById("feedbackform");
    let preview = document.getElementById("informations");

    preview.style.display = "none";
    form.style.display = "block";

}

function thank() {
    alert("Thank you for your response!");
}

function reload() {
    location.reload();
}