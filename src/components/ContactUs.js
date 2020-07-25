import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              <b>Say Hello or contact me on other platforms:</b> 
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linkedin: <a href="https://www.linkedin.com/in/arsalan-bashir-726a76125/">Arsalan Bashir</a> <br/>
                Gmail: <a href="arsalan.bashir5@gmail.com">arsalan.bashir5@gmail.com</a> <br/>
                Facebook: <a href="https://www.facebook.com/arsalan.bashir.3760">Arsalan Bashir</a> <br/>
                Contact: (92)322-8268163
                
                </h4>
              </div>
            </aside>
          </div>
        </section>
    
        );
  }
}
