import React from 'react';



class AddEvent extends React.Component {

  constructor(props) {
   super(props);

}
  render() {

    return (
      <div>
        <div className='row flipInX animated'>
          <div>

            <div className='panel panel-default'>
              <div className='panel-heading'>Add Event</div>
              <div className='panel-body'>
                <form onSubmit={this.props.handleEventSubmit}>
                   <div className='form-group'>
                     <label className='control-label'>Event Name</label>

                     <input type='text' className='form-control' name='name' value={this.props.newEvent.name}
                                                                             onChange={this.props.onChange}
                                                                             errors={this.props.errors.name} />
                                                                            <div>{this.props.errors.name}</div>
                     <label className='control-label'>Event Place</label>
                     <input type='text' className='form-control' name='location' value={this.props.newEvent.location} onChange={this.props.onChange}/>
                       <label className='control-label'>Event Date</label>
                       <input type='text' className='form-control' name='date' value={this.props.newEvent.date} onChange={this.props.onChange}/>

                   </div>

                   <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEvent;
Event.propTypes = {
 changeNumber: React.PropTypes.any,
 newEvent: React.PropTypes.Any,
 handleEventSubmit: React.PropTypes.Any
};
