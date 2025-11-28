import React from 'react';
import { Section } from './ui/Section';

export const OfferDetails: React.FC = () => {
  return (
    <Section>
      <hr className="border-t border-gray-300 my-12" />

      {/* Investment Logic */}
      <h3 className="text-2xl font-bold text-black mb-6">
        Let’s Talk About the Investment
      </h3>
      <p className="text-lg mb-4">You’re not buying “information.”</p>
      <p className="text-lg mb-6">You’re buying back your time, your focus, and your edge.</p>
      
      <p className="text-lg mb-2"><strong>Your investment:</strong> $297 (one-time)</p>
      <p className="text-lg mb-6"><strong>Your return:</strong> Conservatively, saving 2–3 hours a week within the first month.</p>
      
      <p className="text-lg mb-4">If your time is worth even $50/hour, then:</p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>3 hours/week saved = $150/week</li>
        <li>In just 2 weeks, the course pays for itself</li>
        <li>Over 6 months, that’s over $3,000 in time value (minimum)</li>
      </ul>
      
      <p className="text-lg mb-4">And that doesn’t even count:</p>
      <ul className="list-disc pl-8 mb-8 space-y-2 text-lg">
        <li>The reduced stress from not working nights and weekends</li>
        <li>The increased quality of your work (and how that looks to leadership/clients)</li>
        <li>The strategic headspace you reclaim</li>
      </ul>

      <hr className="border-t border-gray-300 my-12" />

      {/* Guarantee */}
      <h3 className="text-2xl font-bold text-black mb-6">
        Your Risk Is Covered: 30-Day <em>Do-The-Work</em> Guarantee
      </h3>
      <p className="text-lg mb-6">I want this to be an absolute no‑brainer for you.</p>
      <p className="text-lg mb-6">Here’s the guarantee:</p>
      
      <p className="text-lg font-bold mb-6">
        Go through the first 3 modules.<br/>
        Try at least 10 of the prompts or workflows in your real work.
      </p>

      <p className="text-lg mb-6">
        If you don’t feel more productive, more in control of your workload, and genuinely excited about what AI can do for you…
      </p>
      <p className="text-lg mb-6">
        Email within 30 days of purchase, show you’ve implemented the materials, and you’ll get a full refund.
      </p>
      <p className="text-lg mb-6">
        No games. No awkward back-and-forth.
      </p>
      <p className="text-lg mb-8">
        You either get practical, real‑world results... or you get your money back.
      </p>

      <hr className="border-t border-gray-300 my-12" />

      {/* Urgency */}
      <h3 className="text-2xl font-bold text-black mb-6">
        Why This Is Time-Sensitive (And Why Waiting Has a Cost)
      </h3>
      <p className="text-lg mb-6">You don’t need scare tactics to know what’s happening:</p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>Companies are quietly expecting professionals to “figure out AI” on their own</li>
        <li>The colleagues who learn to use AI effectively will ship more, faster, and with less friction</li>
        <li>Those who don’t will <em>appear</em> slower and more expensive, even if they’re just as smart</li>
      </ul>

      <p className="text-lg mb-6">By joining now, you lock in:</p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li><strong>Today’s price of $297</strong> (this will increase for future cohorts as more content and tools are added. The next planned price point is $497)</li>
        <li><strong>Lifetime access + future updates</strong> as tools evolve and new workflows become possible</li>
        <li><strong>All current bonuses</strong>, including templates and role‑specific quickstarts</li>
      </ul>

      <p className="text-lg mb-6">
        To keep support and feedback manageable, enrollment with this package of bonuses is limited.
      </p>
      <p className="text-lg mb-6">
        Once the current enrollment window closes:
      </p>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg">
        <li>The bonuses may be pulled or moved into a higher tier</li>
        <li>The price will go up for new students</li>
      </ul>

      <p className="text-lg mb-8">
        If you can already feel that “I <em>should</em> be ahead of this AI curve” feeling in your gut, that’s your signal.
      </p>

      <hr className="border-t border-gray-300 my-12" />

      {/* How It Works */}
      <h3 className="text-2xl font-bold text-black mb-6">
        How It Works (Enrollment & Access)
      </h3>
      
      <ol className="list-decimal pl-8 mb-8 space-y-6 text-lg">
        <li>
          <strong>Click the “Enroll Now” button</strong><br/>
          You’ll be taken to a secure checkout page.
        </li>
        <li>
          <strong>Complete your purchase</strong><br/>
          You’ll receive an email with your login details within minutes.
        </li>
        <li>
          <strong>Start with Module 1</strong><br/>
          Most professionals complete the core material over 2–3 weeks, in short bursts of 30–45 minutes.
        </li>
        <li>
          <strong>Implement as you go</strong><br/>
          Don’t wait until “after the course.” Apply the prompts and workflows to your real work immediately... that’s where the magic happens.
        </li>
        <li>
          <strong>Watch your workload shift</strong><br/>
          Week by week, more of your routine work gets offloaded to AI, and more of your time returns to you.
        </li>
      </ol>
    </Section>
  );
};