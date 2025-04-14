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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          "https://meron-backend.onrender.com/jobs/job-posting",
        );
        if (!data || !Array.isArray(data)) throw new Error("Invalid job data");
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        alert("Failed to load job postings.");
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="animate_top mx-auto mt-10 text-center">
          <SectionHeader
            headerInfo={{
              title: " CARREER OPPORTUNITIES",
              subtitle: "Looking for a Job?",
              description:
                "Discover exciting career opportunities and join the leading talent hub in Ethiopia.",
            }}
          />
        </div>

        {/* Job Cards */}
        <div className="relative z-10 p-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {jobs.map((job) => {
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
                  <p className="text-gray-500 dark:text-gray-300">
                    <span className="font-medium">Type:</span> {job.jobType}
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    <span className="font-medium">Salary:</span> {job.salary}
                  </p>
                  <p className={isExpired ? "text-red-500" : "text-green-500"}>
                    <span className="font-medium">Closing Date:</span>{" "}
                    {closingDate.toLocaleDateString()}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Job Details Modal */}
        {selectedJob && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
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

                <div className="prose prose-gray max-w-none dark:prose-invert">
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