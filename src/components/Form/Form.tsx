import React from "react";

interface FormProps {
  submitText: string;
  name: string;
  placeHolderText: string;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export default function Form({
  submitText,
  name,
  placeHolderText,
  onSubmit,
}: FormProps) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
