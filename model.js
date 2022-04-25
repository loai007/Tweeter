// Tweeter model
const Tweeter = function () {
  let postsArr = [];
  let postIdCounter = 1;
  let commentIdCounter = 1;

  /***************************************************Post-Functions**************************************************************/
  /**
   * This function adds post to postsArr
   * @param {string} text
   */
  const addPost = function (text) {
    postsArr.push({
      text: text,
      id: "p" + postIdCounter,
      comments: [],
    });
    postIdCounter += 1;
  };

  /**
   * This function get the postsArr
   * @returns postsArr
   */
  const getPosts = () => postsArr;

  /**
   * This function removes post by pID from postsArr
   * @param {string} pID
   */
  const removePost = (pID) => {
    for (post in postsArr) {
      if (postsArr[post].id === pID) postsArr.splice(post, 1);
    }
  };

  /**************************************************Comment-Functions**************************************************************/
  /**
   * This function adds comment to post by pID
   * @param {string} pID
   * @param {string} text
   */
  const addComment = function (pID, text) {
    for (let post in postsArr) {
      if (postsArr[post].id === pID)
        postsArr[post].comments.push({
          id: "c" + commentIdCounter,
          text: text,
        });
    }
    commentIdCounter += 1;
  };

  /**
   * This function removes comment by pID from post by cID
   * @param {string} pID
   * @param {string} cID
   */
  const removeComment = (pID, cID) => {
    for (post in postsArr) {
      if (postsArr[post].id === pID)
        for (comment in postsArr[post].comments)
          if (postsArr[post].comments[comment].id === cID)
            postsArr[post].comments.splice(comment, 1);
    }
  };
  return {
    addPost: addPost,
    getPosts: getPosts,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};
