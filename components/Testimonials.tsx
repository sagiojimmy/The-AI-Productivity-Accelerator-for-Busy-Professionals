import React from 'react';
import { Section } from './ui/Section';

export const Testimonials: React.FC = () => {
  return (
    <Section>
      <hr className="border-t border-gray-300 my-12" />
      <h3 className="text-2xl font-bold text-black mb-8">
        “Will This Actually Work For Me?”
      </h3>

      <p className="text-lg mb-8">
        Here’s what happens when busy professionals stop dabbling and start using AI <em>strategically</em>:
      </p>

      <div className="space-y-8 mb-8">
        <blockquote className="border-l-4 border-gray-400 pl-4 py-1">
          <p className="font-bold text-lg mb-2">“AI went from a novelty to my daily assistant.”</p>
          <p className="italic text-lg mb-2">“Before this, I used ChatGPT maybe once a week and didn’t really ‘get’ the hype. Now it helps me draft emails, create first drafts of proposals, and summarize long documents. I’d estimate I’m saving 8–12 hours a week.”</p>
          <cite className="block not-italic text-gray-700">— Senior Account Manager</cite>
        </blockquote>

        <blockquote className="border-l-4 border-gray-400 pl-4 py-1">
          <p className="font-bold text-lg mb-2">“I got my evenings back.”</p>
          <p className="italic text-lg mb-2">“I used to write reports at night because my days were too full of meetings. Now I feed my notes into AI, get a structured draft, and just edit. I’m still working hard, but I’m not constantly behind anymore.”</p>
          <cite className="block not-italic text-gray-700">— Operations Lead</cite>
        </blockquote>

        <blockquote className="border-l-4 border-gray-400 pl-4 py-1">
          <p className="font-bold text-lg mb-2">“It made me look more prepared and strategic.”</p>
          <p className="italic text-lg mb-2">“Using AI as a thinking partner helped me tighten up my presentations and anticipate pushback from senior leadership. It’s like having a sharp colleague to bounce ideas off — on demand.”</p>
          <cite className="block not-italic text-gray-700">— Product Manager</cite>
        </blockquote>
      </div>

      <p className="text-lg italic text-gray-600">
        (Names and titles are anonymized, but the transformations are very real and very typical.)
      </p>
    </Section>
  );
};