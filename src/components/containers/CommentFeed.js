import React, { Component } from 'react';
import { CommentForm, Comment } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';

class CommentFeed extends Component {

  componentDidMount(){
    if (this.props.user == null){
      this.props.checkCurrentUser()
      .catch(err => console.log(err.message));
    }
  }

  submitComment(comment){
    const { id } = this.props.match.params; // Recipe ID
    const { user } = this.props;            // User submitting comment
    
    const profile = {
      username: user.username,
      id: user.id
    }

    // Finish formatting comment to the CommentSchema    
    comment['recipe'] = id;
    comment['profile'] = profile;


  }

  render(){
    return(
      <div>
        { (this.props.user) 
          ? <CommentForm onSubmit={this.submitComment.bind(this)}/>
          : <h4>Please Login to Comment</h4>
        }    
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkCurrentUser: () => dispatch(actions.checkCurrentUser())
  }
}

export default connect(stateToProps, dispatchToProps)(CommentFeed);