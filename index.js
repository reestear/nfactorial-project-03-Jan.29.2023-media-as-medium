fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
        res => res.json()
    )
    .then(data => {  
        
        let articles = document.getElementById("articles");

        for(let i = 0; i < 3; i++){
            let article = document.createElement('div');
            article.className = "article";

            article.innerHTML = `
            <div class = "article">
                <div class = "article-content">
                    <div class = "article-content-top">
                        <div class = "article-content-top-infoTop">
                            <img src="./assets/author-logo.png" alt="author logo">
                            <p id = "author-name">Author name</p>
                            <p> in </p>
                            <p id = "topic-name">Topics name</p>
                            <p> · </p>
                            <p id = "date">7 July</p>
                        </div>
                        <div class = "article-content-top-infoText">
                            <a href = "./article.html" onclick="addEventListener('click', openPage(event))" id = "title">${data[i].title}s</a>
                            <p id = "subtitile">${data[i].body}</p>
                        </div>
                    </div>
                    <div class = "article-content-bottom">
                        <div class = "article-content-bottom-info">
                            <button id = "article-content-bottom-info-button"">Java Script</button>
                            <p id = "reading-time">12 min read</p>
                            <p> · </p>
                            <p id = "your-interest">Selected for you</p>
                        </div>
                        <div class = "article-content-bottom-actions">
                            <img id = "article-content-bottom-actions-icon" src="./assets/icon.png" alt="Icon">
                            <img id = "article-content-bottom-actions-icon" src="./assets/icon.png" alt="Icon">
                            <img id = "article-content-bottom-actions-icon" src="./assets/icon.png" alt="Icon">
                        </div>
                    </div>
                </div>
                <div class = "article-image">
                    <img src="./assets/Img.png" alt="article-image">
                </div>
            </div>
            `
            articles.append(article);
        }
    })
;

const defaultText = "How long are you awake in the morning before you go online? Perhaps it's while you're still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.\n\n And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that's as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.\n\n But if you think we're hyperconnected today, just wait. Globally, just over 55% of today's households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it's estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids"
let text = document.getElementById("news-fill-main-text-text");
text.innerHTML = defaultText;

// let title = document.getElementById("title");
// title.addEventListener('click', (event) => {
//     let ind = +(event.target.id);
//     alert(ind);
// });


// function openPage(event){
//     let parent = event.target.parentElement;
//     alert(event.target.innerHTML)
//     loadPage();
//     // alert(parent.className)
//     // let nodes = parent.childNodes;
//     // alert(nodes.length);
// }

// function loadPage(){
//     let title = document.getElementById("news-title");
//     alert(title);
// }