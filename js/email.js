function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "email",
    Password: "Password",
    To: 'email',
    From: document.getElementById("inputEmail").value,
    Subject: "New Contact Form Submission",
    Body: "NAME: " + document.getElementById("formGroupName").value
    + "<br> EMAIL: " + document.getElementById("inputEmail").value
    + "<br> PHONE NO: " + document.getElementById("formGroupPhoneNo").value
    + "<br> MESSAGE: " + document.getElementById("Textarea").value
  }).then(
    message => alert("Submitted Successfully !!!")
  );
}
