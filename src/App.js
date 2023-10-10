import './App.css';
import Header from './components/Header';
import useLocalStorage from 'use-local-storage'



function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')


  return (
    <div className="app" data-theme={theme}>
    

        <Header theme={theme} setTheme={setTheme} />

    
    </div>
  );
}

export default App;