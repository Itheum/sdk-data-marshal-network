export enum EnvironmentsEnum {
  devnet = 'devnet',
  testnet = 'testnet',
  mainnet = 'mainnet'
}

export interface Config {
  chainID: string;
  marshalUrl: string;
}

const devnetNetworkConfig: Config = {
  chainID: 'D',
  marshalUrl: 'https://api.itheumcloud-stg.com/datamarshalapi/router/v1'
};

const mainnetNetworkConfig: Config = {
  chainID: '1',
  marshalUrl: 'https://api.itheumcloud.com/datamarshalapi/router/v1'
};

const testnetNetworkConfig: Config = {
  chainID: 'T',
  marshalUrl: ''
};

export const networkConfiguration: { [key in EnvironmentsEnum]: Config } = {
  devnet: devnetNetworkConfig,
  mainnet: mainnetNetworkConfig,
  testnet: testnetNetworkConfig
};
