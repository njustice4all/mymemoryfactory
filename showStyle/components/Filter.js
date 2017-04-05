import React from 'react';
import assign from 'lodash/assign';
import Checkbox from 'material-ui/Checkbox';

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {filter: []};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, isCheck, filter) {
    if (isCheck) {
      let newState = assign([], this.state.filter);
      if (newState.indexOf(filter) !== -1) {
        return;
      }
      newState.push(filter);
      this.setState({filter: newState});
    } else if (!isCheck) {
      let newState = assign([], this.state.filter);
      newState.splice(newState.indexOf(filter), 1);
      this.setState({filter: newState});
    }
  }

  render() {
    const labelStyle = {marginBottom: 0, fontSize: '12px'};
    const iconStyle = {marginRight: '3px'};

    return (
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <div className="tag">
            <Checkbox
              label="Test1"
              labelStyle={labelStyle}
              iconStyle={iconStyle}
              onCheck={(e, isCheck) => this.handleChange(e, isCheck, 'Test1')}
            />
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="tag">
            <Checkbox
              label="Test2"
              labelStyle={labelStyle}
              iconStyle={iconStyle}
              onCheck={(e, isCheck) => this.handleChange(e, isCheck, 'Test2')}
            />
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="tag">
            <Checkbox
              label="Test3"
              labelStyle={labelStyle}
              iconStyle={iconStyle}
              onCheck={(e, isCheck) => this.handleChange(e, isCheck, 'Test3')}
            />
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="tag">
            <Checkbox
              label="Test4"
              labelStyle={labelStyle}
              iconStyle={iconStyle}
              onCheck={(e, isCheck) => this.handleChange(e, isCheck, 'Test4')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
