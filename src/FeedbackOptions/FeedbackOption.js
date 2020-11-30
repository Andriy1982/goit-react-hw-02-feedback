import React from 'react';

export default function FeedbackOption({ options, onButtonClick }) {
  const [good, neutral, bad] = options;

  return (
    <section>
      <button type="button" onClick={() => onButtonClick( good )}>
        Good
      </button>
      <button type="button" onClick={() => onButtonClick( neutral )}>
        Neutral
      </button>
      <button type="button" onClick={() => onButtonClick( bad )}>
        Bad
      </button>
    </section>
  );
}
