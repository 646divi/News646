console.log("Hello devesh sir!");
let api_key = 'a4e222a42d6f4412b298021f114f2490';
let source = 'bbc-news';
let newsContainer = document.getElementById('newsContainer');
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`, true);

xhr.onload = function() {
    if (this.status === 200) {
        // console.log(this.responseText);
        const json = JSON.parse(this.responseText);
        // console.log(json);
        const articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index);
            const news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News${index+1}:</b>
                ${element['title']}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsContainer">
              <div class="accordion-body">
                  ${element['content']}.<a href="${element['url']}" target="_blank">Read More...</a>
              </div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsContainer.innerHTML = newsHtml;
    } else {
        console.log("Sorry! some error occured!!");
    }
}
xhr.send();