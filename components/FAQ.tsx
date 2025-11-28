import React from 'react';
import { Section } from './ui/Section';

export const FAQ: React.FC = () => {
  return (
    <Section>
      <h3 className="text-2xl font-bold text-black mb-8 mt-4 border-t-2 border-black pt-8">
        Frequently Asked Questions
      </h3>

      <div className="space-y-8 text-lg">
        <div>
            <p className="font-bold text-black mb-2">Q: How much time will I need to go through the course?</p>
            <p>Most students spend 3–5 hours total on the core modules, spread over 2–3 weeks. You’ll get outsized benefits even if you only implement a handful of workflows at first.</p>
        </div>
        
        <div>
            <p className="font-bold text-black mb-2">Q: I’m not very technical. Will I be able to follow along?</p>
            <p>Yes. This course is built for non‑technical professionals. If you can use email and a browser, you can do everything in this course. No coding, no complex setups.</p>
        </div>

        <div>
            <p className="font-bold text-black mb-2">Q: What tools do I need?</p>
            <p>You’ll need access to at least one major AI assistant (like ChatGPT, Claude, Gemini, etc.). Free versions work for much of the course; I’ll also explain where paid versions make a big difference, but you can start without them.</p>
        </div>

        <div>
            <p className="font-bold text-black mb-2">Q: I’m already using AI a bit. Is this still for me?</p>
            <p>If your current AI use is “I ask it some questions sometimes,” you’re leaving a lot on the table. This course shows you how to systematically integrate AI into your daily workflow so it becomes a real productivity engine, not a novelty.</p>
        </div>

        <div>
            <p className="font-bold text-black mb-2">Q: What if my company has strict data and privacy rules?</p>
            <p>We cover how to use AI safely and ethically, including what not to paste into tools, how to anonymize data, and alternative ways to leverage AI without violating policies.</p>
        </div>

        <div>
            <p className="font-bold text-black mb-2">Q: Can I get my employer to pay for this?</p>
            <p>Many students successfully expense this as professional development or training. You’ll receive a clear invoice, and we can provide a short justification summary you can forward to your manager if needed.</p>
        </div>

        <div>
            <p className="font-bold text-black mb-2">Q: What if I decide it’s not for me?</p>
            <p>You’re covered by the 30‑day do‑the‑work guarantee. Try the material in your real work. If it doesn’t help you feel more productive and in control, you get your money back.</p>
        </div>
      </div>
    </Section>
  );
};