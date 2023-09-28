export function PostListItem({
  srcImage,
  title,
  content,
  isPopular = false,
  onDeletePost,
  id,
}) {
  return (
    <li className="post-list-item">
      {isPopular ? (
        <span className="post-list-item-bage">Popular rated</span>
      ) : null}
      <img className="post-list-img" src={srcImage} alt={title} />
      <h4 className="post-list-item-title">{title}</h4>
      <p className="post-list-item-text">{content}</p>
      <button onClick={() => onDeletePost(id)} type="button">
        delete
      </button>
    </li>
  );
}
