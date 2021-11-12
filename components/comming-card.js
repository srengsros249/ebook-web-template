const apiResult = [
  {
    image: "img/comming-book1.png",
    title: "Algorithms",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book2.png",
    title: "Android",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book3.png",
    title: "Angular 2+",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book4.png",
    title: "Angular JS",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book5.png",
    title: "Bash",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book6.png",
    title: "CSS",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book7.png",
    title: ".NET Framework",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
  {
    image: "img/comming-book8.png",
    title: "Entity Framework",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 20,
  },
];

const container = document.getElementById("comming-card");

apiResult.forEach((result, idx) => {
  // Create card element
  const card = document.createElement("div");
  card.classList = "card-body";

  const content = `
  <div class="row">
  <div class="col-lg-3">
  <div class="card">
  <img class="img-card" src=${result.image}>
  <div class="card-body">
  <h5 class="card-title">${result.title}</h5>
  <p class="card-text">${result.description}</p>
  <h3 style="font-size: 20px;">តម្លៃ ${result.price}$</3>
  <div style="float: right;">
      <a href="#" class="btn btn-primary"  data-bs-toggle="modal"
    data-bs-target="#static${idx}">មើល</a>
    <!-- Modal មើល -->
  <div
    class="modal fade"
    id="static${idx}"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${result.title}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" style="height: auto;">
          <img class="img-card" style="width: 250px; display:block; margin:0 auto;"  src=${result.image}>
          <p style="margin: 20px 0">${result.description}</p>
          <button type="button" class="btn btn-warning" disabled>តម្លៃ ${result.price}$</button>
          </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            បិទ
        </div>
      </div>
    </div>
  </div>
<!-- Modal មើល -->
  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#buy${idx}">
ទិញ
</button>
      <!--Modal Buy-->
      <div class="modal fade" id="buy${idx}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
      <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <img class="img-card" style="width: 250px; display:block; margin:0 auto;"  src=${result.image}>
                <!--Payment-->
                <form>
                  <div class="input-group mb-3" style="margin-top:25px;">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-credit-card-2-front" style="font-size:18px;"></i></span>
                    <input type="text" class="form-control input" placeholder="Card Number" aria-label="Card Number" aria-describedby="basic-addon1">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">CVV</i></span>
                      <input type="text" class="form-control input" placeholder="CVV" aria-label="CVV">
                      <span class="input-group-text"><i class="bi bi-calendar"></i></span>
                      <input type="text" class="form-control input" placeholder="Exp-Date(MM/YY)" aria-label="Expiration Date(MM/YY)">
                  </div>
                </form>
                <!--Payment End-->
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">បិទ</button>
                <button class="btn btn-primary button" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">ទិញឥឡូវ</button>
              </div>
      </div>
</div>
</div>
      <!--Modal But End-->
      <!-- Alert Order -->
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalToggleLabel2">ស្ថានភាពការបញ្ជាទិញ</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body" style="text-align:center;">
      <i class="bi bi-check-circle-fill" style="font-size:100px; color:green;"></i>
      <p>ការបញ្ជាទិញរបស់លោកអ្នកជោគជ័យ</p>
    </div>
    <div class="modal-footer"  style="display: flex; align-items: center; justify-content: center;">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">បិទ</button>
    </div>
  </div>
</div>
</div>

      <!-- Alert Order -->
  </div>
  </div>
  </div>
  </div>
  </div>
`;

  // Append newyly created card element to the container
  container.innerHTML += content;
});


  let input = document.querySelector(".input");
  let button = document.querySelector(".button");
  button.disabled = true;
  input.addEventListener("change", stateHandle);
  
  function stateHandle() {
      if(document.querySelector(".input").value === "") {
          button.disabled = true;
      } else {
          button.disabled = false;
      }
  }
  