
let posts = []
let id = 0;

var addPost = function (text, id, comment) {
    let post = { 
        text: text,
        id: id,
        comment: []
     }
    posts.push(post);
}

$('button').click(function () {
    addPost($("#post-name").val(), id);
    id++;
    renderPosts();
})

const renderPosts = function () {
    $(".posts").empty();
    for (let i in posts) {
        let newPost = document.createElement("p");
        newPost.innerHTML = posts[i].text;
        newPost.setAttribute('class', "post");
        newPost.setAttribute('data-id', posts[i].id);
        $(".posts").append(newPost);
        createRemoveButton(newPost);
        removePost();
        createCommentButton(newPost);
        // recieveComment();
    }
}

let createRemoveButton = function (CurrentPost) {
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.setAttribute('class', "remove btn");
    removeButton.setAttribute('type', "button");
    CurrentPost.appendChild(removeButton);
}

let removePost = function () {
    $(".remove btn").on('click', , function() {
// finding post id, for loop and splicing. rendering again.<-----
    }
}

// var id = 88;

// for(var i = 0; i < data.length; i++) {
//     if(data[i].id == id) {
//         data.splice(i, 1);
//         break;
//     }
// }

// myArray = myArray.filter(function( obj ) {
//     return obj.id !== id;
//   });

// let removePost = function () {
//     $("p").on('click', $(".remove btn"), function () {
//         $(this).remove();
//     });
// }

let createCommentButton = function (CurrentPost) {
    let commentButton = document.createElement("button");
    commentButton.innerHTML = " Comment! ";
    commentButton.setAttribute('class', "comment btn");
    commentButton.setAttribute('type', "button");
    CurrentPost.appendChild(commentButton);
}

// let recieveComment = function () {
//     let comment = document.createElement("form");
//     comment.innerHTML = "leave a comment";
//     comment.setAttribute('class', "form");

//     $("p").on('click', $(".comment btn"), function () {
//         $(this).append(comment);
//     });
// }



// // $(":button")