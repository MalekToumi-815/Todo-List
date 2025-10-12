export const Category = (() => {
    const stored = localStorage.getItem("categories");
    const categories  = stored ? JSON.parse(stored) : [];

    const addCategory = (category) => {
        categories.push(category);
        localStorage.setItem("categories", JSON.stringify(categories));
        return categories;
    };

    const deleteCategory = (category) => {
        const index = categories.indexOf(category);
        if (index !== -1) {
            categories.splice(index, 1); 
            localStorage.setItem("categories", JSON.stringify(categories));
        }
        return categories;
    };

    return { addCategory, deleteCategory, categories };
})();
