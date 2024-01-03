import Select from 'react-select';

export default function Header({
  animal,
  difficulty,
  onAnimalChange,
  onDifficultyChange,
  scores,
}) {
  const animalSelectData = [
    {
      value: 'cat',
      label: 'Cats',
    },
    {
      value: 'dog',
      label: 'Dogs',
    },
  ];
  const difficultySelectData = [
    {
      value: 5,
      label: 'Easy',
    },
    {
      value: 10,
      label: 'Medium',
    },
    {
      value: 20,
      label: 'Hard',
    },
  ];
  const selectStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      color: 'black',
      cursor: 'pointer',
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      color: 'black',
      cursor: 'pointer',
    }),
  };
  return (
    <div className="header">
      <div className="logo">
        <h1>Memory Game</h1>
        <p>Try not to click same image more than 1 time</p>
      </div>
      <div className="options">
        <Select
          styles={selectStyles}
          placeholder={animal.label}
          value={animal}
          options={animalSelectData}
          onChange={onAnimalChange}
        />
        <Select
          styles={selectStyles}
          placeholder={difficulty.label}
          value={difficulty}
          options={difficultySelectData}
          onChange={onDifficultyChange}
        />
      </div>
      <div className="score">
        <div className="curr-score">Current Score: {scores.score}</div>
        <div className="best-score">Best Score: {scores.bestScore} </div>
      </div>
    </div>
  );
}
