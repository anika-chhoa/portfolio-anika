export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Aquaculture",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "2022 — 2023",
      result: "CGPA 3.97 / 4.00",
      level: "M.S.",
      type: "university",
    },
    {
      degree: "Bachelor of Science in Fisheries (Honours)",
      institution: "Bangladesh Agricultural University, Mymensingh",
      period: "2017 — 2022",
      result: "CGPA 3.83 / 4.00",
      level: "B.Sc.",
      type: "university",
    },
    {
      degree: "Higher Secondary Certificate — Science",
      institution: "Cantonment Public School and College, Rangpur",
      period: "2015 — 2016",
      result: "GPA 5.00 / 5.00",
      level: "HSC",
      type: "school",
    },
    {
      degree: "Secondary School Certificate — Science",
      institution: "Cantonment Public School and College, Rangpur",
      period: "2013 — 2014",
      result: "GPA 5.00 / 5.00",
      level: "SSC",
      type: "school",
    },
  ];

  return (
    <section className="mb-section-gap px-6 md:px-12 flex flex-col justify-center items-center" id="education">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-medium tracking-widest uppercase text-on-surface-variant mb-1.5">
          Academic Background
        </p>
        <h2 className="font-inter text-3xl md:text-4xl font-bold text-on-surface">
          Education
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {educationData.map((edu, index) => {
          const isUniversity = edu.type === "university";

          return (
            <div
              key={index}
              className={`bg-surface border-y border-r border-outline rounded-r-2xl rounded-l-none pl-5 pr-5 py-5 flex flex-col justify-between gap-5 min-h-44 hover:border-primary/30 transition-colors duration-200 ${isUniversity ? "border-l-2 border-l-primary" : "border-l-2 border-l-on-surface-variant"
                }`}
            >
              {/* Top */}
              <div className="flex flex-col gap-2">
                <span
                  className="self-start text-[10px] font-bold font-space px-2.5 py-0.5 rounded-full bg-primary-container text-primary"
                >
                  {edu.level}
                </span>
                <p className="font-inter text-sm md:text-base font-bold text-on-surface leading-snug">
                  {edu.degree}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-on-surface-variant leading-snug">
                  {edu.institution}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-on-surface-variant/60 font-space">
                    {edu.period}
                  </span>
                  <span
                    className="text-xs font-bold font-space text-primary"
                  >
                    {edu.result}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
