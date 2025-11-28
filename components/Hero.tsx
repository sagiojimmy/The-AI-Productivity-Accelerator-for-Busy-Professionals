import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="text-left border-b-2 border-black pb-8">
      <h1 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight mb-6 text-black leading-tight">
        Turn AI Into Your 24/7 Digital Chief of Staff
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-8 italic leading-snug">
        Reclaim 10+ Hours a Week, Reduce Stress, and Get More Done, Without Working More
      </h2>

      <p className="text-lg mb-6 leading-relaxed">
        You already <em>know</em> AI is changing everything.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        What you <em>don’t</em> know yet is how to make it quietly handle 30–50% of your workload while you stay in control... without spending weeks learning "tech stuff," buying new tools, or turning into a full-time prompt engineer.
      </p>

      <p className="text-lg mb-8 leading-relaxed">
        This course shows you exactly how.
      </p>
    </div>
  );
};