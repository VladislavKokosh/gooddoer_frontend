import { TStore } from "../store";

const getProviderState = ({ provider }: TStore) => provider;
const getSelectedAddress = ({ provider }: TStore) => provider.selectedAddress;

export { getProviderState, getSelectedAddress };
