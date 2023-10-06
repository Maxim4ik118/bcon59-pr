export const checkPopularityPosts = postsToCount => {
  const popularPostsCount = postsToCount.reduce((acc, post) => {
    if (post.isPopular) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return popularPostsCount >= 2 ? true : false;
};
