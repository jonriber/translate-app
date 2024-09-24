import { useState } from 'react'
import './App.css'
import LanguageInput from './components/language-input';
import LanguageList from './components/language-list';
import LanguageOutput from './components/language-output';

function App() {
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("en");


  return (
    <div className='bg-blue-100'>
      <LanguageInput />
      <LanguageList />
      <LanguageOutput />
    </div>
  )
}

export default App
