import { BaseButton } from "./ui/base-button";
import { HoverEffect } from "./ui/card-hover-effect";
import { Heading } from "./ui/heading";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
    link: "/",
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
    link: "/",
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
    link: "/",
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
    link: "/",
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
    link: "/",
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
    link: "/",
  },
];

export const UpComingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto sm:px-6">
        <Heading
          main_heading="Featured Webinars"
          sub_heading="Enhance your Musical journey"
        />
        <div className="mt-10">
          <HoverEffect items={featuredWebinars} />
        </div>
        <div className="mt-10 text-center">
          <BaseButton
            buttonText="View All Webinars"
            buttonHref="view-all-webinars"
          />
        </div>
      </div>
    </div>
  );
};
