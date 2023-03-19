import { Box, Heading, Progress } from "native-base";
import { FC, useEffect } from "react";
import { useStateEligibilityProvider } from "../store/stateEligibilityProvider";
import AgeSelector from "./requirementSections/ageSelector";
import CitizenshipLengthSelector from "./requirementSections/citizenshipLengthSelector";
import ResultsView from "./requirementSections/resultsView";
import StateResidenceLengthSelector from "./requirementSections/stateResidenceLengthSelector";
import USMap from "./usMap";

const Main: FC = () => {

    const { step } = useStateEligibilityProvider()

    return step !== 3 ?
        <Box>
            <Heading size={"xl"} textAlign="center" flexGrow={0}>
                Where can you run for governor?
            </Heading>
            <Progress mt={4} mx={'auto'} width={'50%'} value={step / 3 * 100} />
            <USMap />
            <Box padding={4} flexGrow={1} height={'45%'}>
                {step === 0 &&
                    <AgeSelector />
                }
                {step === 1 &&
                    <CitizenshipLengthSelector />
                }
                {step === 2 &&
                    <StateResidenceLengthSelector />
                }
            </Box>

        </Box>
        :
        <ResultsView />


}

export default Main