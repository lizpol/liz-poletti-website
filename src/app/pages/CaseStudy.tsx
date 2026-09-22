import { Navigate, useParams } from "react-router";
import FosterCover from "../components/FosterCover";
import CaseStudyLayout from "../components/CaseStudyLayout";
import { fosterStudy } from "../data/caseStudies";
import CaveoCaseStudy from "./CaveoCaseStudy";
import SquadraCaseStudy from "./SquadraCaseStudy";
import SquadraChecklistsCaseStudy from "./SquadraChecklistsCaseStudy";
import SquadraSwapsCaseStudy from "./SquadraSwapsCaseStudy";
import NvoyeCaseStudy from "./NvoyeCaseStudy";

export default function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  switch (projectId) {
    case "squadra": return <SquadraCaseStudy />;
    case "squadra-checklists": return <SquadraChecklistsCaseStudy />;
    case "squadra-swaps": return <SquadraSwapsCaseStudy />;
    case "caveo": return <CaveoCaseStudy />;
    case "nvoye": return <NvoyeCaseStudy />;
    case "foster": return <CaseStudyLayout study={fosterStudy} heroVisual={
      <figure>
        <FosterCover study />
        <figcaption className="text-xs text-slate-500 text-center mt-5 leading-relaxed">Current live homepage. The site may have evolved since this engagement.</figcaption>
      </figure>
    } />;
    default: return <Navigate to="/" replace />;
  }
}
