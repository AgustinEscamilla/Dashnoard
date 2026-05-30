const Card = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(128, 128, 128, 0.1)',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #444',
      marginBottom: '10px'
    }}>
      {children}
    </div>
  );
};

export default Card;