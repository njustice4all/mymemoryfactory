import React from 'react';

class SubTitle extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card-subtitle card-wrapper">
            <h3>{this.props.subTitle}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SubTitle;
