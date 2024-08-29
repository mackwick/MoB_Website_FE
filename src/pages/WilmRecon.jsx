import FullProj from "../components/FullProj";
import image from "/images/wilmrec-proj.jpg";

function WilmRecon() {
  return (
    <FullProj
      image={image}
      name={"WILMINGTON RECONSTRUCTED"}
      details={
        <>
          <p>
            Truly a community-based historical visibility piece, Wilmington
            Reconstructed has been highlighted by critics as one of the most
            important theatre pieces Wilmington, NC has seen. This production
            highlights the town's history around 1898, when there was a
            prominent black community, residing over the local government and
            newspaper. The only successful coup in American history occurred
            when white supremacists violently overthrew this community and
            changed the course of Wilmington's storyline to this day.{" "}
          </p>
          <p>
            A commentary on the erasure of black history and the importance of
            it to community resilience and growth, Wilmington Reconstructed
            remains a vital ongoing project for MoB Theatre.{" "}
          </p>
        </>
      }
    />
  );
}

export default WilmRecon;
