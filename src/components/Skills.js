import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaPhp, FaReact, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiLaravel, SiTypescript, SiNextdotjs, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  
  const skillsData = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', level: 90 },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', level: 85 },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 80 },
    { name: 'React', icon: FaReact, color: 'text-cyan-400', level: 85 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400', level: 90 },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-500', level: 80 },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-600', level: 75 },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', level: 70 },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 65 },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', level: 70 },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', level: 80 },

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

    const elements = document.querySelectorAll('.skill-item');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold relative inline-block">
            My Tech Stack
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I work with a variety of technologies to build robust and scalable applications.
            Here are the tools and languages I'm proficient in:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div 
                key={skill.name}
                className="skill-item bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-blue-500/10 hover:translate-y-1"
                data-index={index}
              >
                <div className="flex items-center mb-4">
                  <div className={`text-4xl ${skill.color}`}>
                    <Icon />
                  </div>
                  <h3 className="ml-3 text-xl font-medium">{skill.name}</h3>
                </div>
                
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-400">
                  {isVisible ? `${skill.level}%` : '0%'}
                </div>

                <div className="mt-4 text-sm text-gray-400">
                  {skill.name === 'React' && 'Component-based UI development'}
                  {skill.name === 'JavaScript' && 'ES6+, async/await, DOM manipulation'}
                  {skill.name === 'PHP' && 'Server-side scripting, API development'}
                  {skill.name === 'Laravel' && 'MVC framework, Eloquent ORM'}
                  {skill.name === 'MySQL' && 'Database design, complex queries'}
                  {skill.name === 'Tailwind CSS' && 'Utility-first CSS framework'}
                  {skill.name === 'HTML' && 'Semantic markup, accessibility'}
                  {skill.name === 'CSS' && 'Flexbox, Grid, animations'}
                  {skill.name === 'TypeScript' && 'Type safety, interfaces'}
                  {skill.name === 'Next.js' && 'SSR, Static Site Generation'}
                  {skill.name === 'Git' && 'Version control, collaboration'}

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;