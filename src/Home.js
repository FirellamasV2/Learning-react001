import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'How to get my sword back ', body: 'lorem ipsum...', author: 'vergil', id: 1 },
    { title: 'lorem ', body: 'lorem ipsum...', author: 'dante', id: 2 },
    { title: 'How to motivate someone with my theme song ', body: 'lorem ipsum...', author: 'vergil', id: 3 }

  ])
  return (
    <div className="home">
     <BlogList blogs= {blogs} title="All Blogs" />
     <BlogList blogs={blogs.filter(blog => blog.author === 'vergil')} title="vergil Blogs" />
    </div>
  );
}
 
export default Home;