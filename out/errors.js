"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrNetworkConfig = void 0;
class ErrNetworkConfig extends Error {
    constructor(message) {
        super(message ||
            'Network configuration is not set. Call setNetworkConfig static method before calling any method that requires network configuration.');
    }
}
exports.ErrNetworkConfig = ErrNetworkConfig;
//# sourceMappingURL=errors.js.map