import emailjs from "@emailjs/browser";

export const sendEmails = async (data) => {
  try {
    await emailjs.send(
      "service_01k2d2o",           // your service id
      "template_nnxb0ho",          // admin template
      data,
      "eoZBBNGfkfAbMYQ4F"            // only public key needed
    );

    await emailjs.send(
      "service_01k2d2o",           // same service
      "template_t3ufns6",          // client template
      data,
      "eoZBBNGfkfAbMYQ4F"
    );

    console.log("Emails sent from frontend");

  } catch (error) {
    console.log("EmailJS frontend error:", error);
  }
};
