import { useState } from "react";
import PropTypes from "prop-types";

function TextForm({ mode, showAlert }) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    showAlert("success", "Textarea emptied!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("success", "Copied to clipboard");
  };

  const handleUcClick = () => {
    let UCText = text.toUpperCase();
    setText(UCText);
    showAlert("success", "Converted to uppercase!");
  };

  const handleLcClick = () => {
    let LCText = text.toLowerCase();
    setText(LCText);
    showAlert("success", "Converted to lowercase!");
  };

  const handleExtraSpaces = () => {
    let givenText = text.split(/\s+/);
    setText(givenText.join(" "));
    showAlert("success", "Extra spaces removed!");
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h3>Enter the text below</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: mode === "dark" ? "#1560bd" : "aliceblue",
              color: mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUcClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLcClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy textarea
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClear}
        >
          Clear textarea
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0)
              .length}{" "}
          minutes read
        </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default TextForm;
