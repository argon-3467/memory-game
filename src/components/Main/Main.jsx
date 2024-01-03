import ImgCard from './ImageCard';
import { useEffect, useState } from 'react';
import shuffleArray from '../../utils/shuffleArray';
import fetchImages from '../../utils/fetchData';

export default function Main({ animal, difficulty, onScoreChange }) {
  const [isLoading, setisLoading] = useState(true);
  const [imgList, setImgList] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchImages(animal, difficulty)
      .then((result) => {
        if (!ignore) {
          setImgList(result);
          setisLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err);
      });

    return () => {
      ignore = true;
    };
  }, [animal, difficulty]);

  function onImgClick(id) {
    if (selectedIds.includes(id)) setGameOver(true);
    else {
      if (selectedIds.length === imgList.length - 1) {
        setGameOver(true);
      }
      setSelectedIds([...selectedIds, id]);
      setImgList(shuffleArray(imgList));
      onScoreChange(selectedIds.length + 1);
    }
  }

  if (error) {
    return (
      <div className="main">
        <p>Sorry Cannot fetch images. Try again later...</p>
        <p>API response: {error.message}</p>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="gameOverScreen">
        <h1>Game Over</h1>
        <h2>
          Score : {selectedIds.length} / {imgList.length}{' '}
        </h2>
        <button
          onClick={() => {
            setGameOver(false);
            setSelectedIds([]);
            onScoreChange(0);
          }}
        >
          Restart
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="main">
        <div className="img-container">
          <ImgCard img={null} onImgClick={() => {}} />
          <ImgCard img={null} onImgClick={() => {}} />
          <ImgCard img={null} onImgClick={() => {}} />
        </div>
      </div>
    );
  }
  return (
    <div className="main">
      <div className="img-container">
        {imgList.map((img) => (
          <ImgCard key={img.id} img={img} onImgClick={onImgClick} />
        ))}
      </div>
    </div>
  );
}
