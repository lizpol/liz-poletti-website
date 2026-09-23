import { useEffect, useState } from "react";
import frame from "../../imports/squadra-desktop-frame.png";
import dashboard from "../../imports/squadra-desktop-dashboard.png";
import schedule from "../../imports/squadra-desktop-schedule.png";
import team from "../../imports/squadra-desktop-team.png";
import "../../styles/squadra-desktop-slideshow.css";

const screens = [
  { src: dashboard, label: "Dashboard", alt: "Squadra dashboard showing shifts, approvals and upcoming schedules" },
  { src: schedule, label: "Schedule", alt: "Squadra monthly schedule showing planned shifts" },
  { src: team, label: "Team", alt: "Squadra team overview showing employee contracts and statuses" },
];

export default function SquadraDesktopSlideshow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPlaying(!preference.matches);
    const update = () => setPlaying(!preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive(index => (index + 1) % screens.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className="squadra-slideshow" role="region" aria-label="Squadra desktop screens" aria-roledescription="carousel">
      <div className="squadra-slideshow-device">
        <img className="squadra-slideshow-frame" src={frame} alt="" width={13367} height={10566} />
        <div className="squadra-slideshow-screen">
          {screens.map((screen, index) => (
            <img key={screen.label} src={screen.src} alt={screen.alt} aria-hidden={active !== index} className={active === index ? "is-active" : ""} width={12882} height={7650} />
          ))}
        </div>
      </div>
      <div className="squadra-slideshow-controls">
        {screens.map((screen, index) => (
          <button key={screen.label} type="button" aria-pressed={active === index} onClick={() => { setActive(index); setPlaying(false); }}>{screen.label}</button>
        ))}
        <button type="button" onClick={() => setPlaying(value => !value)} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>{playing ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
}
