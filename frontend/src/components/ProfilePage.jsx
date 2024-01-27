import Media from '../Assets/media.png'
import React from "react";
import { Card } from "antd";
import '../styles/ProfilePage.css';
import Instagram from '../Assets/instagram.png'
import Facebook from '../Assets/facebook.png'
import Twitter from '../Assets/twitter.png'


const ProfilePage = () => {
  return (
    <div className='card-inner'>
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={Media}
        />
      }
    >
      <h4>John Doe</h4>
      <p>CEO</p>
      <div className='social-media-cont'>
        <img src={Facebook} alt="face" />
        <img src={Instagram} alt="insta" />
        <img src={Twitter} alt="tweet" />
      </div>
    </Card>
  </div>
  )
}

export default ProfilePage
