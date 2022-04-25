// Tweeter model
const Tweeter = function () {
  let _postsArr = [];
  let _postIdCounter = 1;
  let _commentIdCounter = 1;

  /***************************************************Post-Functions**************************************************************/
  /**
   * This function adds post to postsArr
   * @param {string} text
   */
  const addPost = function (text) {
    _postsArr.push({
      text: text,
      id: "p" + _postIdCounter,
      comments: [],
    });
    _postIdCounter += 1;
  };

  /**
   * This function get the postsArr
   * @returns postsArr
   */
  const getPosts = () => _postsArr;

  /**
   * This function removes post by pID from postsArr
   * @param {string} pID
   */
  const removePost = (pID) => {
    for (post in _postsArr) {
      if (_postsArr[post].id === pID) _postsArr.splice(post, 1);
    }
  };

  /**************************************************Comment-Functions**************************************************************/
  /**
   * This function adds comment to post by pID
   * @param {string} pID
   * @param {string} text
   */
  const addComment = function (pID, text) {
    for (let post in _postsArr) {
      if (_postsArr[post].id === pID)
        _postsArr[post].comments.push({
          id: "c" + _commentIdCounter,
          text: text,
        });
    }
    _commentIdCounter += 1;
  };

  /**
   * This function removes comment by pID from post by cID
   * @param {string} pID
   * @param {string} cID
   */
  const removeComment = (pID, cID) => {
    for (post in _postsArr) {
      if (_postsArr[post].id === pID)
        for (comment in _postsArr[post].comments)
          if (_postsArr[post].comments[comment].id === cID)
            _postsArr[post].comments.splice(comment, 1);
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
