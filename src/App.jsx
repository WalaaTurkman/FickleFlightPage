import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componnts/Header"; // عند استخدام export default
import Banner from './componnts/Banner';
import Footer from './componnts/Footer';
import SubscribeSection from './componnts/SubscribeSection';
import HotelCard from './componnts/HotelCard';
import Homecontent from './componnts/Homecontent';
import HolidaysCard from './componnts/HolidaysCard';
import  Popular  from './componnts/Popular';
import RecentSearches from './componnts/Recent-Searches';
import Preparetrip from './componnts/Preparetrip';



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