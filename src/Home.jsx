import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './Header';
import ClubsSection from './Clubs';
import FormsSection from './Forms';
import ImageCarousel from './Carousel'
import TeamSection from './teamSection';
import EventsSection from './Events';
import { DeanMessage, DeanMessage2, DeanMessage3 } from './DeanMessage'
import { i } from 'framer-motion/client';
const HomePage = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col bg-slate-500">
      <main className="flex-grow">
        <ImageCarousel />

        <div className="bg-white p-8 text-center">
          <h2 className="text-2xl mb-4">Inspiring Quotes</h2>
          <blockquote className="italic text-gray-600">
            "Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today."
          </blockquote>
          <div id="about">
            <p className="mt-2" id="about">
              - Malcolm X
            </p>
          </div>
        </div>

        {/* Dean's Message Section */}
        <div>
          <DeanMessage />
          <DeanMessage2 />
          <DeanMessage3 />
        </div>
        <TeamSection />
        <ClubsSection />
        <EventsSection />
        <FormsSection />
        <div id="contact"></div>
      </main>
    </div>
  );
};

export default HomePage;