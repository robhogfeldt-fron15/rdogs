import React from 'react';



class Event extends React.Component {



  constructor(props) {
   super(props);
        this.state = {

          choosenEvent: ''
        };


    }




 handleEventClick(i){

   this.props.changeNumber(this.props.events[i]);

//  this.setState({choosenEvent: this.state.events[i]
 }

  render() {
    let self = this;
    let eventList = this.props.events.map(function(event, i){
      return <li key={i} onClick={self.handleEventClick.bind(self, i)}>{event.name} </li>;
    });
    return (
      <div>
        <div className='row flipInX animated'>
          <div>

            <div className='panel panel-default'>
              <div className='panel-heading'>All Events</div>
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

export default Event;
Event.propTypes = {
 changeNumber: React.PropTypes.any,
 events: React.PropTypes.array
};
