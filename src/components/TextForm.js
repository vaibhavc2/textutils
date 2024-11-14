import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState((localStorage.getItem('TEXT') != null)? (localStorage.getItem('TEXT')) : '');
    // const [text, setText] = useState(localStorage.getItem('TEXT'));
    // const [text, setText] = useState('Enter text here');
    // const [text, setText] = useState('');
    function populateStorage() {
        localStorage.setItem('TEXT', text);
    }
    populateStorage();
    function backupText() {
        localStorage.setItem('BackupTEXT', text);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpperCaseClick = () => {
        backupText();
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase.", "success");
    }
    const handleLowerCaseClick = () => {
        backupText();
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase.", "success");
    }
    const handleClearText = () => {
        backupText();
        setText('');
        props.showAlert("Text Cleared!", "danger");
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied.", "success");
    }
    const handleRemoveAllWhitespaces = () => {
        backupText();
        setText(text.replace(/\s+/g, '')); // regex for space: /\s+/g
        // setText(text.replaceAll(" ", ''));
        props.showAlert("Removed All The Whitespaces in the text.", "danger");
    }
    const handleUndo = () => {
        setText(localStorage.getItem('BackupTEXT'));
        backupText();
        props.showAlert("Reverted the Previous Change.", "warning");
    }
    const handleRemoveExtraWhitespaces = () => {
        backupText();
        // setText(text.replace(/\s+/g, ' ').trim()); // removes "\n" as well!
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert("Removed All Extra Whitespaces in the text.", "success");
    }
    function countWords(str) {
        if (text === '') return 0;
        // const n = str.split(" ").length;
        const n = str.trim().split(/\s+/).length;
        return n;
    }
    const calculateMinutes = () => {
        if(text === '') return 0;
        const m = Math.floor(0.008 * text.split(" ").length);
        return m;
    }
    const calculateSeconds = () => {
        if(text === '') return 0;
        const s = Math.round(((0.008 * text.split(" ").length) - calculateMinutes()) * 60);
        return s;
    }
    const fontStyle = {
        fontFamily: "ui-monospace",
    };
    const textTheme = () => {
        if(props.mode === 'dark') return 'light';
        else return 'dark';
    }
    return (
      <>
        <div className="container" data-bs-theme={`${props.mode}`}>
          <div className="container" data-bs-theme={`${props.mode}`}>
              <label htmlFor="text-box" className={`form-label text-${textTheme()}`}><h2>{props.heading}</h2></label>
              <textarea className={`form-control fs-5 bg-${props.mode}`} style={fontStyle} value={text} id="text-box" rows="7" onChange={handleOnChange}></textarea>
              <div className="container my-4">
                <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-info" onClick={handleRemoveExtraWhitespaces}>Remove Extra Whitespaces</button>
                <button className="btn btn-danger mx-3" onClick={handleRemoveAllWhitespaces}>Remove All Whitespaces</button>
                <button className="btn btn-success" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-warning mx-3" onClick={handleUndo}>Undo</button>
                <button className="btn btn-danger" onClick={handleClearText}>Clear Text</button>
              </div>
              <div className="container">
                <div className={`fw-bold text-${textTheme()}`}>Text Summary</div>
                <div className={`fs-6 my-1 text-${textTheme()}`}>{countWords(text)} words, {text.length} characters</div>
                <div className={`my-2 fst-italic fs-6 text-${textTheme()}`}>Will take {calculateMinutes()} minutes and {calculateSeconds()} seconds to read</div>
              </div>
          </div>
        </div>
      </>
  )
}