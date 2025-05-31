import { div } from "three/tsl";
import { about } from "../constants/Abt";

const About = () => {
  return (
    <div>
      {about.map((head, idx) => (
        <div>
          <h3 key={head.heading + idx}>{head.heading}</h3>
          {head.inner.map((item, x) => (
            <div key={item.subheading + x}>
              <h2>{item.subheading}</h2>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default About;
