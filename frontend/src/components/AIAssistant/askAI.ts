import { systemPrompts } from "../../utils/aiSystemPrompts";

export function askAI(
  language: string,
  question: string,
  aiModel: string,
  setAiAnswer: (aiAnswer: string) => void
) {
  // Prepare the request payload
  // const data = {
  //   messages: [
  //     {
  //       role: "user",
  //       content: question,
  //     },
  //   ],
  //   model: aiModel,
  // };
  const data = requestPayload(language, question, aiModel);

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
        content: systemPrompts[language],
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
