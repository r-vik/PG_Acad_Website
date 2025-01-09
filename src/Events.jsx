import React from 'react';

const EventCard = ({ title, description, images }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - Image ${index + 1}`}
          className="rounded-lg shadow-md w-full h-auto"
        />
      ))}
    </div>
  </div>
);

const EventsSection = () => {
  const event = {
    title: "Academic Writing Workshop",
    description:
      "On November 8, 2024 (6pm - 8pm), an engaging and highly informative Academic Writing Workshop was held at IIT Mandi by PG Academic Council, providing students across undergraduate, postgraduate, and doctoral programs with essential insights into academic writing. The event, organised in Room 1B of the A-18 building, brought together a distinguished panel of speakers who covered a range of topics, from writing strategies to the publication process.",
    images: [
      "../src/assets/Event1_1.jpg",
      "../src/assets/Event1_2.jpg",
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Events
        </h2>

        {/* Event Card */}
        <div className="mb-12">
          <EventCard {...event} />
        </div>

        {/* Footer Note */}
        <p className="text-lg text-gray-600 text-center">
          More events to come soon. Stay tuned!
        </p>
      </div>
      <div
          id="connect"
        ></div>
    </section>
  );
};

export default EventsSection;
