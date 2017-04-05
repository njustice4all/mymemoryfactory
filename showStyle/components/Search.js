import React from 'react';
import debounce from 'lodash/debounce';

class Search extends React.Component {

  constructor() {
    super();

    this.handleDebounce = debounce(this.handleDebounce, 300);
    this.setQuery = this.setQuery.bind(this);
  }

  setQuery(e) {
    this.handleDebounce(e.target.value);
  }

  handleDebounce(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="search">
            <span>
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="search"
              onKeyUp={this.setQuery}
              className="input-search"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
