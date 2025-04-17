import React from "react";

const DownloadResume = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/10 bg-opacity-20"></div>
        <div className="grid grid-cols-8 h-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-r border-gray-800 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-8 w-full absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-b border-gray-800 w-full"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-lg p-10 transform transition-all duration-500 hover:shadow-blue-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
          <p className="mb-8 text-gray-400">
            Get a comprehensive overview of my skills, experience, and education. If you're interested in my professional background, download my full resume.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="/resume/Sharon_Novatus_Resume.pdf" 
              download 
              className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-blue-600 text-white"
            >
              <span className="absolute left-0 right-0 top-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-blue-700"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </span>
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-blue-400">3+</p>
              <p className="text-xs text-gray-400">Years Experience</p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-blue-400">10+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-blue-400">12+</p>
              <p className="text-xs text-gray-400">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadResume;