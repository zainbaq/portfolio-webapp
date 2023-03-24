import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Articles from './components/Articles'
import Music from './components/Music'
import './App.css';

const App = () => {
  return (
    <div id="app" className="App">
        <Header/>
        <Body/>
        <About/>
        <Skills/>
        <Projects/>
        <Articles/>
        <Music/>
        <Footer/>
    </div>

  );
}

export default App;