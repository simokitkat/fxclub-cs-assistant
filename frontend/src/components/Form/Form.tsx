import React from "react";
import { aiModels } from "../../utils/aiModels";

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
      {isAI && (
        <select name="model">
          {aiModels.map((model) => {
            return (
              <option value={model} key={model}>
                {model}
              </option>
            );
          })}
        </select>
      )}
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
