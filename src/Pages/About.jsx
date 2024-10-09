import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "SQL", percentage: 70 },
    { name: "Python", percentage: 85 },
    { name: "Data Visualization", percentage: 90 },
    { name: "Statistical Analysis", percentage: 85 },
    { name: "Machine Learning", percentage: 80 },
  ];

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-gray-600 min-h-screen flex flex-col justify-center items-center p-8 animate-fadeIn">
      <div className="max-w-4xl text-gray-300">
        <h1 className="text-5xl font-extrabold text-white mb-6">About Me</h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-[30%] w[80%] p-4 flex justify-center items-start mt-4">
            <img
              src="https://muhammadumerkhan.github.io/images/IMG_20240921_233231819.jpg" // Replace with your profile picture URL
              alt="Muhammad Umer Khan"
              className="mt-[20%] rounded-full shadow-lg border-4 border-gray-700 hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="md:w-1/2 p-4">
            <h2 className="text-4xl font-bold text-white mb-4">Profile</h2>
            <p className="text-lg text-gray-400 mb-4">
              Aspiring Data Scientist with a passion for turning data into
              actionable insights. Currently pursuing a degree in Computer
              Science and building a solid foundation through internships,
              including hands-on experience in data analysis, machine learning,
              and NLP projects.
            </p>
            <p className="text-lg text-gray-400 mb-4">
              Proficient in tools like Power BI, SQL, Python, and libraries such
              as Spacy and NLTK. Eager to apply my skills in real-world
              scenarios and driven to make a meaningful impact in the data
              science field.
            </p>
            <h3 className="text-2xl font-bold text-white mt-6">Domain</h3>
            <p className="text-lg text-gray-400">
              Retail, Ecommerce, HR, Customer Analytics, and NLP
            </p>
            <h3 className="text-2xl font-bold text-white mt-6">Languages</h3>
            <p className="text-lg text-gray-400">English, Urdu</p>
            <h3 className="text-2xl font-bold text-white mt-6">BI Tools</h3>
            <p className="text-lg text-gray-400">Microsoft Power BI</p>
            <h3 className="text-2xl font-bold text-white mt-6">Other Skills</h3>
            <p className="text-lg text-gray-400">
              Python, SQL, Spacy, NLTK, MS Excel, Git, FastAPI, MySQL
            </p>
            <h3 className="text-2xl font-bold text-white mt-6">Interests</h3>
            <p className="text-lg text-gray-400">
              Gym, Learning New Technologies, Web Development
            </p>
          </div>
        </div>

        {/* Education Section */}
        <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
        <div className="text-lg text-gray-400 mb-8">
          <p>
            <strong>2023-Present:</strong> B.Sc. in Computer Science
            <br />
            Sindh Madressatul Islam University
            <br />
            Grade: First class distinction.
          </p>
          <p>
            <strong>2021-2022:</strong> Higher Secondary School
            <br />
            Government College Formen
            <br />
            Grade: First class distinction.
          </p>
        </div>

        {/* Skills Section */}
        <h2 className="text-4xl font-bold text-white mb-6">Skills</h2>
        <div className="space-y-4 mb-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <span className="text-gray-400">{skill.name}</span>
              <div className="relative pt-1">
                <div className="bg-gray-700 h-2 rounded-full w-[98%]">
                  <div
                    className={`bg-green-500 h-2 rounded-full`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                <span className="text-gray-400 ml-2">{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <div className="flex items-center flex-col sm:flex-row ">
          <a
            href="/path/to/your/CV.pdf" // Replace with your actual CV URL
            className="w-[50%] justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300  flex items-center "
            download
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
          <a
            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEAdPrMBMPcEJGgPpiNrOJoLK8b9rwAMxPM&keywords=muhammad%20umer%20khan&origin=RICH_QUERY_SUGGESTION&position=1&searchId=da2b6d01-ad3f-408f-86b1-297ed054448c&sid=H9Q&spellCorrectionEnabled=false" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center  mt-10 sm:mt-0 sm:mx-10 w-[50%] bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300  flex items-center "
          >
            <FaLinkedin className="mr-2 " /> LinkedIn
          </a>
          <a
            href="https://github.com/MuhammadUmerKhan" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center mt-10 sm:mt-0 w-[50%] bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center "
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
