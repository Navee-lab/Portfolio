import React from "react";
import { techStackDetails } from "../Details";
import javaImg from "../assets/techstack/java.webp";
import cppImg from "../assets/techstack/c++.png";
import sqlImg from "../assets/techstack/sql.png";

function Technologies() {
  const {
    java,
    cpp,
    sql,
    html,
    css,
    js,
    react,
    bootstrap,
    vscode,
    git,
    github,
    npm,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 mt-[-55px]">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={javaImg} title="Java" alt="" />
        <img src={cppImg} title="cpp" alt="" />
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={sqlImg} title="sql" alt="" />
        <img src={react} title="React" alt="" />
        

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        
      </section>
    </main>
  );
}

export default Technologies;
