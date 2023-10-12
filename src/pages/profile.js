import { useAuth0 } from "@auth0/auth0-react";
import FaceIcon from '@mui/icons-material/Face';
import './profile.css'
import MainNav from "./Nav";


const Profile =()=>{
    const{user, isAuthenticated}= useAuth0();

    return(
        isAuthenticated && (
            <article className="column">
                <MainNav/>
                {user?.picture && <img src={user.picture} alt={user?.name} className="profilepic"/>}
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
                </ul>
            </article>
            
        )
    )
}

export default Profile;