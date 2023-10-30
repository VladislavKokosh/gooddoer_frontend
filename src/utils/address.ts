const cutAddress = (address: string) => {
	return `${address?.slice(0, 6)}...${address?.slice(-6)}`;
};

export { cutAddress };
