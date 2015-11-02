import React from 'react';
import request from 'superagent';
import ResCard from './ResultInp';





class MyEvents extends React.Component {

  constructor(props) {
   super(props);

   this.handleEventClick = this.handleEventClick.bind(this);
   this.state = {
                 events: [],
                 dogs: [],
                 choosenEvent: {},
                 dogsInChoosenEvent: []
               };

}



componentWillMount() {

  let self = this;
    request
       .get('api/myevents')
       .end(function(err, res){
        self.setState({
          events: res.body,

        });
       });

}

handleEventClick(x){

// this.getDogs(x);
this.setState({
  choosenEvent: this.state.events[x],
  dogs: this.state.events[x].dogs
});

}
handleClick(){
console.log(this.state);
     request
        .put('api/myevents' + this.state.choosenEvent._id)
        .send(this.state.newDog)
        .end(function(err, res){
          alert(res.body);
         self.setState({events: res.body});
        });

 }

  render() {

      let self = this;
      let eventList = this.state.events.map(function(event, x){
      return <li key={x} onClick={self.handleEventClick.bind(self, x)}>{event.date}{event.name}</li>;
    });

    let dogsInEvent = this.state.dogs.map(function(dog, i){

    return <li key={i}>

              <ResCard dog={dog}
                       result={dog.results}
                       choosenEvent={self.state.choosenEvent}/>

            </li>;
  });
    return (
       <div className="container">
         <div className="col-md-4">
           <div>
             <div className='panel panel-default'>
               <div className='panel-heading'>Events</div>
               <div className='panel-body'>
                  {eventList}

               </div>
             </div>
           </div>

         </div>
         <div className="col-md-8">
           <div>
             <div className='panel panel-default'>
               <div className='panel-heading'>{this.state.choosenEvent.name}</div>
               <div className='panel-body'>
                 <ul className='dogsInEventUl'>
                    {dogsInEvent}
                  </ul>


               </div>
             </div>
           </div>

         </div>
       </div>
    );
  }
}

export default MyEvents;
Event.PropTypes = {
 dogs: React.PropTypes.array,
 choosenEvent: React.PropTypes.object
};

// handleDelete(i) {
//
//   console.log(this.state.dogs[i]._id);
//   request
//   .del('api/dogs/' + this.state.dogs[i]._id)
//   .end(function(err, res){
//    console.log(res);
//   });
// }
