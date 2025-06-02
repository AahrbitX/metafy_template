import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  date: string;
  imgSrc: string;
};

const BlogsData = [
  {
    title: "10 best smartphones for devs",
    date: "March 15, 2021",
    imgSrc:
      "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
  },
  {
    title: "Working with the latest web technologies",
    date: "March 15, 2021",
    imgSrc:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
  },
  {
    title: "Building scalable applications with React",
    date: "March 15, 2021",
    imgSrc:
      "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
  },
  {
    title: "8 High performance Notebooks",
    date: "January 27, 2021",
    imgSrc:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600",
  },
];

export default function BlogsSection() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Blog
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {BlogsData.map((item) => (
            <BlogCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ imgSrc, date, title }: BlogCardProps) => {
  return (
    <Link
      href="#"
      className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96"
    >
      <Image
        src={imgSrc}
        fill
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
      <div className="relative mt-auto p-4">
        <span className="block text-sm text-gray-200">{date}</span>
        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
          {title}
        </h2>
        <span className="font-semibold text-indigo-300">Read more</span>
      </div>
    </Link>
  );
};
