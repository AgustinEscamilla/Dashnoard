import { useState, useMemo } from 'react';
import Card from './Card';


const actividades = [
  { id: 1, juego: "Ark survival", accion: "Sobrevive a dinosaurios", tipo: "Supervivencia" },
  { id: 2, juego: "7 Days to Die", accion: "Sobrevivió a los zombis", tipo: "Supervivencia" },
  { id: 3, juego: "Conan Exiles", accion: "Pelea en el desierto contra dioses", tipo: "Combate" },
  { id: 4, juego: "Green Hell", accion: "Sobrevive a la selva", tipo: "Supervivencia" },
  { id: 5, juego: "Minecraft", accion: "Derrota al dragon", tipo: "Recolección, Aventura" },
];

const ActivityList = () => {
  const [filtro, setFiltro] = useState('Todos');

 
  const actividadesFiltradas = useMemo(() => {
    if (filtro === 'Todos') return actividades;
    return actividades.filter(actividad => actividad.tipo.includes(filtro));
  }, [filtro]);

  
  return (
    <div className="panel" style={{ padding: '20px' }}>
      <h2>📜 Registro de Actividades</h2>
      
     
      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Filtrar por tipo: </label>
        <select 
          value={filtro} 
          onChange={(e) => setFiltro(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', cursor: 'pointer' }}
        >
          <option value="Todos">Todos</option>
          <option value="Supervivencia">Supervivencia</option>
          <option value="Aventura">Aventura</option>
          <option value="Combate">Combate</option>
          <option value="Recolección">Recolección</option>
        </select>
      </div>

      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {actividadesFiltradas.length > 0 ? (
          actividadesFiltradas.map((act) => (
            <Card key={act.id}>
              <h4 style={{ margin: '0 0 5px 0' }}>🕹️ {act.juego}</h4>
              <p style={{ margin: 0 }}>{act.accion} - <span style={{ opacity: 0.7 }}>[{act.tipo}]</span></p>
            </Card>
          ))
        ) : (
          <p>No hay actividades para esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityList;