export declare class DataMarshal {
    readonly chainID: string;
    readonly marshalUrl: string;
    readonly env: string;
    /**
     * Creates a new instance of the `Marshal` class, which can be used to interact with the marshal service
     * @param env 'devnet' | 'mainnet' | 'testnet'
     */
    constructor(env: string);
    /**
     * Method that encrypts the data stream using the data marshal service
     * @param dataStream  The data stream to be encrypted
     * @param creatorAddress The address of the creator of the data stream
     * @returns The encrypted data stream and the hash of the data stream
     */
    encryptDataStream(dataStream: string, creatorAddress: string): Promise<{
        messageHash: string;
        dataStreamEncrypted: string;
    }>;
    /**
     *  Method that checks the uptime of the data stream using the NFT token identifier and the data marshal service
     * @param tokenIdentifier The token identifier that is used to check the uptime of th data stream
     * @returns The response code 200 or 404
     */
    checkUpTime(tokenIdentifier: string): Promise<{
        response_code: number;
    }>;
}
