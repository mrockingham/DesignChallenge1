import React from 'react';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
import './Body.css';

const Body = () => {
  return (
      <div className ='Main-Body'>
    <div className="Body">
      <div className="Info">
        <div className="Title">
          <h1>
            Battlezone 2<br></br>
            Combat Vehicals
          </h1>
        </div>
        <div className="Vehical-Info">
          <div className="Name">
            <h2>Warrior</h2>
          </div>
          <div className="Information">
            <h3>
              Warriors ability to morph and deliver serious damage to your
              extractors and base make them particularly dangerous opponents.
              They provide even more of a threat than ISDF Tanks. Avoiding their
              Plasma Cannons is recommended as well as focusing fire on them for
              as long as possible. Vehicles with Mortars are worthwhile
              utilising to take advantage of their range before allowing the
              Warrior to head your way.
            </h3>
            <h3>
              As units go, Warriors are the ultimate all rounder. Their
              versatility of speed and weaponry can end up dealing major damage
              to enemies.
            </h3>
            <h3>Read More</h3>
          </div>
          {/* <div className="Social-Media">
            <div className="Twitter">
              <TwitterIcon
                fontSize="small"
                style={{ color: 'black', padding: '5px', paddingTop: '7px' }}
              />
            </div>
            <div className="Facebook">
              <FacebookIcon
                fontSize="small"
                style={{ padding: '5px', paddingTop: '7px' }}
              />
            </div>
            <div className="Instagram">
              <InstagramIcon
                fontSize="small"
                style={{ padding: '5px', paddingTop: '7px' }}
              />
            </div>
          </div> */}
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Body;
