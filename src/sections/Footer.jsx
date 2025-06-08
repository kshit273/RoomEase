import { socials } from "../constants/Abt";

const Footer = () => {
  return (
    <section id="footer" className="relative z-10">
      <div className="flex min-h-[300px]">
        <div className="flex-1 flex-col items-center ml-[20px] mt-[10px]">
          <img
            src="./images/logo.png"
            alt="RoomEase"
            className="h-[225px] w-[225px] "
          />
          <p className="pl-[20px]">© all copywrite reserved</p>
        </div>
        <div className="flex flex-col mr-[50px]">
          <div className="footer-wrapper flex justify-end p-[20px] gap-[60px] mt-[20px] ">
            <div className="flex flex-col">
              <h6>Help and services</h6>
              <p>
                <a href="#">How does it work</a>
              </p>
              <p>
                <a href="#">FAQs</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </div>
            <div className="flex flex-col">
              <h6>To explore</h6>
              <p>
                <a href="#">Accomodations</a>
              </p>
              <p>
                <a href="#">Experiences</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
            </div>
            <div className="flex flex-col">
              <h6>Other possibilities</h6>
              <p>
                <a href="#">Give away</a>
              </p>
              <p>
                <a href="#">subscribe</a>
              </p>
            </div>
          </div>
          <div className="socials flex justify-center">
            {socials.map((item) => (
              <div key={item.name} className=" px-[15px] mt-[50px]">
                <a href={item.link}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-[35px] w-[35px]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
