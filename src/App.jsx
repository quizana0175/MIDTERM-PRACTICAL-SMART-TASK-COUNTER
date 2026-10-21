import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(5);

  const atTarget = count >= target;

  const increment = () => {
    setCount((current) => (atTarget ? current : current + 1));
  };

  const decrement = () => {
    setCount((current) => Math.max(0, current - 1));
  };

  const reset = () => {
    setCount(0);
  };

  const handleTargetChange = (event) => {
    const value = Number(event.target.value);
    setTarget(Number.isFinite(value) ? Math.max(0, value) : 0);
  };

  const addTwo = () => {
    setCount((current) => {
      if (current >= target) {
        return current;
      }

      return Math.min(target, current + 2);
    });
  };

  /*const addTwo = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  */

  const statusText =
    count === 0 ? 'Not started' : atTarget ? 'Target reached' : 'In progress';

  return (
    <div className="app-shell">
      <div className="panel">
        <header className="panel-header">
          <h1>Smart Task Counter</h1>
        </header>

        <div className="stat-grid">
          <label className="field">
            <span>Count</span>
            <input type="number" value={count} readOnly />
          </label>

          <label className="field">
            <span>Target</span>
            <input type="number" value={target} min="0" onChange={handleTargetChange} />
          </label>
        </div>

        <div className="button-row">
          <button type="button" onClick={increment} disabled={atTarget}>
            Increment
          </button>
          <button type="button" onClick={decrement} disabled={count === 0}>
            Decrement
          </button>
          <button type="button" onClick={addTwo} disabled={atTarget}>
            +2
          </button>
          <button type="button" onClick={reset}>Reset</button>
        </div>

        <div className="status-row">
          <div className="status-box">
            <span className="status-label">Status</span>
            <strong>{statusText}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
