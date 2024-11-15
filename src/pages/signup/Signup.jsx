import './signup.css';
import { Link } from 'react-router-dom';

export default function Signup(){
    return (
        <div className=" signup">
            <div className="card">
            <div className="left">
                <h2> -<br />NapaExtra Signup<br />-</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo veritatis iure quae porro sequi, eaque, earum, incidunt beatae harum possimus. Repellendus dolore suscipit quis similique at repellat commodi in!</p>
                <span>have an account</span>
                <Link to='/login' >
                    <button className="btn btn-primary">Login</button>
                </Link>                
            </div>
            <form className="right"> 
                <input type="text" required placeholder="username" />
                <input type="email" required placeholder="email" />
                <input type="password" required placeholder="password" />
                <button type="submit" className='btn'>Register</button>
            </form>
        </div>
        </div>
    )
}