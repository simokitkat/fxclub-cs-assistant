import { aiModels } from "../../utils/aiModels";
import { systemPrompts } from "../../utils/aiSystemPrompts";
import classes from "../AIAssistant/ai-assistant.module.scss";

export default function AISettings() {
  return (
    <div className={classes.settings}>
      <select name="language" defaultValue="Choose a language">
        <option value="Choose a language" disabled>
          Choose a language
        </option>
        {Object.keys(systemPrompts).map((language: string) => {
          return (
            <option value={language} key={language}>
              {language[0].toUpperCase() + language.slice(1)}
            </option>
          );
        })}
      </select>

      <select name="model" defaultValue="AI model">
        <option value="AI model" disabled>
          AI Model
        </option>
        {aiModels.map((model) => {
          return (
            <option value={model} key={model}>
              {model}
            </option>
          );
        })}
      </select>
    </div>
  );
}
