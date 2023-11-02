let favTableBox = document.querySelector(".FavTable");
let favArr = [];
let localFavArr = JSON.parse(localStorage.getItem("fav"));
if (localFavArr) {
  favArr = [...localFavArr];
}
console.log(favArr);

favArr.forEach((elem) => {
  favTableBox.innerHTML += `
    <tr>
            <th scope="row">${elem.id}</th>
            <td>${elem.name}</td>
            
            <td>
              <div class="fav-image">
                <img
                  src="${elem.imageLink}"
                  alt=""
                />
              </div>
            </td>
            <td>${elem.age}</td>
            <td>${elem.genre}</td>
            <td>
              <button type="button" class="btn btn-outline-danger">
                <i name="${elem.id}" class="fav-delete-button fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
    `;

  let favDeleteBtn = document.querySelectorAll(".fav-delete-button");
  for (let deletebtn of favDeleteBtn) {
    // console.log(deletebtn);
    deletebtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.parentElement.parentElement.parentElement.remove();
      favArr = favArr.filter((item) => item.id != this.getAttribute("name"));
      localStorage.setItem("fav", JSON.stringify(favArr));
    });
  }
});
