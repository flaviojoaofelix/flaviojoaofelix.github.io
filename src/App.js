import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Switch from './routes';

const mainWidth = 60;

function App() {
  return (
    <>
      <Header />
      <main className="pt-5 mx-auto" style={{ width: mainWidth + '%' }}>
        <Switch />
      </main>
      <Footer />
    </>
  );
}

export default App;
