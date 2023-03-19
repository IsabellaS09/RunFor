import { Button, HStack, Input, Text, VStack } from "native-base";
import { FC, useEffect, useState } from "react";
import { useStateEligibilityProvider } from "../../store/stateEligibilityProvider";

const AgeSelector: FC = () => {
    const { setUserAge, setStep } = useStateEligibilityProvider()
    const [age, setAge] = useState<string>()

    const handleAgeChange = (text: string) => {
        setAge(text.replace(/[^0-9]/g, ""));
    };

    return <VStack justifyContent={"center"} space={2} pb={2}>
        <Text fontSize={"lg"}>How old are you?</Text>
        <Input
            value={age}
            mx="3"
            onChangeText={handleAgeChange}
            placeholder="Age"
        />
        <HStack justifyContent={'flex-end'}>
            <Button size='lg' isDisabled={!age} onPress={() => { setUserAge(parseInt(age!)); setStep(1) }}>Next</Button>
        </HStack>
    </VStack>
}

export default AgeSelector