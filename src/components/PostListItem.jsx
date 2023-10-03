export function PostListItem({
  userId,
  id,
  body,
  title,
  onDeletePost,
  onOpenModal,
}) {
  return (
    <li className="post-list-item">
      <p>User id:{userId}</p>
      <h4 className="post-list-item-title">{title}</h4>
      <p className="post-list-item-text">{body}</p>
      <button onClick={() => onDeletePost(id)} type="button">
        delete
      </button>
      <button onClick={() => onOpenModal(title)}>
        Open modal with details
      </button>
    </li>
  );
}
