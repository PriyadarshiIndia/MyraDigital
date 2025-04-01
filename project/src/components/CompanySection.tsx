import { useState, useEffect } from "react";

const CompanySection = () => {
  const words = ["LED Projectors", "LCD Projectors", "Mobile Accessories"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const delayBetweenWords = 1000;

    if (!isDeleting && charIndex === words[index].length) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setDisplayText(words[index].substring(0, charIndex));
      setCharIndex((prevCharIndex) => prevCharIndex + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="max-w-7xl py-24 px-4 rounded-3xl mx-auto flex flex-col bg-white md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <img
          src="https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg"
          alt="Building"
          className="rounded-lg shadow-lg w-full hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-shadow duration-300"
        />
      </div>
      <div className="w-full md:w-3/4 text-center md:text-left">
        <p className="text-sm text-pink-400 uppercase font-medium tracking-wider">Welcome to Myra Digital India</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
        India’s Leading Importer and OEM Provider for {" "}
          <span className="text-pink-500 relative">
            {displayText}
            <span
              className={`absolute ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
            >
              |
            </span>
          </span>
        </h2>
        <p className="mt-4 text-gray-600">
          Since 2011, Myra Digital India has been a trusted importer and OEM provider of high-quality LED and LCD projectors.
          We serve corporate offices, educational institutions, entertainment, and home theater sectors nationwide.
          Our expertise extends to manufacturing premium mobile accessories, ensuring cutting-edge technology and durability.
        </p>
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:scale-105 font-medium">
          Download Catalogue
        </button>
      </div>
    </section>
  );
};

export default CompanySection;
