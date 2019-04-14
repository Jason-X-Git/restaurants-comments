// SET_TEXT_FILTER
export const setIntroductionFilter = (introduction = '') => ({
  type: 'SET_INTRODUCTION_FILTER',
  introduction
});

export const setEnglishNameFilter = (english_name = '') => ({
  type: 'SET_ENGLISH_NAME_FILTER',
  english_name
});

export const sortByChineseName = () => ({
  type: 'SORT_BY_CHINESE_NAME'
});

export const sortByEnglishName = () => ({
  type: 'SORT_BY_ENGLISH_NAME'
});