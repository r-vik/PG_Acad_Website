import { div } from "framer-motion/client";
import React from "react";

const Message = ({ imageSrc, altText, title, message, author }) => {
  return (
    <div className="bg-gray-200 p-8 flex items-center border-b-4 border-gray-300 rounded-lg shadow-lg">
      <div className="w-1/3">
        <img
          src={imageSrc}
          alt={altText}
          className="w-56 h-56 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="w-[calc(66.6667%+200px)] ml-[-200px] bg-white p-4 pl-8 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-700">{message}</p>
        <p className="mt-4 text-sm text-gray-500">- {author}</p>
        <div className="w-full h-1 mt-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400"></div>
      </div>
    </div>
  );
};

const Messagee = ({ imageSrc, altText, title, message, author }) => {
  return (
    <div className="bg-gray-200 p-8 flex items-center border-b-4 border-gray-300 rounded-lg shadow-lg">
      <div className="w-1/3">
        <img
          src={imageSrc}
          alt={altText}
          className="w-56 h-56 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="w-[calc(66.6667%+200px)] ml-[-200px] bg-white p-4 pl-8 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-700">{message}</p>
        <p className="mt-4 text-sm text-gray-500">- {author}</p>
        <div
          id="team"
          className="w-full h-1 mt-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400"
        ></div>
      </div>
      <div></div>
    </div>
  );
};

const DeanMessage = () => (
  <Message
    imageSrc="../src/assets/4.jpg"
    altText="Dean"
    title="Dean Student's Message"
    message={`"The PG Academic Council, an essential component of the Student
      Gymkhana, majorly takes care of the development of our postgraduate
      students. I envision this council as exceptional, transcending
      conventional borders and connecting scholars in the quest for knowledge, 
      innovation, and transformative measures. The objective of this council 
      is to improve academic innovation by regularly revising our curriculum to 
      incorporate recent developments in different areas of technology and research. 
      We value the great variety that every student brings, so promoting a welcoming 
      environment within our academic community. Our student-centric approach 
      prioritizes the holistic development of our postgraduate scholars, which 
      helps them to navigate the complexities of academia and beyond. I strongly 
      believe that the council works tirelessly to promote ethical research and 
      professionalism in order to nurture an environment of integrity and 
      responsibility that will help our students have impactful careers. Let 
      us collaboratively create a strong council characterized by excellence, 
      innovation, and diversity in postgraduate education."`}
    author="Dr. Tushar Jain"
  />
);

const DeanMessage2 = () => (
  <Message
    imageSrc="../src/assets/5.jpg"
    altText="Faculty Advisor"
    title="Faculty Advisor's Message"
    message={`"The Student Academic Council plays a vital role in ensuring that
      students have a positive and fulfilling academic experience. It helps
      to create a more democratic and student-centered learning environment
      by student representation. It serves as a bridge between students and
      the administration, providing a platform for students to voice their
      opinions, make suggestions, and contribute to decision-making processes
      that affect their academic experience. Moreover, it empowers students to
      take ownership of their education and advocate for their needs. I wish 
      good luck to the academic council members for their active participation 
      and taking up new initiatives for a vibrant academic atmosphere on campus."`}
    author="Dr. C.S Yadav"
  />
);

const DeanMessage3 = () => (
  <>
    <Messagee
      imageSrc="../src/assets/1_2.jpg"
      altText="PG Academic Secretary"
      title="PG Academic Secretary's Message"
      message={`"The PG Academic Society envisions an unparalleled academic
      environment, where innovation and excellence converge. By fostering
      interdisciplinary collaboration, continually advancing curriculum, and
      nurturing ethical research, it empowers students to excel, shaping
      transformative leaders prepared to tackle global challenges with
      integrity and vision."`}
      author="Anugraha K Kurian"
    />
  </>
);

export { DeanMessage, DeanMessage2, DeanMessage3 };
