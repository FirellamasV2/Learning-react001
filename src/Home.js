import { useState } from "react";

const Home = () => {
    //let name = 'vergil';
        const [ name, setName ] = useState('vergil')
        const [ age, setAge ] = useState (41);
        

const handleclick = () => {
    setName ('dante')
    setAge ('40')

}    

    return (    
        <div className="Home">
            <h2>Homepage</h2>
            <p> { name } is { age } Yearsl old</p>
            <button onClick={handleclick}>Click For DMC5 </button>
            </div>
    
     );
}
 
export default Home;