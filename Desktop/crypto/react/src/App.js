import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;




function App() {

  useEffect(  () => {
    tg.ready();
  }, [])


  const onclose = () => {
    tg.Close()
  }

  return (
    <div className="App">
      work
      <button onClick={onclose}>Закрыть</button>
    </div>
  );
}

export default App;
