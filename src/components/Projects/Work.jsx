import { useEffect, useState } from "react";
import { projectsdata } from "./Data";
import { projectsnav } from "./Data";
import Workitem from "./Workitem";
const Work = () => {
  const [item, setitem] = useState({ name: "all" });
  const [projects, setprojects] = useState([]);
  const [active, setactive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setprojects(projectsdata);
    } else {
      const newprojects = projectsdata.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setprojects(newprojects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setitem({ name: e.target.textContent.toLowerCase() });
    setactive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsnav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active == index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <Workitem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Work;
