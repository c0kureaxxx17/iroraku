import './App.css';
import { useState,useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMessage(data.message);
      })
      .catch(error => {
        console.log("失敗しました");
    });
  })
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{ message }</p>
    </div>
  );
}

export default App;