const tweeter = Tweeter();
const renderer = Renderer();

const postHandler = function () {
  const postText = $("#input").val();
  $("#input").val("");
  tweeter.addPost(postText);
  renderer.renderPosts(tweeter.getPosts());
};

$("#posts").on("click", ".delete", function () {
  const postID = $(this).closest("div").attr("id");
  $(this).closest("div").remove();
  tweeter.removePost(postID);
});

$("#posts").on("click", ".comment-btn", function () {
  const postID = $(this).closest("div").attr("id");
  const comment = $(this).closest("div").find("input").val();
  tweeter.addComment(postID, comment);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click",".comments" , function(){
    const commentID = $(this).attr("id");
    const postID = $(this).closest("div").attr("id");
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts())
})
