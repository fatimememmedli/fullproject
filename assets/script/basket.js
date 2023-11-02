let localBasketArr = JSON.parse(localStorage.getItem("basket"));
console.log(localBasketArr);
let FavTable = document.querySelector(".FavTable");
localBasketArr.forEach((elem) => {
  FavTable.innerHTML += `
  <tr>
            <th scope="row">${elem.id}</th>
            <td>${elem.name}</td>

            <td>
              <div class="fav-image">
                <img src="${elem.imageLink}" alt="" />
              </div>
            </td>
            <td>${elem.price * elem.quantity}</td>
            <td>${elem.quantity}</td>
            <td>
              <button name="${
                elem.id
              }" type="button" class="increase-btn btn btn-success">+</button>
            </td>
            <td>
              <button name="${
                elem.id
              }" type="button"  class="decrease-btn btn btn-danger">-</button>
            </td>
            <td>
              <button type="button" name="${
                elem.id
              }" class="btn btn-outline-danger">
                <i
                  name="${elem.id}"
                  class="fav-delete-button fa-solid fa-trash"
                ></i>
              </button>
            </td>
          </tr>
  `;
  //   console.log(increaseBtn);
});
let increaseBtns = document.querySelectorAll(".increase-btn");

for (let increaseBtn of increaseBtns) {
  increaseBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let newQuantity = this.parentElement.previousElementSibling.textContent++;
    this.parentElement.previousElementSibling.previousElementSibling.textContent =
      Math.round(localBasketArr[this.name - 1].price * newQuantity);

    // localBasketArr.forEach((elem) => {
    //   // console.log(this.name);
    //   if (elem.id == this.name) {
    //     localBasketArr[this.name - 1].quantity++;
    //     localStorage.setItem("basket", JSON.stringify(localBasketArr));
    //   }
    // });
  });
}
let decreaseBtns = document.querySelectorAll(".decrease-btn");
console.log(decreaseBtns);
