// import BlogData from "@/components/Blog/blogData";
// import Image from "next/image";
// import { Blog } from "@/types/blog";

// interface PageProps {
//   params: {
//     _id: string;
//   };
// }

// const SingleBlogPage = ({ params }: PageProps) => {
//   const blog = BlogData.find((blog) => blog._id.toString() === params._id);

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return (
//     <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//       <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//         <div className="flex flex-col-reverse gap-7.5 lg:flex-col xl:gap-12.5">
//           <div className="lg:w-2/3">
//             <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
//               <div className="mb-10 w-full overflow-hidden">
//                 <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                   <Image
//                     src={blog.mainImage}
//                     alt={blog.title}
//                     fill
//                     className="rounded-md object-cover object-center"
//                   />
//                 </div>
//               </div>

//               <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
//                 {blog.title}
//               </h2>

//               <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
//                 <li>
//                   <span className="text-black dark:text-white">Author: </span>
//                   Ethio TalentTrove Team
//                 </li>
//                 <li>
//                   <span className="text-black dark:text-white">
//                     Published On: March 5, 2025
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-black dark:text-white">Category:</span>{" "}
//                   Talent Acquisition
//                 </li>
//               </ul>

//               <div className="blog-details">
//                 <p>{blog.metadata}</p>

//                 <p>
//                   Ethiopia is undergoing a digital transformation, and with it
//                   comes new challenges and opportunities in talent acquisition.
//                   To navigate this evolving landscape, businesses need to adopt
//                   innovative recruitment strategies that not only attract top
//                   talent but also build long-lasting relationships with the
//                   workforce.
//                 </p>

//                 <p>
//                   By leveraging technology, implementing data-driven recruitment
//                   processes, and embracing diversity and inclusion, companies
//                   can foster a competitive edge in Ethiopia's rapidly changing
//                   market.
//                 </p>

//                 <div className="flex flex-wrap gap-5">
//                   <Image
//                     src={blog.mainImage}
//                     width={350}
//                     height={200}
//                     alt="image"
//                   />
//                   <Image
//                     src="/images/blog/blog-02.png"
//                     width={350}
//                     height={200}
//                     alt="image"
//                   />
//                 </div>

//                 <h3 className="pt-8">
//                   Why Digital Transformation is Critical for Talent Acquisition
//                 </h3>

//                 <p>
//                   In a digital-first world, businesses that fail to adopt new
//                   technologies and innovative solutions risk falling behind.
//                   Embracing digital transformation helps streamline the
//                   recruitment process, making it faster and more efficient while
//                   ensuring that businesses can reach a larger pool of qualified
//                   candidates.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleBlogPage;

import BlogData from "@/components/Blog/blogData";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { JSX } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const SingleBlogPage = async ({ params }: PageProps): Promise<JSX.Element> => {
  const blog = BlogData.find((blog) => blog._id === Number(params.id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-col xl:gap-12.5">
          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              <div className="mb-10 w-full overflow-hidden">
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                  <Image
                    src={blog.mainImage}
                    alt={blog.title}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {blog.title}
              </h2>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">Author: </span>
                  Ethio TalentTrove Team
                </li>
                <li>
                  <span className="text-black dark:text-white">
                    Published On: March 5, 2025
                  </span>
                </li>
                <li>
                  <span className="text-black dark:text-white">Category:</span>{" "}
                  Talent Acquisition
                </li>
              </ul>

              <div className="blog-details">
                <p>{blog.metadata}</p>

                <p>
                  Ethiopia is undergoing a digital transformation, and with it
                  comes new challenges and opportunities in talent acquisition.
                  To navigate this evolving landscape, businesses need to adopt
                  innovative recruitment strategies that not only attract top
                  talent but also build long-lasting relationships with the
                  workforce.
                </p>

                <p>
                  By leveraging technology, implementing data-driven recruitment
                  processes, and embracing diversity and inclusion, companies
                  can foster a competitive edge in Ethiopia's rapidly changing
                  market.
                </p>

                <div className="flex flex-wrap gap-5">
                  <Image
                    src={blog.mainImage}
                    width={350}
                    height={200}
                    alt="Additional view"
                  />
                  <Image
                    src="/images/blog/blog-02.png"
                    width={350}
                    height={200}
                    alt="Additional view"
                  />
                </div>

                <h3 className="pt-8">
                  Why Digital Transformation is Critical for Talent Acquisition
                </h3>

                <p>
                  In a digital-first world, businesses that fail to adopt new
                  technologies and innovative solutions risk falling behind.
                  Embracing digital transformation helps streamline the
                  recruitment process, making it faster and more efficient while
                  ensuring that businesses can reach a larger pool of qualified
                  candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
