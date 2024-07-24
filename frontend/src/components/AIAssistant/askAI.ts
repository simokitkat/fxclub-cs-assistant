import { systemPrompts } from "../../utils/aiSystemPrompts";

export function askAI(
  language: string,
  question: string,
  aiModel: string,
  setAiAnswer: (aiAnswer: string) => void
) {
  // Prepare the request payload
  const data = requestPayload(question, aiModel, language);

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
      const aiAnswer = `${replyMessage}`;
      setAiAnswer(aiAnswer);
    })
    .catch((error) => {
      console.error("Error:", error);
      const aiAnswer = "Error sending message.";
      setAiAnswer(aiAnswer);
    });
}

function requestPayload(question: string, aiModel: string, language: string) {
  const data = {
    messages: [
      {
        role: "system",
        content:
          language === "uzbek"
            ? systemPrompts.uzbek
            : language === "russian"
            ? systemPrompts.russian
            : systemPrompts.english,
      },
      {
        role: "user",
        content: question,
      },
    ],
    model: aiModel,
  };

  return data;
}
