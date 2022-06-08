import { Provider } from "../entity/Provider"

export default interface ProviderController {
    getProviders(): Promise<Provider[]>;
}