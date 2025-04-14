"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionHeader from "@/components/Common/SectionHeader";

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  applyLink?: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  postedDate: string;
  closingDate: string;
}

export default function JobManagementPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique job types for categories
  const categories = ["All", ...new Set(jobs.map((job) => job.jobType))];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://meron-backend.onrender.com/jobs/job-posting",
        );
        if (!data || !Array.isArray(data)) throw new Error("Invalid job data");
        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        alert("Failed to load job postings.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term and category
  useEffect(() => {
    let results = jobs;

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter((job) => job.jobType === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term) ||
          job.location.toLowerCase().includes(term) ||
          job.description.toLowerCase().includes(term),
      );
    }

    setFilteredJobs(results);
  }, [searchTerm, selectedCategory, jobs]);

  return (
    <>
      <section className="mt-10 py-20 lg:py-25 xl:py-30">
        <div className="animate_top mx-auto mt-10 text-center">
          <SectionHeader
            headerInfo={{
              title: "CAREER OPPORTUNITIES",
              subtitle: "Looking for a Job?",
              description:
                "Discover exciting career opportunities and join the leading talent hub in Ethiopia.",
            }}
          />
        </div>

        {/* Search and Filter Section */}
        <div className="mx-auto  mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg bg-white p-6 shadow-md dark:bg-blacksection"
          >
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              {/* Search Input */}
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search jobs
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search"
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Search jobs by title, company, or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full md:w-64">
                <label htmlFor="category" className="sr-only">
                  Filter by category
                </label>
                <select
                  id="category"
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            {!isLoading && (
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Showing {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"}
                {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
                {searchTerm ? ` matching "${searchTerm}"` : ""}
              </p>
            )}
          </motion.div>
        </div>

        {/* Loading Animation */}
        {isLoading && (
          <div className="flex justify-center py-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="relative h-16 w-16">
                {/* Pulsing circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-blue-500"
                ></motion.div>

                {/* Rotating dots */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute h-3 w-3 rounded-full bg-blue-600"
                      style={{
                        top: "0%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    ></div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-lg font-medium text-gray-600 dark:text-gray-400"
              >
                Loading opportunities...
              </motion.p>
            </motion.div>
          </div>
        )}

        {/* Job Cards */}
        {!isLoading && (
          <div className="relative z-10 p-8">
            {filteredJobs.length === 0 ? (
              <div className="py-12 text-center">
                <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
                  No job openings match your criteria
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredJobs.map((job) => {
                  const closingDate = new Date(job.closingDate);
                  const isExpired = closingDate < new Date();

                  return (
                    <motion.div
                      key={job._id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="cursor-pointer rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-[1.02] dark:bg-blacksection"
                      onClick={() => setSelectedJob(job)}
                    >
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {job.company} - {job.location}
                      </p>
                      <div className="my-2">
                        <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {job.jobType}
                        </span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-300">
                        <span className="font-medium">Salary:</span>{" "}
                        {job.salary}
                      </p>
                      <p
                        className={
                          isExpired ? "text-red-500" : "text-green-500"
                        }
                      >
                        <span className="font-medium">Closing Date:</span>{" "}
                        {closingDate.toLocaleDateString()}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Job Details Modal */}
        {selectedJob && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-6 top-6 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedJob.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {selectedJob.company} • {selectedJob.location}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {selectedJob.jobType}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedJob.description}
                  </p>
                </div>

                {selectedJob.requirements?.length && (
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedJob.responsibilities?.length && (
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {selectedJob.responsibilities.map((res, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedJob.benefits?.length && (
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Benefits
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {selectedJob.benefits.map((ben, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Posted:{" "}
                      {new Date(selectedJob.postedDate).toLocaleDateString()}
                    </p>
                    <p
                      className={
                        new Date(selectedJob.closingDate) < new Date()
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      Closing:{" "}
                      {new Date(selectedJob.closingDate).toLocaleDateString()}
                    </p>
                  </div>
                  {selectedJob.applyLink && (
                    <a
                      href={selectedJob.applyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800"
                    >
                      Apply Now
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </>
  );
}
