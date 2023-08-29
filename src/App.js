import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import introcubes from './intro-cubes1.svg';
import intropillar from './intro-pillar1.svg';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="body-container">
      <Header className ="header-container"/>
      <Body className="body-con-a"/>
      <Navbar/>
      <div className='background-image-container'> 
      <span><img src={intropillar} className="app-pillar" alt="logo" /></span>
      <span><img src={introcubes} className="app-stairs" alt="logo" /></span>
      </div>
      <Footer className ="footer-container"/>
    </div>
  );
}   

export default App;
