import React from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './NavBar.css'

export const Navbar = () => {
    return (
        <div className='Nav' container alignItems="center">
            <div className='Header'>
                <h3 className='Header-Name'>Battlezone 2</h3>
                <MenuOutlinedIcon fontSize='large'  />
            </div>
            <div  container alignItems="center" className='Menu-Buttons'>
                <PersonIcon fontSize='default' />
                <Divider  orientation="vertical" flexItem/>
                <SearchIcon fontSize='default'/>
                
            </div>

            
        </div>
    )
}
