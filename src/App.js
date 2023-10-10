import './App.css';
import Header from './components/Header';
import useLocalStorage from 'use-local-storage'
import Home from './components/Home';
import About from './components/About';



function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')


  return (
    <div className="app" data-theme={theme}>
    

        <Header theme={theme} setTheme={setTheme} />
        <Home/>
        <About/>

    
    </div>
  );
}

export default App;