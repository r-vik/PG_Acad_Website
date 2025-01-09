import React from 'react';

// Reusable Box Component
const FormBox = ({ title, description, href }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      aria-label={title}
    >
      Fill Form
    </a>
  </div>
);

const FormsSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="container mx-auto px-4 mt-2.5">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Connect with Us
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 text-center mb-12">
          We value your feedback and creativity. Use the links below to connect with us, share your thoughts, or showcase your work.
        </p>

        {/* Form Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormBox
            title="Academic Grievances or Suggestions"
            description="Have any academic grievances, doubts, or suggestions? Let us know and help us improve!"
            href="https://forms.gle/4wazrz4T21J2uRhq5"
          />
          <FormBox
            title="Share Your Creative Work"
            description="Do you write poetry, stories, or articles? Share them with us! The best ones will be featured on our website."
            href="https://forms.gle/Pxpnz5ei6VogBpcZA"
          />
        </div>
      </div>
    </section>
  );
};

export default FormsSection;
