import React from 'react';
import { Section } from './ui/Section';

export const Modules: React.FC = () => {
  return (
    <Section>
      <h3 className="text-2xl font-bold text-black mb-8 border-t-2 border-black pt-8">
        Here’s Exactly What You Get Inside
      </h3>
      
      <p className="text-lg mb-8">
        The AI Productivity Accelerator is structured to take you from “curious dabbler” to “AI‑powered operator” in a clear, practical sequence.
      </p>

      <div className="space-y-12">
        {/* Module 1 */}
        <div>
          <h4 className="text-xl font-bold mb-4 bg-gray-100 inline-block px-2 py-1">Module 1: The AI Advantage — How Modern Professionals Really Win</h4>
          
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Understand how to plug AI into your workflow <em>today</em> so you become more valuable, not replaceable.
          </p>
          
          <p className="text-lg mb-4">You’ll discover:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>The simple mental model for where AI fits into your workflow (and where it doesn’t)</li>
            <li>The 5 categories of work AI can do <em>exceptionally</em> well for busy professionals</li>
            <li>How to protect your role by positioning yourself as “AI‑augmented talent”</li>
            <li>The truth about data privacy, confidentiality, and what’s safe to use AI for</li>
            <li>A 15‑minute exercise to map “quick win” AI use cases in your current job</li>
          </ul>
          
          <p className="text-lg">
            You’ll walk away with a written, personal “AI Opportunity Map” for your role.
          </p>
        </div>

        {/* Module 2 */}
        <div>
          <h4 className="text-xl font-bold mb-4 bg-gray-100 inline-block px-2 py-1">Module 2: Prompting Like a Pro (Without Becoming a Prompt Engineer)</h4>
          
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Get AI to produce accurate, relevant, high‑quality outputs that sound like you, consistently.
          </p>
          
          <p className="text-lg mb-4">You’ll learn:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>The 6 components of a high‑impact prompt (most people only use 1 or 2)</li>
            <li>How to “train” AI on your tone, preferences, and context in minutes</li>
            <li>The Conversation Method: how to iterate with AI so it improves with each response</li>
            <li>How to get AI to ask <em>you</em> smart questions before it answers</li>
            <li>What to do when AI is “too generic,” “too robotic,” or “just wrong”</li>
          </ul>

          <p className="text-lg mb-2">Includes:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>20+ fill‑in‑the‑blank prompt frameworks you can reuse across tools</li>
            <li>A simple “Prompt Debugging Checklist” to fix weak outputs in under 60 seconds</li>
          </ul>
        </div>

        {/* Module 3 */}
        <div>
          <h4 className="text-xl font-bold mb-4 bg-gray-100 inline-block px-2 py-1">Module 3: Inbox & Communication On Autopilot</h4>
          
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Slash the time you spend on email, messages, and routine communication.
          </p>
          
          <p className="text-lg mb-4">You’ll learn how to use AI to:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Draft high‑quality email replies in your tone, in seconds</li>
            <li>Turn rough bullet points into polished, professional messages</li>
            <li>Turn long email threads into quick, accurate summaries with action items</li>
            <li>Create empathetic but firm responses for difficult conversations</li>
            <li>Standardize your replies to recurring questions (clients, team, stakeholders)</li>
          </ul>

          <p className="text-lg mb-2">Includes:</p>
          <p className="text-lg mb-2">A library of ready‑to‑use email prompt templates for:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Requests & approvals</li>
            <li>Follow‑ups & gentle nudges</li>
            <li>Status updates</li>
            <li>“Saying no” professionally</li>
            <li>Escalations and tricky conversations</li>
          </ul>
        </div>

        {/* Module 4 */}
        <div>
          <h4 className="text-xl font-bold mb-4 bg-gray-100 inline-block px-2 py-1">Module 4: Research, Analysis & Decision Support</h4>
          
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Get AI to do the heavy lifting on thinking tasks so <em>you</em> can make better decisions faster.
          </p>
          
          <p className="text-lg mb-4">You’ll discover how to:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Use AI to research unfamiliar topics quickly and responsibly</li>
            <li>Turn raw information (reports, PDFs, transcripts) into clear briefs</li>
            <li>Build side‑by‑side comparisons for options or proposals</li>
            <li>Use AI as a thinking partner to stress‑test your ideas</li>
            <li>Turn vague goals into concrete plans with clear next steps</li>
          </ul>

          <p className="text-lg mb-2">Includes:</p>
          <p className="text-lg mb-2">Templates for:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Rapid research and synthesis</li>
            <li>SWOT and risk analysis</li>
            <li>Decision-making frameworks (pros/cons, tradeoff analysis)</li>
            <li>Briefing docs and executive summaries</li>
          </ul>
        </div>

        {/* Module 5 */}
        <div>
          <h4 className="text-xl font-bold mb-4 bg-gray-100 inline-block px-2 py-1">Module 5: Meetings, Planning & Documentation — Without the Busywork</h4>
          
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Transform meetings and planning from time-wasters into streamlined, high‑output sessions.
          </p>
          
          <p className="text-lg mb-4">You’ll learn how to use AI to:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Design clear meeting agendas that keep discussions focused</li>
            <li>Turn meeting notes into structured summaries and follow‑up emails</li>
            <li>Convert messy whiteboard ideas into organized, prioritized plans</li>
            <li>Build project outlines, timelines, and responsibility charts</li>
            <li>Document processes so you (and your team) stop reinventing the wheel</li>
          </ul>

          <p className="text-lg mb-2">Includes:</p>
          <p className="text-lg mb-2">Plug‑and‑play prompts for:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Agendas & minutes</li>
            <li>Project planning & kickoff docs</li>
            <li>Retrospectives and lessons learned</li>
            <li>SOPs and checklists</li>
          </ul>
        </div>

        {/* Module 6 */}
        <div>
          <h4 className="text-xl font-bold mb-4 bg-gray-100 inline-block px-2 py-1">Module 6: Building Your Personal AI Workflow Engine</h4>
          
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Create a repeatable, efficient AI workflow tailored to <em>your</em> job.
          </p>
          
          <p className="text-lg mb-4">This is where it all comes together.</p>

          <p className="text-lg mb-4">You’ll:</p>
          <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
            <li>Design your daily “AI‑assisted workday” from inbox to shutdown</li>
            <li>Set up simple automations (with no coding) to remove repetitive tasks</li>
            <li>Build your own library of re-usable prompts and templates</li>
            <li>Learn how to quickly adapt to new AI tools without starting from zero</li>
            <li>Create a personal AI productivity dashboard you can use every day</li>
          </ul>
          
          <p className="text-lg">
            By the end of this module, you won’t just “know about AI”, you’ll <em>have</em> a functioning AI‑powered work system running.
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-12" />

      <h3 className="text-2xl font-bold text-black mb-8">
        Bonus #1: 50+ Ready‑to‑Use Professional Prompt Templates
      </h3>
      <p className="text-lg mb-4">Stop starting from scratch.</p>
      <p className="text-lg mb-4">You’ll get a curated library of copy-paste prompts organized by category:</p>
      <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
        <li>Email & communication</li>
        <li>Reports, memos, and briefs</li>
        <li>Client and stakeholder management</li>
        <li>Strategy, planning, and decision support</li>
        <li>Management and leadership support</li>
      </ul>
      <p className="text-lg mb-2">Each template includes:</p>
      <ul className="list-disc pl-8 mb-8 space-y-2 text-lg">
        <li>A generic version you can use immediately</li>
        <li>Customization notes to fit your role, company, and style</li>
      </ul>

      <h3 className="text-2xl font-bold text-black mb-6">
        Bonus #2: Role-Specific Quickstart Guides
      </h3>
      <p className="text-lg mb-4">
        Short, targeted guides showing you exactly where to plug AI into your existing role if you’re:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
        <li>A manager or team lead</li>
        <li>A consultant or advisor</li>
        <li>A marketer or sales professional</li>
        <li>A founder or small business owner</li>
        <li>An operations or project manager</li>
      </ul>
      <p className="text-lg mb-8">
        Each guide highlights 5–10 “day one” use cases to get you fast wins.
      </p>

      <h3 className="text-2xl font-bold text-black mb-6">
        Bonus #3: The “Ethical & Safe AI Use” Mini-Guide
      </h3>
      <p className="text-lg mb-4">Use AI confidently, without worrying about crossing lines.</p>
      <p className="text-lg mb-4">You’ll learn:</p>
      <ul className="list-disc pl-8 mb-4 space-y-2 text-lg">
        <li>What kind of information you <em>shouldn’t</em> paste into public tools</li>
        <li>How to anonymize or abstract sensitive data</li>
        <li>How to check AI outputs for reliability and accuracy</li>
        <li>How to clearly communicate your use of AI (when necessary)</li>
      </ul>
    </Section>
  );
};