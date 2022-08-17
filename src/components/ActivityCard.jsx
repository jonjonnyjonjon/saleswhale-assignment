import { Avatar, Stack, Text } from "@chakra-ui/react";

const ActivityCard = ({text}) => {
	return (
		<Stack mt={6} direction={"row"} spacing={4}>
			<Avatar
				src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
				alt={"Author"}
			/>
			<Stack direction={"column"} spacing={0} fontSize={"sm"} >
				<Text fontWeight={600} align={"left"}>{text}</Text>
				<Text color={"gray.500"} align={"left"}w>2 hours ago</Text>
			</Stack>
		</Stack>
	);
};

export default ActivityCard;
