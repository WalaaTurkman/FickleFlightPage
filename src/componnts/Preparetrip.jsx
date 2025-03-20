import "./Preparetrip.css";

function Preparetrip({iconTitle,iconsrc}) {
  return (
    <section className="Preparetrip-icon">
       <img className="Icon" src={iconsrc} width="65.38703918457031" height="65.38703918457031" alt="hotel Icon" />
        <p className="Preparetrip-Title"style={{width:"39px",height:"18px"}}>{iconTitle}</p>
    </section>
  );
}

export default Preparetrip;
