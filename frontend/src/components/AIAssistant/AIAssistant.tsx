import { useState } from "react";
import Form from "../Form/Form";
import classes from "./ai-assistant.module.scss";
import { askAI } from "./askAI";
/*
interface FormProps {
  submitText: string;
  name: string;
  isAI?: boolean;
  placeHolderText: string;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}
*/

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
    console.log(formDataObject);

    askAI(language, question, model, setAiAnswer);
  }

  return (
    <section className={classes["ai-assistant"]}>
      <Form
        submitText="Generate Answer"
        name="ai-question"
        placeHolderText="Enter your question"
        isAI={true}
        onSubmit={handleSubmit}
      />

      <pre className={classes["ai-answer"]}>{aiAnswer}</pre>
    </section>
  );
}
