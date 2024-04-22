<article className='post'>
    <div className='cover-container'>
      <img src={post.cover} alt={post.title} />
    </div>
    <div className='post-footer'>
      <h3>{post.title} {post.id}</h3>
      <p>{post.content}</p>
      <button id='like'>
      Like this post <strong>{likes}</strong>
      </button>
    </div>
  </article>