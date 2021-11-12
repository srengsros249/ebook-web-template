class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      .navbar-custom{
        background-color: #032D5F;
        color: #fff;
        font-family: 'Suwannaphum', serif;
    }

    .nav-link, .nav-link:hover, .nav-link:focus{
        color: #f5f5f5;
        
    }

    .login:hover, .login:focus, .login{
        color: #f5f5f5;
    }
      </style>
      <nav class="navbar navbar-dark navbar-expand-lg navbar-custom">
        <div class="container-fluid"  style="color: #f5f5f5;">
            <a class="navbar-brand" href="index.html">
                <img src="img/arnLogo.png" alt="" width="50" height="50">
              </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  style="color: #f5f5f5;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">ទំព័រដើម</a>
              </li>
              <!-- IT Nav -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ព័ត៌មានវិទ្យា
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="networking.html">តបណ្ដាញ</a></li>
                  <li><a class="dropdown-item" href="programming.html">អភិវឌ្ឍន៍កម្មវិធី</a></li>
                </ul>
              </li>
              <!-- IT Nav End -->
              <!-- PSY Nav -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ទស្សនៈវិជ្ជា
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="philosophyOfLife.html">ទស្សនៈវិជ្ជាជីវិត</a></li>
                  <li><a class="dropdown-item" href="politicalPhilosophy.html">ទស្សនៈវិជ្ជាសកល</a></li>
                </ul>
              </li>
              <!-- PSY Nav End -->
              <!-- History Nav -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ប្រវត្តិសាស្ត្រ
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="khmerHistory.html">ប្រវត្តិសាស្ត្រកម្ពុជា</a></li>
                  <li><a class="dropdown-item" href="worldHistory.html">ប្រវត្តិសាស្ត្រសកល</a></li>
                </ul>
              </li>
              <!-- History Nav End -->
              <li class="nav-item">
                <a class="nav-link" href="contact.html">ទំនាក់ទំនង</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="aboutUs.html">អំពីយើង</a>
              </li>
            </ul>
            <li class="nav-link" style="right: 25px">
                <a href="login.html"><button type="button" class="btn btn-light">ចូល</button></a>
                <span​ style="color: #f5f5f5;"> ឬ </span​>
                <a href="register.html"><button type="button" class="btn btn-light">ចុះឈ្មោះ</button></a>
              </li>
          </div>
        </div>
      </nav>
      `;
    }
  }
  
  customElements.define('header-component', Header);