import screen from "../../imports/foster/home-hero.jpg";
import "../../styles/foster-cover.css";

export default function FosterCover() {
  return (
    <div className="foster-cover">
      <div className="foster-monitor">
        <div className="foster-monitor-screen"><img src={screen} alt="Foster the Family website homepage" loading="lazy" /></div>
        <div className="foster-monitor-stand" aria-hidden="true" />
      </div>
    </div>
  );
}
