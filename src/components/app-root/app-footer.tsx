import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  // styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppFooter {
  render() {
    return (
      <div>
      <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2017 Company Name

                        - Design: <a href="http://www.tooplate.com/view/2089-meteor" target="_parent">Meteor</a></p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="social-icons">
                        <ul>
                            <li>
                                <a href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-rss"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-dribbble"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

      </div>
    );
  }
}
