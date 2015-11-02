import React from 'react';

class Header extends React.Component {



  render(){

    return (
      <div className="container">
          <nav className='navbar navbar-default'>

              <ul className='nav navbar-nav'>
                <li><a href='/#'>Home</a></li>
                <li><a href='/#/mydogs'>MyDogs</a></li>
                <li><a href='/#/myevents'>MyEvents</a></li>
                <li><a href='/#/setup'>Prepare Event</a></li>
              </ul>

          </nav>
      </div>
    );

  }
}
export default Header;
