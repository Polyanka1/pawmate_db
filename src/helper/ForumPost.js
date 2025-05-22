const { format } = require('date-fns');

const mapForumPost = post => ({
  id: post.id,
  title: post.title,
  content: post.content,
  forumPostUserId: post.user_id,
  createdAt: format(new Date(post.created_at), 'dd.MM.yyyy'),
});

module.exports = mapForumPost;
