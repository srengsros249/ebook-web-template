const apiResult = [
  {
    image: "img/psy-life1k.jpg",
    title: "ទស្សនៈទម្លុះជីវិត",
    description:
      "សៀវភៅនេះបានបង្កប់អត្ថន័យដ៏មានតម្លៃសម្រាប់ជីវិត ព្រោះថាកម្រងទស្សនៈដែលមាននៅក្នុងសៀវភៅនេះ គឺទុកសម្រាប់ឆ្លុះពីជីវិតរាល់មនុស្សគ្រប់គ្នា។ សៀវភៅ “ទស្សនៈទម្លុះជីវិត” សរសេរដោយលោក មនោវិជ្ជា ។ ",
    price: 3.50,
  },
  {
    image: "img/psy-life2k.jpg",
    title: "សម្រស់នៃសេចក្ដីស្លាប់",
    description:
      "យើងធ្លាប់តែខ្លាចស្លាប់ តែយើងមិនដែលឃើញវា។ តើយើងអាចខ្លាចអ្វីដែលយើងមិនដែលដឹងអំពីវាបានទេ? ដូច្នេះ ដើម្បីដឹងថាស្លាប់មានសម្រស់យ៉ាងណានោះ សូមរង់ចាំមើលទាំងអស់គ្នា តាមរយៈសៀវភៅមួយនេះ!។ សម្រស់នៃសេចក្តីស្លាប់ គឺជាវណ្ណកម្មថ្មីមួយទៀតរបស់លោកឆោម ច័ន្ទឆាយា។",
    price: 9.00,
  },
  {
    image: "img/psy-life3k.jpg",
    title: "បណ្ដុំទស្សនៈ",
    description:
      "មិត្តអ្នកអាន! តើត្រៀមខ្លួនចូលរួមពិធីសម្ពោធសៀវភៅ បណ្ដុំទស្សនៈ ដែលនិពន្ធដោយលោកឧកញ៉ា វេជ្ជបណ្ឌិត គួច ម៉េងលី ហើយឬនៅ?",
    price: 6.50,
  },
  {
    image: "img/psy-life4k.jpg",
    title: "ទុកផ្លូវក្រោយ ភាគ២",
    description:
      "ប្រាប់អំពីរឿងរ៉ាវប្រវត្តិសាស្ត្រចិន ព្រឹត្តិការណ៍ជាច្រើននិងយុទ្ធសាស្ត្រការពារផ្លូវក្រោយកុំឱ្យទ័លច្រក អាចទប់ទល់នឹងស្ថានការណ៍គ្រោះថ្នាក់បានដោយងាយ និងមានប្រសិទ្ធភាពខ្ពស់បំផុត។",
    price: 10.00,
  },
  {
    image: "img/psy-life1.jpg",
    title: "Firstlife",
    description:
      "Tenley \"Ten\" Lockwood has spent the past thirteen months locked inside the Prynne Asylum. The reason? Her refusal to let her parents choose where she'll live after she dies...",
    price: 10.99,
  },
  {
    image: "img/psy-life2.jpg",
    title: "The Philosophy of Life ",
    description:
      "Davison was one of the most important philosophers of the latter half of the twentieth century and with a reception and influence that, of American philosophers, is perhaps ",
    price: 57.40,
  },
  {
    image: "img/psy-life3.jpg",
    title: "The Philosophy of Life",
    description:
      "It's an alphabet book that aims to help us share what we do with the kids in our life, and spark children's interest in coding.",
    price: 4.07,
  },
  {
    image: "img/psy-life4.jpg",
    title: "Philosophy after Friendship",
    description:
      "At the center of Philosophy after Friendship is the persona of the friend, together with the idea of friendship, on which the democratic ideals of consensus, fraternity, and equality are based. Lambert argues that the vitality of this conceptual persona, originated by the Greeks, has been exhausted by centuries of war.",
    price: 27.00,
  },
  ];
  
  const container = document.getElementById("psy-life");
  
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