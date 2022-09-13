const Home = () => {

const handleclick = (e) => {
    console.log("conratulatin retard you did it", e  );
}    
const handleclickagain = (name) => {
    console.log('hello ' + name)
}
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleclick}>I fucking dare you to click me</button>
            <button onClick={ () => handleclickagain ("toriq")}>CLICK ME AGAIN BITCH</button> </div>
                       
            
            
     );
}
 
export default Home;