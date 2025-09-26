export const Category = (() => {
    const categories = ["projects"]
    const addcategory = (category) => {
        categories.push(category)
        return categories
    }
    return { addcategory , categories }
})();