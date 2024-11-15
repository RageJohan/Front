import './login.css';
import { Link } from 'react-router-dom';

export default function Login(){
    return (
        <div className=" login">
            <div className="card">
            <div className="left">
                <h2> -<br />NapaExtra <br />-</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo veritatis iure quae porro sequi, eaque, earum, incidunt beatae harum possimus. Repellendus dolore suscipit quis similique at repellat commodi in!</p>
                <span>Don´t have an account</span>
                <Link to="/signup">
                    <button className="btn btn-primary">Register</button>
                </Link>
                
            </div>
            <form className="right"> 
                <input type="text" required placeholder="username" />
                <input type="password" required placeholder="password" />
                <button type="submit" className='btn'>Login</button>
            </form>
        </div>
        </div>
    )
}