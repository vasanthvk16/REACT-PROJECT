import React from 'react';

const Mobile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Accounting Mobile Page</h1>
      <p style={styles.paragraph}>
        This is a mobile-friendly accounting application page.
        You can add mobile-specific features or content here.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default Mobile;
