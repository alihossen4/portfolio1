import React from "react";
export const About = () =>{
  const frontendSkills = [
    "React",
    "Tailwindcss",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDb",
  ]

  return(
       <section 
       id="about"
       className="min-h-screen flex items-center justify-center py-20"
       >
        <div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r    from-blue-500 to-cyan-400 text-center text-transparent bg-clip-text">About Me</h2>
            <div>
              <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web applications and creating innovative solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2 ">
                    {
                      frontendSkills.map((tech, key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2)] transition">
                          {tech}
                        </span>
                      ))
                    }
                  </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2 ">
                    {
                      backendSkills.map((tech, key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130, 246, 0.2)] transition">
                          {tech}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-transkate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4 ">🏫 Education</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                          <strong >BS. in Health science</strong> - Gono University (from 2021)
                        </li>
                        <li>
                          Relevant coursework: data entry, web searching, Cloud computing
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-transkate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4 ">💼 Work Experience</h3>
                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4>No working experiencr in the relevant sector </h4>
                        </div>
                      </div>
                    </div>
              </div>
            </div>      
        </div>
       </section>                         
  )
}