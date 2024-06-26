import React, { useState } from "react";

export default function TextArea() {
  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };
  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearTextFunc = () => {
    setText("");
  };

  const toggleBold = () => {
    setBold(!isBold);
  };

  const toggleItalic = () => {
    setItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setUnderline(!isUnderline);
  };

  const [text, setText] = useState("");
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  return (
    <>
      <div className="container">
        <div className="mb-3 text-center my-2">
         
          <hr />
          <div id="threeBtn">
            <button
              type="button"
              title="Bold"
              className={`btn btn-danger mx-1 ${isBold ? "active" : ""}`}
              onClick={toggleBold}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-type-bold"
                viewBox="0 0 16 16"
              >
                <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
              </svg>
            </button>
            <button
              type="button"
              title="Italic"
              className={`btn btn-danger mx-1 ${isItalic ? "active" : ""}`}
              onClick={toggleItalic}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-type-italic"
                viewBox="0 0 16 16"
              >
                <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
              </svg>
            </button>
            <button
              type="button"
              title="Underline"
              className={`btn btn-danger mx-1 my-3 ${
                isUnderline ? "active" : ""
              }`}
              onClick={toggleUnderline}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-type-underline"
                viewBox="0 0 16 16"
              >
                <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9z" />
              </svg>
            </button>
            <hr />
          </div>

          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter your text here..."
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
            }}
          ></textarea>
        </div>
       
        <button
          type="button"
          className="btn btn-danger float-end   mx-3 my-2"
          onClick={convertToUpperCase}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="btn btn-danger  float-end  mx-3 my-2"
          onClick={convertToLowerCase}
        >
          Convert to Lower Case
        </button>
        <button className="btn btn-danger my-1 " onClick={clearTextFunc}>
          Clear Text
        </button>
      </div>
      <hr />
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((e)=>{return e.length !==0}).length}{" "}
          {text.split(" ").filter((e)=>{return e.length !==0}).length !== 1 ? "words " : "word "}‎ |‎ ‎{" "}
          {text.length} {text.length == 1 ? "character" : "characters"}
        </p>
      </div>

      <div className="bottom-0 bg-dark ">COPYRIGHT © TextiFy 2023 </div>
    </>
  );
}
