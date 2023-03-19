import { FC, useEffect } from "react";
import { Dimensions } from "react-native";
import { Path, Svg } from "react-native-svg";
import { useStateDataProvider } from "../store/stateDataProvider";
import { geoAlbersUsa, geoPath } from "d3";
import { useStateEligibilityProvider } from "../store/stateEligibilityProvider";

const USMap: FC = () => {
    const { width, height } = Dimensions.get("screen");
    const { stateGeoJSON } = useStateDataProvider()
    const { statesCanRun, statesCannotRun } = useStateEligibilityProvider()

    if (!stateGeoJSON) return <></>

    var projection = geoAlbersUsa()
        .translate([205, 150])
        .scale(475);

    var path = geoPath().projection(projection);

    return <Svg width={width} height={height / 3}>
        {stateGeoJSON.features.map((x: any) => {
            return (
                <Path
                    key={x.properties.GEO_ID}
                    d={path(x) || undefined}
                    stroke="#000"
                    strokeWidth="1"
                    fill={
                        statesCanRun.indexOf(x.properties.NAME.replaceAll("_", " ")) > -1
                            ? "rgb(0,255,0)"
                            : statesCannotRun.indexOf(x.properties.NAME.replaceAll("_", " ")) > -1
                                ? "rgb(255,0,0)"
                                : "rgb(192,192,192)"
                    }
                />
            );
        })}
    </Svg>
}

export default USMap