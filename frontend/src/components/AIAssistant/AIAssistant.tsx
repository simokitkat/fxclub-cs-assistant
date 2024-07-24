import { useState } from "react";
import Form from "../Form/Form";
import classes from "./ai-assistant.module.scss";
import { askAI } from "./askAI";
import { toast, ToastContainer } from "react-toastify";

export default function AIAssistant() {
  const [aiAnswer, setAiAnswer] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAiAnswer("");

    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData.entries());
    const question = formDataObject["ai-question"] as string;
    const model = formDataObject.model as string;
    const language = formDataObject.language as string;

    if (!question || !model || !language) {
      return;
    }

    console.log(formDataObject);

    askAI(language, question, model, setAiAnswer);
  }

  async function handleDecodedLinkCopy() {
    if (!aiAnswer) return;
    await navigator.clipboard.writeText(aiAnswer);
    toast.success("Your Email is copied!");
  }

  return (
    <section className={classes["ai-assistant"]}>
      <div className={classes.container}>
        <Form
          submitText="Generate Answer"
          name="ai-question"
          placeHolderText="Enter your question"
          isAI={true}
          onSubmit={handleSubmit}
        />

        {aiAnswer && (
          <>
            <pre>
              {aiAnswer}
              <button onClick={handleDecodedLinkCopy}>Copy</button>
            </pre>
            <ToastContainer />
          </>
        )}
      </div>
    </section>
  );
}
