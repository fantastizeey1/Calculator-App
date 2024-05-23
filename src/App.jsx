import React, { useState, useCallback } from "react";
import { evaluate } from "mathjs"; // Install mathjs via npm or yarn

const App = () => {
  const [result, setResults] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = useCallback(
    (e) => setResults(result + e.target.id),
    [result]
  );
  const clear = useCallback(() => setResults(""), []);
  const deleteEl = useCallback(() => setResults(result.slice(0, -1)), [result]);
  const calculate = useCallback(() => {
    try {
      setResults(evaluate(result).toString());
    } catch (error) {
      setResults("Error");
    }
  }, [result]);

  const toggleMode = useCallback(
    () => setIsDarkMode((prevMode) => !prevMode),
    []
  );

  return (
    <div
      className={`w-full h-screen flex justify-center items-center
    ${
      isDarkMode
        ? "dark bg-slate-800 text-white"
        : "light bg-gray-300 text-black"
    }`}
    >
      <div
        className={` 
      `}
      >
        <div className="calculator-container">
          <button className="mode-toggle" onClick={toggleMode}>
            {isDarkMode ? (
              <img
                src="/sun.png"
                alt="Switch to Day Mode"
                className="h-6 w-6"
              />
            ) : (
              <img
                src="/moon.png"
                alt="Switch to Night Mode"
                className="h-6 w-6"
              />
            )}
          </button>
          <div
            className={`calculator ${
              isDarkMode ? "bg-blue-700" : "bg-blue-300"
            }`}
          >
            <input
              type="text"
              value={result}
              disabled
              className={isDarkMode ? "text-white" : "text-black"}
            />
            <div className="buttons">
              <button
                className="operator"
                onClick={clear}
                aria-label="All Clear"
              >
                AC
              </button>
              <button
                className="operator"
                onClick={deleteEl}
                aria-label="Delete"
              >
                DE
              </button>
              <button
                className="operator"
                onClick={handleClick}
                id="."
                aria-label="Decimal"
              >
                .
              </button>
              <button
                className="operator"
                onClick={handleClick}
                id="/"
                aria-label="Divide"
              >
                /
              </button>
              <button
                id="7"
                className="number"
                onClick={handleClick}
                aria-label="7"
              >
                7
              </button>
              <button
                id="8"
                className="number"
                onClick={handleClick}
                aria-label="8"
              >
                8
              </button>
              <button
                id="9"
                className="number"
                onClick={handleClick}
                aria-label="9"
              >
                9
              </button>
              <button
                className="operator"
                onClick={handleClick}
                id="*"
                aria-label="Multiply"
              >
                *
              </button>
              <button
                id="4"
                className="number"
                onClick={handleClick}
                aria-label="4"
              >
                4
              </button>
              <button
                id="5"
                className="number"
                onClick={handleClick}
                aria-label="5"
              >
                5
              </button>
              <button
                id="6"
                className="number"
                onClick={handleClick}
                aria-label="6"
              >
                6
              </button>
              <button
                className="operator"
                onClick={handleClick}
                id="-"
                aria-label="Subtract"
              >
                -
              </button>
              <button
                id="1"
                className=" number"
                onClick={handleClick}
                aria-label="1"
              >
                1
              </button>
              <button
                id="2"
                className="number"
                onClick={handleClick}
                aria-label="2"
              >
                2
              </button>
              <button
                id="3"
                className="number"
                onClick={handleClick}
                aria-label="3"
              >
                3
              </button>
              <button
                className="operator"
                onClick={handleClick}
                id="+"
                aria-label="Add"
              >
                +
              </button>
              <button
                id="00"
                className="number"
                onClick={handleClick}
                aria-label="00"
              >
                00
              </button>
              <button
                id="0"
                className="number"
                onClick={handleClick}
                aria-label="0"
              >
                0
              </button>
              <button
                className="operator col-span-2"
                onClick={calculate}
                id="="
                aria-label="Equals"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
