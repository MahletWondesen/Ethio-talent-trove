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
            className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 p-4 pt-30"
            onClick={() => setSelectedJob(null)} // Close when clicking outside
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-blacksection"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
            >
              {/* <button
                onClick={() => setSelectedJob(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                ✕
              </button> */}

              <h3 className="text-xl font-bold text-black dark:text-white">
                {selectedJob.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedJob.company} - {selectedJob.location}
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                <span className="font-medium">Type:</span> {selectedJob.jobType}
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                <span className="font-medium">Salary:</span>{" "}
                {selectedJob.salary}
              </p>
              <p className="text-gray-500 dark:text-gray-300">
                <span className="font-medium">Description:</span>{" "}
                {selectedJob.description}
              </p>

              {selectedJob.requirements?.length && (
                <div>
                  <p className="font-medium">Requirements:</p>
                  <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.responsibilities?.length && (
                <div>
                  <p className="font-medium">Responsibilities:</p>
                  <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300">
                    {selectedJob.responsibilities.map((res, index) => (
                      <li key={index}>{res}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.benefits?.length && (
                <div>
                  <p className="font-medium">Benefits:</p>
                  <ul className="list-disc pl-6 text-gray-500 dark:text-gray-300">
                    {selectedJob.benefits.map((ben, index) => (
                      <li key={index}>{ben}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedJob.applyLink && (
                <a
                  href={selectedJob.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block text-blue-500 hover:underline"
                >
                  Apply Now
                </a>
              )}

              <p className="mt-4">
                <span className="font-medium">Closing Date:</span>{" "}
                <span
                  className={
                    new Date(selectedJob.closingDate) < new Date()
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  {new Date(selectedJob.closingDate).toLocaleDateString()}
                </span>
              </p>
            </motion.div>
          </div>
        )}
      </section>
    </>
  );
}
