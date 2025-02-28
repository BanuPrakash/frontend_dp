export const useStore = (() => {
    let storeInstance;
    let subscriptions = [];
    const createStoreInstance = () => {
        let store = 'My Initial Data';

        const getStore = () => {
            return store;
        }

        const setStore = (newStore) => {
            store = newStore;
            subscriptions.forEach(fn => fn());

            return store;
        }
        const subscribe = (fn) => {
            subscriptions.push(fn);
        }

        const unsubscribe = (fn) => {
            let index = subscriptions.indexOf(fn);
            subscriptions.slice(index, 1);
        }
        return [getStore, setStore, subscribe, unsubscribe];
    }
    return () => {
        if (!storeInstance) {
            storeInstance = createStoreInstance();
        }
        return storeInstance;
    }
}) (); //IIFE