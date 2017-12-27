import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ProfileForm = (props) => {
  const { handleSubmit } = props;
  const { bio, city, gender } = props.profile;
  return(
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="bio">Bio</label>
        <Field 
          name="bio" 
          component="input" 
          type="text"
          placeholder={bio} 
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <Field 
          name="city" 
          component="input" 
          type="text" 
          placeholder={city}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <Field 
          name="gender" 
          component="input" 
          type="text" 
          placeholder={gender}
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  )
}

export default ProfileForm = reduxForm({
  form: 'profile' // a unique name to identify the form
})(ProfileForm);