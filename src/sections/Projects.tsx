import AppleWebsiteLandingPage from "@/assets/images/AppleWebsite.png";
import MoviePosterWebsite from "@/assets/images/MoviePosterWebsite.png";
import Zentry from "@/assets/images/Zentry.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Apple",
    year: "2024",
    title: "Apple Clone Landing Page",
    results: [
      { title: "Sleek, modern design for a seamless user experience." },
      { title: "Optimized for fast performance across all devices." },
      { title: "Responsive layout ensures smooth navigation on mobile." },
    ],
    link: "https://apple-clone-website-rho.vercel.app/",
    image: AppleWebsiteLandingPage,
  },
  {
    company: "Zentry",
    year: "2024",
    title: "Zentry Landing Page Clone",
    results: [
      { title: "Clean & visually appealing design with a focus on clear, intuitive navigation." },
      { title: "Smooth & responsive user interface that adapts effortlessly to all screen sizes." },
      { title: "Interactive elements and animations that enhance engagement." },
    ],
    link: "https://zentry-clone-landing-page.vercel.app/",
    image: Zentry,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Movie Poster Ecommerce Website",
    results: [
      { title: "Visually striking movie posters with vibrant, high-quality imagery." },
      { title: "Intuitive layout for easy browsing and quick access to movie details." },
      { title: "Responsive design with optimal viewing experience across all devices." },
    ],
    link: "https://movie-poster-project.vercel.app/",
    image: MoviePosterWebsite,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((results) => (
                      <li key={results.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{results.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-2xl border-2 border-white/20"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
