// singleton store
const useStore = (() => {
    var storeInstance;
    const createStoreInstance = () => {
        var storeData = "My Initial Data";
        const getStore = () => {
            return storeData;
        }
        const setStore = (data) => {
            storeData = data;
            return storeData;
        }
        return [getStore, setStore]; // subscribe, unsubscribe
    }
    return () => {
        if(!storeInstance) {
            storeInstance = createStoreInstance();
        }
        return storeInstance;
    }
})(); // IIFE

export default useStore;