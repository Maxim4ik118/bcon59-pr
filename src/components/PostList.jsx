import imgCat from '../assets/images/cat-1.jpg';
import { PostListItem } from './PostListItem';

const Postlist = ({ title, list, onDeletePost, addPopularStatus }) => {
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
              addPopularStatus={addPopularStatus}
              id={post.id}
            />
          );
        })}
        {/* <PostListItem
          srcImage={imgCat}
          title={'Image of Cat'}
          content={'Hello Cat'}
        />
        <PostListItem
          isPopular={true}
          srcImage={imgCat}
          title={'Image of Cat Two'}
          content={'Hello Cat Two'}
        /> */}
      </ul>
    </div>
  );
};

export default Postlist;
