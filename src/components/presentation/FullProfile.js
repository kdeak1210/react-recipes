import React from 'react';

const FullProfile = ({username, email, city, website, image, bio, timestamp}) => {
  return(
    <section className="box spotlight">
      <header>
        <h2><a>{username}</a></h2>
        <p>{ (city) ? city : 'N/A' }</p>
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
          { (email) ? email : 'N/A' }
        </span><br/>        
        <span>
          <strong>Website: </strong>
          { (website) 
            ? <a href={website} target="_blank">
                {website}
              </a>
            : 'N/A'
          }   
        </span>
        <br/><br />
        <h4>User Bio</h4>
        <p>{ (bio) ? bio : 'No bio specified'}</p>
      </article>
    </section>
  )
}

export default FullProfile;