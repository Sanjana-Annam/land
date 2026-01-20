const confirmBooking = async () => {
  try {
    setLoading(true);

    const stored = localStorage.getItem("leadData");

    if (!stored) {
      alert("Session expired. Please fill the form again.");
      navigate("/");
      return;
    }

    const formData = JSON.parse(stored);

    const finalData = {
      ...formData,
      date,
      time,
      mode,
    };

    console.log("Sending to API:", finalData);

    // Call backend (sheet + whatsapp)
    try {
      await fetch(
        "https://landbackend-q5xj.onrender.com/api/book-meeting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        }
      );
    } catch (apiError) {
      console.log("API call failed but continuing:", apiError);
    }

    // Trigger emails in background – DO NOT AWAIT
    try {
      sendEmailsFromFrontend(finalData);
    } catch (emailError) {
      console.log("Email sending error:", emailError);
    }

    // Immediately redirect user
    navigate("/thank-you");

  } catch (error) {
    console.log("Booking error:", error);
    navigate("/thank-you");
  } finally {
    setLoading(false);
  }
};
