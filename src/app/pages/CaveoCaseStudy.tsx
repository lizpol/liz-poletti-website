import { Navigate, useParams } from "react-router";
import CaseStudyLayout from "../components/CaseStudyLayout";
import { caveoStudy } from "../data/caseStudies";

export default function CaveoCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  if (projectId !== "caveo") return <Navigate to="/" replace />;
  return <CaseStudyLayout study={caveoStudy} />;
}
