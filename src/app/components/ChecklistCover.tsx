import overview from "../../imports/checklist-overview-screen.png";
import task from "../../imports/checklist-task-screen.png";
import "../../styles/checklist-cover.css";

export default function ChecklistCover({ large = false }: { large?: boolean }) {
  if (large) return (
    <div className="checklist-study">
      {[{ src: overview, label: "Task list and completion progress", list: true }, { src: task, label: "Task instructions, attachments and completion", list: false }].map(({ src, label, list }) => (
        <figure key={src}>
          <a className={`checklist-study-phone${list ? " checklist-study-list" : ""}`} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full screen: ${label}`}>
            <img src={src} alt={label} />
          </a>
          <figcaption>{label}<span>Click to view full screen</span></figcaption>
        </figure>
      ))}
    </div>
  );
  return (
    <div className={`checklist-cover${large ? " checklist-cover-large" : ""}`} role="img" aria-label="Squadra mobile checklists: task progress and task details shown in two black phone frames">
      <div className="checklist-phones" aria-hidden="true">
        <div className="checklist-phone checklist-phone-overview">
          <div className="checklist-phone-screen checklist-overview-screen">
            <img src={overview} alt="" loading={large ? "eager" : "lazy"} />
          </div>
        </div>
        <div className="checklist-phone checklist-phone-task">
          <div className="checklist-phone-screen">
            <img src={task} alt="" loading={large ? "eager" : "lazy"} />
          </div>
        </div>
      </div>
    </div>
  );
}
