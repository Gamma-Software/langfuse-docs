import React, { useState } from 'react';

export const TerminalMockup = ({ computer_name, command }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);

        // Remettre à false après quelques secondes
        setTimeout(() => {
        setCopied(false);
        }, 2000);
    };
    return (
        <div className="w-full">
        <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 flex">
            <span className="text-green-400">computer:~$</span>
            <p className="flex-1 typing items-center pl-2" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
              {command}
            </p>
          </div>
        </div>
        {/* TODO {copied && (
          <div className="flex justify-center mt-2">
            <img src="path/to/animated_logo.gif" alt="Animated Logo" />
          </div>
        )} */}
      </div>
    );
  };

  export default TerminalMockup;