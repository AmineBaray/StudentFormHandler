import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <>
            <div className="grid grid-cols-2 m-0 pl-1 p-3 drop-shadow-sm">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                    <a href="/">Student Handler</a> 
                    </h1>
                </div>
                
                <div className="pl-44">
                    <Link to="/" className="hover:text-sky-700 text-xl">Home</Link>
                    <Link to="/NewStudent" className="pl-10 hover:text-sky-700 text-xl">New Student</Link>
                </div>
            </div> 
        </>
    );
}
 
export default Navbar