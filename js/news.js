const loadCategory = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  const categoryBarContainer = document.getElementById('category-bar-container');
  data.data.news_category.forEach(item => {
    const button = document.createElement('button');
    button.addEventListener('click', () =>{
      loadNews(item.category_id);
    })
    button.className = "text-2xl mx-3 text-white";
    button.innerText = item.category_name;
    categoryBarContainer.appendChild(button);
    // console.log(item)
  });
}

const loadNews = async (catId) =>{
  console.log(catId);
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
  const data = await res.json();
  const newsContainer = document.getElementById('news-container');
  newsContainer.textContent = '';
  data.data.forEach((item) =>{
    const div = document.createElement('div');
    div.className  = "card card-side bg-base-100 shadow-xl w-[750px] border-2";
    div.innerHTML = `
    <figure>
    <img class = "h-full" src="${item.image_url}" alt="Movie"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">${item.title}</h2>
      <p>${item.details.slice(0,200)}</p>
       <div class="flex justify-between items-center gap-14 mt-4">
          <div class="flex gap-2 items-center">
             <div>
              <img class = "rounded-full w-[100px]" src="${item.author.img}" alt="">
             </div>
             <div>
                <p>MD DAVID</p>
                <p>DAte: 12-12-2004</p>
             </div>
          </div>
          <div class="flex">
             <img src="" alt="">
             <p>450</p>
          </div>
          <div><button class="btn btn-primary">Details</button></div>
       </div>
      
    </div>
    `
  newsContainer.appendChild(div);
    // console.log(item);

  })

}
loadNews("01")

loadCategory();