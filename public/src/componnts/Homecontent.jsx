import HotelCard from "./HotelCard";
import './Homecontent.css';
import HolidaysCard from "./HolidaysCard";
import Popular from "./Popular";
import RecentSearches from './Recent-Searches';
import Preparetrip from "./Preparetrip";

// استيراد الصور
import DurationIcon from "../assets/headerimg/DurationIcon.png";
import ArrowIcon from "../assets/headerimg/ArrowIcon.png";
import HotelIcon from "../assets/Icons/HotelIcon.png";
import AttractionsIcon from "../assets/Icons/AttractionsIcon.png";
import EatsIcon from "../assets/Icons/EatsIcon.png";
import CommuteIcon from "../assets/Icons/Commuteicon.png";
import TaxiIcon from "../assets/Icons/TaxiIcon.png";
import MoviesIcon from "../assets/Icons/Moviesicon.png";
import ParisImage from "../assets/headerimg/ParisImage.png";
import GreeceImage from "../assets/headerimg/GreeceImage.png";
import NorwayImage from "../assets/headerimg/NorwayImage.png";
import TuscanyImage from "../assets/headerimg/TuscanyImage.png";
import BaliImage from "../assets/headerimg/unsplash.png";
import SwissImage from "../assets/headerimg/SwitzerlandImage.png";
import BoracayImage from "../assets/headerimg/BoracayImage.png";
import PalawanImage from "../assets/headerimg/PalawanImage.png";
import MatterhornImage from "../assets/headerimg/Matterhorn-Suites-Image.png";
import DiscoveryImage from "../assets/headerimg/Discovery-Shores-Image.png";
import ArcticImage from "../assets/headerimg/Arctic-Hut-Image.png";
import LakeLouiseImage from "../assets/headerimg/Lake-Louise-Image.png";

function Homecontent() {
  return (
    <div>

      <p className="Recent-Searches-Title">Recent Searches</p>
      <section className="Recent-Searches-section d-flex align-items-center"
        style={{ width: "1280px", height: "112px", gap: "15px" }}>
        <RecentSearches
          TitleForm="SIN"
          TitleForm2="Tokyo"
          DatePlane="7 Sep 2021"
        />
        <RecentSearches
          TitleForm="MY"
          TitleForm2="DUB"
          DatePlane="9 Sep 2021"
        />
      </section>

      <p className="Prepare-trip-Title">Prepare for your trip</p>
      <section className="Prepare-trip-section d-flex align-items-center ms-5"
        style={{ width: "1280px", height: "112px", gap: "15px" }}>
        <Preparetrip iconTitle="Hotel" iconsrc={HotelIcon} />
        <Preparetrip iconTitle="Attractions" iconsrc={AttractionsIcon} />
        <Preparetrip iconTitle="Eats" iconsrc={EatsIcon} />
        <Preparetrip iconTitle="Commute" iconsrc={CommuteIcon} />
        <Preparetrip iconTitle="Taxi" iconsrc={TaxiIcon} />
        <Preparetrip iconTitle="Movies" iconsrc={MoviesIcon} />
      </section>

      <p className="Hotel-Header-p-1 mt-5">Plan your next trip</p>

      <section className="Hotel-Header-1 ms-3 mt-3">
        <h1 className="Hotel-Header-h1-1">Most Popular Destinations</h1>
        <section className="Hotel-Header-2">
          <p className="Hotel-Header-p-2 small">View all destinations</p>
          <img className="Arrow-Icon" src={ArrowIcon} width="24" height="24" alt="Arrow Icon" />
        </section>
      </section>

      <section className="City-Holidays">
        <Popular imgSrc={ParisImage} city="Paris" price="699" />
        <Popular imgSrc={GreeceImage} city="Greece" price="1079" />
        <Popular imgSrc={NorwayImage} city="Norway" price="895" />
        <Popular imgSrc={TuscanyImage} city="Tuscany" price="1245" />
      </section>

      <div className="mt-4" style={{ marginBottom: "140px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold ms-5">Recommended Holidays</h4>
          <a href="#" className="text-primary">View all holidays →</a>
        </div>
        <div className="d-flex flex-wrap justify-content-between" style={{ margin: "40px" }}>
          <HolidaysCard title="Bali" image={BaliImage} price="899" duration="4D3N" />
          <HolidaysCard title="Swiss" image={SwissImage} price="900" duration="6D5N" />
          <HolidaysCard title="Boracay" image={BoracayImage} price="699" duration="5D4N" />
          <HolidaysCard title="Palawan" image={PalawanImage} price="789" duration="4D3N" />
        </div>
      </div>

      <section className="Hotel-Header ms-3 mt-1">
        <h1 className="Hotel-Header-h1">Popular Stays</h1>
        <section className="Hotel-Header">
          <p className="Hotel-Header-p">View all stays</p>
          <img className="Arrow-Icon" src={ArrowIcon} width="24" height="24" alt="Arrow Icon" />
        </section>
      </section>

      <section className="hotel mt-3">
        <HotelCard imgsrc={MatterhornImage} cardgraph="Entire bungalow" TitleCard="Matterhorn Suites" TextCard="575" RateNumber="4.9" Reviews="60" />
        <HotelCard imgsrc={DiscoveryImage} cardgraph="2-Story beachfront suite" TitleCard="Discovery Shores" TextCard="360" RateNumber="4.8" Reviews="116" />
        <HotelCard imgsrc={ArcticImage} cardgraph="Single deluxe hut" TitleCard="Arctic Hut " TextCard="420" RateNumber="4.7" Reviews="78" />
        <HotelCard imgsrc={LakeLouiseImage} cardgraph="Deluxe King Room" TitleCard="Lake Louise Inn" TextCard="244" RateNumber="4.6" Reviews="63" />
      </section>

    </div>
  );
}

export default Homecontent;
