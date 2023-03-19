import { Button, HStack, ScrollView, Switch, Text, View, VStack } from "native-base";
import { FC } from "react";
import { governorDataRequirements, REQUIREMENT_TYPE } from "../../governorReqData";
import { useStateEligibilityProvider } from "../../store/stateEligibilityProvider";

const stateResidenceRequirement = (stateName: string): string => {
    const state = governorDataRequirements.filter(x => { return x.stateName === stateName })
    if (state[0] && state[0].requirementShortList.indexOf(REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH) > -1 && state[0].requirements && state[0].requirements[REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]) {
        const req = state[0].requirements[REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]
        return `${req.quantity} ${req.metric || 'years'} ${req.qualifier || ''}`
    } else {
        return 'Any amount of time'
    }
};

const StateResidenceLengthSelector: FC = () => {

    const { stateResidenceLength, updateStateResLen, statesNeedRes, setStep, setUserCitizenshipLength } = useStateEligibilityProvider()

    return <>
        <Text fontSize={"lg"} pb={2}>
            Have you lived in the following states for over the
            specified time?
        </Text>
        <ScrollView>
            {statesNeedRes.map((x: string) => {
                return (
                    <View key={x}>
                        <HStack py={1} px={2} justifyContent={'space-between'}>
                            <VStack>
                                <Text>
                                    {x}
                                </Text>
                                <Text color='coolGray.400'>
                                    {stateResidenceRequirement(x)}
                                </Text>
                            </VStack>
                            <Switch
                                isChecked={stateResidenceLength[x]}
                                onToggle={() => { updateStateResLen(x) }}
                            />
                        </HStack>
                    </View>
                );
            })}
        </ScrollView>
        <HStack justifyContent={'space-between'} mt={4}>
            <Button size='lg' onPress={() => { setUserCitizenshipLength(0); setStep(1) }}>Previous</Button>
            <Button size='lg' onPress={() => { setStep(3) }}>Apply</Button>
        </HStack>
    </>
}

export default StateResidenceLengthSelector