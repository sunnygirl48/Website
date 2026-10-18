import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects @ sanyamittal.com",
};

const projects = [
  { name: "blue board", href: "https://blueboard.studio", color: "#34c4c7" },
  { name: "farak", href: "https://farak.world", color: "#452124" },
];

export default function Projects() {
  return (
    <div className="flex flex-1 items-center pb-section">
      <div className="grid w-full grid-cols-2 gap-x-gap">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 transition-opacity hover:opacity-80"
          >
            <div
              className="aspect-[3/2] w-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-center text-fluid-sm tracking-wide">
              {project.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
