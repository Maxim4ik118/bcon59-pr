const Postlist = ({ title, list }) => {
  return (
    <div>
      <h2 className="post-list-title">{title}</h2>
      <ul className="post-list">
        <li className="post-list-item">
          <img className="post-list-img" src="" alt="" />
          <h4 className="post-list-item-title">Post title</h4>
          <p className="post-list-item-text">Post text</p>
        </li>
      </ul>
    </div>
  );
};

export default Postlist;
