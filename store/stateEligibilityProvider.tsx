import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'
import { governorDataRequirements, REQUIREMENT_TYPE } from '../governorReqData'
import { useStateDataProvider } from './stateDataProvider'

type StateEligibilityContext = {
    statesCanRun: string[]
    statesCannotRun: string[]
    userAge?: number
    setUserAge: Dispatch<SetStateAction<number | undefined>>
    userCitizenshipLength?: number
    setUserCitizenshipLength: Dispatch<SetStateAction<number | undefined>>
    updateStateResLen: (state: string) => void
    statesNeedRes: string[]
    stateResidenceLength: any
    step: number,
    setStep: Dispatch<SetStateAction<number>>
}

const StateEligibilityContext = createContext<StateEligibilityContext>({
    statesCanRun: ["Kansas"],
    statesCannotRun: [],
    setUserAge: () => { },
    setUserCitizenshipLength: () => { },
    updateStateResLen: () => { },
    statesNeedRes: [],
    stateResidenceLength: {},
    step: 0,
    setStep: () => { }
})



export default function StateEligibilityProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
    const { stateNames } = useStateDataProvider()
    const [statesCanRun, setStatesCanRun] = useState(["Kansas"]);
    const [statesCanMaybeRun, setStatesCanMaybeRun] = useState<string[]>(stateNames);
    const [statesCannotRun, setStatesCannotRun] = useState<string[]>([]);
    const [statesCannotRunByAge, setStatesCannotRunByAge] = useState<string[]>([]);
    const [statesCannotRunByCitizenship, setStatesCannotRunByCitizenship] =
        useState<string[]>([]);
    const [userAge, setUserAge] = useState<number>()
    const [userCitizenshipLength, setUserCitizenshipLength] = useState<number>();
    const [statesNeedRes, setStatesNeedRes] = useState<string[]>(stateNames);
    const [stateResidenceLength, setStateResidenceLength] = useState<any>({});
    const [step, setStep] = useState<number>(0)

    useEffect(() => {
        if (!userAge) return;
        const invalidStates = governorDataRequirements.filter(state => {
            return state.requirementShortList && state.requirementShortList.indexOf(REQUIREMENT_TYPE.AGE) > -1 && state.requirements && state.requirements[REQUIREMENT_TYPE.AGE]?.quantity && state.requirements[REQUIREMENT_TYPE.AGE]?.quantity > userAge
        }).map(x => x.stateName)
        setStatesCannotRunByAge(invalidStates);
    }, [userAge]);

    useEffect(() => {
        if (!userCitizenshipLength) return
        let invalidStates = governorDataRequirements.filter(state => {
            return state.requirementShortList && state.requirementShortList.indexOf(REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH) > -1 && state.requirements && state.requirements[REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]?.quantity && state.requirements[REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]?.quantity > userCitizenshipLength
        }).map(x => x.stateName)
        setStatesCannotRunByCitizenship(invalidStates);
    }, [userCitizenshipLength]);

    useEffect(() => {
        const impossibleStates = [
            ...new Set([...statesCannotRunByAge, ...statesCannotRunByCitizenship]),
        ];
        setStatesCannotRun(impossibleStates);
        let diff = statesCanMaybeRun.filter((x) => impossibleStates.indexOf(x) < 0);
        const newState = diff.filter((x) => statesCanRun.indexOf(x) < 0);
        newState.sort((a, b) => { return a.localeCompare(b) })
        setStatesCanMaybeRun(newState);
        diff = stateNames.filter((x: string) => impossibleStates.indexOf(x) < 0 && x !== 'Kansas')
        diff.sort((a, b) => { return a.localeCompare(b) })
        setStatesNeedRes(diff)
    }, [statesCannotRunByAge, statesCannotRunByCitizenship]);

    const updateStateResLen = (state: string) => {
        const stateResLen = stateResidenceLength
        const ind = Object.keys(stateResLen).indexOf(state);
        if (ind > -1) {
            if (stateResLen[state]) {
                statesCanRun.splice(statesCanRun.indexOf(state), 1)
                setStatesCanRun(statesCanRun);
                statesCannotRun.push(state)
                setStatesCannotRun(statesCannotRun)
            } else {
                statesCanRun.push(state)
                setStatesCanRun(statesCanRun);
                if (statesCannotRun.indexOf(state) > -1) {
                    statesCannotRun.splice(
                        statesCannotRun.indexOf(state),
                        1
                    )
                    setStatesCannotRun(statesCannotRun);
                }
            }
            stateResLen[state] = !stateResLen[state];
        } else {
            stateResLen[state] = true;
            statesCanRun.push(state)
            setStatesCanRun(statesCanRun);
        }
        setStateResidenceLength({ ...stateResLen });
    }

    const StateEligibilityValue = useMemo(
        () => ({
            step,
            setStep,
            statesCanRun,
            statesCannotRun,
            userAge,
            setUserAge,
            setUserCitizenshipLength,
            updateStateResLen,
            stateResidenceLength,
            statesNeedRes
        }),
        [step, statesCanRun, statesCannotRun, userAge, stateResidenceLength, statesNeedRes]
    )

    return (
        <StateEligibilityContext.Provider value={StateEligibilityValue}>{children}</StateEligibilityContext.Provider>
    )
}

export const useStateEligibilityProvider = (): StateEligibilityContext => useContext(StateEligibilityContext)
