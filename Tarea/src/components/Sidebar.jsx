import React from 'react';

const Sidebar = () => {
  console.log("Renderizando Sidebar..."); 

  return (
    <aside className="panel" style={{ width: '200px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h2>🎮 Menú</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button>📊 Estadísticas</button>
        <button>🌍 Servidores</button>
        <button>🎒 Inventario</button>
        <button>⚙️ Ajustes</button>
      </nav>
    </aside>
  );
};


export default React.memo(Sidebar);
