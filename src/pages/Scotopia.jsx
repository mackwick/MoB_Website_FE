import FullProj from "../components/FullProj";
import image from "/images/sco-proj.jpg";

function Scotopia() {
  return (
    <FullProj
      image={image}
      name={"SCOTOPIA"}
      details={
        <>
          <p>
            <b>Happening March 8-23, 2025</b>
          </p>
          <p>
            Experience MoB Theatre’s annual original theatre festival. The word
            Scotopia, also known as scotopic vision, means "the ability to see
            in darkness, or dim light." Inspired by a short play festival
            curated in spring of 2024, MoB has decided to continue Scotopia as
            an incubator for new works with a social justice focus. Scotopia is
            a multi-venue, multi-day theatre festival, that brings to life new
            and developings works that celebrate identity and advocate for
            social change.
          </p>
          <p>TICKETS COMING SOON.</p>
        </>
      }
    />
  );
}

export default Scotopia;
