import './App.css'
import PhraseCard from './components/PhraseCard'
import phrases from './db/phrases.json'
import { getRandomElement } from './utils/random'
import { useState } from 'react'

const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {
  const [phrase, setPhrase] = useState(getRandomElement(phrases));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds));

  const handleChangePhrase = () => {
    setPhrase(getRandomElement(phrases));
    setCurrentBg(getRandomElement(backgrounds))
  };

  return (
    <>
      <main className={`app ${currentBg}`}>

        <PhraseCard phrase={phrase} handleChangePhrase={handleChangePhrase} />

      </main>
    </>
  )
}

export default App
