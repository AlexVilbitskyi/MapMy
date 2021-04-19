import { useState, useEffect, useCallback } from "react";

const asyncLocalStorage = {
    setItem: async function (key, value) {
        await Promise.resolve();
        localStorage.setItem(key, value);
    },
    getItem: async function (key) {
        await Promise.resolve();
        return localStorage.getItem(key);
    }
};

const usePoints = () => {
    const [fetchedPoints, setFetchedPoints] = useState([])
      
    useEffect(() => {
      (async () => {
        setFetchedPoints(JSON.parse(await asyncLocalStorage.getItem('points')) || [])
      })()
    }, [])

    const deletePoint = (id) => async () => {
        let helpArr = fetchedPoints.filter(item => item.id !== id)

        await asyncLocalStorage.setItem('points', JSON.stringify(helpArr))
        setFetchedPoints(helpArr || [])
    }

    const togleLikePoint = (index) => async () => {
        const helpArr = [...fetchedPoints]
        helpArr[index].star = !helpArr[index].star

        await asyncLocalStorage.setItem('points', JSON.stringify(helpArr))
        setFetchedPoints(helpArr)
    }

    const addPoint = (coordinates, pointName) => async () => {
        let pointNumbers = []

        // Set the new point number based on greatest of existing point numbers plus 1
        if(fetchedPoints.length > 0) {
            for (let item of fetchedPoints) {
                pointNumbers.push(item.helpNum)
            }
            pointNumbers.sort( (a, b) => b - a )
        }

        const newPoint = {
            id: Date.now(),
            lat: coordinates.lat,
            lng: coordinates.lng,
            helpNum: pointNumbers[0] + 1 || 1,
            name: pointName || 'Point'
        }

        let newArrOfPoints = [...fetchedPoints, newPoint]
        
        await asyncLocalStorage.setItem('points', JSON.stringify(newArrOfPoints))
        setFetchedPoints(newArrOfPoints)
    }
  
    return { fetchedPoints, deletePoint, togleLikePoint, addPoint};
};

export default usePoints