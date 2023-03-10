import React from "react";
import Like from "./like";
import Comments from './comments';

import { useState } from "react";

import "./App.css";


const WriterBlog = () => {
  const [blogpost, setblog] = useState({
    posts: [],
    newPost: { title: "", content: "" },
    editing: false,
    editIndex: null
  });
  
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  const Added = (e) => {
    e.preventDefault();const { title, content } = blogpost.newPost;
    if (!title.trim() || !content.trim()) {
      alert("Please enter a title and content for the blog post.");
      return;
    }
    if (blogpost.editing) {
      const updatedPosts = [...blogpost.posts];
      updatedPosts[blogpost.editIndex] = blogpost.newPost;
      setblog({
        posts: updatedPosts,
        newPost: { title: "", content: "" },
        editing: false,
        editIndex: null
      });
    } else {
      setblog((prevState) => ({
        ...prevState,
        posts: [...prevState.posts, blogpost.newPost],
        newPost: { title: "", content: "" }
      }));
    }
  };

  const handlingEdit = (index, post) => {
    const updatedPost = { ...blogpost.newPost, ...post };
    setblog({
      posts: [...blogpost.posts],
      newPost: updatedPost,
      editing: true,
      editIndex: index
    });
  };
  
  const deleteBlogPost = (index) => {
    setblog((prevState) => ({
      ...prevState,
      posts: prevState.posts.filter((_, i) => i !== index)
    }));
  };
  const updateBlogPost = (e) => {
    e.preventDefault();
    Added(e);
  };
  
  return (
    <div>
      <div>
        <h1>Writer's blog</h1>
        <br />
      </div>

      <div>
        <h2>Add a Post</h2> <br />
      </div>

      <div>
        <h3>Title</h3>
        <input
          type="text"
          value={blogpost.newPost.title}
          onChange={(e) =>
            setblog((prevState) => ({
              ...prevState,
              newPost: { ...prevState.newPost, title: e.target.value }
            }))
          }
          required
        />
      </div>

      <div>
        <h3>Content</h3>
        <textarea
          value={blogpost.newPost.content}
          onChange={(e) =>
            setblog((prevState) => ({
              ...prevState,
              newPost: { ...prevState.newPost, content: e.target.value }
            }))
          }
        />

{blogpost.editing ? (
          <button onClick={updateBlogPost}>
            Update
          </button>
        ) : (
          <button onClick={Added}>Add</button>
        )}
        
      </div>


      <ul>
        {blogpost.posts.map((post, index) => (
          <li key={index}>
            <input
              type="text"
              value={post.title}
              onChange={(e) =>
                handlingEdit(index, {
                  ...post,
                  title: e.target.value
                })
              }
            />
            <textarea
              value={post.content}
              onChange={(e) =>
                handlingEdit(index, {
                  ...post,
                  content: e.target.value
                })
              }
            />
             <Like />
            <Comments comments={comments} onCommentSubmit={handleCommentSubmit} />

           

            <button onClick={() => deleteBlogPost(index)}>Delete</button>
            <button onClick={() => handlingEdit(index, post)}>Edit</button>
          </li>
        ))}
      </ul>
      <div>

     
       
        
      </div>
    </div>
  );
};

export default WriterBlog;