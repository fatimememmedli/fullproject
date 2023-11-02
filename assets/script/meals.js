let mealsBox = document.querySelector(".cards");
let urlMeals = "http://localhost:3000/meals";

axios(urlMeals).then((res) => {
  let data = res.data;
  data.forEach((meal) => {
    mealsBox.innerHTML += `
    <div class="col-3 mb-5">
          <div class="card card-main" style="width: 18rem">
            <div class="card-image">
              <img
                src="${meal.imageLink}"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">${meal.name}</h5>
              <p class="card-text">
                Price: <b> ${meal.price}</b>
              </p>
              <a
                href="./detail.html?id=${meal.id}"
                class="btn btn-outline-primary"
                >Detail</a
              >
              <button type="button" class="meal-delete-btn btn btn-outline-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button name=${meal.id} type="button" class="basket-btn btn btn-outline-primary">
                <i class="fa-solid fa-basket-shopping"></i>
              </button>
            </div>
          </div>
        </div>
    `;
  });

  let basketBtns = document.querySelectorAll(".basket-btn");
  //   console.log(basketBtns);
  let basketArr = [];
  let localBasket = JSON.parse(localStorage.getItem("basket"));
  if (localBasket) {
    basketArr = [...localBasket];
  }

  for (let basketbtn of basketBtns) {
    basketbtn.addEventListener("click", function () {
      console.log("salam");
      if (basketArr.find((elem) => elem.id == this.name)) {
        basketArr[this.name - 1].quantity++;
        localStorage.setItem("basket", JSON.stringify(basketArr));
      } else {
        data.forEach((elem) => {
          if (elem.id == this.name) {
            elem.quantity = 1;
            basketArr.push(elem);
            localStorage.setItem("basket", JSON.stringify(basketArr));
          }
        });
      }
    });
  }
});
