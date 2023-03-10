import React, { useState } from 'react';
import { Login, Signup } from './login';

const Comments = (props) => {
  const { comments, onCommentSubmit } = props;
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
// eslint-disable-next-line no-unused-vars
   const [error, setError] = useState(null);

    const handleCommentSubmit = (e) => {
    e.preventDefault();
    const text = e.target.commentText.value;
    const author = loggedInUser.email;
    onCommentSubmit({ text, author });
    e.target.reset();
  };
  
  const handleLogin = (email, password) => {
    console.log(email, password)
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
  
    if (user) {
      setLoggedInUser(user);
    } else {
      setError("Invalid email or password");
    }
  };
  
  const handleSignup = (email, password) => {
   const userExists = registeredUsers.some((u) => u.email === email);
    if (userExists) {
      setError("User already exists with this email");
    } else {
      
      const newUser = { email, password };
      setRegisteredUsers([...registeredUsers, newUser]);
      setLoggedInUser({ email });
    }
  };
  

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p className="comment-text">{comment.text}</p>
          <p className="comment-author">By {comment.author}</p>
        </div>
      ))}
      {loggedInUser ? (
        <form onSubmit={handleCommentSubmit}>
          <label htmlFor="commentText">Comment:</label>
          <input type="text" id="commentText" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
         {error && <p className="error-message">{error}</p>}
          <p>Please log in or sign up to post a comment</p>
          <Login onLogin={handleLogin} />
          <Signup onSignup={handleSignup} />
        </>
      )}
    </div>
  );
};

export default Comments;

