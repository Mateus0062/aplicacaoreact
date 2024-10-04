import React, { useState, useEffect } from 'react';
import '../Css/Fotos.css';

const PhotoLibrary = () => {
  const [photos, setPhotos] = useState([]);

  // Recuperar fotos do localStorage quando o componente é montado
  useEffect(() => {
    const storedPhotos = localStorage.getItem('photos');
    if (storedPhotos) {
      setPhotos(JSON.parse(storedPhotos));
    }
  }, []);

  // Função para lidar com o upload de uma nova foto
  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file); // cria um link temporário para exibir a imagem

      // Atualiza o estado com a nova foto
      const updatedPhotos = [...photos, newPhoto];
      setPhotos(updatedPhotos);

      // Salva as fotos no localStorage
      localStorage.setItem('photos', JSON.stringify(updatedPhotos));
    }
  };

  return (
    <div>
      <h1>Photo Library</h1>
      
      {/* Formulário para adicionar novas fotos */}
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

export default PhotoLibrary;