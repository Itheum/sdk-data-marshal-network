export class ErrNetworkConfig extends Error {
  public constructor(env: string) {
    super(
      `Invalid environment: ${env}, Expected: 'devnet' | 'mainnet' | 'testnet'`
    );
  }
}
