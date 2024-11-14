// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setColorThemeMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleColorThemeMode = () => {
    if (mode==='light') {
      setColorThemeMode('dark');
      document.body.style.backgroundColor = 'rgb(13, 17, 23)';
      document.body.style.colorScheme = 'dark';
      showAlert("Dark Mode has been toggled.", "success");
    }
    else {
      setColorThemeMode('light');
      document.body.style.colorScheme = 'light';
      document.body.style.backgroundColor = '#fff1d0';
      showAlert("Light Mode has been toggled.", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" toggleColorThemeMode={toggleColorThemeMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-5 py-5 px-5">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
