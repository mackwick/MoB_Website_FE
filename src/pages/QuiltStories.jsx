import FullProj from "../components/FullProj";
import image from "/images/quilt-proj.jpg";

function Quilt() {
  return (
    <FullProj
      image={image}
      name={"QUILT STORIES: VOICES FROM THE AIDS QUILT"}
      details={
        <>
          <p>
            Quilt Stories has been an ongoing project for MoB as we have
            followed multiple story paths connecting to the AIDS Quilt memorial.
            The panels were/are created to memorialize those lost to AIDS, as
            well as the many unnamed individuals that were lost. The quilt
            panels also have served as a form of visual protest to advocate for
            healthcare and visibility for folx affected by AIDS.
          </p>
          <p>
            The MoB performers brought Quilt Stories to the DC Capital Fringe
            Festival in the summer of 2023, winning a title of "Best in Fringe".
            They have also performed excerpts of it at events such as the Red
            Ribbon Event on World AIDS Day in Wilmington, NC.{" "}
          </p>
        </>
      }
    />
  );
}

export default Quilt;
