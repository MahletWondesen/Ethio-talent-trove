"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/images/hero/one.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        className="-z-10  opacity-100 dark:opacity-90"
      />

      {/* Hero Content */}
      <div className="flex h-full items-center justify-center text-center">
        <div className="px-4 text-white dark:text-white">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            Welcome to Ethio Talent{" "}
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1   before:h-3 before:w-full before:bg-blue-200 dark:before:bg-titlebgdark">
              Trove
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed drop-shadow-md">
            At Ethio Talent Trove, we connect skilled professionals with
            outstanding opportunities. Based in Addis Ababa, Ethiopia, our
            mission is to bridge the gap between talent and organizations in
            need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
