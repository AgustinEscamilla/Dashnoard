import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserPanel from './components/UserPanel';
import StatsPanel from './components/StatsPanel';
import ActivityList from './components/ActivityList';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <UserPanel />
          <StatsPanel />
        </div>

        {/* Aquí insertamos el componente de la lista */}
        <ActivityList />

      </main>
    </div>
  );
}

export default App;