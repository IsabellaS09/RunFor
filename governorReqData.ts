export enum REQUIREMENT_TYPE {
    AGE = "age",
    US_CITIZENSHIP_LENGTH = "USCitizenshipLength",
    STATE_RESIDENCE_LENGTH = "StateResidenceLength",
    NO_OTHER_JOBS = "NoOtherOffices",
    VOTER = "Voter",
    ELECTOR = "Elector",
    NO_CRIME = "Crime",
};



export const governorDataRequirements: { stateName: string, short_code: string, requirementShortList: REQUIREMENT_TYPE[], requirements?: { [key in REQUIREMENT_TYPE]?: { quantity?: number, metric?: string, qualifier?: string, required_by?: string } } }[] = [
    {
        stateName: "Alabama",
        short_code: "AL",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 10,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal or State while governor",
            },
        },
    },
    {
        stateName: "Alaska",
        short_code: "AL",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
            REQUIREMENT_TYPE.VOTER,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 7,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal or State while governor",
            },
        },
    },
    {
        stateName: "Arizona",
        short_code: "AZ",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.VOTER,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 25 },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 10,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "years",
                qualifier: "by election date",
            },
        },
    },
    {
        short_code: "AR",
        stateName: "Arkansas",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal State civil military comm",
            },
        },
    },
    {
        stateName: "California",
        short_code: "CA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.VOTER,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 18 },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "years",
                qualifier: "by election date",
            },
        },
    },
    {
        stateName: "Colorado",
        short_code: "CO",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
            REQUIREMENT_TYPE.NO_CRIME,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Legislative or Judicial",
            },
            [REQUIREMENT_TYPE.NO_CRIME]: {
                qualifier: "No conviction of embezzelment, etc. ", //need to update
            },
        },
    },
    {
        stateName: "Connecticut",
        short_code: "CT",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.VOTER,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                required_by: REQUIREMENT_TYPE.VOTER,
            },
        },
    },
    {
        stateName: "Delaware",
        short_code: "DE",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 12,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 6,
                metric: "years",
                qualifier: "by election date",
            },
        },
    },
    {
        stateName: "Florida",
        short_code: "FL",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.VOTER,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                required_by: REQUIREMENT_TYPE.VOTER,
            },
            [REQUIREMENT_TYPE.VOTER]: {
                quantity: 7,
            },
        },
    },
    {
        stateName: "Georgia",
        short_code: "GA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
                metric: "years",
                qualifier: "by the date you would assume office",
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 15,
                metric: "years",
                qualifier: "by election date",
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 6,
            },
        },
    },
    {
        stateName: "Hawaii",
        short_code: "AL",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "consecutive years",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Nothing paid",
            },
        },
    },
    {
        stateName: "Idaho",
        short_code: "ID",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 30 },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
                metric: "years",
                qualifier: "prior to election",
            },
        },
    },
    {
        stateName: "Illinois",
        short_code: "IL",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: { quantity: 25 },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 3,
            },
        },
    },
    {
        stateName: "Indiana",
        short_code: "IN",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
                metric: "years",
                qualifier: "when sworn in",
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "consecutive years",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal or State Offices",
            },
        },
    },
    {
        stateName: "Iowa",
        short_code: "IA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
                metric: "years",
                qualifier: "by election",
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
                metric: "years",
                qualifier: "before election",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal or State Offices",
            },
        },
    },
    {
        stateName: "Kansas",
        short_code: "KS",
        requirementShortList: [],
    },
    {
        stateName: "Kentucky",
        short_code: "KY",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 6,
                metric: "years",
                qualifier: "before election",
            },
        },
    },
    {
        stateName: "Louisiana",
        short_code: "LA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.ELECTOR,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 25,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "preceding years",
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 5,
                metric: "preceding years",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Public Offices",
            },
        },
    },
    {
        stateName: "Maine",
        short_code: "ME",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
            //extra requirements about state residence time
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 15,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "public offices",
            },
        },
    },
    {
        stateName: "Maryland",
        short_code: "MD",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.VOTER,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "preceding years",
            },
            [REQUIREMENT_TYPE.VOTER]: {
                quantity: 5,
                metric: "preceding years",
            },
        },
    },
    {
        stateName: "Massachusetts",
        short_code: "MA",
        requirementShortList: [
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.ELECTOR,
        ],
        requirements: {
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
                metric: "years",
                qualifier: "before taking office",
            },
        },
    },
    {
        stateName: "Michigan",
        short_code: "MI",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.VOTER,
            REQUIREMENT_TYPE.NO_CRIME,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 30,
                metric: "days",
                qualifier: "by election",
            },
            [REQUIREMENT_TYPE.VOTER]: {
                quantity: 4,
                metric: "preceding years",
                qualifier: "by election",
            },
            [REQUIREMENT_TYPE.NO_CRIME]: {
                qualifier: "Not currently serving sentence",
            },
        },
    },
    {
        stateName: "Minnesota",
        short_code: "MN",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 25,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 1,
                metric: "year",
                qualifier: "before election",
            },
        },
    },
    {
        stateName: "Mississippi",
        short_code: "MS",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 20,
            },
        },
    },
    {
        stateName: "Missouri",
        short_code: "MO",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 10,
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 15,
            },
        },
    },
    {
        stateName: "Montana",
        short_code: "MT",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 25,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
                qualifier: "by election",
            },
        },
    },
    {
        stateName: "Nebraska",
        short_code: "NE",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "state office",
            },
        },
    },
    {
        stateName: "Nevada",
        short_code: "NV",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
            REQUIREMENT_TYPE.ELECTOR,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 25,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal Offices",
            },
        },
    },
    {
        stateName: "New Hampshire",
        short_code: "NH",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
                qualifier: "on election day",
            },
        },
    },
    {
        stateName: "New Jersey",
        short_code: "NJ",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 20,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "federal state or legislative",
            },
        },
    },
    {
        stateName: "New Mexico",
        short_code: "NM",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                metric: "continuous preceding years",
                qualifier: "on election day",
            },
        },
    },
    {
        stateName: "New York",
        short_code: "NY",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                qualifier: "on election day",
            },
        },
    },
    {
        stateName: "North Carolina",
        short_code: "NC",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
            },
            [REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH]: {
                quantity: 5,
                qualifier: "on election",
            },
        },
    },
    {
        stateName: "North Dakota",
        short_code: "ND",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.VOTER,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
            },
        },
    },
    {
        stateName: "Ohio",
        short_code: "OH",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Congressional Federal State offices",
            },
        },
    },
    {
        stateName: "Oklahoma",
        short_code: "OK",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 31,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 10,
            },
        },
    },
    {
        stateName: "Oregon",
        short_code: "OR",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 3,
            },
        },
    },
    {
        stateName: "Pennsylvania",
        short_code: "PA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Congressional Federal Current State Offices",
            },
        },
    },
    {
        stateName: "Rhode Island",
        short_code: "RI",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_CRIME,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 18,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 30,
                metric: "days",
            },
            [REQUIREMENT_TYPE.NO_CRIME]: {
                qualifier:
                    "Serving sentence, on probation for, on parole for any felony... ", //need to update
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "State federal offices",
            },
        },
    },
    {
        stateName: "South Carolina",
        short_code: "SC",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "offices except those in militia",
            },
        },
    },
    {
        stateName: "South Dakota",
        short_code: "SD",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 21,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 2,
                qualifier: "by election",
            },
        },
    },
    {
        stateName: "Tennessee",
        short_code: "TN",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 7,
                qualifier: "by election",
            },
        },
    },
    {
        stateName: "Texas",
        short_code: "TX",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                qualifier: "preceding years",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "check constiution", //needs more info
            },
        },
    },
    {
        stateName: "Utah",
        short_code: "UT",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
            REQUIREMENT_TYPE.ELECTOR,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                qualifier: "by election",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal/State/Senate Offices",
            },
        },
    },
    {
        stateName: "Vermont",
        short_code: "VT",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.NO_OTHER_JOBS,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 18,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 4,
                qualifier: "by election",
            },
            [REQUIREMENT_TYPE.NO_OTHER_JOBS]: {
                qualifier: "Federal/Current State/ etc. offices", //look at
            },
        },
    },
    {
        stateName: "Virginia",
        short_code: "VA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.ELECTOR,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
            },
            [REQUIREMENT_TYPE.ELECTOR]: {
                quantity: 1,
                qualifier: "by election",
            },
        },
    },
    {
        stateName: "Washington",
        short_code: "WA",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.ELECTOR,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 18,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 30,
                metric: "days",
            },
        },
    },
    {
        stateName: "West Virginia",
        short_code: "WV",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.ELECTOR,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                qualifier: "by election",
            },
        },
    },
    {
        stateName: "Wisconsin",
        short_code: "WI",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
            REQUIREMENT_TYPE.VOTER,
            REQUIREMENT_TYPE.NO_CRIME,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 18,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 28,
                metric: "days",
                qualifier: "by election",
            },
            [REQUIREMENT_TYPE.NO_CRIME]: {
                qualifier: "Felony/Misdemeanor involving violation of public trust",
            },
        },
    },
    {
        stateName: "Wyoming",
        short_code: "WY",
        requirementShortList: [
            REQUIREMENT_TYPE.AGE,
            REQUIREMENT_TYPE.US_CITIZENSHIP_LENGTH,
            REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH,
        ],
        requirements: {
            [REQUIREMENT_TYPE.AGE]: {
                quantity: 30,
            },
            [REQUIREMENT_TYPE.STATE_RESIDENCE_LENGTH]: {
                quantity: 5,
                qualifier: "preceding years",
            },
        },
    },
];
