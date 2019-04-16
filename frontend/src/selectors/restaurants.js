export default (restaurants, { english_name, introduction, sortBy }) => {
    return restaurants.filter((restaurant) => {
        const englishNameParsed = restaurant.english_name ? restaurant.english_name.toLowerCase():''
        const introductionParsed = restaurant.introduction ? restaurant.introduction.toLowerCase():''
        const englishNameMatch = englishNameParsed.includes(english_name.toLowerCase());
        const introductionMatch = introductionParsed.includes(introduction.toLowerCase());

        return englishNameMatch && introductionMatch;
    }).sort((a, b) => {
        if (sortBy === 'chinese_name') {
            return a.chinese_name < b.chinese_name ? -1 : 1;
        } else if (sortBy === 'english_name') {
            return a.english_name < b.english_name ? -1 : 1;
        }
    });
};