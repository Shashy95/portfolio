import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const allProjects = projects;
const HomeProjects = () => {

  const filteredProjects = allProjects.slice(0, 6); 
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-pattern bg-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in building real-world applications.
          </p>
        </div>
        
   
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-item transition-all duration-700 transform opacity-100 translate-y-0"
             data-index={index}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image || `/api/placeholder/600/400`}
                link={project.link}
                github={project.github}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/10 flex items-center gap-2 mx-auto">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;