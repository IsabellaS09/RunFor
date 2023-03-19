import { NativeBaseProvider } from "native-base";
import { FC } from "react";
import StateDataProvider from "../store/stateDataProvider";
import StateEligibilityProvider from "../store/stateEligibilityProvider";

interface Props {
    children: React.ReactNode
}

const AppContextProvider: FC<Props> = ({ children }) => {
    return <NativeBaseProvider>
        <StateDataProvider>
            <StateEligibilityProvider>
                {children}
            </StateEligibilityProvider>
        </StateDataProvider>
    </NativeBaseProvider>
}

export default AppContextProvider