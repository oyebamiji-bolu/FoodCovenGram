const posts = [
    {
        name: "FCB",
        username: "_foodcoven",
        location: "University of Ibadan",
        avatar: "FoodCovenBoys/IMG_20230424_151329.jpg",
        post: "FoodCovenBoys/SigningOutGroup.jpg",
        comment: "We lit!",
        likes: 21
    },
    {
        name: "FCB",
        username: "_foodcoven",
        location: "University of Ibadan",
        avatar: "FoodCovenBoys/IMG_20230424_151329.jpg",
        post: "FoodCovenBoys/KwesiFood.jpg",
        comment: "Na person wey chop well today go fat tomorrow",
        likes: 4
    },
    {
        name: "FCB",
        username: "_foodcoven",
        location: "University of Ibadan",
        avatar: "FoodCovenBoys/IMG_20230424_151329.jpg",
        post: "FoodCovenBoys/goCartPost.jpg",
        comment: "Let Ride!",
        likes: 152
    },
    {
        name: "FCB",
        username: "_foodcoven",
        location: "University of Ibadan",
        avatar: "FoodCovenBoys/WeedWp.jpg",
        post: "FoodCovenBoys/WeedWp.jpg",
        comment: "Even the broke smiles. Happiness is Free😁",
        likes:35
    },
    {
        name: "FCB",
        username: "_foodcoven",
        location: "University of Ibadan",
        avatar: "FoodCovenBoys/IMG_5076.jpg",
        post: "FoodCovenBoys/IMG_5076.jpg",
        comment: "Photocopier and Printer. A match from heaven.",
        likes:79
    },
    {
        name: "FCB",
        username: "_foodcoven",
        location: "University of Ibadan",
        avatar: "FoodCovenBoys/IMG_5076.jpg",
        post: "FoodCovenBoys/5B73E248-DA18-4CD2-9769-BE6C4B387C86.jpg",
        comment: "Flexing on the haters with my biscuit.Lit Gang Shit!",
        likes:79
    }
    
];

const MainContent = document.querySelector("main");

// Loop through the posts array and construct the HTML content
for (let i = 0; i < posts.length; i++) {
    const post = posts[i]; // Access the current post object

    // Append content to MainContent using +=
    MainContent.innerHTML += `
        
            <div class="container">
                <section class="profile-info">
                    <img class="img-coven" alt="An image of the legendary coven boys" src="${post.avatar}">
                    <div class="idk">
                        <p class="bold name">${post.name}</p>
                        <p class="location">${post.location}</p>
                    </div>
                </section>
            </div>
       
        <section class="post">
            <div class="container">
                <img class="img-post" src="${post.post}">
            </div>
        </section>
        <section class="comments">
            <div class="container">
                <div class="icon">
                    <img id="icon-heart-${i}" class="icon-heart" src="FoodCovenBoys/icon-heart.png">
                    <img class="icon-comment" src="FoodCovenBoys/icon-comment.png">
                    <img class="icon-dm" src="FoodCovenBoys/icon-dm.png">
                </div>
                <p class="bold likes" id="likes-${i}">${post.likes} likes</p>
                <p class="caption"><span class="bold">${post.name}</span> ${post.comment}</p>
            </div>
        </section>
    `;
}
