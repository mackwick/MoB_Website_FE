import FullProj from "../components/FullProj";
import image from "/images/sco-proj.jpg";

function Scotopia() {
  return (
    <FullProj
      image={image}
      name={"SCOTOPIA: SHORT PLAYS TO HELP YOU SEE IN THE DARK"}
      details={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    />
  );
}

export default Scotopia;
