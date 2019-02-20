function listComments() {

  var comments = Drive.Comments.list(DocumentApp.getActiveDocument().getId());

  if (comments.items && comments.items.length > 0) {
    for (var i = 0; i < comments.items.length; i++) {
      var comment = comments.items[i];  
      Logger.log('Comment : %s', comment.toLocalString());
    }
  } else {
    Logger.log('No comment found.');
  }
}
