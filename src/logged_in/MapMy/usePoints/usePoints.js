import { useState, useEffect, useCallback } from "react";

const asyncLocalStorage = {
    setItem: async function (key, value) {
        await Promise.resolve();
        window.localStorage.setItem(key, value);
    },
    getItem: async function (key) {
        await Promise.resolve();
        return window.localStorage.getItem(key);
    }
};

const usePoints = () => {
    const [fetchedPoints, setFetchedPoints] = useState([])

    const fetchPoints = useCallback(() => {
        (async () => {
            setFetchedPoints(JSON.parse(await asyncLocalStorage.getItem('points')) || [])
        })()
    }, [setFetchedPoints])

    const deletePoint = useCallback((id) => async () => {
        let helpArr = fetchedPoints.filter(item => item.id !== id)

        setFetchedPoints(helpArr || [])
    }, [fetchedPoints])

    const togleLikePoint = useCallback((index) => async () => {
        const helpArr = [...fetchedPoints]
        helpArr[index].star = !helpArr[index].star

        setFetchedPoints(helpArr)
    }, [fetchedPoints])

    const addPoint = useCallback((coordinates, pointName, id) => async () => {
        const newPoint = {
            id: id,
            lat: coordinates.lat,
            lng: coordinates.lng,
            helpNum:  fetchedPoints.length > 0 ? Math.max(...fetchedPoints.map(point => point.helpNum)) + 1 : 1,
            name: pointName || 'Point',
            star: false
        }
        
        setFetchedPoints([...fetchedPoints, newPoint])
    }, [fetchedPoints])

    useEffect(fetchPoints, [fetchPoints])

    useEffect(() => {
        asyncLocalStorage.setItem('points', JSON.stringify(fetchedPoints))
    }, [fetchedPoints]);
  
    return { fetchedPoints, deletePoint, togleLikePoint, addPoint };
};

export default usePoints