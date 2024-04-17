import CONTEST_DATA from '../model/ContestModel';
const iupc_data: CONTEST_DATA[] = [

    {
        universityFullName: 'Ahsanullah University of Science and Technology',
        universityShortName: 'AUST',
        data: [
            {
                contestTitle: 'SUST CSE Carnival 2024 IUPC',
                contestDate: '2024-02-18',
                standingLink: 'https://toph.co/c/inter-university-sust-cse-carnival-2024/standings',
                totalParticipatingTeam: 120,

                universityTeams: [

                    {
                        rank: 16,
                        totalSolved: 5,
                        penalty: 469,
                        teamName: 'AUST_RedX',
                        teamMembers: ['NIRJOY DEBNATH', 'SOHOM MUNASIB SAHAUN', 'GOLAM IBNA HAMZA']
                    },
                    {
                        rank: 101,
                        teamName: 'AUST_Shunno7',
                        totalSolved: 2,
                        penalty: 102,
                        teamMembers: ['APU DAS', 'FATIN ISHRAQ', 'MOHAMMED ABDULLAH-AL SAJID']
                    },

                ]
            },
            {
                contestTitle: 'CUET IUPC CodeStorm 1.0',
                contestDate: '2024-01-26',
                standingLink: 'https://toph.co/c/inter-university-sust-cse-carnival-2024/standings',
                totalParticipatingTeam: 100,

                universityTeams: [
                    {
                        rank: 38,
                        teamName: 'AUST_Shunno7',
                        totalSolved: 3,
                        penalty: 276,
                        teamMembers: ['APU DAS', 'FATIN ISHRAQ', 'MOHAMMED ABDULLAH-AL SAJID']
                    },

                    {
                        rank: 13,
                        totalSolved: 5,
                        penalty: 784,
                        teamName: 'AUST_RedX',
                        teamMembers: ['NIRJOY DEBNATH', 'SOHOM MUNASIB SAHAUN', 'GOLAM IBNA HAMZA']
                    },
                    

                ]
            }
        ]
    }

]

export default iupc_data;