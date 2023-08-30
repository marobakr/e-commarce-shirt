import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import HeadsetIcon from '@mui/icons-material/Headset'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
const Headr = () => {
  return (
    <div>
      <div className='headr'>
        <div className='container'>
          <ul className='connect'>
            <li>
              <i>
                <HeadsetIcon />
              </i>
              <span>01273366071</span>
            </li>
            <li>
              <i>
                <EmailIcon />
              </i>
              <span>marwanabubakr0o0@gmail.com</span>
            </li>
          </ul>
          <ul className='info'>
            <li>
              <i>
                <LocationOnIcon />
              </i>
              <span>store location</span>
            </li>
            <li>
              <i>
                <AccessTimeIcon />
              </i>
              <span>daily deal</span>
            </li>
            <li>
              <i>
                <PersonIcon />
              </i>
              <span>my account</span>
            </li>
            <li>
              <i>
                <PowerSettingsNewIcon />
              </i>
              <span>login</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Headr
