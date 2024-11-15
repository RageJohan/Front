import './chatbox.css';

// Components................................
import Stories from '../../components/stories/Stories'

// Facke Apis................................
import CurrentUserData from '../../FackApis/CurrentUserData';

// Fontawesome icon...................
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';


export default function Chatbox(){
    return (
        <>
        <Stories />
        <div className="chat-box">
            <div className="chat-box-top">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt='' />
                <div className="user-name">
                    <h3>{CurrentUserData.map(user=>(user.name))}</h3>
                    <h5>{CurrentUserData.map(user=>(user.username))}</h5>
                </div>
            </div>
            <div className="chat-box-bottom">
                <form action="#"> 
                    <input type="text" placeholder="Escribe tu mensaje..." />
                    <button type="submit" className='btn btn-primary'>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                    <label className='btn btn-primary' htmlFor='Cfile'>
                        <FontAwesomeIcon icon={faFileAlt} />
                        <input type='flile' id='Cfile' />
                    </label>
                </form>
            </div>
        </div>
        </>
    )
}
