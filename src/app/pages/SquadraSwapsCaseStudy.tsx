import { Navigate, useParams } from "react-router";
import SwapsCover from "../components/SwapsCover";
import CaseStudyLayout from "../components/CaseStudyLayout";
import { swapsStudy } from "../data/caseStudies";

export default function SquadraSwapsCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  if (projectId !== "squadra-swaps") return <Navigate to="/" replace />;
  return <CaseStudyLayout study={swapsStudy} heroVisual={<SwapsCover study />} />;
}
