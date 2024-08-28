import FullProj from "../components/FullProj";
import image from "/images/placeholder.jpeg";

function OakGrove() {
  return (
    <FullProj
      image={image}
      name={"THE OAK GROVE CEMETERY PROJECT"}
      details={
        <>
          <p>
            The Oak Grove Cemetery project showcases a forgotten cemetery on
            Wilmington’s busy 17th avenue. Created in 1870, Oak Grove Cemetery
            was for anyone who could not afford to be buried. In Oak Grove
            Cemetery both black and white, child and elderly, freed slave and
            Confederate soldier rest side by side.
          </p>
          <p>
            In the 1960s the graveyard was “relocated,” and the unique
            decorations that marked burials were all discarded. A few headstones
            were haphazardly moved, but controversially the 10,000 bodies still
            remain. The piece is on its way towards its first rendition which
            will be a stylistic staged reading, and performance mash-up, of both
            documentary styled sequences and dramatic vignettes rooted in
            historical research.
          </p>
        </>
      }
    />
  );
}

export default OakGrove;
