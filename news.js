// console.log("news");
// 1c9df958e46547fcb8b746cd1de0beca       https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=1c9df958e46547fcb8b746cd1de0beca
// for All over the world : https://newsapi.org/v2/top-headlines/sources?&apiKey=1c9df958e46547fcb8b746cd1de0beca
// getting the news boxes
let newsCollapser = document.getElementById("newsbox");
// console.log(newsCollapser);
// creating ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=1c9df958e46547fcb8b746cd1de0beca",
  true
);
// xhr.getResponseHeader('Content-Type','application/json')
newscard = "";
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    //  console.log(json);
    //  console.log(articles);
    articles.forEach(function (element, index) {
      // console.log(element);

      let news = `
        
        <button class="btn btn-dark my-3" type="button" data-bs-toggle="collapse" data-bs-target="#newsCollapser${index}" aria-expanded="false" aria-controls="newsCollapser${index}">
          ${element.title}
        </button>
      
        <div >
          <div class="collapse collapse-vertical" id="newsCollapser${index}">
            <div id="newsbox" class="card card-body" style="width: 100%;">
            <strong>Description:</strong>  ${element.description}     <hr>
            <strong>Explained:</strong>  ${element.content} .... <a target = "_blank" href="${element.url}">Read more</a>
            </div>
          
          </div>
        </div>`;
      newscard += news;
    });

    newsCollapser.innerHTML = newscard;
  } else {
    console.log("There is some issue in Api");
  }
};
xhr.send();
// let Url = "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=1c9df958e46547fcb8b746cd1de0beca"
// function fetchingnews(){

//   fetch(Url).then(function(respones){
//    return respones.json;
//   }).then((data)=>{
//      if (this.status === 200) {
//       //  let json =  JSON.parse(data)
//        let articles = data.articles
//        console.log(data);
//        console.log(articles);
//        articles.forEach(function(element , index){
//         console.log(element);

//         let news = `

//         <button class="btn btn-dark my-3" type="button" data-bs-toggle="collapse" data-bs-target="#newsCollapser${index}" aria-expanded="false" aria-controls="newsCollapser${index}">
//           ${element.title}
//         </button>

//         <div >
//           <div class="collapse collapse-vertical" id="newsCollapser${index}">
//             <div id="newsbox" class="card card-body" style="width: 100%;">
//             <strong>Description:</strong>  ${element.description}     <hr>
//             <strong>Explained:</strong>  ${element.content} .... <a target = "_blank" href="${element.url}">Read more</a>
//             </div>

//           </div>
//         </div>`
//         newscard += news
//            });

//        newsCollapser.innerHTML = newscard

//     }
//      else {
//         console.log('There is some issue in Api');
//     }
//   })
// }

// fetchingnews()
