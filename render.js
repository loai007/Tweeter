const Renderer = function () {
  const renderPosts = function (postsArr) {
    $("#posts").empty();

    for (let post of postsArr) {
      $("#posts").append(`<div class="post" id="${post.id}"> `);
      $(`#${post.id}`).append(`<div >${post.text} `);

      $(`#${post.id}`).append(
        `<input class=".input-div" id="input" placeholder="Enter Comment"/>`
      );
      $(`#${post.id}`).append(`<button class="post comment-btn" >Comment`);
      $(`#${post.id}`).append(`<button class="delete" >Delete`);
      $(`#${post.id}`).append(`<ul id="${post.id}" class="li-x">`);
      for (let comment of post.comments)
        $(`#${post.id}`).append(
          `<li id="${comment.id}" class="comments li-x">${comment.text}`
        );
    }
  };
  return {
    renderPosts,
  };
};
