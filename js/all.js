function getTitle(title)
{
    return title;
}

function getAuthor(author)
{
    return author;
}

function getIntro(intro) {
    
    return intro;
}

var el = document.querySelectorAll('.card');
var title = document.querySelectorAll('.book-title');
var author = document.querySelectorAll('.book-author');
var intro = document.querySelectorAll('.book-introduction');
var image = document.querySelectorAll('.card-img-top');


var titleContent;
var authorContent;
var introContent;
var imgContent;

/* 對每個卡片元件都增加監聽 */
/*          要用let       */
for(let i = 0 ; i < el.length;i++)
{
    
     el[i].addEventListener("click", function (event) {
         titleContent = title[i].textContent;
         authorContent = author[i].textContent;
         introContent = intro[i].textContent;
         
         imgContent = image[i].getAttribute('src');
         
         localStorage.setItem("title",titleContent);
         localStorage.setItem("author",authorContent);
         localStorage.setItem("intro",introContent);
         
         localStorage.setItem("image",imgContent);

         window.location.href="cardInfo.html";

    }, false);
}



