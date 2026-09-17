import { Navigate, useParams } from "react-router";
import CaseStudyLayout from "../components/CaseStudyLayout";
import { checklistStudy } from "../data/caseStudies";

export default function SquadraChecklistsCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  if (projectId !== "squadra-checklists") return <Navigate to="/" replace />;
  return <CaseStudyLayout study={checklistStudy} />;
}
