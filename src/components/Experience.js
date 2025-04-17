import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  
  const experienceData = [
    {
      title: "Software Developer",
      company: "BIZYTECH LIMITED",
      period: "Dec 2024 - Present",
      location: "Dar es Salaam, Tanzania",
      responsibilities: [
        "Designing and developing software applications to meet business needs.",
        "Collaborating with cross-functional teams to deliver solutions.",
        "Debugging and troubleshooting issues to ensure system efficiency."
      ],
      skills: ["Laravel","MySQL","Postgresql","Git", "API Development"]
    },
    {
      title: "Software Developer",
      company: "Tunzaa Digital Holdings Limited",
      period: "May 2024 - Nov 2024",
      location: "Dar es Salaam, Tanzania",
      responsibilities: [
        "Enhanced functionality and user experience of the Tunzaa app.",
        "Optimized performance and streamlined technology infrastructure.",
        "Contributed to new feature implementations and system integrations."
      ],
      skills: ["Laravel", "MySQL", "API Development","Tailwind CSS", "Git"]
    },
    {
      title: "Senior Software Developer",
      company: "UJUZINET EDTECH",
      period: "Sept 2021 - Apr 2024",
      location: "Remote",
      responsibilities: [
        "Design, develop, test, and maintain software applications, both SaaS and tailor-made solutions, to meet client requirements.",
        "Worked on bug fixes and improvements.",
        "Communicate with clients to gather requirements, provide updates on project progress, and offer technical support and training when needed."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Laravel"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add data-index as a number to visibleItems
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.experience-item');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold relative inline-block">
            Experience
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My professional journey and experience working in software development.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Experience items */}
          {experienceData.map((job, index) => {
            const isVisible = visibleItems.includes(index);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                data-index={index}
                className={`experience-item relative mb-12 md:mb-24 ${isEven ? 'md:pr-12' : 'md:pl-12'} md:w-1/2 ${isEven ? 'md:ml-auto' : ''}`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${isEven ? 'left-0 md:-left-3' : 'left-0  md:left-auto md:-right-3'} w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-900 z-10`}></div>
                
                {/* Content box */}
                <div 
                  className={`bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                    <span className="text-sm text-gray-400 mt-1 md:mt-0 px-2 py-1 bg-gray-700 rounded">{job.period}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-lg">{job.company}</h4>
                    <p className="text-gray-400 text-sm">{job.location}</p>
                  </div>
                  
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2 mb-4">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;