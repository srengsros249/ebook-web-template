const bestSell = [
  {
    image: "img/network1.jpg",
    title: "Networking for Beginner",
    description:
      "It is one of the best Networking books which focuses on the Internet and the important issues of networking. It offers an excellent foundation for readers who want to deep dive into the world of computer science without going in deep into programming or mathematics.",
    price: 12.25,
  },
  {
    image: "img/network2.jpg",
    title: "Nwtworking New Edition",
    description:
      "It is one of the best Networking books which focuses on the Internet and the important issues of networking. It offers an excellent foundation for readers who want to deep dive into the world of computer science without going in deep into programming or mathematics.",
    price: 14.45,
  },
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
    image: "img/psy1.jpg",
    title: "ទស្សនៈវិជ្ជានយោបាយ",
    description:
      "ភាពជឿនលឿនខាងបច្ចេកវិទ្យា និង អត្ថិភាពនយោបាយនិងសេដ្ឋកិច្ច​អាច​នាំមកនូវភាពចម្រូងចម្រាស់​នៅក្នុងសង្គម ដែលមិន​ធ្លាប់មានពីមុនមក។ កត្ដានេះ បណ្ដាលឲ្យមានភាពច្របូកច្របល់, អសន្ដិសុខ និង សេចក្ដីភ័យខ្លាច ចំពោះមនុស្សជាតិ។ ការ​អត់​ឃ្លាន, ការបះបោរ, អំពើភេរវកម្ម និង ការគម្រាម​កំហែងដោយអាវុធនុយក្លេអ៊ែរបានធ្វើឲ្យមាន កង្វល់នៅក្នុងជីវភាពរស់នៅ និង ប្រកបដោយគ្រោះថ្នាក់។ ហេតុអ្វីបានជាបញ្ហានេះកើតឡើង? តើវាមានច្រក​ចេញ​ដែរឬទេ? តើខ្ញុំ, ក្រុមគ្រួសារខ្ញុំ និង សង្គម​របស់​យើងទៅជាយ៉ាងណា? ",
    price: 5,
  },
  {
    image: "img/psy2.jpg",
    title: "ទស្សនៈវិជ្ជាជីវិត",
    description:
      "ទោះបីយ៉ាងណាក៍ដោយពិភពលោករបស់យើង បានផ្ដល់នូវមធ្យោបាយ ដែលអាចស្ថាបនានូវជីវិតមួយ ដែល កាន់តែពេញចិត្តឡើង និងពិភពលោកមួយកាន់តែល្អឡើង។ យើងមានធនធានធម្មជាតិ ហើយនៅពេលដែល យើងយកវាមកប្រើប្រាស់ ដោយឈ្លាស់វៃ វានឹងផ្ដល់នូវជីវភាពសម្បូររុងរឿង និងប្រកបទៅដោយផាសុខភាព។",
    price: 3.50,
  },
  {
    image: "img/programming-c.jpg",
    title: "C Programming",
    description:
      "C is a high-level and general-purpose programming language that is ideal for developing firmware or portable applications. Originally intended for writing system software, C was developed at Bell Labs by Dennis Ritchie for the Unix Operating System in the early 1970s",
    price: 25.12,
  },
  {
    image: "img/programming-R.jpg",
    title: "R Programming",
    description:
      "The R programming language is an open source scripting language for predictive analytics and data visualization. ... The R programming language includes functions that support linear modeling, non-linear modeling, classical statistics, classifications, clustering and more.",
    price: 17.45,
  },
  ];

  const bestSellCard = document.getElementById("best-sell");

  bestSell.forEach((result, idx) => {
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
    bestSellCard.innerHTML += content;
  });