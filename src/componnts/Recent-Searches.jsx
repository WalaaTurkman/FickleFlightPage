import "./Recent-Searches.css";
import DurationIcon from "../assets/headerimg/DurationIcon.png"; // استيراد الصورة

function RecentSearches({ DatePlane, TitleForm, TitleForm2 }) {
  return (
    <section className="Card-Search">
      <div className="Card-Search-Title">
        <p className="city-name">{TitleForm}</p>
        <img
          src={DurationIcon} // استخدام الصورة المستوردة
          width="24"
          height="24"
          className="Card-Search-Icon"
          alt="Flight Icon"
        />
        <p className="city-name">{TitleForm2}</p>
      </div>
      <p className="Card-Search-Date">
        <strong>Depart On:</strong> {DatePlane}
      </p>
    </section>
  );
}

export default RecentSearches;