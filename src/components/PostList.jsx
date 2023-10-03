import { PostListItem } from './PostListItem';

const Postlist = ({ title, filter, list, onDeletePost, onOpenModal }) => {
  console.log(list);
  return (
    <div>
      <h2 className="post-list-title">{title}</h2>
      {list.length === 0 && filter.length === 0 && (
        <h3>There are no added posts yet!</h3>
      )}
      {list.length === 0 && filter.length > 0 && (
        <h3>
          There are no added posts with this search keyword "{filter}" yet!
        </h3>
      )}

      <ul className="post-list">
        {list.map(post => {
          return (
            <PostListItem
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              onDeletePost={onDeletePost}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Postlist;
