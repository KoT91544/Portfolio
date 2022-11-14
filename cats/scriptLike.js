function createArticle (heading, media, url, width, height) {
    let container = document.querySelector(".main")
    let likedCon = document.querySelector(".liked")
    let article = document.createElement("article")
    article.classList.add("main__card")
    let text = document.createElement("p")
    text.textContent=heading

    let array = []
    let articleObj = {
        heading: heading,
        media: media,
        url: url,
        like: false
    }
    
    
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

        articleObj.like = !articleObj.like

        if(articleObj.like==true) {
            localStorage.setItem(heading, JSON.stringify(articleObj))
        }
        else {
            localStorage.removeItem(heading, JSON.stringify(articleObj))
        }


    })
    return {
        article,
        text,
        articleObj,
    }
}

document.addEventListener("DOMContentLoaded",async function() {
    let promise = await fetch(`https://www.reddit.com/r/cats.json`)
    let data = await promise.json()
    data.data.children.forEach(element => {
        // for(let key in localStorage) {
        //     console.log(key)
        // }
        let local = localStorage.getItem(element.data.title)
        if(local!=null) {
            let object = JSON.parse(local)
            console.log(object)
            createArticle(object.heading, object.media, object.url, object.width, object.height)
        }
    });
})