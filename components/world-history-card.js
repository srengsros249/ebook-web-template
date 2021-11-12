const apiResult = [
    {
      image: "img/historyworld.jpg",
      title: "Glencoe World History (World History (HS)) Hardcover",
      description:
        "Buy Glencoe World History (World History (HS)) Book Online at Low Prices in India | Glencoe World History",
      price: 39.99,
    },
    {
      image: "img/historyworld1.jpg",
      title: "The Usborne Book of World History",
      description:
        "The history of the world to 1914. Includes cultural developments, discoveries, and world religions as well as political and military history.",
      price: 24.99,
    },
    {
      image: "img/historyworld2.jpg",
      title: "World History: Cultures, States, and Societies to 1500",
      description:
        "World History: Cultures, States, and Societies to 1500 offers a comprehensive introduction to the history of humankind from prehistory to 1500. Authored by six USG faculty members with advance degrees in History, this textbook offers up-to-date original scholarship. It covers such cultures, states, and societies as Ancient Mesopotamia, Ancient Israel, Dynastic Egypt, India’s Classical Age, the Dynasties of China, Archaic Greece, the Roman Empire, Islam, Medieval Africa, the Americas, and the Khanates of Central Asia. It includes 350 high-quality images and maps, chronologies, and learning questions to help guide student learning. Its digital nature allows students to follow links to applicable sources and videos, expanding their educational experience beyond the textbook. It provides a new and free alternative to traditional textbooks, making World History an invaluable resource in our modern age of technology and advancement.",
      price: 39.99,
    },
    {
      image: "img/historyworld3.jpg",
      title: "World History",
      description:
        "Buy World History Book Online at Low Prices in India | World History Reviews & Ratings",
      price: 29.99,
    },
    {
      image: "img/historyworld4.jpg",
      title: "World History Student Text (4th ed.)",
      description:
        "World History, 4th edition, recounts the story of mankind from creation to the present. Students examine ancient civilizations through the Greeks to the Roman Empire. Then they survey India, Asia, and Africa on their way to the Middle Ages, the Renaissance, and the Reformation, upon which modern history is founded. They are challenged to discover the forces, issues, people, and movements that have shaped our modern world. God’s providence and Bible integration are given prominence as the students are taught to view the world through a Christian lens.",
      price: 89.99,
    },
    {
      image: "img/historyworld6.jpg",
      title: "World Watch History Skill Book 2",
      description:
        "World Watch History Skill Book 2",
      price: 49.99,
    },
    {
      image: "img/historyworld7.jpg",
      title: "World History Student Edition 2018",
      description:
        "World History Student Edition 2018 Hardcover – Jan. 1 2017",
      price: 158.99,
    },
    {
      image: "img/historyworld8.jpg",
      title: "World History by Philip Parker",
      description:
        "The full story of human endeavour - complete with its dramas, wars, schemes, discoveries, and personalities - is laid out before you in this illustrated guide to the history of our world.",
      price: 99.99,
    },
  ];
  
  const container = document.getElementById("world-history-card");
  
  apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement("div");
    card.classList = "card-body";
  
    const content = `
    <div class="row">
    <div class="col-lg-3">
    <div class="card"​ style=" transition: all .2s ease-in-out;">
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
                      <input type="text" class="form-control" placeholder="Card Number" aria-label="Card Number" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text">CVV</i></span>
                        <input type="text" class="form-control" placeholder="CVV" aria-label="CVV">
                        <span class="input-group-text"><i class="bi bi-calendar"></i></span>
                        <input type="text" class="form-control" placeholder="Exp-Date(MM/YY)" aria-label="Expiration Date(MM/YY)">
                    </div>
                  </form>
                  <!--Payment End-->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">បិទ</button>
                  <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">ទិញឥឡូវ</button>
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