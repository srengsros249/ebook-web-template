class Footer2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <style>
        
      .col-249{
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        vertical-align: middle;
        font-family: 'Suwannaphum', serif;
    }

    .footer{
        background-color: #032D5F;
        width:100%;
    }

    #footer-bt{
        position: fixed;
        bottom: 0;
        width:100%;
    }
      </style>

      <!--Footer-->
      <div id="footer-bt">
      <footer class="bd-footer py-5 mt-5 footer">
        <div class="container">
            <div class="row ">
              <div class="col col-249" >
                <img src="img/arnLogo.png" width="50px"> <br>
                <p style="position: relative;
                top: 50%;
                transform: translateY(-50%); color: #f5f5f5;">អាសយដ្ឋាន៖ សង្កាត់ ទឹកថ្លា ខណ្ឌ សែនសុខ រាជធានីភ្នំពេញ</p>
              </div>
              <div class="col col-249">
                  <p style="position: relative;
                  top: 50%;
                  transform: translateY(-50%); color: #f5f5f5;">អាន ជាវេបសាយមួយដែលអាចអោយអ្នកទាំងអស់គ្នាស្វែងយល់ពី ព័ត៌មានវិទ្យា ទស្សនៈវិទ្យា ប្រវត្តិសាស្រ្ដជាតិ និងអន្ដរជាតិផងដែរ។</p>
                
              </div>
              <div class="col col-249">
                <p style="position: relative;
                top: 50%;
                transform: translateY(-50%);">
                <p​ style="color: #f5f5f5;">ទំនាក់ទំនងពួកយើង</p​> <br>
            <i class="bi bi-facebook" style="font-size: 18px; color:#f5f5f5"></i>
            <i class="bi bi-instagram" style="font-size: 18px; color:#f5f5f5"></i>
            <i class="bi bi-twitter" style="font-size: 18px; color:#f5f5f5"></i>
            <i class="bi bi-telegram" style="font-size: 18px; color:#f5f5f5"></i>    
            </p>
              </div>
            </div>
          </div>
      </footer>
      </div>
      
      <!--Footer End-->
      `;
    }
  }
  
  customElements.define('footer2-component', Footer2);