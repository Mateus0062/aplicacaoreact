import React, { useState } from 'react';

const Fotos = () => {
    
    const [photos, setPhotos] = useState([]);

    const handlePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newPhoto = URL.createObjectURL(file);
            setPhotos((prevPhotos) => [..prevPhotos, newPhoto]);
        }
    }
    
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