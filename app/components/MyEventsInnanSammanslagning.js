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
       .get('api/events')
       .end(function(err, res){
        self.setState({events: res.body});
       });
       request
          .get('api/dogs')
          .end(function(err, res){
           self.setState({dogs: res.body});
         });


}





getDogs(x){
let myEvent = this.state.events[x];
let results = [];


      for (let i = 0; i < myEvent.dogs.length; i++) {
        for (let j = 0; j < this.state.dogs.length; j++) {
            if ( myEvent.dogs[i] === this.state.dogs[j]._id) {

              results.push(this.state.dogs[j]);
            }
        }
    }
    this.setState({
      choosenEvent: this.state.events[x],
      dogsInChoosenEvent: results
    });
    console.log(myEvent.name);
    console.log(results);

}


handleEventClick(x){

this.getDogs(x);

}


  render() {

      let self = this;
      let eventList = this.state.events.map(function(event, x){
      return <li key={x} onClick={self.handleEventClick.bind(self, x)}>{event.date}{event.name}</li>;
    });

    let dogsInEvent = this.state.dogsInChoosenEvent.map(function(dog, i){
    return <li key={i}>

              <ResCard dog={dog}/>

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
