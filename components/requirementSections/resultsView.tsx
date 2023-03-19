import { Box, Button, Heading, HStack, ScrollView, Text, VStack } from "native-base"
import { FC } from "react"
import { useStateEligibilityProvider } from "../../store/stateEligibilityProvider"

const ResultsView: FC = () => {
    const { statesCanRun } = useStateEligibilityProvider()

    return <Box width={'100%'} position={'absolute'}>
        <VStack top={'25%'} space={2} p={8} height={'50%'} alignContent={'center'}>
            <Heading size={'4xl'}> Congrats! </Heading>
            <Text textAlign='center' maxWidth={'100%'} pb={6}>You can apply and run for governor in the following states:</Text>
            <VStack space={2}>
                {
                    statesCanRun.map((state) => {
                        return <HStack key={state} justifyContent='space-between' >
                            <Text>{state}</Text>
                            <Button>Apply</Button>
                        </HStack>
                    })
                }
            </VStack>
        </VStack>
    </Box>
}

export default ResultsView