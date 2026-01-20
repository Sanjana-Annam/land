import emailjs from "@emailjs/browser";

export const sendEmails = async (data) => {
  try {
    console.log("Calling EmailJS from frontend with data:", data);

    await emailjs.send(
      "service_01k2d2o",
      "template_nnxb0ho",
      data,
      "eoZBBNGfkfAbMYQ4F"
    );

    await emailjs.send(
      "service_01k2d2o",
      "template_t3ufns6",
      data,
      "eoZBBNGfkfAbMYQ4F"
    );

    console.log("Emails sent successfully from frontend");

  } catch (error) {
    console.log("EmailJS frontend error:", error);
  }
};
