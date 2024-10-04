import React, { useState } from 'react';
import '../Css/Fotos.css';

const Fotos = () => {
  const [photos, setPhotos] = useState([]);

  // Fun��o para lidar com o upload de uma nova foto
  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file); // cria um link tempor�rio para exibir a imagem
      setPhotos((prevPhotos) => [...prevPhotos, newPhoto]);
    }
  };

  return (
    <div>
      <h1>Photo Library</h1>
      
      {/* Formul�rio para adicionar novas fotos */}
      <input type="file" accept="image/*" onChange={handleAddPhoto} />
      
      {/* Exibindo as fotos */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {photos.map((photo, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={photo} alt={`Photo ${index + 1}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fotos;
