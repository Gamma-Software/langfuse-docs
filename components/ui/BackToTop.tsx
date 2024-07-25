// components/BackToTopButton.tsx
import { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top fixed bottom-0 right-0 p-4">
      {isVisible &&
        <button onClick={scrollToTop} className="bg-secondary text-black rounded-full w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
        </button>
      }
      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .back-to-top-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s;
        }
        .back-to-top-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default BackToTopButton;