// Filters Reducer

const filtersReducerDefaultState = {
  introduction: '',
  sortBy: 'chinese_name'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_INTRODUCTION_FILTER':
      return {
        ...state,
        introduction: action.introduction
      };
    case 'SORT_BY_CHINESE_NAME':
      return {
        ...state,
        sortBy: 'chinese_name'
      };
    case 'SORT_BY_ENGLISH_NAME':
      return {
        ...state,
        sortBy: 'english_name'
      };
    default:
      return state;
  }
};
