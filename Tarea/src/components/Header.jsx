import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="panel" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', marginBottom: '20px' }}>
      <h1>Dashboard de Supervivencia</h1>
      <button 
        onClick={toggleTheme}
        style={{ padding: '10px', cursor: 'pointer', borderRadius: '8px' }}
      >
        Cambiar a {theme === 'light' ? '🌙 Modo Nocturno' : '☀️ Modo Día'}
      </button>
    </header>
  );
};

export default Header;