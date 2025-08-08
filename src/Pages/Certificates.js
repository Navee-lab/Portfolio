import React from "react";

const certificates = [
  {
    title: "Data Base Management - NPTEL",
    image: require("../assets/certificates/dbma.png"),
    link: "/certificates/dbma.png",
  },
  {
    title: "Programming in Java - NPTEL",
    image: require("../assets/certificates/java.png"),
    link: "/certificates/java.png",
  },
  {
    title: "Problem Solving Through Programming in C - NPTEL",
    image: require("../assets/certificates/c.png"),
    link: "/certificates/c.png",
  },
  {
    title: "Data Analytics - ExcelR",
    image: require("../assets/certificates/Excelr.png"),
    link: "/certificates/Excelr.png",
  },
  
];

const Certificates = () => {
  return (
    <section className="section max-width mt-[-120px] mb-[45px]" id="certificates">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-[8px] text-left ">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="shadow-lg p-4 rounded-xl border hover:shadow-xl transition duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
