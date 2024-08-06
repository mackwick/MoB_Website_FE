import Team from "../components/Team";
import image from "/images/placeholder.jpeg";
import Press from "../components/Press";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About MoB</h2>
      </div>
      <div className="mission-div">
        <h3>What we do</h3>
        <p>
          Mouths of Babes Theatre was founded in 2014 on the principles of
          active agency and respect for young adult audiences and actors. We're
          dedicated to creating engaging, interesting, and smart theatre for
          actors and audiences in high school and college. We want to promote
          and support young actors and audiences to be active participants, not
          only in the arts, but in the world around them. We seek new forms to
          tackle today's changing issues. We see theatre through a contemporary
          lens and use forms of devising theatre and documentary theatre to
          explore and investigate issues we care about:
        </p>
        <b>
          <p>ENGAGEMENT. RISK. ADVOCACY.</p>
        </b>

        <p>
          We're dedicated to creating engaging, interesting, and smart theatre
          for actors and audiences for the purposes of building community. We
          especially want to promote and support young actors and audiences to
          be active participants, not only in the arts, but in the world around
          them. We seek new forms to tackle today's changing issues. We see
          theatre through a contemporary lens and use forms of devising theatre
          and documentary theatre to contribute truth and reconciliation by
          using our art to establish connections.
        </p>
        <p>Get involved [LINK].</p>
        <button>Support MoB [LINK TO DONATE]</button>
      </div>
      <div className="about-team">
        <h3>Who we are</h3>
        <span className="who-we-are">Staff</span>
        <Team
          image={image}
          name={"Trey Morehouse"}
          title={"Artistic Director"}
          bio={
            "A 2012 alumni of UNCW. Trey has worked professionally with Burning Coal Theatre and North Carolina Theatre in the area of education and outreach. Trey has also worked professionally as an assistant director with South Coast Repertory (in Costa Mesa, CA), and New Swan Shakespeare (in Irvine, CA)."
          }
        />
        <Team
          image={image}
          name={"Chloe Mason"}
          title={"Artistic Associate"}
          bio={
            "Chloe Mason attended Appalachian State University where she earned her BA in theatre performance, and minored in film. There, Chloe lead a social justice themed theatre ensemble known as Women+ Inclusive Theatre Troupe, and became a twice published poet. In addition to acting, Chloe has lead intimacy coordination and movement specific work in past MoB productions. She’s a hands on visual artist who has designed past programs and posters for MoB through her chosen medium, collage. She’s a full time educator, and part time story teller here in Wilmington NC. "
          }
        />
        <Team
          image={image}
          name={"Amber Moore"}
          title={"Artistic Associate"}
          bio={
            "Amber Briana Moore is an actor and racial equity advocate. She has been featured in various productions in the Southeast from live theatre, films and network television. She received her B.A. in Theatre and African American Studies at the University of North Carolina at Greensboro, where she also discovered her interest in art centering on African American life and culture. She has been involved with MoB since 2018 and regularly advises with research on local African American history. "
          }
        />
        <Team
          image={image}
          name={"Georgia Cole"}
          title={"Artistic Associate"}
          bio={
            "Growing up in Wilmington, NC, Georgia was very much involved with the local theatre community, participating in companies including Thalian Association, TACT, Journey, and for 6 years straight with Cape Fear Shakespeare. Georgia decided to spend their undergrad years abroad, traveling and learning about prominent social justice issues. They are a passionate believer in community-based activism, which has brought them to their work with MoB."
          }
        />
        <Team
          image={image}
          name={"Sarah Osoman"}
          title={"Literary Associate"}
          bio={"Coming soon."}
        />
        <span className="who-we-are">Board</span>
        <Team
          image={image}
          name={"La-taun Danns"}
          title={"Board President"}
          bio={"Coming soon."}
        />
        <Team
          image={image}
          name={"Conswalia Green"}
          title={"Board Member"}
          bio={
            "Conswalia began her theater career in Durham, NC, where she managed performances at the Historic Carolina Theatre. Conswalia ultimately landed at the Joseph Papp Public Theater/ New York Shakespeare Festival as the head theater manager. Since returning to the Wilmington area Conswalia has contributed to A Storytelling Project to Raise Awareness: Facing Community (a collaboration with UNCW) and Gila Green Writes."
          }
        />
        <Team
          image={image}
          name={"Rev. John McLaughlin"}
          title={"Board Member"}
          bio={
            "John is the Pastor of St. Jude's Metropolitan Community Church in Wilmington, NC, the first house of faith formed with its primary outreach to the LGBTQ community. He is a lifelong advocate of issues of justice in the areas of sexism, gender-ism, racism, class-ism, and all the -isms with which we divide ourselves."
          }
        />
        <Team
          image={image}
          name={"Nathan Ragain"}
          title={"Board Member"}
          bio={
            "Nathan is a Bruce Scholar Visiting Lecturer with UNCW’s Honors Department. Nathan is passionate about social equity issues."
          }
        />
        <Team
          image={image}
          name={"Amanda Wolf"}
          title={"Board Member"}
          bio={"Coming Soon"}
        />
      </div>
      <div className="about-press">
        <h3>Press and Recognition</h3>
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
        <h3>Sponsors</h3>
        <p>sponsors images</p>
      </div>
    </div>
  );
}

export default About;
