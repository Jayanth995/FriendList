import {useState} from 'react'; 
import { useDispatch } from 'react-redux';
import { addFriend } from '../redux/actions';

const AddFriend = () => {
    const [name,setName] = useState("");
    const [showError,setShowError] = useState(false);
    const dispatch = useDispatch();
    const inputStyle = {
        width: "100%",
        padding: "12px 20px",        
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box"
        
    }
    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    const handleSubmit = (e) => {
        setShowError(false);
        if(name == '') {
            setShowError(true);
            return;
        } else {
            let payloadObj = {id:generateKey(name),name: name, fav: false}
            dispatch(addFriend(payloadObj)); 
            setName("");
        }        
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <form onSubmit={e => {e.preventDefault(); handleSubmit(e);}}>
            <input style={inputStyle} type="text" value={name} placeholder="Enter your friend's name..." onChange={(e) => handleChange(e)}/>
            {showError && <span style={{color:"red"}}>Please enter a name !!</span>}
        </form>
    )
}

export default AddFriend;