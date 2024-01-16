"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkConfiguration = exports.EnvironmentsEnum = void 0;
var EnvironmentsEnum;
(function (EnvironmentsEnum) {
    EnvironmentsEnum["devnet"] = "devnet";
    EnvironmentsEnum["testnet"] = "testnet";
    EnvironmentsEnum["mainnet"] = "mainnet";
})(EnvironmentsEnum || (exports.EnvironmentsEnum = EnvironmentsEnum = {}));
const devnetNetworkConfig = {
    chainID: 'D',
    marshalUrl: 'https://api.itheumcloud-stg.com/datamarshalapi/router/v1'
};
const mainnetNetworkConfig = {
    chainID: '1',
    marshalUrl: 'https://api.itheumcloud.com/datamarshalapi/router/v1'
};
const testnetNetworkConfig = {
    chainID: 'T',
    marshalUrl: ''
};
exports.networkConfiguration = {
    devnet: devnetNetworkConfig,
    mainnet: mainnetNetworkConfig,
    testnet: testnetNetworkConfig
};
//# sourceMappingURL=config.js.map