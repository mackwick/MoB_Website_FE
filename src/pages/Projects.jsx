import Project from "../components/Project";
import Engagement from "../components/Engagement";
import outreach from "/images/outreachrep.jpg";
import mixtape from "/images/mixtape.jpg";
import redribbon from "/images/redribbon.jpg";
import overdose from "/images/overdose.jpg";

function Projects() {
  return (
    <div className="projects-container">
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
            image={mixtape}
            name={"MoB MixTape: Arts Night Out 2024"}
            details={
              <>
                <div>
                  <p>
                    <b>
                      6 p.m., Sept. 25, 2024, at Eagles Dare in Wilmington.
                      Community. Crafts. Karaoke. Live Music.
                    </b>
                  </p>
                  <p>
                    Join MoB Theatre company for our first community arts night!
                    Money raised goes directly toward MoB's mission to create
                    meaningful, grassroots theatre for our community. Last year,
                    over 60% of our budget went directly to artists. Your
                    donations during this event will help support visiting and
                    local artists, historical research, venue spaces, and
                    outreach programs to serve youth through theatre.
                  </p>

                  <a
                    href="https://events.humanitix.com/mob-mixtape-an-arts-night-out"
                    target="_blank"
                    className="link"
                  >
                    {" "}
                    LEARN MORE.
                  </a>
                </div>
              </>
            }
          />
          <Engagement
            image={outreach}
            name={"YouthQuake 2023"}
            details={
              <p>
                MoB partnered with PeaceRose Montessori School to teach
                upper-elementary kids about Social Justice through Theatre. Our
                associates discussed what it means to be a youth activist,
                analyzed speeches of youth activists, and collaged these
                findings into a visual piece. In their final class, students
                performed a series of monologues based on a combination of
                interviews they did and speeches they analyzed.
              </p>
            }
          />
          <Engagement
            image={redribbon}
            name={"Red Ribbon Event 2023"}
            details={
              <p>
                MoB performers attended the Wilmington Red Ribbon Event for
                World AIDS Day at the Cameron Arts Museum. Following various
                activists and speakers, including members of SEEDS of Healing,
                we performed a collection of monologues from Quilt Stories (see
                current projects), a production that we also had brought to the
                Washington D.C.Fringe Festival in the summer.
              </p>
            }
          />
          <Engagement
            image={overdose}
            name={"Overdose Awareness Day 2023 & 2024"}
            details={
              <p>
                MoB performers attended this event to provide support for the
                community and share stories from the first few interviews
                conducted on our ongoing project, Voices from the Opioid
                Epidemic. With almost all of the interviewees present to hear
                the first readings of their monologues, it was a powerful and
                emotional day.
              </p>
            }
          />
        </div>
      </div>

      <div className="previous-works">
        <h3>PREVIOUS WORKS</h3>
        <div className="project-teasers-div">
          <Project
            BG="quilt-prev proj-compon-BG"
            name={"Quilt Stories 2022 & 2023"}
            link={""}
          />
          <Project
            BG="wilm-prev proj-compon-BG"
            name={"Wilmington Reconstructed 2023"}
            link={""}
          />
          <Project
            BG="out proj-compon-BG"
            name={"Out of Silence 2021 & 2023"}
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
