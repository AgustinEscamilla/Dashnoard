import { useState } from 'react';

const UserPanel = () => {
  // Convertimos la lista en un arreglo de objetos para manejar el estado de cada uno
  const [equipo, setEquipo] = useState([
    { id: 1, nombre: 'Agustin', activo: true },
    { id: 2, nombre: 'Arturo', activo: false },
    { id: 3, nombre: 'Leonardo', activo: false },
    { id: 4, nombre: 'Joely', activo: false },
    { id: 5, nombre: 'William', activo: false },
  ]);

  // Esta función cambia el estado solo del usuario al que le damos clic
  const toggleEstado = (id) => {
    setEquipo(equipo.map(miembro => 
      miembro.id === id ? { ...miembro, activo: !miembro.activo } : miembro
    ));
  };

  return (
    <div className="panel" style={{ padding: '20px', marginBottom: '20px' }}>
      <h2>👥 Equipo de Supervivencia</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
        {equipo.map(miembro => (
          <div 
            key={miembro.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '10px', 
              backgroundColor: 'rgba(128, 128, 128, 0.1)', 
              borderRadius: '5px' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{miembro.activo ? '🛡️' : ''}</span>
              <span style={{ 
                fontWeight: miembro.activo ? 'bold' : 'normal', 
                color: miembro.activo ? '#4CAF50' : 'inherit' 
              }}>
                {miembro.nombre}
              </span>
            </div>
            
            <button 
              onClick={() => toggleEstado(miembro.id)}
              style={{ 
                padding: '6px 12px', 
                cursor: 'pointer',
                backgroundColor: miembro.activo ? '#4CAF50' : '#555',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              {miembro.activo ? '✅ Activo' : '❌ Desactivado'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPanel;