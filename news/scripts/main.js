const articles = []
const articleHolder = document.getElementById('articles');

function drawArticles() {
    for (let article of articles) {
        const div = document.createElement('div');
        const title = document.createElement('p');
        div.className = 'article_holder';
        title.innerText = article.title;
        title.className = 'article_text'
        div.appendChild(article);
        div.appendChild(title);
        articleHolder.appendChild(div);
    }
}

function addArticles(json) {
    const lst = json['articles'];

    for (let obj of lst) {
        const element = document.createElement('img');
        element.src = 'http://2n.lol/news/' + obj['img-path'];
        element.className = 'article_img';
        element.title = obj['title'];
        element.addEventListener('click', () => {
            window.location.href = obj['path'];
        });
        articles.push(element);
    }
}

fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => addArticles(json))
    .then(() => drawArticles());