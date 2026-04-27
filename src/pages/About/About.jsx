export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Learner, Builder, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <div className="rounded-[15px] shadow block w-full h-full bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-purple-500/20 flex items-center justify-center min-h-[250px]">
                  <div className="text-center p-8">
                    <span className="text-6xl mb-4 block">👨‍💻</span>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                      Kavineswar S
                    </p>
                    <p className="text-gray-400 mt-2">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi! I&apos;m Kavineswar S, a passionate Computer Science
                Engineering student at{" "}
                <span className="font-bold text-white">
                  Bannari Amman Institute of Technology, Pollachi
                </span>
                . I specialize in building scalable web applications using modern
                technologies.
              </p>
              <p className="text-white">
                My focus is on the MERN stack — MongoDB, Express.js, React, and
                Node.js. I&apos;m actively learning cloud computing and system
                design to prepare for software developer roles. I love turning
                ideas into real, working products.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in continuous learning and hands-on building. Every
                    project I take on is a chance to grow my skills and solve
                    real-world problems. I&apos;m actively seeking opportunities
                    to contribute to impactful software projects.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Kavineswar S
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 text-lg">🎓</span>
                      <span className="text-white">
                        B.E CSE @ Bannari Amman Institute of Technology
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
