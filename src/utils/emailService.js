import emailjs from "@emailjs/browser";

export const sendEmailsFromFrontend = async (data) => {
  try {
    console.log("Calling EmailJS from frontend with data:", data);

    // ADMIN EMAIL
    await emailjs.send(
      "service_01k2d2o",        // YOUR SERVICE ID
      "template_nnxb0ho",       // ADMIN TEMPLATE ID
      data,
      "eoZBBNGfkfAbMYQ4F"       // YOUR PUBLIC KEY
    );

    console.log("Admin email request sent");

    // CLIENT EMAIL
    await emailjs.send(
      "service_01k2d2o",        // SAME SERVICE ID
      "template_t3ufns6",       // CLIENT TEMPLATE ID
      data,
      "eoZBBNGfkfAbMYQ4F"       // SAME PUBLIC KEY
    );

    console.log("Client email request sent");
    console.log("Emails sent successfully from frontend");

  } catch (error) {
    console.log("EmailJS frontend error:", error);
  }
};
