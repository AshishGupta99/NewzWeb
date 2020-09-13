//console.log('hello world');
//api-> 79c1a8f7e0d341d491511640d43ecea5
//url = http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=79c1a8f7e0d341d491511640d43ecea5


let apiKey = '79c1a8f7e0d341d491511640d43ecea5';
let source = 'bbc-news';
//grab newz container
let accordian = document.getElementById('accordionExample');

//create get request
const xhr = new XMLHttpRequest(); 
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

xhr.onprogress = function (){
  let spin = `
  <br><br>
  <div class="d-flex justify-content-center">
    <div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  `;
  accordian.innerHTML = spin;
}

//what do when response is ready
xhr.onload = function (){

  if(this.status === 200){
    let json = JSON.parse(this.responseText);
    //console.log(json);
    let articles = json.articles;
    //console.log(articles);
    //console.log(articles[0].description);
    let newzHTML = "";
    articles.forEach(function (element,index){
    
    let newz = `
  <div class="card mb-3" style="margin:2%">
  <h5 class="card-title" style="margin: 1%">${element['title']}</h5>
  <img src="${element['urlToImage']}" class="card-img-top" alt="image icon">
  <div class="card-body" style="margin: 0;">
  <div class="card">
    <div class="card-header" id="heading${index+1}">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index+1}" aria-expanded="false" aria-controls="collapse${index+1}" style="text-decoration:none;">
          ${element['title']} <h6><span class="badge badge-secondary">click to read description</span></h6>
        </button>
      </h2>
    </div>
    <div id="collapse${index+1}" class="collapse" aria-labelledby="heading${index+1}" data-parent="#accordionExample">
      <div class="card-body">
      ${element['description']}
      </div>
    </div>
  </div><br><p class="card-text"><small class="text-muted">${element['publishedAt']}</small></p>
  <a href="${element['url']}" class="btn btn-primary btn-lg btn-block" target="_blank">Read More...</a>
  </div>
</div>
<hr>
    `;
    newzHTML += newz;
    });
    accordian.innerHTML = newzHTML;
  }
  else{
    console.log('Error');
    console.log(this.status);
  }
}
xhr.send();


let zee = document.getElementById('zee');
zee.addEventListener("click",function (){
  
  
let apiKey1 = '79c1a8f7e0d341d491511640d43ecea5';
let source1 = 'google-news';
//grab newz container
let accordian2 = document.getElementById('accordionExample2');

//create get request
const xhr = new XMLHttpRequest(); 
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source1}&apiKey=${apiKey1}`,true);

xhr.onprogress = function (){
  let spin2 = `
  <br><br>
  <div class="d-flex justify-content-center">
    <div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  `;
  accordian2.innerHTML = spin2;
}

//what do when response is ready
xhr.onload = function (){

  if(this.status === 200){
    let json = JSON.parse(this.responseText);
    //console.log(json);
    let articles = json.articles;
    //console.log(articles);
    //console.log(articles[0].description);
    let newzHTML = "";
    articles.forEach(function (element,index){
    
    let newz = `
  <div class="card mb-3" style="margin:2%">
  <h5 class="card-title" style="margin: 1%">${element['title']}</h5>
  <img src="${element['urlToImage']}" class="card-img-top" alt="image icon">
  <div class="card-body" style="margin: 0;">
  <div class="card">
    <div class="card-header" id="heading${index+1}">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index+1}" aria-expanded="false" aria-controls="collapse${index+1}" style="text-decoration:none;">
          ${element['title']} <h6><span class="badge badge-secondary">click to read description</span></h6>
        </button>
      </h2>
    </div>
    <div id="collapse${index+1}" class="collapse" aria-labelledby="heading${index+1}" data-parent="#accordionExample">
      <div class="card-body">
      ${element['description']}
      </div>
    </div>
  </div><br><p class="card-text"><small class="text-muted">${element['publishedAt']}</small></p>
  <a href="${element['url']}" class="btn btn-primary btn-lg btn-block" target="_blank">Read More...</a>
  </div>
</div>
<hr>`;
    newzHTML += newz;
    });
    accordian2.innerHTML = newzHTML;
  }
  else{
    console.log('Error');
    console.log(this.status);
  }
}
xhr.send();
});


let fox = document.getElementById('fox');
fox.addEventListener("click",function (){
  
let apiKey2 = '79c1a8f7e0d341d491511640d43ecea5';
let source2 = 'fox-news';
//grab newz container
let accordian3 = document.getElementById('accordionExample3');

//create get request
const xhr = new XMLHttpRequest(); 
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${source2}&apiKey=${apiKey2}`,true);

xhr.onprogress = function (){
  let spin2 = `
  <br><br>
  <div class="d-flex justify-content-center">
    <div class="spinner-grow" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  `;
  accordian3.innerHTML = spin2;
}

//what do when response is ready
xhr.onload = function (){

  if(this.status === 200){
    let json = JSON.parse(this.responseText);
    //console.log(json);
    let articles = json.articles;
    //console.log(articles);
    //console.log(articles[0].description);
    let newzHTML = "";
    articles.forEach(function (element,index){
    
    let newz = `
  <div class="card mb-3" style="margin:2%">
  <h5 class="card-title" style="margin: 1%">${element['title']}</h5>
  <img src="${element['urlToImage']}" class="card-img-top" alt="image icon">
  <div class="card-body" style="margin: 0;">
  <div class="card">
    <div class="card-header" id="heading${index+1}">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index+1}" aria-expanded="false" aria-controls="collapse${index+1}" style="text-decoration:none;">
          ${element['title']} <h6><span class="badge badge-secondary">click to read description</span></h6>
        </button>
      </h2>
    </div>
    <div id="collapse${index+1}" class="collapse" aria-labelledby="heading${index+1}" data-parent="#accordionExample">
      <div class="card-body">
      ${element['description']}
      </div>
    </div>
  </div><br><p class="card-text"><small class="text-muted">${element['publishedAt']}</small></p>
  <a href="${element['url']}" class="btn btn-primary btn-lg btn-block" target="_blank">Read More...</a>
  </div>
</div>
<hr>`;
    newzHTML += newz;
    });
    accordian3.innerHTML = newzHTML;
  }
  else{
    console.log('Error');
    console.log(this.status);
  }
}
xhr.send();
});
