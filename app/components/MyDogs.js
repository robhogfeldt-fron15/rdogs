import React from 'react';
import request from 'superagent';
import Card from './Card.js';
import AddDog from './dogs/addDog.js';


class MyDogs extends React.Component {

  constructor(props) {
   super(props);
   this.handleDelete = this.handleDelete.bind(this);
   this.state = {
                 dogs: [],
               };

}


componentDidMount() {
  let self = this;

       request
          .get('api/dogs')
          .end(function(err, res){
           self.setState({dogs: res.body});
          });


}

handleDelete(i) {

  console.log(this.state.dogs[i]._id);
  request
  .del('api/dogs/' + this.state.dogs[i]._id)
  .end(function(err, res){
   console.log(res);
  });
}

  render() {

      let self = this;
      let eventList = this.state.dogs.map(function(dog, i){
      return <li key={i} className="inl" onClick={self.handleDelete.bind(self, i)}> <Card dogs={dog}/></li>;
    });
    return (
      <div className="container">
       <div className="col-sm-8">
          <ul className="dogul">
            {eventList}
          </ul>
       </div>
       <div className="col-sm-4">
         <AddDog newDog={this.state.newDog} />
      </div>
    </div>
    );
  }
}

export default MyDogs;
Event.PropTypes = {
 dogs: React.PropTypes.array,
 choosenEvent: React.PropTypes.object
};
