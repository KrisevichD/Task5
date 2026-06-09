export const loadDataFromStorage = (storage) => {
    try {
        const data = localStorage.getItem(storage);
        if (data === null) return undefined;
        return JSON.parse(data);
    } catch (error) {
        console.error('Unable to load data from storage', error);
        return undefined;
    }
}