import { PostListItem } from './PostListItem';

const Postlist = ({ title, list, onDeletePost, onChangeStatus }) => {
  return (
    <div>
      <h2 className="post-list-title">{title}</h2>
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
              id={post.id}
              onChangeStatus={onChangeStatus}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Postlist;
