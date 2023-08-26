
import './App.css';
import Carousel from './Components/Carousel';
import EventCard from './Components/EventCard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar title="Set title"/>
      <Carousel heading="Enter heading for first slide"/>
      <EventCard/>
      <Footer/>
    </div>
  );
}

export default App;
