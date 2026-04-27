import IconCloud from "./ui/icon-cloud";

const slugs = [
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "mongodb",
  "mysql",
  "html5",
  "css3",
  "tailwindcss",
  "java",
  "docker",
  "git",
  "github",
  "linux",
  "visualstudiocode",
  "vercel",
  "vite",
  "amazonaws",
  "npm",
  "json",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
