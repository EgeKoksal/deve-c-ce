import {useState, useEffect} from 'react';
import DeveCüce from './DeveCüce';
import Puan from './Puan';

const App = () => {
  const [deger, degerGuncelle] = useState('');
  const [puan, puanGuncelle] = useState(0);
  const [sure, sureGuncelle] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      const rastgeleDeger = Math.random() > 0.5 ? 'Deve' : 'Cüce';
      degerGuncelle(rastgeleDeger);
      sureGuncelle(2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDeveClick = () => {
    if (deger === 'Deve') {
      puanGuncelle(puan + 1);
    } else {
      puanGuncelle(puan - 1);
    }
    sureGuncelle(0);
  };

  const handleCüceClick = () => {
    if (deger === 'Cüce') {
      puanGuncelle(puan + 1);
    } else {
      puanGuncelle(puan - 1);
    }
    sureGuncelle(0);
  };

  return (
    <div className="container">
      <h1>Deve-Cüce Oyunu</h1>
      <DeveCüce deger={deger} sure={sure} 
        onDeveClick={handleDeveClick} 
        onCüceClick={handleCüceClick} />
      <Puan puan={puan} />
    </div>
  );
};

export default App;