"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMarshal = void 0;
const config_1 = require("./config");
const errors_1 = require("./errors");
class DataMarshal {
    /**
     * Creates a new instance of the `Marshal` class, which can be used to interact with the marshal service
     * @param env 'devnet' | 'mainnet' | 'testnet'
     */
    constructor(env) {
        if (!(env in config_1.EnvironmentsEnum)) {
            throw new errors_1.ErrNetworkConfig(`Invalid environment: ${env}, Expected: 'devnet' | 'mainnet' | 'testnet'`);
        }
        this.env = env;
        const config = config_1.networkConfiguration[env];
        this.chainID = config.chainID;
        this.marshalUrl = config.marshalUrl;
    }
    /**
     * Method that encrypts the data stream using the data marshal service
     * @param dataStream  The data stream to be encrypted
     * @param creatorAddress The address of the creator of the data stream
     * @returns The encrypted data stream and the hash of the data stream
     */
    async encryptDataStream(dataStream, creatorAddress) {
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
        const response = await fetch(`${this.marshalUrl}/generate_V2`, requestOptions);
        const data = await response.json();
        if (data && data.encryptedMessage && data.messageHash) {
            return {
                messageHash: data.messageHash,
                dataStreamEncrypted: data.encryptedMessage
            };
        }
        else {
            throw new Error('Issue with data marshal generating payload');
        }
    }
    /**
     *  Method that checks the uptime of the data stream using the NFT token identifier and the data marshal service
     * @param tokenIdentifier The token identifier that is used to check the uptime of th data stream
     * @returns The response code 200 or 404
     */
    async checkUpTime(tokenIdentifier) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        };
        const response = await fetch(`${this.marshalUrl}/uptime?NFTId=${tokenIdentifier}&chainId=E${this.chainID}`, requestOptions);
        const data = await response.json();
        if (data && data.response_code) {
            return {
                response_code: data.response_code
            };
        }
        else {
            throw new Error('Issue with data marshal checking uptime');
        }
    }
}
exports.DataMarshal = DataMarshal;
//# sourceMappingURL=data-marshal.js.map