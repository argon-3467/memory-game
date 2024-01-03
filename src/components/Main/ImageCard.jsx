import { useState } from 'react';

export default function ImgCard({ img, onImgClick }) {
  const [loaded, setLoaded] = useState(false);

  if (!img) {
    return (
      <button className="img-card">
        <div className="shimmer"></div>
        <p className="breed">Loading...</p>
      </button>
    );
  }

  let name = img.breeds[0]?.name || 'Not available';
  return (
    <button className="img-card" onClick={() => onImgClick(img.id)}>
      {!loaded && <div className="shimmer"></div>}
      <img
        src={img.url}
        alt={name}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'block' : 'none' }}
      />
      <p className="breed">{name}</p>
    </button>
  );
}
