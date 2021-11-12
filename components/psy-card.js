const apiResult = [
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
    image: "img/psy3.jpg",
    title: "មនុស្សមានពិស",
    description:
      "ដ្បិត អាសិរពិស មានពិសកាចសាហាវយ៉ាងណា មនុស្សមានពិសក៏បង្កប់នូវពិសពុលយ៉ាងនោះដែរ។ សៀវភៅនេះដើម្បីឲ្យយើងដឹងពីល្បិចកលរបស់មនុស្សពិសពុល ដើម្បីអាចការពារខ្លួនបាន",
    price: 4.00,
  },
  {
    image: "img/psy4.jpg",
    title: "និទានទស្សនៈ",
    description:
      "ង​រឿង​ព្រេង​និទាន រាស្រ្ត​ខ្មែរ​ភាគ​ច្រើន តែង​ចង់​បាន ត្រឹម​យុត្តិធម៌​សម​រម្យ​មួយ​ ដែល​មានតម្លៃ​អាច​ទទួល​យក​បាន ដោយ​ស្ងប់​ចិត្ត។ ប្រទេស​ជាតិ មាន​សុខ​ក្សេម​ក្សាន្ត ​ដរាប​ណា អ្នកដឹក​នាំ​កំពូល ​ឲ្យ​តម្លៃ​ដល់​យុត្តិធម៌​សមហេតុផល។ យុត្តិធម៌ ដែលជាឬសកែវនៃការរក្សាប្រជាជាតិប្រកបដោយវិវឌ្ឍនចីរកាលអង្វែងទៅ។",
    price: 6,
  },
  {
    image: "img/psy5.jpg",
    title: "The Stoic Agent",
    description:
      "Some of the comments were clearly off the mark (even made by people who publicly admitted not having read either Becker or my essay, basing their “criticism” on the figure accompanying my post). For instance, a number of comments kept arguing that serial killers and tyrants would be virtuous Stoics according to the updated conception of virtue — despite the fact that I had very clearly said in the opening essay that that was not going to be the case, and tried to explain why.",
    price: 11.99,
  },
  {
    image: "img/psy6.jpg",
    title: "The State and Revolution",
    description:
      "The State and Revolution is a book by Vladimir Lenin describing the role of the state in society, the necessity of proletarian revolution, and the theoretic inadequacies of social democracy in achieving revolution to establish the dictatorship of the proletariat. ",
    price: 11.97,
  },
  {
    image: "img/psy7.jpg",
    title: "The Economics of Karl Marx",
    description:
      "Marxian economics is a school of economic thought based on the work of 19th-century economist and philosopher Karl Marx. Marxian economics, or Marxist economics, focuses on the role of labor in the development of an economy and is critical of the classical approach to wages and productivity developed by Adam Smith.",
    price: 20,
  },
  {
    image: "img/psy8.jpg",
    title: "Economic Political Economy",
    description:
      "Political economy is a social science that studies production, trade, and their relationship with the law and the government. ... In simple terms, political economy refers to the advice given by economists to the government on either general economic policies or on certain specific proposals created by politicians.",
    price: 40.13,
  },
  ];
  
  const container = document.getElementById("psy");
  
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