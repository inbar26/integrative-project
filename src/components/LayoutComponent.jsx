import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
	ArrowLeftOutlined,
	DesktopOutlined,
	UserOutlined,
	FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
const { Header, Content, Sider } = Layout;

const LayoutComponent = ({ children }) => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userEmail = queryParams.get("email");
	const [darkMode, setDarkMode] = useState(false);

	const handleModeClick = () => {
		setDarkMode(!darkMode);
	};

	const siderMenuItems = [
		{
			key: "sub1",
			icon: <DesktopOutlined />,
			label: "Dashboard",
			children: [
				{
					key: "1",
					label: "Overview",
					linkTo: `/lobi?email=${userEmail}`,
				}, // Add linkTo for Overview

				{ key: "3", label: "Incomes", linkTo: `/Incomes?email=${userEmail}` },
				{
					key: "4",
					label: "My Customers",
					linkTo: `/customerlist?email=${userEmail}`,
				}, // Add linkTo for Customers
			],
		},
		{
			key: "sub2",
			icon: <FileOutlined />,
			label: "Documents",
			children: [
				{
					key: "5",
					label: "Tax Invoice",
					linkTo: `/taxinvoice?email=${userEmail}`,
				},
				{
					key: "6",
					label: "Quotation",
					linkTo: `/quotation?email=${userEmail}`,
				},
				{ key: "7", label: "Receipt", linkTo: `/receipt?email=${userEmail}` },
				{
					key: "8",
					label: "Receipt Tax Invoice",
					linkTo: `/receiptTaxInvoice?email=${userEmail}`,
				},
			],
		},
		{
			key: "sub3",
			icon: <SyncAltIcon />,
			label: "Ongoing Management",
			children: [
				{
					key: "9",
					label: "Delivery Note",
					linkTo: `/deliveryNote?email=${userEmail}`,
				},
			],
		},
		{
			key: "sub4",
			icon: <UserOutlined />,
			label: "Profile",
			children: [
				{ key: "12", label: "Account", linkTo: `/account?email=${userEmail}` },
			],
		},
	];

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Header
				style={{
					backgroundColor: darkMode ? "#001529" : "#FFFFFF",
					boxShadow: "8px 5px 10px 5px rgba(0, 0, 0, 0.2)",
					zIndex: 2,
				}}
			>
				<Menu
					theme={darkMode ? "dark" : "light"}
					mode="horizontal"
					defaultSelectedKeys={["1"]}
					style={{ lineHeight: "64px" }}
				>
					<Menu.Item key="1">
						<Link to="/">
							<ArrowLeftOutlined /> Sign Out
						</Link>
					</Menu.Item>

					<IconButton onClick={handleModeClick} style={{ marginLeft: "auto" }}>
						{darkMode ? (
							<LightModeOutlinedIcon style={{ color: "#FFFFFF" }} />
						) : (
							<DarkModeOutlinedIcon color="action" />
						)}
					</IconButton>
				</Menu>
			</Header>
			<Layout>
				<Sider
					width={300}
					style={{
						background: "#fff",

						boxShadow: "10px 15px 15px 10px rgba(0, 0, 0, 0.2)",
						zIndex: 1,
					}}
				>
					<Menu
						theme={darkMode ? "dark" : "light"}
						mode="inline"
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						style={{ height: "100%", borderRight: 0 }}
					>
						{siderMenuItems.map((item) => (
							<Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
								{item.children.map((child) => (
									<Menu.Item key={child.key}>
										{child.linkTo ? (
											<Link to={child.linkTo}>{child.label}</Link>
										) : (
											child.label
										)}
									</Menu.Item>
								))}
							</Menu.SubMenu>
						))}
					</Menu>
				</Sider>
				<Layout style={{ padding: "0 24px 24px" }}>
					<Content
						style={{
							backgroundColor: darkMode ? "#FAFBFB" : "#FAFBFB",
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						{children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default LayoutComponent;
