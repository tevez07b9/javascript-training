import React from "react";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../store/actions";
import { connect } from "react-redux";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters has-text-centered mt-4">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <button
            key={`visibility-filter-${currentFilter}`}
            className="button"
            style={{ margin: "0px 10px" }}
            onClick={
              () => {
                setFilter(currentFilter);
              } /** waiting for setFilter handler*/
            }
          >
            {currentFilter}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
