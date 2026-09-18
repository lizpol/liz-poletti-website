import marketplace from "../../imports/swaps-marketplace.png";
import goodCandidate from "../../imports/swaps-good-candidate.png";
import badCandidate from "../../imports/swaps-bad-candidate.png";
import "../../styles/swaps-cover.css";

export default function SwapsCover({ study = false }: { study?: boolean }) {
  if (study) return (
    <div className="swaps-study">
      <figure>
        <a href={marketplace} target="_blank" rel="noopener noreferrer" aria-label="Open full marketplace screen" className="swaps-study-phone">
          <img src={marketplace} alt="Shift marketplace showing approved, pending and denied requests" />
        </a>
        <figcaption>Shift marketplace</figcaption>
      </figure>
      <div className="swaps-study-candidates">
        {[{ src: goodCandidate, label: "Candidate meets all required skills" }, { src: badCandidate, label: "Candidate is missing a required skill" }].map(({ src, label }) => (
          <figure key={src}>
            <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${label}`}><img src={src} alt={label} /></a>
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );

  return (
    <div className="swaps-cover" role="img" aria-label="Shift marketplace in a black phone frame, with a matching candidate and their required skills">
      <div className="swaps-cover-phone" aria-hidden="true"><img src={marketplace} alt="" loading="lazy" /></div>
      <img className="swaps-candidate swaps-candidate-good" src={goodCandidate} alt="" aria-hidden="true" loading="lazy" />
    </div>
  );
}
