class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="container">
        <img src="../assets/images/javascript.png" alt="">
        <nav>
                <ul>
                <li><a href="./home.html">Home</a></li>
                <li><a href="./articles.html">Articles</a></li>
                <li><a href="./code-examples.html">Code Examples</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
        `
    }
}
class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer>
        <div class="privacy">
            <a href="./privacy.html">Privacy Policy</a>
        </div>
        <div class="footer-container">
            <p>&copy; 2024 Modern JavaScript Hub. All rights reserved.</p>
        </div>
    </footer>
        `
    }
}
customElements.define('special-header',SpecialHeader)
customElements.define('special-footer', SpecialFooter)