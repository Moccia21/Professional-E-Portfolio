import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Resume",
    href: "/Jake-Moccia-Frontend-Resume.pdf",
  },
  {
    title: "Github",
    href: "https://github.com/Moccia21",
  },
  {
    title: "Email",
    href: "mailto:jakemoccia@gmail.com",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jake-moccia-91337b321/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>

      <div className="container relative z-20">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target={link.href ? "_blank" : undefined} // Open in new tab for external links
                rel="noopener noreferrer" // Security precaution for opening new tabs
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-300 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
