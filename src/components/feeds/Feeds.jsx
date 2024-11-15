import './feeds.css';

// Components................................
import Feed from './Feed';


// Facke Apis................................
import HomeFeedData from '../../FackApis/HomeFeedData';

export default function Feeds(){
    return (
        <div className='feeds'>
            {
                HomeFeedData.map(fed=>(
                    <Feed fed={fed} key={fed.key} />
                ))
            }
        </div>
    )
}