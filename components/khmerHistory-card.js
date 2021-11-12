const apiResult = [
    {
      image: "img/historykhmer.jpg",
      title: "An Illustrated History of Cambodia",
      description:
        "Beginning with a definition of who the Cambodians are, this fully illustrated history then tracks back to the earliest kingdoms before 800 AD, followed by an investigation of the creation of the magnificent city of Angkor and Cambodia’s centuries of greatness up to 1400 AD.",
      price: 10,
    },
    {
      image: "img/historykhmer1.jpg",
      title: "History of Cambodia, A - Fourth edition, updated",
      description:
        "In this clear and concise volume, author David Chandler provides a timely overview of Cambodia, a small but increasingly visible Southeast Asia nation.",
      price: 30,
    },
    {
      image: "img/historykhmer2.jpg",
      title: "Record of Cambodia, A: The Land and Its People",
      description:
        "Only one person has given us a first-hand account of the civilization of Angkor. This is the Chinese envoy, Zhou Daguan, who visited Angkor in 1296–97 and wrote A Record of Cambodia: The Land and Its People after his return to China. To this day, Zhou’s description of the royal palace, sacred buildings, women, traders, slaves, hill people, animals, landscapes, and everyday life remains a unique portrait of thirteenth-century Angkor at a time when its splendors were still intact.",
      price: 35,
    },
    {
      image: "img/historykhmer3.jpg",
      title: "The Khmer Kings and the History of Cambodia: BOOK II - 1595 to the Contemporary Period",
      description:
        "Book II is the most comprehensive and detailed study of Khmer civilization available, from 1595 CE to the Contemporary Period. Even after the fall of Angkor, the kingdom remained relatively strong until the Ayutthayan King Naresuan conquered Longvek in 1594. When his armies returned to Ayutthaya, they did permanent damage to Cambodia by forcibly taking Khmer craftsmen and scholars, leaders of many great Khmer families, and all the Khmer treasures including sacred manuscripts, chronicles, and records of laws, customs and traditions.",
      price: 39.95,
    },
    {
      image: "img/historykhmer4.jpg",
      title: "The Khmer Empire",
      description:
        "The Khmer Empire: The History and Legacy of One of Southeast Asia’s Most Influential Empires.",
      price: 25,
    },
    {
      image: "img/historykhmer5.jpg",
      title: "A Woman of Angkor ",
      description:
        "Burgess has done something that I believe is unique in modern writing: set a credible and seemingly authentic tale in the courts and temples of ancient Angkor to stir the imagination and excite our historical interest.",
      price: 18,
    },
    {
      image: "img/historykhmer6.jpg",
      title: "Cambodian History",
      description:
        "Cambodian History: A Captivating Guide to the History of Cambodia and the Khmer Empire.",
      price: 12,
    },
    {
      image: "img/historykhmer7.jpeg",
      title: "ប្រាសាទព្រះវិហារ",
      description:
        "ស្នាដៃ”ប្រាសាទព្រះវិហារ”របស់លោក បណ្ឌិតសភាចារ្យ រស់ ចន្ត្រាបុត្រត្រូវបានបោះពុម្ពចែក ចាយទៅតាមស្ថាប័នមួយចំនួនដូចជា៖ វត្តអារ៉ាម គ្រឹះស្ថានសិក្សា ស្ថាប័នរដ្ឋ ខេត្ត រាជបណ្ឌិត្យសភាកម្ពុជា បណ្ណាល័យ និងប្រព័ន្ធផ្សព្វផ្សាយជាដើម។",
      price: 20,
    },
  ];
  
  const container = document.getElementById("khmer-history-card");
  
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