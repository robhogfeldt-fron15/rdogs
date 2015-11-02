import React, {PropTypes} from 'react';
import request from 'superagent';



class ChoosenEvent extends React.Component {

  constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

  componentWillMount(){
   this.props.choosenEvent.dogs = [];
  }

  handleClick() {
         let x = this.props.choosenEvent;
         console.log(x.date);
         request
         .del('api/events/' + x._id)
         .end(function(err, res){
          console.log(res);
         });
     }
  render() {

      let merits = this.props.choosenEvent.dogs.map(function(item, i) {
      return <li key={i}>{item}</li>;
    });

   console.log(this.props.choosenEvent.dogs);
    return (

        <div className='col-md-12'>
          <div>
            <div className='panel panel-default'>
              <div className='panel-heading'>Choosen Event</div>
              <div className='panel-body'>

                <h1 onClick={this.handleClick}>{this.props.choosenEvent.name}</h1>
                {merits}
                <button onClick={this.handleClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
ChoosenEvent.propTypes =  {
  choosenEvent: PropTypes.object,
  deleteEvent: PropTypes.func,

};
export default ChoosenEvent;
