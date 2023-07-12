const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let bodyEl = document.querySelector("#main")


function displayPosts(i) {   
    const newSection = document.createElement("section")

    const newDivMain = document.createElement("div")
        newDivMain.className = "main-div"

    const newDivPostHeader = document.createElement("div")
        newDivPostHeader.className = "post-header-div"

    const newImgAvatar = document.createElement("img")
        newImgAvatar.className = "avatar-img"
        newImgAvatar.src = posts[i].avatar

    const newDivUserInfo = document.createElement("div")
        newDivUserInfo.className = "user-info-container"

    const newPUserName = document.createElement("p")
        newPUserName.id = "user-name"
        newPUserName.textContent = posts[i].name

    const newPUserLocation = document.createElement("p")
        newPUserLocation.className = "noraml-font-paragraph"
        newPUserLocation.textContent = posts[i].location

    const newImgPost = document.createElement("img")
        newImgPost.className = "post-img"
        newImgPost.src = posts[i].post

    const newDivPostBottom = document.createElement("div")
        newDivPostBottom.className = "post-bottom-container"

    const newDivBtnContainer = document.createElement("div")
        newDivBtnContainer.className = "btn-container"

    const newBtnLike = document.createElement("button")
        newBtnLike.className = "btn"
        newBtnLike.id = "like-btn"
        newBtnLike.innerHTML = "<img src='images/icon-heart.png' class='btn-img'>"

    const newBtnComment = document.createElement("button")
        newBtnComment.className = "btn"
        newBtnComment.innerHTML = "<img src='images/icon-comment.png' class='btn-img'>"

    const newBtnDm = document.createElement("button")
        newBtnDm.className = "btn"
        newBtnDm.innerHTML = "<img src='images/icon-dm.png' class='btn-img'>"

    const newDivPostCaption = document.createElement("div")
        newDivPostCaption.className = "post-caption"

    const newPLikeCount = document.createElement("p")
        newPLikeCount.id = "like-counts"
        newPLikeCount.textContent = posts[i].likes + " likes"

    const newPUserName2 = document.createElement("p")
        newPUserName2.innerHTML = `<p>${posts[i].username} <span class="noraml-font-paragraph">${posts[i].comment}</p>`


    //features
    newBtnLike.addEventListener("click", function() {
        posts[i].likes++
        newPLikeCount.textContent = posts[i].likes + " likes"
    }) 
    
    // appends
    bodyEl.appendChild(newSection)
    newSection.appendChild(newDivMain)
    newDivMain.appendChild(newDivPostHeader)
    newDivPostHeader.appendChild(newImgAvatar)
    newDivPostHeader.appendChild(newDivUserInfo)
    newDivUserInfo.appendChild(newPUserName)
    newDivUserInfo.appendChild(newPUserLocation)
    newDivMain.appendChild(newImgPost)
    newDivMain.appendChild(newDivPostBottom)
    newDivPostBottom.appendChild(newDivBtnContainer)
    newDivBtnContainer.appendChild(newBtnLike)
    newDivBtnContainer.appendChild(newBtnComment)
    newDivBtnContainer.appendChild(newBtnDm)
    newDivPostBottom.appendChild(newDivPostCaption)
    newDivPostCaption.appendChild(newPLikeCount)
    newDivPostCaption.appendChild(newPUserName2)
}

for (let i = 0; i < posts.length; i++) {       
    displayPosts(i)  
    }
