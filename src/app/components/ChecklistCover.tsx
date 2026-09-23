import overview from "../../imports/checklist-list-original.png";
import task from "../../imports/checklist-task-original.png";
import "../../styles/checklist-cover.css";
import "../../styles/device-frames.css";

export default function ChecklistCover({ large = false }: { large?: boolean }) {
  if (large) return (
    <div className="checklist-study">
      {[{ src: overview, label: "Task list and completion progress", list: true }, { src: task, label: "Task instructions, attachments and completion", list: false }].map(({ src, label, list }) => (
        <figure key={src}>
          <div className={`checklist-study-phone${list ? " checklist-study-list" : ""}`}>
            <img src={src} alt={label} />
          </div>
          <figcaption>{label}</figcaption>
        </figure>
      ))}
    </div>
  );
  return (
    <div className={`checklist-cover${large ? " checklist-cover-large" : ""}`} role="img" aria-label="Squadra mobile checklists: task progress and task details shown in two silver phone frames">
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
