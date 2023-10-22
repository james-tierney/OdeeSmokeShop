emailjs.init("S1a-Yuu6Vg0TbaGTc");

function sendEmail(e) {
  e.preventDefault();
  const serviceID = "service_t19f9op";
  const templateID = "template_vg6e90r";
  const params = {
    from_name: document.getElementById("fullName").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(serviceID, templateID, params).then(
    function (res) {
      // Use Toastr for success notification
      alert("success!");
      //toastr.success("Message sent successfully");
    },
    function (error) {
      // Use Toastr for error notification
      //toastr.error("Message sending failed. Please try again later.");
      console.error("EmailJS error:", error);
    }
  );
}

const form = document.querySelector(".contact-form"); // Fixed the selector
form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendEmail(e);
});
