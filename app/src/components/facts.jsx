import { useState, useEffect } from 'react';
import facts from './spaceFacts.json';

const Facts = () => {
  const [randomFact, setRandomFact] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
  }, []);

  return (
    <div className="h-[50vh] p-20 bg-white m-10">
      {randomFact && (
        <div className="fact-card">
          <h3>{randomFact.title}</h3>
          <p>{randomFact.description}</p>
        </div>
      )}
    </div>
  );
};

export default Facts;