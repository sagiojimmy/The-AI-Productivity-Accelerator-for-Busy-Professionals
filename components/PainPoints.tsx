import React from 'react';
import { Section } from './ui/Section';

export const PainPoints: React.FC = () => {
  return (
    <Section>
      <h3 className="text-2xl font-sans font-bold text-black mb-6">
        If You’re a Busy Professional, This Probably Sounds Familiar…
      </h3>

      <p className="text-lg mb-6">
        You start every day with good intentions. You <em>want</em> to:
      </p>

      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>Finally clear your inbox</li>
        <li>Finish that important presentation</li>
        <li>Prep for tomorrow’s client meeting</li>
        <li>Spend more time on strategic work instead of admin</li>
      </ul>

      <p className="text-lg mb-6">
        But by 5:30 PM, here’s what’s actually happened:
      </p>

      <ul className="list-disc pl-8 mb-8 space-y-2 text-lg">
        <li>You’ve answered emails, Slacks, and “quick questions” all day</li>
        <li>You’ve been in back-to-back meetings with no time to <em>think</em></li>
        <li>You’re still manually writing emails, reports, and updates from scratch</li>
        <li>Your “deep work” tasks get pushed to after hours (again)</li>
      </ul>

      <p className="text-lg mb-6 font-bold">
        You’re smart. You’re capable. You’re not lazy.
      </p>

      <p className="text-lg mb-6">
        You’re just drowning in a type of work that AI can <em>already</em> do shockingly well, if you know how to use it.
      </p>
      
      <p className="text-lg mb-6">
        And right now, there are two kinds of professionals:
      </p>
      
      <ol className="list-decimal pl-8 mb-8 space-y-2 text-lg">
        <li>Those who treat AI like a toy, dabble with ChatGPT once in a while, then say “it’s not that good.”</li>
        <li>Those quietly turning AI into a force-multiplier that drafts, summarizes, plans, analyzes, and preps everything for them… so they can focus on the stuff that actually moves the needle.</li>
      </ol>

      <p className="text-lg mb-8 italic">
        Guess which group is about to become dramatically more valuable in the job market, and which group is at risk of being left behind?
      </p>

      <hr className="border-t border-gray-300 my-8" />

      <h3 className="text-2xl font-sans font-bold text-black mb-6">
        The Real Problem Isn’t “AI” — It’s the Way You’ve Been Shown to Use It
      </h3>

      <p className="text-lg mb-6">
        Most professionals have been handed AI like this: <a href="#pricing" className="text-blue-700 hover:text-blue-900 underline">“Here’s a powerful tool. Go figure it out.”</a>
      </p>

      <p className="text-lg mb-6">
        No wonder it feels overwhelming or underwhelming. You might have tried:
      </p>

      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>Typing a random question into ChatGPT and getting a generic answer</li>
        <li>Asking it to “write an email,” getting something stiff and robotic</li>
        <li>Trying to research something, then doubting if you can trust the output</li>
        <li>Feeling guilty you’re “not using AI enough,” but not sure where to start</li>
      </ul>

      <p className="text-lg mb-6">
        So you conclude: <em>“It’s interesting, but it doesn’t really save me time.”</em>
      </p>

      <p className="text-lg mb-6 font-bold">
        That’s like getting a Ferrari and leaving it in first gear.
      </p>

      <p className="text-lg mb-6">
        <strong>The missing piece?</strong> You don’t need to become an AI engineer. You need a practical, step‑by‑step <em>playbook</em> for using AI to do your real, everyday work, in your role, in your industry, with your style, so it actually buys back your time.
      </p>
    </Section>
  );
};