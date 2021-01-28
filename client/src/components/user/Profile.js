import React from 'react'

function Profile(){
  return (
    <section
      className="profile-container">
    
      <article className="main-user-details">
        <div className="name-email-div">
          <h3 className="username">Claire</h3>
          <h4 className="email">claire@gmail.com</h4>
       
        </div>
        <div className="user-profile-image-view">
          <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/49535901_10156184605368865_8827419087735881728_n.jpg?_nc_cat=105&ccb=2&_nc_sid=84a396&_nc_ohc=2S4Gz0T63bYAX_nlfzE&_nc_ht=scontent-lhr8-2.xx&oh=9c72529ee8cae39f517cda00df991fc2&oe=6032ED10" alt="" className="user-profile-image"/>
        </div>
      </article>
      <article className="user-bio-container">
        <p className="user-biot-text">
        Hi my name is Claire. I really enjoy gardening. I got into around 2 years ago now. I found the veggies I was getting from the supermarket just did not taste the way I remmebered from my childhood. So I decided to grow my own.
        </p>
      </article>
      <div className="friends-title">
        <h3 className="friend-title">Friends</h3>
      </div>
      <article className="friends-profile-view">
        <div className="image-and-name">
          <div className="friend-profile">
            <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/124716726_10159045471293169_2808530424032100085_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=1_6pCgQxD-gAX8lg5If&_nc_ht=scontent-lhr8-2.xx&oh=e7cddc71e46b6717371ec6faedaa3540&oe=6034B4A0" alt="freind" className="friend-profile-image"/>
            <p className="profile-view-friend-name">Amandine</p>
          </div>
        </div>
        <div className="image-and-name">
          <div className="friend-profile">
            <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/124716726_10159045471293169_2808530424032100085_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=1_6pCgQxD-gAX8lg5If&_nc_ht=scontent-lhr8-2.xx&oh=e7cddc71e46b6717371ec6faedaa3540&oe=6034B4A0" alt="freind" className="friend-profile-image"/>
            <p className="profile-view-friend-name">Amandine</p>
          </div>
        </div>
        <div className="image-and-name">
          <div className="friend-profile">
            <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/124716726_10159045471293169_2808530424032100085_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=1_6pCgQxD-gAX8lg5If&_nc_ht=scontent-lhr8-2.xx&oh=e7cddc71e46b6717371ec6faedaa3540&oe=6034B4A0" alt="freind" className="friend-profile-image"/>
            <p className="profile-view-friend-name">Amandine</p>
          </div>
        </div>
        <div className="image-and-name">
          <div className="friend-profile">
            <img src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.0-9/124716726_10159045471293169_2808530424032100085_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=1_6pCgQxD-gAX8lg5If&_nc_ht=scontent-lhr8-2.xx&oh=e7cddc71e46b6717371ec6faedaa3540&oe=6034B4A0" alt="freind" className="friend-profile-image"/>
            <p className="profile-view-friend-name">Amandine</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Profile