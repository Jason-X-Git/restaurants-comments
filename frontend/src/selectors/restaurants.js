export default (restaurants, { introduction, sortBy }) => {
    return restaurants.filter((restaurant) => {
        const introductionMatch = restaurant.introduction.toLowerCase().includes(introduction.toLowerCase());

        return introductionMatch;
    }).sort((a, b) => {
        if (sortBy === 'chinese_name') {
            return a.chinese_name < b.chinese_name ? 1 : -1;
        } else if (sortBy === 'english_name') {
            return a.english_name < b.english_name ? 1 : -1;
        }
    });
};