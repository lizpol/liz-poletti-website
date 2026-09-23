import { Navigate, useParams } from "react-router";
import CaseStudyLayout from "../components/CaseStudyLayout";
import messages from "../../imports/Messages.png";
import LaptopFrame from "../components/LaptopFrame";
import { nvoyeStudy } from "../data/caseStudies";

export default function NvoyeCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  if (projectId !== "nvoye") return <Navigate to="/" replace />;
  return <CaseStudyLayout study={nvoyeStudy} heroVisual={
    <div className="max-w-[900px] mx-auto py-6">
      <LaptopFrame>
        <img src={messages} alt="Front-facing Nvoye Messages screen showing conversations, search and the option to start a new chat" loading="eager" />
      </LaptopFrame>
    </div>
  } />;
}
