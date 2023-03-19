import { Button, HStack, Input, Switch, Text, VStack } from "native-base";
import { FC, useEffect, useState } from "react";
import { useStateEligibilityProvider } from "../../store/stateEligibilityProvider";

const CitizenshipLengthSelector: FC = () => {
    const { userAge, setUserCitizenshipLength, setStep } = useStateEligibilityProvider()
    const [citizenshipLength, setCitizenshipLength] = useState<string>();
    const [citizenshipSameAge, setCitizenshipSameAge] = useState<boolean>();

    const handleChange = (text: string) => {
        setCitizenshipLength(text);
    };

    return <VStack space={2}>
        <Text fontSize={"lg"}>How long have you been a US Citizen?</Text>
        <Input
            value={citizenshipLength}
            mx="3"
            onChangeText={handleChange}
            placeholder="Age"
            isDisabled={citizenshipSameAge}
        />
        <HStack alignSelf={'flex-end'} space={2} alignItems={'center'}>
            <Text> Same as Age</Text>
            <Switch
                value={citizenshipSameAge}
                onToggle={(isSelected) => {
                    setCitizenshipSameAge(isSelected);
                    setCitizenshipLength(userAge?.toString());
                }}
            />
        </HStack>
        <HStack justifyContent={'space-between'}>
            <Button size='lg' onPress={() => { setCitizenshipSameAge(false); setCitizenshipLength(undefined); setStep(0) }}>Previous</Button>
            <Button size='lg' isDisabled={!citizenshipLength} onPress={() => { setUserCitizenshipLength(parseInt(citizenshipLength!)); setStep(2) }}>Next</Button>
        </HStack>
    </VStack >
}

export default CitizenshipLengthSelector