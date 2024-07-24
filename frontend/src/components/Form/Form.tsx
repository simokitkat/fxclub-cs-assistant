import React from "react";
import AISettings from "./AISettings";

interface FormProps {
  submitText: string;
  name: string;
  isAI?: boolean;
  placeHolderText: string;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export default function Form({
  submitText,
  name,
  placeHolderText,
  onSubmit,
  isAI,
}: FormProps) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      {isAI && <AISettings />}
      <textarea
        name={name}
        placeholder={placeHolderText}
        cols={50}
        rows={10}
      ></textarea>
      <button type="submit">{submitText}</button>
    </form>
  );
}
