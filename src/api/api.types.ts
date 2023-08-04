interface IReq<P = null, D = null> {
	params?: P;
	data?: D;
	notify?: boolean;
}

export { IReq };
