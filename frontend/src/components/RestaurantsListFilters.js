import React from 'react';
import { connect } from 'react-redux';
import { setIntroductionFilter, sortByChineseName, sortByEnglishName } from '../actions/filters';

export class RestaurantsListFilters extends React.Component {
  
  onIntroductionChange = (e) => {
    this.props.setIntroductionFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'chinese_name') {
      this.props.sortByChineseName();
    } else if (e.target.value === 'english_name') {
      this.props.sortByEnglishName();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search restaurants by its introduction"
              value={this.props.filters.introduction}
              onChange={this.onIntroductionChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="chinese_name">Chinese Name</option>
              <option value="english_name">English Name</option>
            </select>
          </div>
          
        </div>



      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setIntroductionFilter: (text) => dispatch(setIntroductionFilter(text)),
  sortByChineseName: () => dispatch(sortByChineseName()),
  sortByEnglishName: () => dispatch(sortByEnglishName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsListFilters);
