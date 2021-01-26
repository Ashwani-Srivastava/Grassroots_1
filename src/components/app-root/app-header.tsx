import { State, Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  // styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppHeader {
  @State() obj: any = {
        name:"",
        vision:"",
    };
    async componentWillLoad(){
        const response = await fetch("/assets/lit-the-light.json");
        this.obj = await response.json();
    }
  render() {
    return (
      <div>
      <div class="header">
      <div class="container">
          <nav class="navbar navbar-inverse" role="navigation">
              <div class="navbar-header">
                  <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a href="#" class="navbar-brand scroll-top">
                      <div class="logo">
                      <img src={this.obj.logo.url} alt="Image" class="img-fluid tm-strategy-img"/>
                      </div>
                      <span class="text-uppercase tm-logo-text">{this.obj.name}</span>
                  </a>
              </div>

              <div id="main-nav" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav">
                      <li><a href="#" class="scroll-top">Home</a></li>
                      <li><a href="#" class="scroll-link" data-id="about">About Us</a></li>
                      <li><a href="#" class="scroll-link" data-id="portfolio">Mission</a></li>
                      <li><a href="#" class="scroll-link" data-id="blog">Blog</a></li>
                      <li><a href="#" class="scroll-link" data-id="contact">Contact</a></li>
                  </ul>
              </div>

          </nav>

      </div>

  </div>

      </div>
    );
  }
}
