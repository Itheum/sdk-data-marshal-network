import { Config, EnvironmentsEnum, networkConfiguration } from './config';

export class DataMarshal {
  readonly chainID: string;
  readonly marshalUrl: string;
  readonly env: string;

  /**
   * Creates a new instance of the `Marshal` class, which can be used to interact with the marshal service
   * @param env 'devnet' | 'mainnet' | 'testnet'
   */
  protected constructor(env: string) {
    this.env = env;
    const config: Config = networkConfiguration[env as EnvironmentsEnum];
    this.chainID = config.chainID;
    this.marshalUrl = config.marshalUrl;
  }
}
