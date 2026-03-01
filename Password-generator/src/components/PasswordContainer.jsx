import { useState } from "react";

function PasswordContainer({ password }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // disparait après 2s
  }

  return (
    <header className="flex flex-col items-center text-grey-600 w-full max-w-77 md:max-w-119">
      <h1 className="text-preset-4 md:text-preset-2 ">Password Generator</h1>
      <output
        className="flex justify-between bg-grey-800  text-grey-700  px-4 py-4 md:py-8 text-preset-2 w-full max-w-77 md:max-w-119 mt-4 md:mt-8"
        aria-label="Generated password"
      >
        <p className="text-preset-2 text-grey-200">
          {" "}
          {password === "" ? (
            <span className="text-grey-700">P4$5W0rD!</span>
          ) : (
            password
          )}
        </p>
        <div className="flex items-center gap-2 md:gap-4">
          {copied && (
            <p className="text-green-200 text-preset-4 md:text-preset-3">
              COPIED
            </p>
          )}
          <button
            type="button"
            title="copy the password"
            className="text-green-200
            hover:text-grey-200
            hover:scale-108
            active:scale-95
            transition-all
            duration-300"
            onClick={handleCopy}
            aria-label="Copy the password in clipboard"
          >
            <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </output>
    </header>
  );
}

export default PasswordContainer;
