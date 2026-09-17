import { Navigate, useParams } from "react-router";
import CaseStudyLayout from "../components/CaseStudyLayout";
import { nvoyeStudy } from "../data/caseStudies";

export default function NvoyeCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  if (projectId !== "nvoye") return <Navigate to="/" replace />;
  return <CaseStudyLayout study={nvoyeStudy} />;
}
