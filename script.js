function addComment(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input values
    var nameInput = document.getElementById("name");
    var commentInput = document.getElementById("comment");
  
    // Create a new comment container
    var commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");
  
    // Create paragraph elements for name and comment
    var nameParagraph = document.createElement("p");
    var commentParagraph = document.createElement("p");
  
    // Set the text content of name and comment paragraphs
    nameParagraph.textContent = "Name: " + nameInput.value;
    commentParagraph.textContent = "Comment: " + commentInput.value;
  
    // Append name and comment paragraphs to the comment container
    commentContainer.appendChild(nameParagraph);
    commentContainer.appendChild(commentParagraph);
  
    // Append the comment container to the comments div
    var commentsDiv = document.getElementById("comments");
    commentsDiv.appendChild(commentContainer);
  
    // Clear the input values
    nameInput.value = "";
    commentInput.value = "";
  }

  document.getElementById("facebook").addEventListener("click", function() {
    window.open("https://www.facebook.com/profile.php?id=100073426400946");
  });
  
  document.getElementById("linkedin").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/satyanarayan-bheel-1702391bb/");
  });
  
  document.getElementById("instagram").addEventListener("click", function() {
    window.open("https://www.instagram.com/gareeb_memer1999/");
  });



  // Function to handle form submission
  function sendEmail() {
    Email.send({
      Host : "smtp.gmail.com",
      username : "satyambheel1999@gmail.com",
      Password : "8058660962",
      To : "satymbheel1999@gmail.com",
      from : document.getElementById("email").value,
      Subject : "New Contact Enquery",
      Body : "Name: " + document.getElementById("name").value
          + "<br> Email:" +  document.getElementById("email").value
          + "<br> Message:" + document.getElementById("message").value

    }).then(
      message => alert("Message Sent Succesfully"));

    // Get form values
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var message = document.getElementById("message").value;

    // Perform form validation (you can add your own validation logic here)

    // Send form data to the server (you can customize this part according to your needs)
    // console.log("Name: " + name);
    // console.log("Email: " + email);
    // console.log("Message: " + message);

    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
