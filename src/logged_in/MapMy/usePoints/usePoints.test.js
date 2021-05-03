import { renderHook, act } from "@testing-library/react-hooks";

import usePoints from "./usePoints";

const TEST_VALUE = [{
    helpNum: 1,
    id: 123,
    lat: 1,
    lng: 2,
    name: 'qwerty',
    star: false
}]

describe("usePoints", () => {
    beforeEach(() => {
        
    })
    it("addPoint", () => {
        const { result } = renderHook(() => usePoints() );
        act(() => {
            result.current.addPoint({ lat: 1, lng: 2 }, 'qwerty', 123)()
        })
        expect(result.current.fetchedPoints).toEqual(TEST_VALUE)
    })

    it("addPoint then deletePoint", () => {
        const { result } = renderHook(() => usePoints() );
        act(() => {
            result.current.addPoint({ lat: 1, lng: 2 }, 'qwerty', 123)()
        })
        act(() => { 
            result.current.deletePoint(123)() 
        })
        expect(result.current.fetchedPoints).toEqual([])
    })

    it("addPoint then toggleLikePoint", () => {
        const { result } = renderHook(() => usePoints() );
        act(() => {
            result.current.addPoint({ lat: 1, lng: 2 }, 'qwerty', 123)()
        })
        act(() => { 
            result.current.togleLikePoint(0)() 
        })
        expect(result.current.fetchedPoints[0].star).toEqual(true)
    })
});