let id = new URLSearchParams(location.search).get("id");
let detailBox = document.querySelector(".detail-box");
let url = "http://localhost:3000/singers";
console.log(id);
axios(url).then((res) => {
  let data = res.data;
  let detailElement = data.find((elem) => elem.id == id);
  console.log(detailElement);
  detailBox.innerHTML = `
  <div class="card" style="width: 37%">
        <div class="detail-image">
          <img
            src="${detailElement.imageLink}"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">${detailElement.name}</h5>
          <p class="card-text">
            ${detailElement.name} is <b>
            ${detailElement.nationality}
            </b>
          </p>
          <p>AGE: ${detailElement.age}</p>
          <p>GENRE: ${detailElement.genre}</p>
          <a href="./singer.html" class="btn btn-outline-primary">Home</a>
        </div>
      </div>
  `;
});
