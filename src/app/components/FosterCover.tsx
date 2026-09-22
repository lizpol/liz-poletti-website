import screen from "../../imports/foster/home-hero.jpg";
import "../../styles/foster-cover.css";
import "../../styles/device-frames.css";

export default function FosterCover({ study = false }: { study?: boolean }) {
  return (
    <div className={`foster-cover${study ? " foster-cover-study" : ""}`}>
      <div className="foster-monitor">
        <div className="foster-monitor-screen"><img src={screen} alt="Foster the Family website homepage" loading={study ? "eager" : "lazy"} /></div>
        <div className="foster-monitor-stand" aria-hidden="true" />
      </div>
    </div>
  );
}
