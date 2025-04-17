// pages/projects.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";
import ProjectCard from "@/components/ProjectCard";
import allProjects from "../data/projects"; 

const ProjectsPage = () => {
  // State for projects to display
  const [projects, setProjects] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const projectsPerPage = 6;

  // Initial load and setup
  useEffect(() => {
    loadMoreProjects();
  }, []);

  // Function to load more projects
  const loadMoreProjects = () => {
    const startIndex = page * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const newProjects = allProjects.slice(startIndex, endIndex);
    
    // Check if we have more projects to load
    if (endIndex >= allProjects.length) {
      setHasMore(false);
    }
    
    // Append new projects to the existing ones
    setProjects(prev => [...prev, ...newProjects]);
    setPage(prev => prev + 1);
  };

  return (
    <>
    <Head>
      <title>Projects - Sharon Novatus</title>
      <meta name="description" content="A showcase of Sharon Novatus' recent software projects and work." />
    </Head>

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        {/* Header with subtle animation */}
        <div className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-blue-500">Projects</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse through my latest work. Each project demonstrates different skills and technologies.
            </p>
          </div>
        </div>

        {/* Projects Grid with Infinite Scroll */}
        <div className="max-w-6xl mx-auto px-6">
          <InfiniteScroll
            dataLength={projects.length}
            next={loadMoreProjects}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            }
            endMessage={
              <div className="text-center py-8  backdrop-blur-sm rounded-md mx-auto w-fit px-4">
                <p className="text-lg font-medium text-white">You've seen all my projects! ✨</p>
              </div>
            }
            
            
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                  technologies={project.technologies || ["React", "TailwindCSS"]}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>

        {/* Back to home button */}
        <div className="text-center py-12 backdrop-blur-sm">
          <Link href="/">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </span>
            </button>
          </Link>
        </div>
      </div>
      </>
  );
};

export default ProjectsPage;