import React from 'react';

const ProfileDetail = ({username, email, city, website, image, bio, timestamp}) => {
  return(
    <section className="box spotlight">
      <header>
        <h2><a>{username}</a></h2>
        <p>{ (city) ? city : 'city not provided' }</p>
      </header>

      <article>
        <a className="image">
          <img 
            src={ (image) ? image : '/images/NoPhoto.jpg' } 
            alt="User Photo" 
          />
        </a>
        <span>
          <strong>Email: </strong>
          { email }
        </span><br/>        
        <span>
          <strong>Website: </strong>
          <a href="https://www.google.com" target="_blank">
            https://www.google.com
          </a>
        </span>
        <br/><br />
        <h4>User Bio</h4>
        <p>{ (bio) ? bio : 'No bio specified'}</p>
      </article>
    </section>
  )
}

export default ProfileDetail;