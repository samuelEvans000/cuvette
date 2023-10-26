import "./Sidebar.css";
import dashboard from "../../assets/dashboard.png";
import skill from "../../assets/skill.png";
import internship from "../../assets/internship.png";

function SideBar() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default SideBar;
