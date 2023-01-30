function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    mail: document.getElementById("mail").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_qd3nixi";
  const templateID = "template_rm5e7c7";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").values = "";
      document.getElementById("mail").values = "";
      document.getElementById("message").values = "";
      console.log(res);
      alert(
        "Your message sent successfully. I will respond as soon as possible"
      );
    })
    .catch((err) => console.log(err));
}
