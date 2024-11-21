import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState('')

  const generateQuote = async () => {
    const response = await axios.post('https://helloworld-rgzyvy3rca-uc.a.run.app', {
      content: "Write me a demotivational quote. This should make my day worse.", // Ensure capturedText is defined in your component
      prompt: "You are an intelligent assistant"        // Ensure prompt is defined in your component
    });
    setQuote(response.data); // Adjust based on the actual structure of the response
  }

  return (
    <>
      <h1>Random Quote Generator</h1>
      <div className="card">
        <button onClick={generateQuote}>Be nice to me</button>
        {quote && <p>{quote}</p>}
      </div>
    </>
  )
}

export default App
