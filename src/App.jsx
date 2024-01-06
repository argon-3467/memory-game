import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [animal, setAnimal] = useState({ value: 'cat', label: 'Cats' });
  // 5 is easy 10 is medium 20 is hard
  const [difficulty, setDifficulty] = useState({ value: 10, label: 'Medium' });
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem('bestScore')) || 0
  );

  useEffect(() => {
    localStorage.setItem('bestScore', bestScore);
  }, [bestScore]);

  function changeScore(s) {
    setScore(s);
    if (bestScore < s) setBestScore(s);
  }

  function changeAnimal(obj) {
    setAnimal(obj);
    setScore(0);
  }

  function changeDifficulty(obj) {
    setDifficulty(obj);
    setScore(0);
  }

  return (
    <>
      <Header
        animal={animal}
        difficulty={difficulty}
        onAnimalChange={changeAnimal}
        onDifficultyChange={changeDifficulty}
        scores={{ score, bestScore }}
      />
      <Main
        key={difficulty.value + animal.value}
        animal={animal}
        difficulty={difficulty}
        onScoreChange={changeScore}
      />
      <Footer />
    </>
  );
}

export default App;
