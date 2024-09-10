import Project from "../components/Project";
import Engagement from "../components/Engagement";
import image from "/images/placeholder.jpeg";
import pride from "/images/pride-picnic-proj.jpg";
import outNC from "/images/out-nc-proj.jpg";
import outreach from "/images/outreachrep.jpg";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>PROJECTS</h2>
      </div>

      <div className="current-projects">
        <h3>CURRENT PROJECTS</h3>

        <div className="project-teasers-div">
          <Project
            BG="scotopia proj-compon-BG"
            name={"Scotopia: Short Plays to Help You See in the Dark"}
            link={"/scotopia"}
          />

          <Project
            BG="oak proj-compon-BG"
            name={"The Oak Grove Cemetery Project"}
            link={"/oakgrovecemeteryproject"}
          />
          <Project
            BG="opioid proj-compon-BG"
            name={"Voices from the Opioid Epidemic"}
            link={"/opioidvoices"}
          />
          <Project
            BG="quilt proj-compon-BG"
            name={"Quilt Stories: Voices from the AIDS Quilt"}
            link={"/quiltstories"}
          />
          <Project
            BG="wilmy proj-compon-BG"
            name={"Wilmington Reconstructed"}
            link={"/wilmingtonreconstructed"}
          />
        </div>
      </div>

      <div className="engagements-div">
        <h3>EVENTS & ENGAGEMENT</h3>
        <div className="engage-collection">
          <Engagement
            image={image}
            name={"2024 Fundraiser"}
            details={"Date and Time TBD"}
          />
          <Engagement
            image={outreach}
            name={"YouthQuake 2023"}
            details={`MoB partnered with PeaceRose Montessori School to teach upper-elementary kids about Social Justice through Theatre. Our associates discussed what it means to be a youth activist, analyzed speeches of youth activists, and collaged these findings into a visual piece. In their final class, students performed a series of monologues based on a combination of interviews they did and speeches they analyzed.`}
          />
          <Engagement
            image={image}
            name={"Red Ribbon Event 2023"}
            details={`MoB performers attended the Wilmington Red Ribbon Event for World AIDS Day at the Cameron Arts Museum. Following various activists and speakers, including members of SEEDS of Healing, we performed a collection of monologues from Quilt Stories (see current projects), a production that we also had brought to the Washington D.C.Fringe Festival in the summer.`}
          />
          <Engagement
            image={image}
            name={"Overdose Awareness Day 2023"}
            details={`MoB performers attended this event to provide support for the community and share stories from the first few interviews conducted on our ongoing project, Voices from the Opioid Epidemic. With almost all of the interviewees present to hear the first readings of their monologues, it was a powerful and emotional day. `}
          />
          <Engagement image={outNC} name={"OUT NC 2021"} details={`TBD`} />
          <Engagement
            image={pride}
            name={"Pride Picnic 2021"}
            details={`TBD`}
          />
        </div>
      </div>

      <div className="previous-works">
        <h3>PREVIOUS WORKS</h3>
        <div className="project-teasers-div">
          <Project
            BG="quilt-prev proj-compon-BG"
            name={"Quilt Stories 2021 & 2023"}
            link={""}
          />
          <Project
            BG="wilm-prev proj-compon-BG"
            name={"Wilmington Reconstructed 2023"}
            link={""}
          />
          <Project
            BG="out proj-compon-BG"
            name={"Out of Silence 2023"}
            link={""}
          />
          <Project
            BG="pride proj-compon-BG"
            name={"Pride Picnic 2021"}
            link={""}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
