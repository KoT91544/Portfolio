function createArticle (heading, media, url, width, height, object) {
    let container = document.querySelector(".main")
    let article = document.createElement("article")
    article.classList.add("main__card")
    let text = document.createElement("p")
    text.textContent=heading
    
    if(media=="img") {
        let img = document.createElement("img")
        img.classList.add("card__media")
        img.src = url
        img.style.width = width
        img.style.height = height
        article.append(text)
        article.append(img)
    }

    if(media=="video") {
        let video = document.createElement("video")
        video.classList.add("card__media")
        video.src = url
        video.style.width = width
        video.style.height = height
        video.setAttribute("controls","")
        article.append(text)
        article.append(video)
    }
    container.append(article)
    article.addEventListener("click", function() {
        article.classList.toggle("active")
        let local = localStorage.getItem(heading)
        if(local!=null && local!=undefined) {
            let object = JSON.parse(local)
            let articleObj = object

            console.log(articleObj)
        }
    

        // articleObj.like = !articleObj.like

        // if(articleObj.like==true) {
        //     localStorage.setItem(heading, JSON.stringify(articleObj))
        // }
        // else {
        //     localStorage.removeItem(heading, JSON.stringify(articleObj))
        // }


    })
    return {
        article,
        text,
    }
}

document.addEventListener("DOMContentLoaded", async function() {

    let promise = await fetch(`https://www.reddit.com/r/cats.json`)
    let data = await promise.json()
    
    data.data.children.forEach(element => {
        if(element.data.thumbnail!="self" && element.data.thumbnail!="nsfw")  {
            if(element.data.is_video!=false) {
                createArticle(element.data.title,"video", element.data.media.reddit_video.fallback_url, element.data.thumbnail_width, element.data.thumbnail_height)
            }
            else {
                createArticle(element.data.title,"img", element.data.thumbnail, element.data.thumbnail_width, element.data.thumbnail_height)
            }
        }
    });
    window.createArticle = createArticle;
})