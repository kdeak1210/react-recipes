import React, { Component } from 'react';
import { CommentForm, FullComment } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';

class CommentFeed extends Component {

  componentDidMount(){
    const { id } = this.props.match.params;
    if (this.props.comment[id] == null) {
      this.props.fetchComments({ recipe: id})
    }

    if (this.props.user == null){
      this.props.checkCurrentUser()
      .catch(err => console.log(err.message));
    }
  }

  componentDidUpdate(){
    
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

    this.props.createComment(comment);
  }

  render(){
    const { id } = this.props.match.params;
    const comments = this.props.comment[id] || [];
    const { user } = this.props;
    return(
      <div>
        { (comments.length == 0)
          ? <h4>No Comments Yet</h4>
          : comments.map(comment => {
            return (
              <div key ={comment.id}>
                <FullComment 
                  author={comment.profile.username}
                  body={comment.body}
                  timestamp={comment.timestamp}
                />
              </div>
            )}
        )}
        { (user) 
          ? <CommentForm 
              onSubmit={this.submitComment.bind(this)}
              username={user.username}
            />
          : <h4>Please Login to Comment</h4>
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user,
    comment: state.comment
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkCurrentUser: () => dispatch(actions.checkCurrentUser()),
    createComment: (params) => dispatch(actions.createComment(params)),
    fetchComments: (params) => dispatch(actions.fetchComments(params))
  }
}

export default connect(stateToProps, dispatchToProps)(CommentFeed);