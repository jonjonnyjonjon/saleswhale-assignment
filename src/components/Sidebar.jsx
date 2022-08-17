import React from "react";
import {
	IconButton,
	Avatar,
	Box,
	CloseButton,
	Flex,
	HStack,
	VStack,
	useColorModeValue,
	Link,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Spacer,
	Divider,
	Center,
	Heading,
	Button,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

import logo from "../assets/images/logo.png";
import campaigns from "../assets/images/campaigns.png";
import teams from "../assets/images/teams.png";
import contacts from "../assets/images/contacts.png";
import reports from "../assets/images/reports.png";
import help from "../assets/images/help.png";
import notif from "../assets/images/menu-notification.png";
import companies from "../assets/images/icon-companies.png";

const LinkItems = [
	{ name: "Campaigns", icon: campaigns },
	{ name: "Teams", icon: teams },
	{ name: "Contacts", icon: contacts },
	{ name: "Reports", icon: reports },
];

export default function SidebarWithHeader({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<HStack bg={"white"} ml={{ base: 0, md: 20 }} p={10}>
				<img src={companies} alt="companies-icon" />
				<Heading size={"xl"}>Teams</Heading>
				<Spacer />
				<Button leftIcon={<AiOutlinePlus />} bg="#42D2BF" variant="solid" color="white">
					CREATE NEW TEAM
				</Button>
			</HStack>
			<Box ml={{ base: 0, md: 20 }}>
				{children}
			</Box>
		</Box>
	);
}

const SidebarContent = ({ onClose, ...rest }) => {
	return (
		<Box
			transition="3s ease"
			bg={"#042236"}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex>
				<img src={logo} alt="company-logo" />
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} icon={link.icon} name={link.name}>
					{link.name}
				</NavItem>
			))}
			<Flex sx={{ position: "absolute", bottom: 0 }}>
				<img src={help} alt="company-logo" />
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
		</Box>
	);
};

const NavItem = ({ icon, name, children, ...rest }) => {
	return (
		<Link
			href="#"
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
		>
			<Flex
				cursor="pointer"
				_hover={{
					bg: "#2A95DA",
					color: "white",
				}}
				{...rest}
			>
				<img src={icon} alt={name} />
			</Flex>
		</Link>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	return (
		<Flex
			ml={{ base: 0, md: 20 }}
			pr={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			{...rest}
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
			/>

			<Text
				display={{ base: "flex", md: "none" }}
				fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
			>
				NARWHAL
			</Text>

			<Flex ml={10} align={"center"}>
				<Text mr={10}>NARWHAL</Text>
				<Center height="50px">
					<Divider orientation="vertical" />
				</Center>
				<Text ml={10}>Teams</Text>
			</Flex>
			<Spacer />

			<HStack spacing={{ base: "0", md: "6" }} pr={"10"}>
				<img src={notif} alt="notif-icon" />
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: "none" }}
						>
							<HStack>
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									}
								/>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">Hello, Samantha</Text>
								</VStack>
								<Box display={{ base: "none", md: "flex" }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue("white", "gray.900")}
							borderColor={useColorModeValue("gray.200", "gray.700")}
						>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Billing</MenuItem>
							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};
