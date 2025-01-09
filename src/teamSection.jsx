import React from "react";

const TeamMember = ({ name, role, imageUrl, role2 }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2">{name}</h3>

          <p className="text-sm opacity-80 mb-1">{role2}</p>
          {/* <br></br> */}
          <p className="text-sm opacity-80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TeamMember2 = ({ name, role, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-xs opacity-80">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Define team data in arrays
const teamMembers = [
  {
    name: "Anugraha K Kurian",
    role2: "MA - Dev. Studies",
    role: "PG Academic Secretary",
    imageUrl: "../src/assets/1.jpg",
  },
  {
    name: "Pratyush Kishan",
    role2: "MBA - DSAI",
    role: "Social Media and Website (Head)",
    imageUrl: "../src/assets/2.png",
  },
  {
    name: "Tanya Gupta",
    role2: "MA - Dev. Studies",
    role: "Social Media and Website (Co-Head)",
    imageUrl: "../src/assets/3.png",
  },
];

const councillors = [
  {
    name: "Vidit",
    role: "MBA-DSAI",
    imageUrl: "../src/assets/6.png",
  },
  {
    name: "Surendra Kumar",
    role: "MSc - App. Maths",
    imageUrl: "../src/assets/7.png",
  },
  {
    name: "Riya Arya",
    role: "MTech - CSE",
    imageUrl: "../src/assets/8.png",
  },
  {
    name: "Shivam Kheral",
    role: "MSc - Chemistry",
    imageUrl: "../src/assets/9.png",
  },
  {
    name: "Abhishek Daithankar",
    role: "MA - Dev. Studies",
    imageUrl: "../src/assets/10.png",
  },
  {
    name: "Bhanu Pratap Singh",
    role: "MSc - Physics",
    imageUrl: "../src/assets/11.jpg",
  },
];

const subCouncillors = [
  {
    name: "Sanskar Pal",
    role: "MTech - CSE",
    imageUrl: "../src/assets/13.png",
  },
  {
    name: "Soumyadeep Khan",
    role: "MA - Dev. Studies",
    imageUrl: "../src/assets/14.png",
  },
  {
    name: "Shubh Mittal",
    role: "MTech(R) - Civil",
    imageUrl: "../src/assets/15.png",
  },
  {
    name: "Divas Gaur",
    role: "MSc - Physics",
    imageUrl: "../src/assets/16.png",
  },
  {
    name: "Vishal",
    role: "MSc - Chemistry",
    imageUrl: "../src/assets/17.png",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-gray-100 px-8 py-12">
      <h1 className="text-2xl font-bold text-center mb-8 ">Our Team</h1>

      {/* <h3 className="text-xl font-bold text-center mb-6">
        Our Heads
      </h3> */}
      {/* Main Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            role2={member.role2}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>

      {/* Councillors Section */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Academic Councillors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        {councillors.map((member, index) => (
          <TeamMember2
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>

      {/* Sub-Councillors Section */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Academic Co-Councillors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {subCouncillors.map((member, index) => (
          <TeamMember2
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
        <div
          id="clubs"
        ></div>
      </div>
    </div>
  );
};

export default TeamSection;
