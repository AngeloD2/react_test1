import { useState, useEffect } from 'react';
function CoverageResults() {
  const [coverage, setCoverage] = useState(null);

  useEffect(() => {
    async function fetchCoverage() {
      try {
        const response = await fetch('../../coverage/coverage-final.json');
        const data = await response.json();
        setCoverage(data);
      } catch (error) {
        console.error('Error loading coverage data:', error);
      }
    }

    fetchCoverage();
  }, []);

  return (
    <div>
      <h2>Test Coverage</h2>
      {/* Render the coverage data here */}
      <pre>{JSON.stringify(coverage, null, 2)}</pre>
    </div>
  );
}

export default CoverageResults;
