"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image?: string;
}

export const FeaturedCourses = () => {
  const courses = courseData.courses.filter((course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="uppercase text-base font-medium text-teal-600 tracking-wider">
          Featured courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-semibold text-white tracking-tight sm:text-4x">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10 w-[90%] lg:w-[80%] max-w-[100%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {courses.map((item) => (
            <div key={item.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-lg bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-3">
                    {item.description}
                  </p>
                  <Link
                    href={`/courses/${item.slug}`}
                    className="px-3 py-1 rounded border border-neutral-500 bg-white text-neutral-600 transition duration-100 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-500 bg-white text-neutral-600 transition duration-100 hover:bg-blue-500 hover:text-white hover:border-blue-500"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};
