import React from 'react';
import request from 'superagent';



class Dog extends React.Component {

  constructor(props) {
   super(props);
    this.handleDogClick = this.handleDogClick.bind(this);
}


  // handleDogClick(i){
  //   alert(this.props.dogs[i]._id);
  //   let self = this;
  //   request
  //      .put('api/events/' + this.props.choosenEvent._id)
  //      .send(this.props.dogs[i])
  //      .end(function(err, res){
  //        alert(res.body);
  //       self.setState({events: res.body});
  //      });
  // }

  handleDogClick(i){
    alert(this.props.dogs[i]._id);
    let self = this;
    request
       .put('api/myevents/' + '5628f32e282cd4f0364f957e')
       .send(this.props.dogs[i])
       .end(function(err, res){
         alert(res.body);
        self.setState({events: res.body});
       });
  }

  render() {

    let self = this;
    let eventList = this.props.dogs.map(function(dog, i){
      return <li key={i} onClick={self.handleDogClick.bind(self, i)}>{dog.name} </li>;
    });
    return (
      <div>
        <div className='row flipInX animated'>
          <div>

            <div className='panel panel-default'>
              <div className='panel-heading'>Add Character</div>
              <div className='panel-body'>

                {eventList}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
Event.propTypes = {
 dogs: React.PropTypes.array,
 choosenEvent: React.PropTypes.object
};
