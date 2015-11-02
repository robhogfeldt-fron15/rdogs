import React from 'react';
import FlipCard from 'react-flipcard';

class Card extends React.Component{

  constructor(props){
   super(props);

  }
  getInitialState() {
    return {
      isFlipped: false
    };
  }

  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }



  render() {
    return (


        <FlipCard>

          <div>

            <img src={this.props.dogs.image}/>
            <h3 className='transTitle'>{this.props.dogs.name}</h3>
          </div>

          <div>
            <h3>Merits</h3>
              <p>{this.props.dogs.merits}</p>
              <button>Delete</button>
          </div>
        </FlipCard>


    );
  }
}

module.exports = Card;
Card.propTypes = {
handleDelete: React.PropTypes.func,
 dogs: React.PropTypes.object
};
