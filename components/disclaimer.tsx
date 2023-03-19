import { Box, Text } from "native-base"
import { FC } from "react"

const Disclaimer: FC = () => {
    return <Box width={'100%'} position={'absolute'} backgroundColor='coolGray.500' padding={2} pb={6} bottom={0}>
        <Text textAlign={'center'} color={'white'}>No guarantees that you will actually be eligble. Verify by reading desired state's application</Text>
    </Box>
}

export default Disclaimer
