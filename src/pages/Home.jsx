import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
         <Link to={'/heroes'}>Heroes</Link>
        </div>
    );
};

export default Home;