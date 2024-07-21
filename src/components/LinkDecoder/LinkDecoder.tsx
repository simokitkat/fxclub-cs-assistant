import React, { useState } from "react";
import Form from "../Form/Form";
import classes from "./link-decoder.module.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LinkDecoder() {
  const [link, setLink] = useState("");

  function handleLinkDecoding(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    setLink(decodeURI(formData.get("decode") as string));
  }

  async function handleDecodedLinkCopy() {
    if (!link) return;
    await navigator.clipboard.writeText(link);
    toast.success("Your link is copied!");
  }

  return (
    <section className={classes["link-decoder"]}>
      <div className={classes.container}>
        <h2>Enter your link below to decode it</h2>
        <Form
          submitText="Decode"
          name="decode"
          placeHolderText="Enter your link"
          onSubmit={handleLinkDecoding}
        />
        {link && (
          <div className={classes["link-details"]}>
            <p className={classes.link}>{link}</p>
            <button onClick={handleDecodedLinkCopy} className={classes.copy}>
              Copy
            </button>
          </div>
        )}
        <ToastContainer />
      </div>
    </section>
  );
}
