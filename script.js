function sendMessage() {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;
  const responseDiv = document.getElementById("response");

  // Ensure there's a message to send
  if (message.trim() === "") {
    alert("Please enter a message.");
    return;
  }

  // Prepare the request payload
  const data = {
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    model: "llama3-8b-8192", // Example model, replace with your actual model if different
  };

  fetch("https://fxclub-cs-assistant.onrender.com/get-groq-chat-completion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Assuming the API response structure, adjust according to the actual response
      const replyMessage =
        data.choices[0]?.message?.content ||
        "Sorry, I couldn't understand that.";
      responseDiv.textContent = `Bot: ${replyMessage}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      responseDiv.textContent = "Error sending message.";
    });

  // Clear input after sending
  messageInput.value = "";
}

// Prevent form from submitting traditionally, if you have a form element
document
  .getElementById("chatForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();
  });
