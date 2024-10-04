import React, { useState } from 'react';
import '../Css/Fotos.css';

const Fotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
      const storedPhotos = localStorage.getItem('photos');
      if (storedPhotos) {
          setPhotos(JSON.parse(storedPhotos));
      }
  }, []);

  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = URL.createObjectURL(file); // cria um link temporário para exibir a imagem
      
      const updatedPhotos = [..photos, newPhoto];
      setPhotos(updatedPhotos);

      localStorage.setItem('photos', JSON.stringfy(updatedPhotos))
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

export default Fotos;
