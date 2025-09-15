import React from "react";
import { FaUser, FaExternalLinkAlt } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      title: "Revolutionizing E-Commerce in Nepal",
      summary:
        "NepalMart is changing the way local artisans reach global markets. Learn how this platform works and its impact.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Foster",
      role: "Co-Founder / CTO",
      date: "Mar 16, 2020",
      tag: "E-Commerce",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Digital Healthcare Transformation",
      summary:
        "How the Laboratory Information System is streamlining medical services across Nepal.",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Lindsay Walton",
      role: "Front-end Developer",
      date: "Mar 10, 2020",
      tag: "Healthcare",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="blog"
      className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden mt-5"
    >
      <div className="max-w-screen-xl mx-auto text-center mb-14">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
          <FaUser className="h-5 w-5 text-yellow-500" />
          <span className="text-gray-700 font-medium">Our Blogs</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
            Blogs
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Explore our expert advice and stories from the field of innovation, technology, and business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {/* Blog Image */}
            {blog.image && (
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${blog.color} opacity-0 group-hover:opacity-50 transition-all duration-500`}
                ></div>
              </div>
            )}

            {/* Blog Content */}
            <div className="p-6 relative z-10">
              <div className="flex items-center gap-3 text-sm text-gray-900 mb-3">
                <span>{blog.date}</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                  {blog.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-900 mb-4">{blog.summary}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <FaUser className="text-gray-900" />
                <div>
                  <p className="font-medium text-gray-900">{blog.author}</p>
                  <p className="text-sm text-gray-600">{blog.role}</p>
                </div>
              </div>
            </div>

            {/* Subtle Glow on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${blog.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl`}
            ></div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center mt-20">
        <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          <span className="group-hover:animate-pulse">Explore All Blogs</span>
        </button>
      </div>
    </section>
  );
};

export default Blog;



// blog.jsx
// import React from "react";

// const Blog = () => {
//   return (
//     <main className="px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden mt-5">
//       {/* Hero Section */}
//       <div className="p-4 md:p-8 mb-4 md:mb-8 text-white rounded-lg bg-gray-900">
//         <div className="md:w-1/2 px-0">
//           <h1 className="text-3xl md:text-4xl font-serif font-bold">
//             Title of a longer featured blog post
//           </h1>
//           <p className="text-xl my-3">
//             Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
//           </p>
//           <p className="text-xl mb-0">
//             <a href="#" className="text-white font-bold">
//               Continue reading...
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Featured Posts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//         {/* Post 1 */}
//         <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md">
//           <div className="p-4 flex flex-col flex-1">
//             <strong className="inline-block mb-2 text-blue-600">World</strong>
//             <h3 className="text-xl font-bold mb-0">Featured post</h3>
//             <div className="mb-2 text-gray-500">Nov 12</div>
//             <p className="mb-auto">
//               This is a wider card with supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="mt-2 text-blue-600 relative">
//               Continue reading
//             </a>
//           </div>
//           <div className="hidden md:block md:w-48 flex-none">
//             <div className="bg-gray-700 w-full h-full flex items-center justify-center text-gray-300">
//               Thumbnail
//             </div>
//           </div>
//         </div>

//         {/* Post 2 */}
//         <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md">
//           <div className="p-4 flex flex-col flex-1">
//             <strong className="inline-block mb-2 text-green-600">Design</strong>
//             <h3 className="text-xl font-bold mb-0">Post title</h3>
//             <div className="mb-2 text-gray-500">Nov 11</div>
//             <p className="mb-auto">
//               This is a wider card with supporting text below as a natural lead-in to additional content.
//             </p>
//             <a href="#" className="mt-2 text-blue-600 relative">
//               Continue reading
//             </a>
//           </div>
//           <div className="hidden md:block md:w-48 flex-none">
//             <div className="bg-gray-700 w-full h-full flex items-center justify-center text-gray-300">
//               Thumbnail
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Main Content */}
//         <div className="md:col-span-3">
//           <h3 className="pb-4 mb-4 font-serif italic border-b border-gray-300">
//             From the Firehose
//           </h3>

//           {/* Blog Post 1 */}
//           <article className="blog-post mb-8">
//             <h2 className="text-2xl font-bold mb-2">Sample blog post</h2>
//             <p className="text-gray-600 mb-4">January 1, 2021 by <a href="#" className="text-blue-600">Mark</a></p>

//             <p className="mb-4">
//               This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.
//             </p>
//             <hr className="my-6 border-gray-300" />
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <h2 className="text-xl font-bold mt-6 mb-4">Blockquotes</h2>
//             <p className="mb-4">This is an example blockquote in action:</p>
//             <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
//               <p>Quoted text goes here.</p>
//             </blockquote>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <h3 className="text-lg font-bold mt-6 mb-4">Example lists</h3>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:
//             </p>
//             <ul className="list-disc pl-6 mb-4">
//               <li>First list item</li>
//               <li>Second list item with a longer description</li>
//               <li>Third list item to close it out</li>
//             </ul>
//             <p className="mb-4">And this is an ordered list:</p>
//             <ol className="list-decimal pl-6 mb-4">
//               <li>First list item</li>
//               <li>Second list item with a longer description</li>
//               <li>Third list item to close it out</li>
//             </ol>
//             <p className="mb-4">And this is a definition list:</p>
//             <dl className="mb-4">
//               <dt className="font-bold">HyperText Markup Language (HTML)</dt>
//               <dd className="mb-2 ml-4">The language used to describe and define the content of a Web page</dd>
//               <dt className="font-bold">Cascading Style Sheets (CSS)</dt>
//               <dd className="mb-2 ml-4">Used to describe the appearance of Web content</dd>
//               <dt className="font-bold">JavaScript (JS)</dt>
//               <dd className="mb-2 ml-4">The programming language used to build advanced Web sites and applications</dd>
//             </dl>
//             <h2 className="text-xl font-bold mt-6 mb-4">Inline HTML elements</h2>
//             <p className="mb-4">
//               HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" className="text-blue-600">Mozilla Developer Network</a>.
//             </p>
//             <ul className="list-disc pl-6 mb-4">
//               <li><strong>To bold text</strong>, use <code className="bg-gray-100 px-1 rounded">&lt;strong&gt;</code>.</li>
//               <li><em>To italicize text</em>, use <code className="bg-gray-100 px-1 rounded">&lt;em&gt;</code>.</li>
//               <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code className="bg-gray-100 px-1 rounded">&lt;abbr&gt;</code>, with an optional <code className="bg-gray-100 px-1 rounded">title</code> attribute for the full phrase.</li>
//               <li>Citations, like <cite>— Mark Otto</cite>, should use <code className="bg-gray-100 px-1 rounded">&lt;cite&gt;</code>.</li>
//               <li><del>Deleted</del> text should use <code className="bg-gray-100 px-1 rounded">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code className="bg-gray-100 px-1 rounded">&lt;ins&gt;</code>.</li>
//               <li>Superscript <sup>text</sup> uses <code className="bg-gray-100 px-1 rounded">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code className="bg-gray-100 px-1 rounded">&lt;sub&gt;</code>.</li>
//             </ul>
//             <p className="mb-4">Most of these elements are styled by browsers with few modifications on our part.</p>
//             <h2 className="text-xl font-bold mt-6 mb-4">Heading</h2>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <h3 className="text-lg font-bold mt-6 mb-4">Sub-heading</h3>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
//               <code>Example code block</code>
//             </pre>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.
//             </p>
//           </article>

//           {/* Blog Post 2 */}
//           <article className="blog-post mb-8">
//             <h2 className="text-2xl font-bold mb-2">Another blog post</h2>
//             <p className="text-gray-600 mb-4">December 23, 2020 by <a href="#" className="text-blue-600">Jacob</a></p>

//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
//               <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
//             </blockquote>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <h3 className="text-lg font-bold mt-6 mb-4">Example table</h3>
//             <p className="mb-4">And don't forget about tables in these posts:</p>
//             <table className="min-w-full border-collapse border border-gray-300 mb-4">
//               <thead>
//                 <tr>
//                   <th className="border border-gray-300 px-4 py-2 bg-gray-100">Name</th>
//                   <th className="border border-gray-300 px-4 py-2 bg-gray-100">Upvotes</th>
//                   <th className="border border-gray-300 px-4 py-2 bg-gray-100">Downvotes</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2">Alice</td>
//                   <td className="border border-gray-300 px-4 py-2">10</td>
//                   <td className="border border-gray-300 px-4 py-2">11</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2">Bob</td>
//                   <td className="border border-gray-300 px-4 py-2">4</td>
//                   <td className="border border-gray-300 px-4 py-2">3</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2">Charlie</td>
//                   <td className="border border-gray-300 px-4 py-2">7</td>
//                   <td className="border border-gray-300 px-4 py-2">9</td>
//                 </tr>
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2 bg-gray-100">Totals</td>
//                   <td className="border border-gray-300 px-4 py-2 bg-gray-100">21</td>
//                   <td className="border border-gray-300 px-4 py-2 bg-gray-100">23</td>
//                 </tr>
//               </tfoot>
//             </table>

//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.
//             </p>
//           </article>

//           {/* Blog Post 3 */}
//           <article className="blog-post mb-8">
//             <h2 className="text-2xl font-bold mb-2">New feature</h2>
//             <p className="text-gray-600 mb-4">December 14, 2020 by <a href="#" className="text-blue-600">Chris</a></p>

//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.
//             </p>
//             <ul className="list-disc pl-6 mb-4">
//               <li>First list item</li>
//               <li>Second list item with a longer description</li>
//               <li>Third list item to close it out</li>
//             </ul>
//             <p className="mb-4">
//               This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.
//             </p>
//           </article>

//           {/* Pagination */}
//           <nav className="blog-pagination mb-8" aria-label="Pagination">
//             <a className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded mr-2 hover:bg-blue-600 hover:text-white" href="#">
//               Older
//             </a>
//             <a className="inline-block px-4 py-2 border border-gray-300 text-gray-400 rounded cursor-not-allowed" href="#" tabIndex={-1} aria-disabled="true">
//               Newer
//             </a>
//           </nav>
//         </div>

//         {/* Sidebar */}
//         <div className="md:col-span-1">
//           <div className="sticky top-8">
//             <div className="p-4 mb-6 bg-gray-100 rounded-lg">
//               <h4 className="font-serif italic text-lg font-bold">About</h4>
//               <p className="mb-0">
//                 Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
//               </p>
//             </div>

//             <div className="p-4 mb-6">
//               <h4 className="font-serif italic text-lg font-bold">Archives</h4>
//               <ol className="list-none space-y-2">
//                 <li><a href="#" className="text-blue-600">March 2021</a></li>
//                 <li><a href="#" className="text-blue-600">February 2021</a></li>
//                 <li><a href="#" className="text-blue-600">January 2021</a></li>
//                 <li><a href="#" className="text-blue-600">December 2020</a></li>
//                 <li><a href="#" className="text-blue-600">November 2020</a></li>
//                 <li><a href="#" className="text-blue-600">October 2020</a></li>
//                 <li><a href="#" className="text-blue-600">September 2020</a></li>
//                 <li><a href="#" className="text-blue-600">August 2020</a></li>
//                 <li><a href="#" className="text-blue-600">July 2020</a></li>
//                 <li><a href="#" className="text-blue-600">June 2020</a></li>
//                 <li><a href="#" className="text-blue-600">May 2020</a></li>
//                 <li><a href="#" className="text-blue-600">April 2020</a></li>
//               </ol>
//             </div>

//             <div className="p-4">
//               <h4 className="font-serif italic text-lg font-bold">Elsewhere</h4>
//               <ol className="list-none space-y-2">
//                 <li><a href="#" className="text-blue-600">GitHub</a></li>
//                 <li><a href="#" className="text-blue-600">Twitter</a></li>
//                 <li><a href="#" className="text-blue-600">Facebook</a></li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Blog;