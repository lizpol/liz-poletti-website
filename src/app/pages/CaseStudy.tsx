import { Navigate, useParams } from "react-router";
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
    case "foster": return <CaseStudyLayout study={fosterStudy} />;
    default: return <Navigate to="/" replace />;
  }
}
