import React from 'react';
import request from 'superagent';


class ResultInp extends React.Component{

  constructor(props) {
   super(props);
   this.handleClick = this. handleClick.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.state = {
                 track: this.props.result.track,
                 obedience: this.props.result.obedience,
                 protection: this.props.result.protection
               };
             }





 handleChange(name, e){
  let change = {};
  change[name] = e.target.value;
  this.setState(change);

 }

handleClick(){

let self = this;
     request
        .put('api/myevents/' + this.props.choosenEvent._id)
        .send({
        result: this.state,
        dogId: this.props.dog._id
        })
        .end(function(err, res){
          console.log(self);
          console.log(res.body.results.track);
          // self.setState({
          //   track: res.body.results.track,
          //   obedience: res.body.results.obedience,
          //   protection: res.body.results.protection
          // });
        });

    }



  render() {
    return (


      <div className='col-md-6'>
        <div>
      <h3>{this.props.dog.name}</h3>

          <input
            className='form-control'
            type='text'
            placeholder='Spår'
            name='track'
            value={this.state.track}

            onChange={this.handleChange.bind(this, 'track')} />

          <input
            className='form-control'
            type='text'
            placeholder='Lydnad'
            value={this.state.obedience}
            name='obedience'
            onChange={this.handleChange.bind(this, 'obedience')} />

          <input
            className='form-control'
            type='text'
            placeholder='Skydd'
            value={this.state.protection}
            name='protection'
            onChange={this.handleChange.bind(this, 'protection')} />

          <button className='btn btn-primary' onClick={this.handleClick}>Submit</button>


      </div>

      </div>


    );
  }
}

module.exports = ResultInp;
ResultInp.propTypes = {
choosenEvent: React.PropTypes.ObjectId,
handleDelete: React.PropTypes.func,
 dog: React.PropTypes.object,
result: React.PropTypes.String
};
