import { Redirect } from "expo-router";
import React from "react";

// Makes the first screen the resources page
const Index = () => {
	return <Redirect href="/homepage" />;
};
export default Index;
