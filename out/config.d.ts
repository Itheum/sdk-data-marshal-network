export declare enum EnvironmentsEnum {
    devnet = "devnet",
    testnet = "testnet",
    mainnet = "mainnet"
}
export interface Config {
    chainID: string;
    marshalUrl: string;
}
export declare const networkConfiguration: {
    [key in EnvironmentsEnum]: Config;
};
