import React from 'react';

const ClubCard = ({ name, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold mb-4">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ClubsSection = () => {
  const clubs = [
    {
      name: "Civil Services Club",
      description:
        "This club is dedicated to students preparing for various administrative services and competitive exams, such as UPSC, SSC, and other government and public sector examinations. It will offer mentorship, peer study groups, and access to relevant resources to support you on your journey.",
    },
    {
      name: "Higher Studies Club",
      description:
        "This club focuses on higher education opportunities, exchange programs, and collaborative research initiatives. Whether you're considering postgraduate studies abroad, pursuing a Ph.D. internationally, exploring scholarships, or seeking student exchange programs, this platform will be the perfect fit for you.",
    },
  ];

  return (

      <div className="bg-gray-200 p-8 py-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Clubs</h2>

        {/* Introductory Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            The opening of two new clubs under the PG Academic Society, open to
            all students across the college, marks an exciting opportunity.
            These clubs aim to provide targeted support and resources for
            students preparing for administrative services and competitive
            exams, as well as those interested in higher education and student
            exchange opportunities.
          </p>
        </div>

        {/* Club Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <ClubCard key={index} {...club} />
          ))}
        <div
          id="events"
        ></div>
        </div>
      </div>
  );
};

export default ClubsSection;
