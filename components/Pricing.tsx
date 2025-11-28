import React from 'react';
import { Section } from './ui/Section';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing">
      <hr className="border-t-2 border-black mb-12" />
      
      <h3 className="text-2xl font-bold text-black mb-6">
        The Real Value of What You’re Getting (And Why You’re Not Paying Anywhere Near It)
      </h3>

      <p className="text-lg mb-6">
        By this point, you’ve seen everything that’s included:
      </p>

      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>6 implementation-focused core modules</li>
        <li>3 practical bonuses</li>
        <li>Templates, prompt libraries, and workflows you can plug directly into your day‑to‑day work</li>
      </ul>

      <p className="text-lg mb-6">
        If these were sold separately, or delivered the way most corporate training is, here’s how it would <em>reasonably</em> be priced:
      </p>

      <div className="space-y-6 mb-8 ml-4">
        <div>
          <p className="text-lg font-bold">Core Training: 6 Deep-Dive Modules on AI Productivity</p>
          <p className="text-lg">If this were run as a live workshop series or cohort-based program for busy professionals, it would be priced at <strong>$997–$1,497</strong> per seat.</p>
          <p className="text-lg">Let’s be conservative and call it: <strong>$997 value</strong></p>
        </div>

        <div>
          <p className="text-lg font-bold">Implementation Assets: Templates, Prompts, and Checklists</p>
          <p className="text-lg">A standalone library of reusable prompts, frameworks, and checklists you can drop straight into your work easily justifies <strong>$197–$297</strong>.</p>
          <p className="text-lg">We’ll call it: <strong>$247 value</strong></p>
        </div>

        <div>
          <p className="text-lg font-bold">Bonus #1: 50+ Ready‑to‑Use Professional Prompt Templates</p>
          <p className="text-lg">If you hired a copywriter/consultant to build this just for you, you’d easily spend <strong>$300–$500</strong>.</p>
          <p className="text-lg">Conservatively: <strong>$297 value</strong></p>
        </div>

        <div>
          <p className="text-lg font-bold">Bonus #2: Role-Specific Quickstart Guides</p>
          <p className="text-lg">Getting role‑specific guidance is what consultants charge real money for. Even modestly, this is <strong>$147–$297</strong> worth of clarity and saved trial‑and‑error.</p>
          <p className="text-lg">We’ll call it: <strong>$197 value</strong></p>
        </div>

        <div>
          <p className="text-lg font-bold">Bonus #3: Ethical & Safe AI Use Mini‑Guide</p>
          <p className="text-lg">A short, practical guide that helps you avoid costly mistakes or compliance issues is worth far more than its “pages” suggest.</p>
          <p className="text-lg">We’ll keep it modest: <strong>$97 value</strong></p>
        </div>
      </div>

      <p className="text-lg mb-6">Add that up:</p>
      
      <div className="text-lg font-mono bg-gray-50 p-6 mb-8 border border-gray-200">
        <p>$997 (core modules)</p>
        <p>+ $247 (implementation assets)</p>
        <p>+ $297 (prompt library)</p>
        <p>+ $197 (role quickstarts)</p>
        <p>+ $97 (ethical use guide)</p>
        <p className="my-2">——————————————</p>
        <p className="font-bold">= $1,835 in reasonable, real‑world value</p>
      </div>

      <p className="text-lg mb-6">
        And honestly, that still undervalues what this does once it starts saving you 5–10+ hours every single month.
      </p>

      <p className="text-lg mb-6">
        At <strong>$1,000+</strong>, this would still be a fair investment for:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>A manager who wants to multiply their team’s output</li>
        <li>A consultant or freelancer who bills by the project, not the hour</li>
        <li>A professional whose promotion trajectory depends on visible results</li>
      </ul>

      <p className="text-lg mb-6">
        But I also know many people will be enrolling out of their own pocket, not on a corporate training budget.
      </p>

      <p className="text-lg mb-6">
        So you’re <strong>not</strong> going to pay $1,835.
      </p>
      
      <p className="text-lg mb-6">
        You’re not even going to pay $997.
      </p>
      
      <p className="text-lg mb-8">
        You won’t pay $597. <br/>
        You won’t even pay $497.
      </p>

      <div className="border-2 border-black p-8 text-center bg-yellow-50 mb-12">
        <p className="text-2xl font-bold mb-4">
          Your investment for lifetime access to the full program, all bonuses, and all future updates is just:
        </p>
        <p className="text-5xl font-extrabold text-red-700 mb-2">$297 <span className="text-xl font-normal text-black">(one-time)</span></p>
      </div>

      <p className="text-lg mb-6">That’s less than:</p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>A single day at a typical professional conference</li>
        <li>A few hours of your billed time</li>
        <li>What many people spend in a month on takeout and coffee</li>
      </ul>

      <p className="text-lg mb-6">
        And in return, you’re getting a system that can save you <strong>dozens of hours</strong> over the next few months alone, and position you as one of the professionals who knows how to <em>lead</em> in an AI‑driven workplace.
      </p>

      <p className="text-lg">
        Right after you complete your enrollment, you’ll get instant access to everything, so you can start turning AI into your unfair advantage at work immediately.
      </p>
    </Section>
  );
};