import Team from "../components/Team";
import image from "/images/placeholder.jpeg";

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
          <h4>ENGAGEMENT. RISK. ADVOCACY.</h4>
        </p>
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
        <button>[LINK TO DONATE]</button>
      </div>
      <div className="about-team">
        <h3>Who we are</h3>
        <h4>Staff</h4>
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
        <h4>Board</h4>
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
        <h3>Press</h3>
        <p>press components galore</p>
      </div>

      <div className="about-sponsors">
        <h3>Sponsors</h3>
        <p>sponsors images galore</p>
      </div>
    </div>
  );
}

export default About;
