import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Blog page for Solid Pro",
};

const BlogPage = async () => {
  return (
    <>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}

        {/* <!-- Section Title End --> */}
      </div>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="animate_top mx-auto mt-10 text-center">
          <SectionHeader
            headerInfo={{
              title: `INSIGHTS & RESOURCES`,
              subtitle: `Empowering Ethiopian Businesses`,
              description: `Stay informed with the latest insights on digital transformation, talent acquisition, and business growth in Ethiopia. Our blog shares expert advice, best practices, and industry news to help you succeed in the fast-evolving marketplace.`,
            }}
          />
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
