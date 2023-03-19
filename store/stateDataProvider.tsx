import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'
import { FeatureCollection, Feature } from 'GeoJSON'
import USGeoJSONString from '../data';

type StateDataContext = {
    stateGeoJSON?: FeatureCollection
    stateNames: string[]
}

const StateDataContext = createContext<StateDataContext>({
    stateNames: []
})

export default function StateDataProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
    const [stateGeoJSON, setStateGeoJSON] = useState<FeatureCollection>(JSON.parse(USGeoJSONString));
    const [stateNames, setStateNames] = useState(stateGeoJSON.features.map((state: Feature) => {
        return state.properties?.NAME.replaceAll('_', ' ');
    }));

    const StateDataValue = useMemo(
        () => ({
            stateNames,
            stateGeoJSON,
        }),
        [stateNames, stateGeoJSON]
    )

    return (
        <StateDataContext.Provider value={StateDataValue}>{children}</StateDataContext.Provider>
    )
}

export const useStateDataProvider = (): StateDataContext => useContext(StateDataContext)
