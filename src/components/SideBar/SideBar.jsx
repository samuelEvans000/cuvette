import "./SideBar.css";
import dashboard from "../../assets/dashboard.png";
import skill from "../../assets/skill.png";
import internship from "../../assets/internship.png";
import Row1 from "../Row1/Row1";

function SideBar() {
  return (
    <>
      <div className="content">
        <aside className="sidebar">
          <div>
            <ul className="buttons">
              <li>
                <button className="button">
                  <img src={dashboard}></img>Dashboard
                </button>
              </li>
              <li>
                <button className="active-button">
                  <img src={skill}></img>Skill Test
                </button>
              </li>
              <li>
                <button className="button">
                  <img src={internship}></img>Internships
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <div>
          <Row1/>
        </div>
      </div>
    </>
  );
}

export default SideBar;
