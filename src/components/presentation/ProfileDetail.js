import React from 'react';

const ProfileDetail = ({username, email, city, gender, image, timestamp}) => {
  return(
    <section className="box spotlight">
      <header>
        <h2><a>{username}</a></h2>
        <p>{ (city) ? city : 'city not provided' }</p>
      </header>

      <article>
        <a href="#" className="image featured">
          <img 
            src={ (image) ? image : '/images/NoPhoto.jpg' } 
            alt="User Photo" 
          />
        </a>
        <header>
          <h3><a href="#">Neural Implants</a></h3>
          <p>The pros and cons. Mostly cons.</p>
        </header>
        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper mod
        quisturpis nisi consequat ornare in, hendrerit in lectus semper mod quis eget mi quat etiam
        lorem. Phasellus quam turpis, feugiat sed et lorem ipsum dolor consequat dolor feugiat sed
        et tempus consequat etiam.</p>
        <p>Lorem ipsum dolor quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper
        mod quisturpis nisi consequat etiam lorem sed amet quam turpis.</p>
        <footer>
          <a href="#" className="button alt icon fa-file-o">Continue Reading</a>
        </footer>
      </article>
    </section>
  )
}

export default ProfileDetail;