import type { ReactNode } from "react";
import "../../styles/laptop-frame.css";

export default function LaptopFrame({ children }: { children: ReactNode }) {
  return (
    <div className="study-laptop">
      <div className="study-laptop-lid">
        <div className="study-laptop-display">{children}</div>
      </div>
      <div className="study-laptop-base" aria-hidden="true" />
    </div>
  );
}
