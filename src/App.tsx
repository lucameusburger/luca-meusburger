// stair-text.scss
import "./stair-text.scss";

// import Logo from "./assets/logo.svg";
// import Logo1 from "./assets/logo-1.svg";
// import Logo2 from "./assets/logo-2.svg";
// import Logo3 from "./assets/logo-3.svg";
import ProjectPill from "./components/ProjectPill";
import { useRef } from "react";

function App() {
  const currentYear = new Date().getFullYear();

  const targetsRef = useRef<(HTMLElement | null)[]>([]);

  // make svgs spawn and fly up in #background
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    const background = document.getElementById("background");
    if (background) {
      background.style.transform = `translate(${scrollX}px, ${scrollY}px)`;
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className=" w-full h-full text-purple-500 font-light selection:bg-purple-100">
      <div className="container relative w-full h-full mx-auto p-4 md:p-10 ">
        <section className="motion-safe:animate-fadeIn" ref={(el) => targetsRef.current.push(el)} id="header">
          <div className="pt-8 pb-64">
            <h1 className="text-4xl font-medium text-purple-500 ">luca meusburger</h1>
            <h2 className="text-4xl">web and app</h2>
          </div>
        </section>

        <div className="hidden xl:flex absolute left-[38rem] top-0">
          <ul className="Words">
            <li className="Words-line">
              <p>&nbsp;</p>
              <p>web dev</p>
            </li>
            <li className="Words-line">
              <p>web dev</p>
              <p>design</p>
            </li>
            <li className="Words-line">
              <p>design</p>
              <p>app dev</p>
            </li>
            <li className="Words-line">
              <p>app dev</p>
              <p>by</p>
            </li>
            <li className="Words-line">
              <p>by</p>
              <p>luca</p>
            </li>
            <li className="Words-line">
              <p>luca</p>
              <p>meusburger</p>
            </li>
            <li className="Words-line">
              <p>meusburger</p>
              <p>&nbsp;</p>
            </li>
          </ul>
        </div>

        <section className="motion-safe:animate-fadeIn" ref={(el) => targetsRef.current.push(el)} id="about">
          <div className="py-8 max-w-xl">
            <h2 className="text-4xl font-medium">digital times</h2>
            <p className="text-xl pb-16">
              i am a passionate, freelance multidisciplinary developer and designer. with a passion for creating stunning mobile apps, modern web apps, and blazingly fast, seo-friendly websites. from
              game development to graphic design, i've been coding and designing for as long as i can remember. today, I specialize in building complex websites and mobile apps, using the latest tech
              and frameworks to bring your and my ideas to life. let's chat and start building something amazing together!
            </p>
          </div>
        </section>

        <section className="motion-safe:animate-fadeIn" ref={(el) => targetsRef.current.push(el)} id="offer">
          <div className="pt-8 pb-32 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <h2 className="text-4xl font-medium">web</h2>
                <p className="text-xl">
                  the web of today is moving fast. designwise and technologywise, i have a strong passion for creating beautiful and functional websites. what i love is to keep up to date with all
                  trends in both worlds.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-medium">app</h2>
                <p className="text-xl">
                  of course an app can make sense. the web is really capable today but sometimes an app can offer a better user experience and more advanced features that are not possible on the web.
                  especially when it gets more complex.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-medium">design</h2>
                <p className="text-xl">
                  {/* text about the web part */}
                  design is half the battle and influences how software is used and thus how effective it can be. design not only has to look good but has to be functional that's why ux is as
                  important as ui.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="motion-safe:animate-fadeIn" ref={(el) => targetsRef.current.push(el)} id="projects">
          <div className="pt-8 pb-32 max-w-5xl gap-4 flex flex-col">
            <h2 className="text-4xl font-medium">latest projects</h2>
            <ProjectPill title={"poolbar festival app 2023"} type={"app"} link={"https://apps.apple.com/at/app/poolbar/id1619099913/"} />
            <ProjectPill title={"amadeus austrian music awards voting system and website"} type={"web"} link={"https://aama.at/"} />
            <ProjectPill title={"austrian music releases website"} type={"web"} link={"https://releases.aama.at/"} />
            <ProjectPill title={"wissenschaftsverbund vierländerregion bodensee website and design"} type={"web"} link={"https://wissenschaftsverbund.org/"} />
            <ProjectPill title={"ines strohmaier website"} type={"web"} link={"https://inesstrohmaier.com/"} />
            <ProjectPill title={"poolbar festival app 2022"} type={"app"} link={"https://apps.apple.com/at/app/poolbar/id1619099913/"} />
            <ProjectPill title={"motolix website"} type={"web"} link={"https://motolix.com/"} />
            <ProjectPill title={"my21 subscription tool and website"} type={"web"} link={"https://my21.at/"} />
            <ProjectPill title={"cmc solutions ui design"} type={"design"} link={"https://cmc-solutions.com/"} />
            <ProjectPill title={"winsauer bau gmbh erp system"} type={"app"} link={"https://wbau.at/"} />
            <ProjectPill title={"conrad sohm graphic design"} type={"design"} link={"https://conradsohm.com/"} />
          </div>
        </section>

        <section className="motion-safe:animate-fadeIn" ref={(el) => targetsRef.current.push(el)} id="footer">
          <div className="flex flex-col gap-4">
            <a className="hover:text-purple-400 active:text-purple-600" href="mailto:luca@meusburger.io">
              luca@meusburger.io
            </a>
            <div className="flex gap-4 w-full justify-between">
              <div className="flex gap-4">
                <a className="hover:text-purple-400 active:text-purple-600" href="https://github.com/lucameusburger" target="_blank" rel="noreferrer">
                  github
                </a>
                <a className="hover:text-purple-400 active:text-purple-600" href="https://www.linkedin.com/in/luca-meusburger/" target="_blank" rel="noreferrer">
                  linkedin
                </a>
                <a className="hover:text-purple-400 active:text-purple-600" href="https://www.instagram.com/meusburger.io/" target="_blank" rel="noreferrer">
                  instagram
                </a>
              </div>
              <span>copyright © luca meusburger {currentYear}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
