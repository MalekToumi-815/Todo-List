export const Category = (() => {
    const categories = ["projects"];

    const addCategory = (category) => {
        categories.push(category);
        return categories;
    };

    const deleteCategory = (category) => {
        const index = categories.indexOf(category);
        if (index !== -1) {
            categories.splice(index, 1); 
        }
        return categories;
    };

    return { addCategory, deleteCategory, categories };
})();
