import React from 'react';
import { Section } from './ui/Section';

export const Closing: React.FC = () => {
  return (
    <Section>
      <hr className="border-t border-gray-300 my-12" />
      <h3 className="text-2xl font-bold text-black mb-6">
        You Can Either Be Carried By the AI Wave... Or Surpass It
      </h3>

      <p className="text-lg mb-6">
        You don’t control whether AI is reshaping the workplace.<br/>
        You <em>do</em> control whether you’re one of the people using it to perform at a higher level, with less effort and stress.
      </p>

      <p className="text-lg mb-6">
        In a year, you’ll look back at this moment in one of two ways:
      </p>

      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>As the point where you decided to get serious about AI, built an edge, and made your work easier and more impactful</li>
        <li>Or as the time you stayed “curious but casual” while others quietly moved ahead</li>
      </ul>

      <p className="text-lg mb-12">
        If you’re ready to turn AI from an abstract buzzword into your unfair advantage at work…
      </p>

      <p className="text-lg font-bold mb-8">
        Click below, enroll now, and start building your AI‑powered workflow.
      </p>

      <div className="text-center py-6 border-2 border-black bg-blue-50">
        <a href="#pricing" className="text-blue-700 underline font-bold text-2xl hover:text-blue-900">
          Enroll in The AI Productivity Accelerator for Busy Professionals — $297
        </a>
        <p className="text-lg mt-4 font-bold">
          Lifetime Access · All Bonuses Included · 30‑Day Do‑The‑Work Guarantee
        </p>
      </div>
    </Section>
  );
};