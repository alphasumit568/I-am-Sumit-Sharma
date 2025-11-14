// ...existing code...
import HeadingBadge from "@/components/heading-badge";
import { BookOpen } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      school: "Ajay Kumar Garg Engineering College",
      period: "2022 — Present",
    },
    {
      degree: "Intermediate - CBSE",
      school: "Shambhu Dayal Global School",
      period: "2021 — 2022",
    },
     {
      degree: "High School - CBSE",
      school: "Shambhu Dayal Global School",
      period: "2019 — 2020",
    },
  ];

  return (
    <section id="education" className="w-full mt-8">
      <HeadingBadge title="Education" icon={<BookOpen size={14} color="#06B6D4" />} />

      <div className="mt-4 space-y-4">
        {education.map((ed, idx) => (
          <div key={idx} className="p-4 rounded-md border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{ed.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{ed.school}</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{ed.period}</span>
            </div>     
          </div>
        ))}
      </div>
    </section>
  );
}
// ...existing code...