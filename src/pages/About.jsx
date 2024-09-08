import { Link } from "react-router-dom";
import Team from "../components/Team";
import Board from "../components/Board";
import image from "/images/shadowday-scotop-hl.jpg";
import Press from "../components/Press";
import paulgreen from "/images/sponsors/paulgreen.png";
import peacerose from "/images/sponsors/peacerose.jpg";
import ncarts from "/images/sponsors/ncarts.png";
import Amber from "/images/Amber.jpg";
import Chloe from "/images/chloe.jpg";
import Georgia from "/images/Georgia.jpg";
import Madisyn from "/images/Madisyn.jpg";
import Malachi from "/images/Malachi.jpg";
import Trey from "/images/Trey.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>ABOUT MOB</h2>
      </div>

      <div className="mission-div">
        <h3>WHAT WE DO</h3>
        <p className="about-quote">
          “People speak in organic poems.” <span>- Anna Deveare Smith</span>
        </p>
        <div className="about-body">
          <div className="about-body-one">
            <img src={image} className="about-image-main" />
          </div>
          <div className="about-body-two">
            <p>
              MoB sees theatre through a contemporary lens, using forms of
              collaborative theatre-making to investigate issues we care about.
              With a focus on non-fiction narratives, documentary theatre is one
              of our most repeated and polished processes.
            </p>
            <p>
              An incubator for new works, MoB Theatre is constantly harnessing
              true stories, oral histories, and lived experiences to create
              meaningful theatre. Highlighting process over product, we develop
              workshops, staged readings, and performances to showcase work as
              it's being developed to garner community feedback, conversation,
              and growth.
            </p>
            <p>
              Because of the many details these true stories reveal over time,
              we have more than one of these pieces being developed at once.
            </p>
            <div className="home-bio-links">
              <Link to="/contact" className="link">
                <button className="home-bio-one-link about-link">
                  Get Involved
                </button>
              </Link>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=6JDGLM3KV8FNY"
                className="link"
              >
                <button className="home-bio-one-link about-link">
                  Support MoB
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-team">
        <h3>WHO WE ARE</h3>
        <h2>Staff</h2>
        <div className="bios-div">
          <div className="bios-div-one">
            <Team
              image={Trey}
              name={"Trey Morehouse"}
              title={"Artistic Director"}
              bio={
                "A 2012 alumni of UNCW. Trey has worked professionally with Burning Coal Theatre and North Carolina Theatre in the area of education and outreach. Trey has also worked professionally as an assistant director with South Coast Repertory (in Costa Mesa, CA), and New Swan Shakespeare (in Irvine, CA)."
              }
            />
            <Team
              image={Chloe}
              name={"Chloe Mason"}
              title={"Artistic Associate"}
              bio={
                "Chloe Mason attended Appalachian State University where she earned her BA in theatre performance, and minored in film. There, Chloe lead a social justice themed theatre ensemble known as Women+ Inclusive Theatre Troupe, and became a twice published poet. In addition to acting, Chloe has lead intimacy coordination and movement specific work in past MoB productions. She’s a hands on visual artist who has designed past programs and posters for MoB through her chosen medium, collage. She’s a full time educator, and part time story teller here in Wilmington NC. "
              }
            />
            <Team
              image={Amber}
              name={"Amber Moore"}
              title={"Artistic Associate"}
              bio={
                "Amber Briana Moore is an actor and racial equity advocate. She has been featured in various productions in the Southeast from live theatre, films and network television. She received her B.A. in Theatre and African American Studies at the University of North Carolina at Greensboro, where she also discovered her interest in art centering on African American life and culture. She has been involved with MoB since 2018 and regularly advises with research on local African American history. "
              }
            />
            <Team
              image={Georgia}
              name={"Georgia Cole"}
              title={"Artistic Associate"}
              bio={
                "Growing up in Wilmington, NC, Georgia was very much involved with the local theatre community, participating in companies including Thalian Association, TACT, Journey, and for 6 years straight with Cape Fear Shakespeare. Georgia decided to spend their undergrad years abroad, traveling and learning about prominent social justice issues. They are a passionate believer in community-based activism, which has brought them to their work with MoB."
              }
            />
            <Team
              image={Malachi}
              name={"Malachi Chapman"}
              title={"Title"}
              bio={"Bio coming soon."}
            />
            <Team
              image={Madisyn}
              name={"Madisyn Fleming"}
              title={"Title"}
              bio={"Bio coming soon."}
            />
          </div>

          <div className="bios-div-two">
            <h2>Board</h2>
            <Board
              name={"La-taun Danns"}
              title={"Board President"}
              bio={"Bio coming soon."}
            />
            <Board
              name={"Conswalia Green"}
              title={"Board Member"}
              bio={
                "Conswalia began her theater career in Durham, NC, where she managed performances at the Historic Carolina Theatre. Conswalia ultimately landed at the Joseph Papp Public Theater/ New York Shakespeare Festival as the head theater manager. Since returning to the Wilmington area Conswalia has contributed to A Storytelling Project to Raise Awareness: Facing Community (a collaboration with UNCW) and Gila Green Writes."
              }
            />
            <Board
              name={"Rev. John McLaughlin"}
              title={"Board Member"}
              bio={
                "John is the Pastor of St. Jude's Metropolitan Community Church in Wilmington, NC, the first house of faith formed with its primary outreach to the LGBTQ community. He is a lifelong advocate of issues of justice in the areas of sexism, gender-ism, racism, class-ism, and all the -isms with which we divide ourselves."
              }
            />
            <Board
              name={"Nathan Ragain"}
              title={"Board Member"}
              bio={
                "Nathan is a Bruce Scholar Visiting Lecturer with UNCW’s Honors Department. Nathan is passionate about social equity issues."
              }
            />
            <Board
              name={"Amanda Wolf"}
              title={"Board Member"}
              bio={
                "Amanda is the owner of Peace Rose Montessori School in Wilmington North Carolina. She first joined MoB as a Stage Manager during Wilmington Reconstructed. Her interest in the 1898 Massacre and Race Riots and Social Justice Theatre led her to join MoB as the Board Secretary. Amanda has a background in artistic direction, stage managing, script supervising, acting, and dancing in both stage and film productions. Originally from Seattle, she has called Wilmington home for the last decade."
              }
            />
            <Board
              name={"Lilli Lindbeck"}
              title={"Board Member"}
              bio={
                "Lilli combines a diverse background in law, divinity, and medical coding with a passion for theater. She has experience on several boards, including those focused on AIDS and coding, and volunteered with the Names Project in San Francisco. Lillis theater involvement includes high school and community productions, reflecting a strong belief in theater's transformative impact."
              }
            />
            <Board
              name={"Marie Antoinette Marrinan"}
              title={"Board Member"}
              bio={
                "Marie Antoinette a first-year MFA candidate at UNCW. She retired from my position as a Nurse Practitioner and relocated to North Carolina in 2015. Since then, she has had the honor of working with the Wilmington Theater community as a stage manager, ensemble member, and playwright. She is a member of the Port City Playwrights Project and a Board Member of MOB Theatre Company."
              }
            />
          </div>
        </div>
      </div>

      <div className="about-press">
        <h3>PRESS AND RECOGNITION</h3>
        <div className="press-blurbs">
          <Press
            blurb={`"DCTA Best of Fringe," 4 stars`}
            link={"https://dctheaterarts.org/2023/07/16/quilt-stories/"}
            source={"2023 Capital Fringe Review"}
          />
          <Press
            blurb={`"Not only is 'Wilmington Reconstructed' a must-see, but it's arguably the most important original play ever produced in Wilmington."`}
            link={
              "https://www.starnewsonline.com/story/entertainment/theater/2023/04/27/wilmington-1898-coup-and-massacre-reconstructed-in-documentary-play/70152189007/"
            }
            source={"Wilmington Star News"}
          />
          <Press
            blurb={`Artistic Director Trey Morehouse discusses "Out, NC", a documentary play on the voices of LGBTQIA+ community members in Wilmington.`}
            link={
              "https://www.whqr.org/show/midday-interviews/2018-03-26/communique-documentary-theatre-from-mouths-of-babes-out-nc-based-on-lgbtq-interviews#stream/0"
            }
            source={"WHQR Public Media"}
          />
          <Press
            blurb={`Local journalist John Staton discusses MoB's ambitious 2018 adaptation of the Shakespeare classic Hamlet.`}
            link={
              "https://www.starnewsonline.com/story/entertainment/local/2018/04/12/mouths-of-babes-aims-to-give-teens-young-adults-voice-through-theater/12721325007/"
            }
            source={"Wilmington Star News"}
          />
          <Press
            blurb={`Wilmington Star News reviews MoB Theatre's debu production, "The Diary Play", in 2017.`}
            link={
              "https://www.starnewsonline.com/story/entertainment/local/2018/04/12/mouths-of-babes-aims-to-give-teens-young-adults-voice-through-theater/12721325007/"
            }
            source={"Wilmington Star News"}
          />
        </div>
      </div>

      <div className="about-sponsors">
        <h3>SPONSORS</h3>
        <div className="sponsor-images">
          <img src={ncarts} alt="NC Arts Council" className="sponsor-image" />
          <img
            src={peacerose}
            alt="Peace Rose Montessori"
            className="sponsor-image"
          />

          <img
            src={paulgreen}
            alt="The Paul Green Foundation"
            className="sponsor-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
