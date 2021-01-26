import React from 'react'
import Body from './Body'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Sides.css'

const Sides = () => {
    return (
        <div>
            

            <Body/>
            <div className="Nav-Arrows">
                <div className='Backward'>
                    <ArrowBackIosIcon style={{paddingLeft: '10px', paddingTop: '3px'}} />
                </div>
                <div className='Forward'>
                    <ArrowForwardIosIcon style={{paddingLeft: '8px', paddingRight:'2px', paddingTop: '2px'}}  />
                </div>
            </div>
<div className='Next-img' style={{width:'300px'}}>
                {/* <img src ='https://media.moddb.com/cache/images/mods/1/21/20602/thumb_620x2000/seraph2.jpg' alt='scout'
                style={{width: '300px'}}
                /> */}
                
                </div>
                <div className="Vehical-Picker">
        <div>
          <h3>Vehicles/Tanks</h3>
          
          <h2>01/03</h2>
        </div>
      </div>

        </div>
    )
}

export default Sides
