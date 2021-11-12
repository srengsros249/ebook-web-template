class aboutus extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
      .comming a{
        background-color: #032D5F;
        padding: 6px 8px;
        height: 46px;
        line-height: 1.6;
        text-decoration: none;
        color: #f5f5f5;
        font-family:'Suwannaphum', serif;
        }

        .comming{
            margin-top:25px;
            margin-bottom:25px;
            border-bottom: 8px solid #032D5F; 
            margin-left: 5%;
            margin-right: 5%;
        }
      </style>
        <div class="comming comming-a bottom-line">
            <a href="#">អំពីយើង</a>
        </div>
      `;
    }
  }
  
  customElements.define('aboutus-label', aboutus);