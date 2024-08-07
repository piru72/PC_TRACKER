import { Box, ButtonGroup, Divider, Heading, ModalFooter, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { formatDate } from '../../../common/utils/helpers';
import { MODAL_TABLE_HEADS, NATIONAL_PROFILE_OF_CONTESTANT } from '../constants/modalTable.constant';


interface ModalContentExtendedProps {

    contestantName: string;
    contestantData: any;
}

const ModalContentExtended: React.FC<ModalContentExtendedProps> = ({ contestantName, contestantData }) => {



    //console.log("From the modal", contestantData);


    return (
        <>
            <Box padding={5} >
                <Heading as='h1' size='xl' noOfLines={1} mb={4}>
                    {NATIONAL_PROFILE_OF_CONTESTANT}
                    <Text as={'span'} color={'blue.400'}>
                        {' ' + contestantName}
                    </Text>
                </Heading>
                <Divider />
                <TableContainer>
                    <Table size='lg' variant='simple'>
                        <TableCaption></TableCaption>
                        <Thead>
                            <Tr>
                                {MODAL_TABLE_HEADS.map((head, index) => (
                                    <Th key={index} textAlign='center'>{head}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                Array.from(contestantData).map((contest: any, index) => {

                                    let contestTitle = contest.contestTitle;
                                    let words = contestTitle.split(' ');
                                    let firstLine = '';
                                    let secondLine = '';
                                    let half = Math.ceil(words.length / 2);

                                    for (let i = 0; i < words.length; i++) {
                                        if (i < Math.max(half, 5)) {
                                            firstLine += words[i] + ' ';
                                        } else {
                                            secondLine += words[i] + ' ';
                                        }
                                    }


                                    let universityTeams = contest.universityTeams;
                                    let teamName = '';
                                    let rank = 0;




                                    universityTeams.forEach((team: any) => {
                                        let teamMembers = team.teamMembers;
                                        teamMembers.forEach((member: string) => {
                                            if (member.toLocaleLowerCase() === contestantName.toLocaleLowerCase()) {
                                                teamName = team.teamName;
                                                rank = team.rank;
                                            }
                                        });
                                    });

                                    return (
                                        <Tr key={index}>
                                            <Td textAlign='center'>
                                                <>
                                                    {firstLine.trim()}
                                                    <br />
                                                    {secondLine.trim()}
                                                </>
                                            </Td>
                                            <Td textAlign='center'>{formatDate(contest.contestDate)}</Td>
                                            <Td textAlign='center'>{rank}</Td>
                                            <Td textAlign='center'>
                                                {teamName}
                                            </Td>
                                        </Tr>
                                    );
                                })
                            }

                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <ModalFooter>
                <ButtonGroup>

                </ButtonGroup>
            </ModalFooter>
        </>

    );
};

export default ModalContentExtended;