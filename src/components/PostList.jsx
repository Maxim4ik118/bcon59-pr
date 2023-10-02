import { PostListItem } from './PostListItem';

const Postlist = ({ title, filter, list, onDeletePost, addPopularStatus }) => {
  return (
    <div>
      <h2 className="post-list-title">{title}</h2>
      {list.length === 0 && filter.length === 0 && (
        <h3>There are no added posts yet!</h3>
      )}
      {list.length === 0 && filter.length > 0 && (
        <h3>There are no added posts with this search keyword "{filter}" yet!</h3>
      )}

      <ul className="post-list">
        {list.map(post => {
          return (
            <PostListItem
              key={post.id}
              srcImage={post.srcImage}
              title={post.title}
              content={post.content}
              isPopular={post.isPopular}
              onDeletePost={onDeletePost}
              addPopularStatus={addPopularStatus}
              id={post.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Postlist;
