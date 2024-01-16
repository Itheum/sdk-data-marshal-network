import { Config, EnvironmentsEnum, networkConfiguration } from './config';
import { ErrNetworkConfig } from './errors';

export class DataMarshal {
  readonly chainID: string;
  readonly marshalUrl: string;
  readonly env: string;

  /**
   * Creates a new instance of the `Marshal` class, which can be used to interact with the marshal service
   * @param env 'devnet' | 'mainnet' | 'testnet'
   */
  constructor(env: string) {
    if (!(env in EnvironmentsEnum)) {
      throw new ErrNetworkConfig(env);
    }
    this.env = env;
    const config: Config = networkConfiguration[env as EnvironmentsEnum];
    this.chainID = config.chainID;
    this.marshalUrl = config.marshalUrl;
  }

  /**
   * Method that encrypts the data stream using the data marshal service
   * @param dataStream  The data stream to be encrypted
   * @param creatorAddress The address of the creator of the data stream
   * @returns The encrypted data stream and the hash of the data stream
   */
  async encryptDataStream(
    dataStream: string,
    creatorAddress: string
  ): Promise<{ messageHash: string; dataStreamEncrypted: string }> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Cache-Control', 'no-cache');

    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        dataNFTStreamUrl: dataStream,
        dataCreatorERDAddress: creatorAddress
      })
    };

    const response = await fetch(
      `${this.marshalUrl}/generate_V2`,
      requestOptions
    );
    const data = await response.json();

    if (data && data.encryptedMessage && data.messageHash) {
      return {
        messageHash: data.messageHash,
        dataStreamEncrypted: data.encryptedMessage
      };
    } else {
      throw new Error('Issue with data marshal generating payload');
    }
  }

  /**
   *  Method that checks the uptime of the data stream using the NFT token identifier and the data marshal service
   * @param tokenIdentifier The token identifier that is used to check the uptime of th data stream
   * @returns The response code 200 or 404
   */
  async checkUpTime(
    tokenIdentifier: string
  ): Promise<{ response_code: number }> {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };

    const response = await fetch(
      `${this.marshalUrl}/uptime?NFTId=${tokenIdentifier}&chainId=E${this.chainID}`,
      requestOptions
    );
    const data = await response.json();

    if (data && data.response_code) {
      return {
        response_code: data.response_code
      };
    } else {
      throw new Error('Issue with data marshal checking uptime');
    }
  }
}
