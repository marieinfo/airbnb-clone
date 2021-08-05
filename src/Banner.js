import React, {useState} from 'react'
import './Banner.css'
import Search from "./Search"
import {Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom'

function Banner() {
    const history= useHistory();
    const [showSearch, setShowSearch]= useState(false);
    return (
        <div className='Banner'>
            <div className='banner_search'>
                {showSearch && <Search/> }
                <Button onClick={()=> setShowSearch(!showSearch)}
                className='searchbutton' variant='outlined' >
           {showSearch ? "Hide": "Search Dates"} </Button>
            </div>
           <div className='banner_info'>
               <h1>Get out and stretch your imagination</h1>
               <h5>Plan a diffrent kind of getway to uncover the hidden gems near you</h5>
               <Button onClick={()=> history.push('/search')} variant='outlined'>Explore Nearby</Button>
               {/* onclick={()=> history, push('/search')}  pour nous deriger vers la page search */}
           </div>
        </div>
    )
}

export default Banner
