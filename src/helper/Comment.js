const { format } = require('date-fns');

const mapComment = comment => ({
  id: comment.id,
  postId: comment.post_id,
  commentUserId: comment.user_id,
  content: comment.content,
  createdAt: format(new Date(comment.created_at), 'dd.MM.yyyy'),
});

module.exports = mapComment;
