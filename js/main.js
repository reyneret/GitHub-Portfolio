const form = document.querySelector("#message-form");

if (form) {
  const status = document.querySelector("#form-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.dataset.state = "";

    if (!form.reportValidity()) {
      return;
    }

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !subject || !message) {
      status.dataset.state = "error";
      status.textContent = "Fill in your name, email, subject, and message.";
      return;
    }

    if (form.elements.honey.value) {
      status.dataset.state = "success";
      status.textContent = "Message sent. Reyner will read it by email.";
      form.reset();
      return;
    }

    const payload = {
      name,
      email,
      subject,
      message,
      _subject: subject,
      _replyto: email,
      _template: "table",
      _captcha: "false",
    };

    button.disabled = true;
    const previousLabel = button.textContent;
    button.textContent = "Sending…";

    try {
      const response = await fetch("https://formsubmit.co/ajax/reynerelazaro@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      if (data.success !== "true" && data.success !== true) {
        throw new Error("Not accepted");
      }

      form.reset();
      status.dataset.state = "success";
      status.textContent = "Message sent. A copy is on its way to Reyner’s inbox.";
    } catch (error) {
      status.dataset.state = "error";
      status.textContent = "The message could not be sent. Email reynerelazaro@gmail.com directly.";
    } finally {
      button.disabled = false;
      button.textContent = previousLabel;
    }
  });
}
