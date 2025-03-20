import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componnts/Header"; 
import Banner from './componnts/Banner';
import Footer from './componnts/Footer';
import SubscribeSection from './componnts/SubscribeSection';
import Homecontent from './componnts/Homecontent';

function App() {
  return (
    <div>
  <Header />
  <Banner/>
  <Homecontent/>
  <SubscribeSection/>
  <Footer/>
  </div>
  )

}
export default App;