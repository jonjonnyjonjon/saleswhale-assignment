import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Flex,
	Spacer,
	Grid,
	Divider,
	Stack,
	Text,
	InputGroup,
	InputLeftElement,
	Input,
} from "@chakra-ui/react";
import * as React from "react";
import { fetchAllTeams } from "../api/fetchAllTeams";
import ActivityCard from "../components/ActivityCard";
import TeamCard from "../components/TeamCard";
import { BsSearch } from "react-icons/bs";

const Teams = () => {
	const [allTeams, setAllTeams] = React.useState([]);
	const activityText = [
		"Emily added new leads to LinkedIn.",
		"Anthony archived the team  Uber.",
		"Julie archived the team Grab.",
		"Anthony added new leads to Workday - AU.",
	];

	React.useEffect(() => {
		(async () => {
			const allTeams = await fetchAllTeams();
			setAllTeams(allTeams);
		})();
	}, []);

	return (
		<Tabs>
			<Flex bg={"white"} px={10}>
				<TabList>
					<Tab fontWeight={"bold"}>All</Tab>
					<Tab fontWeight={"bold"}>Favorites</Tab>
					<Tab fontWeight={"bold"}>Archived</Tab>
				</TabList>

				<Spacer />

				<Box>
					<InputGroup size="md">
						<InputLeftElement
							pointerEvents="none"
							children={<BsSearch color="gray.300" />}
						/>
						<Input
							variant="unstyled"
							type="text"
							placeholder="Search team name ..."
							pt={2}
						/>
					</InputGroup>
				</Box>
			</Flex>

			<TabPanels>
				{/* All Teams */}
				<TabPanel p={10}>
					<Stack direction={"row"} spacing={10}>
						<Box bg={"white"} p={5} boxShadow="base" borderRadius={"sm"}>
							<Flex>
								<Box p="4" fontWeight={"bold"}>
									All Teams
								</Box>
								<Spacer />
								<Box p="4" color={"#7F7F7F"}>
									Showing {allTeams.length} out of {allTeams.length}
								</Box>
							</Flex>
							<Divider />
							<Grid templateColumns="repeat(3, 1fr)" gap={6}>
								{allTeams.map((team) => (
									<TeamCard team={team} />
								))}
							</Grid>
						</Box>
						<Box bg={"white"} p={5} w={500} h={"fit-content"}>
							<Text align={"left"}>Activity</Text>
							<Divider />
							{activityText.map((status) => (
								<ActivityCard text={status} />
							))}
						</Box>
					</Stack>
				</TabPanel>

				{/* Favorited */}
				<TabPanel p={10}>
					<Stack direction={"row"} spacing={10}>
						<Box bg={"white"} p={5} boxShadow="base" borderRadius={"sm"}>
							<Flex>
								<Box p="4" fontWeight={"bold"}>
									All Teams
								</Box>
								<Spacer />
								<Box p="4" color={"#7F7F7F"}>
									Showing {allTeams.filter((team) => team.is_favorited).length}{" "}
									out of {allTeams.filter((team) => team.is_favorited).length}
								</Box>
							</Flex>
							<Divider />
							<Grid templateColumns="repeat(3, 1fr)" gap={6}>
								{allTeams
									.filter((team) => team.is_favorited)
									.map((team) => (
										<TeamCard team={team} />
									))}
							</Grid>
						</Box>
						<Box bg={"white"} p={5} w={500} h={"fit-content"}>
							<Text align={"left"}>Activity</Text>
							<Divider />
							{activityText.map((status) => (
								<ActivityCard text={status} />
							))}
						</Box>
					</Stack>
				</TabPanel>

				{/* Archived */}
				<TabPanel p={10}>
					<Stack direction={"row"} spacing={10}>
						<Box bg={"white"} p={5} boxShadow="base" borderRadius={"sm"}>
							<Flex>
								<Box p="4" fontWeight={"bold"}>
									All Teams
								</Box>
								<Spacer />
								<Box p="4" color={"#7F7F7F"}>
									Showing {allTeams.filter((team) => team.is_archived).length}{" "}
									out of {allTeams.filter((team) => team.is_archived).length}
								</Box>
							</Flex>
							<Divider />
							<Grid templateColumns="repeat(3, 1fr)" gap={6}>
								{allTeams
									.filter((team) => team.is_archived)
									.map((team) => (
										<TeamCard team={team} />
									))}
							</Grid>
						</Box>
						<Box bg={"white"} p={5} w={500} h={"fit-content"}>
							<Text align={"left"}>Activity</Text>
							<Divider />
							{activityText.map((status) => (
								<ActivityCard text={status} />
							))}
						</Box>
					</Stack>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default Teams;
