import Image from "next/image";
import aboutData from "./aboutData";
import SingleBlog from "../Blog/SingleBlog";
import SectionTitle from "../Common/SectionTitle";
// const AboutSectionTwo = () => {
//   return (
//      <div className="container">
//         <SectionTitle
//           title="Our Latest Blogs"
//           paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
//           center
//         />
//               <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
//                 {aboutData.map((blog) => (
//                   <div key={blog.id} className="w-full">
//                     <SingleBlog blog={blog} />
//                   </div>
//                 ))}
//               </div>
//               {/* <Image
//                 src="/images/about/about-image-2-dark.svg"
//                 alt="about image"
//                 fill
//                 className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
//               /> */}
//             </div>
//           </div>
//           {/* <div className="w-full px-4 lg:w-1/2">
//             <div className="max-w-[470px]">
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Bug free code
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Premier support
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt.
//                 </p>
//               </div>
//               <div className="mb-1">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Next.js
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
//                   consectetur adipiscing elit setim.
//                 </p>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

const AboutSectionTwo = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle title="Our Team" paragraph="" center />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {aboutData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
