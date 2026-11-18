import React from 'react';
import { GraduationCap, Award, Compass, Sparkles, BookOpen, Users } from 'lucide-react';
import { PERSONAL_INFO, LEADERSHIP_ROLES } from '../data/portfolioData';

export const About: React.FC = () => {
  const interests = [
    { title: "Agentic AI & LLMs", desc: "Multi-agent systems, tool calling, structured outputs, and fallback orchestration." },
    { title: "Hybrid RAG & Retrieval", desc: "Dense/sparse fusion, Reciprocal Rank Fusion, cross-encoders, and citation validation." },
    { title: "Autonomous Robotics & ROS2", desc: "Sensor fusion (LiDAR + camera via EKF), SLAM navigation, and obstacle costmaps." },
    { title: "FinTech & Data Engineering", desc: "Idempotent ELT reconciliation, general ledger audit trails, and financial compliance." },
    { title: "IoT & Embedded Systems", desc: "LoRa mesh resilience, ESP32 microcontrollers, and edge AI prediction without cloud dependencies." },
    { title: "Full-Stack Software", desc: "FastAPI microservices, polyglot databases (Postgres, Mongo, pgvector), and Docker sandboxes." },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            <Compass size={14} />
            <span>Profile & Engineering Ethos</span>
          </div>
          <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0F0E0D]">
            ABOUT ME
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            I am a Computer Science engineering student at Vishwakarma Institute of Technology, Pune, focused on bridging the gap between rigorous software engineering, modern machine learning intelligence, and physical autonomous hardware.
          </p>
        </div>

        {/* 2-Column Grid: Academic Journey & Technical Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Academic Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary University Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-amber-100/70 text-amber-800">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Primary Degree
                  </span>
                  <h3 className="font-display-hero text-lg sm:text-xl text-[#0F0E0D]">
                    {PERSONAL_INFO.education.institution}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 border-t border-stone-200/80 pt-4">
                <div>
                  <div className="text-sm font-semibold text-stone-800">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-xs text-stone-500">
                    {PERSONAL_INFO.education.timeline}
                  </div>
                </div>

                {/* CGPA Callout */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200">
                  <Sparkles size={14} className="text-amber-600" />
                  <span className="text-xs font-bold text-amber-950">
                    Cumulative GPA: {PERSONAL_INFO.education.cgpa}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed pt-2">
                  Specialized coursework in DBMS, Data Structures & Algorithms, Machine Learning, MLOps, Object-Oriented Programming, and Computer Networks.
                </p>
              </div>

              {/* Schooling Highlights */}
              <div className="mt-6 pt-5 border-t border-stone-200/80 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Academic Foundation
                </div>
                {PERSONAL_INFO.education.secondaryEducation.map((sec, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <span className="text-stone-700 font-medium">{sec.school}</span>
                    <span className="font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded">
                      {sec.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patent & Intellectual Property Highlight */}
            <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 text-amber-400 mb-3">
                <Award size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Intellectual Property
                </span>
              </div>

              <h4 className="font-display-hero text-lg text-white mb-2">
                IoT Based Disaster Management System
              </h4>

              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Co-inventor of a patent-pending decentralized disaster mitigation system using LoRa Mesh and Edge AI for risk prediction during infrastructure collapse.
              </p>

              <div className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-semibold bg-stone-800 text-amber-300 border border-stone-700">
                South African Patent App No. 2026/05095 (CIPC)
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Domains & Leadership */}
          <div className="lg:col-span-7 space-y-6">
            {/* Core Interest Pillars */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-5">
                <BookOpen size={16} className="text-amber-600" />
                <span>Core Engineering Domains</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200/80 hover:border-amber-200 transition-all shadow-2xs hover:shadow-sm"
                  >
                    <h4 className="text-sm font-bold text-stone-900 mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Campus Roles */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-stone-500 mb-5">
                <Users size={16} className="text-amber-600" />
                <span>Leadership & Student Councils</span>
              </div>

              <div className="space-y-4">
                {LEADERSHIP_ROLES.map((role, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-stone-100 last:border-0 last:pb-0">
                    <div>
                      <span className="text-sm font-bold text-stone-900">
                        {role.role}
                      </span>
                      <span className="text-xs font-medium text-amber-700 ml-2">
                        • {role.organization}
                      </span>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {role.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
