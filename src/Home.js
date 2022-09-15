import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'lorem ', body: 'lorem ipsum...', author: 'Virgil', id: 1 },
    { title: 'lorem ', body: 'lorem ipsum...', author: 'Dante', id: 2 },
    { title: 'lorem ', body: 'lorem ipsum...', author: 'Nero', id: 3 }

  ])
  return (
    <div className="home">
     <BlogList blogs= { blogs } />
    </div>
  );
}
 
export default Home;