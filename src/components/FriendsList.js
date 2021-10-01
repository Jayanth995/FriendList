import { useDispatch, useSelector } from "react-redux"
import {  useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSortAmountUp } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt, faStar as faRegStar } from '@fortawesome/free-regular-svg-icons'
import { addFavourite, deleteFriend } from "../redux/actions"

const FriendsList = () => {

    // CSS
    const ulStyle = {
        padding: "0",
        border: "1px solid #ddd"
    }
    const liStyle = {
        padding: "8px 16px",
        borderBottom: "1px solid #ddd",
        textAlign: "left"
    }
    const iconStyle= {
        color: "grey",
        border: "1px solid grey",
        padding: "5px",
        margin: "0px 5px",
        cursor: "pointer"
    }
    const sortIconStyle = {
        color: "grey",
        border: "1px solid grey",
        padding: "5px 8px",
        margin: "0px 10px",
        cursor: "pointer",
        fontSize: "1.5em",
        marginTop: "8px"
    }
    const pageNumberStyle = {
            float: "left",
            padding: "8px 16px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "black"
    }
    const inputStyle = {
        width: "90%",
        padding: "12px 20px",        
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        marginTop: "5px"
    }
    
    // state declarations
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [friendsPerPage,setFriendsPerPage] = useState(4);
    const [upperPageBound, setUpperPageBound] = useState(4);
    const [lowerPageBound, setLowerPageBound] = useState(0);
    const [isPrevBtnActive, setIsPrevBtnActive] = useState('disabled');
    const [isNextBtnActive, setIsNextBtnActive] = useState('');
    const [pageBound, setPageBound] = useState(4);
    const [sortFlag, setSortFlag] = useState(false);

    // fetch friend list from redux store
    const friendsListArr = useSelector(state => state.friendsList);

    // sorting the fav at top
    const sortedFriends = friendsListArr.reduce((acc, element) => {
                            if (element.fav) {
                                return [element, ...acc];
                            }
                            return [...acc, element];
                        }, []);
    
    // search filter
    const filteredFriends = sortFlag ? sortedFriends.filter(item => item.name.indexOf(searchTerm) > -1) :  friendsListArr.filter(item => item.name.indexOf(searchTerm) > -1);
    
    const dispatch = useDispatch();

    useEffect(() => {
        setPrevAndNextBtnClass(currentPage);
    },[filteredFriends])

    // pagination logic
    const indexOfLastFriend = currentPage * friendsPerPage;
    const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
    const currentFriends = filteredFriends.slice(indexOfFirstFriend, indexOfLastFriend);

    const handlePageNumberClick = (event) => {
        let listid = Number(event.target.id);
        setCurrentPage(listid);        
        setPrevAndNextBtnClass(listid);
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredFriends.length / friendsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        
        if(number === 1 && currentPage === 1){
            return(
                <li key={number} style={pageNumberStyle} id={number} onClick={(e) => handlePageNumberClick(e)}>{number}</li>
            )
        }
        else if((number < upperPageBound + 1) && number > lowerPageBound){
            return(
                <li key={number} style={pageNumberStyle} id={number} onClick={(e) => handlePageNumberClick(e)}>{number}</li>
            )
        }        
    });
    
    const pageIncrementBtn = () => {
        if(pageNumbers.length > upperPageBound){
            return <li style={pageNumberStyle} className='' onClick={() => btnIncrementClick()}> &hellip; </li>
        }
    }

    const pageDecrementBtn = () => { 
        if(lowerPageBound >= 1){
            return <li style={pageNumberStyle} className='' onClick={() => btnDecrementClick()}> &hellip; </li>
        }
    }

    const renderPrevBtn = () => {
        if(isPrevBtnActive === 'disabled'){
            return <li style={pageNumberStyle} className={isPrevBtnActive} > Prev </li>
        } else {
            return <li style={pageNumberStyle} className={isPrevBtnActive} onClick={() => btnPrevClick()}>Prev </li>
        }
    }

    const renderNextBtn = () => {
        if(isNextBtnActive === 'disabled'){
            return <li style={pageNumberStyle} className={isNextBtnActive}> Next </li>
        } else {
           return <li style={pageNumberStyle} className={isNextBtnActive} onClick={() => btnNextClick()}> Next </li>
        }
    }

    const setPrevAndNextBtnClass = (listid) => {
        let totalPage = Math.ceil(filteredFriends.length / friendsPerPage);
        setIsNextBtnActive('disabled');
        setIsPrevBtnActive('disabled');        
        if(totalPage === listid && totalPage > 1){
            setIsPrevBtnActive('');            
        }
        else if(listid === 1 && totalPage > 1){
            setIsNextBtnActive('')            
        }
        else if(totalPage > 1){
            setIsNextBtnActive('')   
            setIsPrevBtnActive('');                 
        }
    }
    
    const btnIncrementClick = () => {
        setUpperPageBound(upperPageBound + pageBound);
        setLowerPageBound(lowerPageBound + pageBound);                
        let listid = upperPageBound + 1;
        setCurrentPage(listid);        
        setPrevAndNextBtnClass(listid);
    }

    const btnDecrementClick = () => {
        setUpperPageBound(upperPageBound - pageBound);
        setLowerPageBound(lowerPageBound - pageBound);          
        let listid = upperPageBound - pageBound;
        setCurrentPage(listid);     
        setPrevAndNextBtnClass(listid);
    }

    const btnPrevClick = () => { 
        if((currentPage - 1) % pageBound === 0 ){
            setUpperPageBound(upperPageBound - pageBound);
            setLowerPageBound(lowerPageBound - pageBound);            
        }
        let listid = currentPage - 1;
        setCurrentPage(listid); 
        setPrevAndNextBtnClass(listid);
    }
    const btnNextClick = () => {
        if((currentPage +1) > upperPageBound ){
            setUpperPageBound(upperPageBound + pageBound);
            setLowerPageBound(lowerPageBound + pageBound);   
        }
        let listid = currentPage + 1;
        setCurrentPage(listid); 
        setPrevAndNextBtnClass(listid);
    }

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleFavourite = (id) => {       
        dispatch(addFavourite(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteFriend(id));
    }
    
    const handleSort = () => {
        setSortFlag(previousFlag => !previousFlag);
    }

    const renderFriends = currentFriends.map((friend, index) => {
        return (
            <li key={friend.id} style ={liStyle}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{display:"grid"}}>
                        <span style={{fontWeight:"bold"}}>{friend.name}</span>
                        <span style={{fontSize:"small", marginTop:"10px"}}>is your friend</span>
                    </div>
                    <div>
                        <FontAwesomeIcon onClick={() => handleFavourite(friend.id)} style={iconStyle} icon={friend.fav ? faStar : faRegStar}  />
                        <FontAwesomeIcon onClick={() => handleDelete(friend.id)} style={iconStyle} icon={faTrashAlt}  />                                                                      
                    </div>
                </div>
            </li>
        );
      });

    return (
        <div>
            {friendsListArr.length > 0 && <div style={{display:'flex',justifyContent:"center"}}>
                <input style={inputStyle} type="text" onChange={(e) => handleSearchTerm(e)} placeholder="Search..." />
                <FontAwesomeIcon  style={sortIconStyle} icon={faSortAmountUp} onClick={() => handleSort()} title="Sort by Favourite" /> 
            </div>}
            <ul style ={ulStyle} className="ulStyle">
                {renderFriends}
            </ul>
            <ul style={{display: "inline-block", listStyleType:"none", justifyContent:"center"}}>
              {filteredFriends.length > 0 && renderPrevBtn()}
              {pageDecrementBtn()}
              {renderPageNumbers}
              {pageIncrementBtn()}
              {filteredFriends.length > 0 && renderNextBtn()}
            </ul>
        </div>
    );
}

export default FriendsList;