import React from 'react';

class Header extends React.Component {



  render(){

    return (
      <div>
      <div className="col-md-12">
                        <a href="#">
                        <div className="logo text-center">
                            <h1>reactive dogs</h1>
                            <span>Handle your dogs with ReactJs</span>
                        </div>
                        </a>
                    </div>

      <div className="mainbody-section text-center col-md-12">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">

                            <div className="menu-item blue">
                                <a href="/#" data-toggle="modal">
                                    <i className="fa fa-magic"></i>
                                    <p>Home</p>
                                </a>
                            </div>



                        </div>

                        <div className="col-md-3">
                                    <div className="menu-item color">
                                        <a href="/#/myevents" data-toggle="modal">
                                            <i className="fa fa-area-chart"></i>
                                            <p>Events</p>
                                        </a>
                                    </div>


                        </div>

                        <div className="col-md-3">

                            <div className="menu-item light-orange">
                                <a href="/#/mydogs" data-toggle="modal">
                                    <i className="fa fa-users"></i>
                                    <p>Team</p>
                                </a>
                            </div>



                        </div>

                        <div className="col-md-3">

                            <div className="menu-item light-red">
                                <a href="/#/setup" data-toggle="modal">
                                    <i className="fa fa-envelope-o"></i>
                                    <p>Set Up</p>
                                </a>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
          </div>
    );

  }
}
export default Header;
