import FullProj from "../components/FullProj";
import image from "/images/opioid-proj.jpg";

function Opioid() {
  return (
    <FullProj
      image={image}
      name={"VOICES FROM THE OPIOID EPIDEMIC"}
      details={
        <>
          <p>
            In the past decade, Opioid-related overdose deaths in North Carolina
            have more than doubled. At 11.6%, Wilmington specifically has one of
            the highest abuse rates.
          </p>{" "}
          <p>
            Our current developing project, Voices from the Opioid Epidemic
            highlights the stories of those in our community impacted by
            overdose and addiction, be it personally or with someone they love.{" "}
          </p>{" "}
          <p>
            We are presently still collecting interviews to develop this piece,
            which will be debuted in May of 2024. If you or someone you know
            would like to be interviewed, or you'd like to learn more, please
            contact our Google Voice number: (617) 528-9092.
          </p>
        </>
      }
    />
  );
}

export default Opioid;
