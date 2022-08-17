import { Box, Center, Text, Stack, Divider, HStack, Image, Flex, Spacer, Tooltip } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import conversation from "../assets/images/icon-conversations-small.png";
import leads from "../assets/images/icon-leads-small.png";

export default function TeamCard({ team }) {
	return (
		<Center py={6}>
			<Box
				maxW={"445px"}
				w={"full"}
				rounded={"md"}
				overflow={"hidden"}
				align={"start"}
				borderWidth={"1px"}
				borderColor={"#E4E7EC"}
				px={5}
			>
				{/* Company Info & Star Icon */}
				<Flex>
					<Stack direction={"row"} spacing={4} pt={5}>
						<Image
							src={team.image}
							alt={team.name}
							width="36px"
							height="36px"
						/>
						<Stack direction={"column"} spacing={0} fontSize={"sm"}>
							<Text>{team.name}</Text>
							<Text>{team.created_at}</Text>
						</Stack>
					</Stack>
					<Spacer />
					<Box pt={5}>
						{team.is_favorited ? <AiFillStar color="#F9CE43" /> : <AiOutlineStar />}
					</Box>
				</Flex>

				<Tooltip label={team.description}>
					<Text noOfLines={2} my={5}>
						{team.description}
					</Text>
				</Tooltip>
				<Divider w={"full"} />

				{/* Bottom logos */}
				<Stack direction={"row"} py={5}>
					<HStack>
						<img src={conversation} alt="campaigns-logo" width="16px" />
						<Text>{team.campaigns_count} Campaigns</Text>
					</HStack>
					<HStack>
						<img src={leads} alt="contacts-logo" />
						<Text>{team.campaigns_count} Leads</Text>
					</HStack>
				</Stack>
			</Box>
		</Center>
	);
}
