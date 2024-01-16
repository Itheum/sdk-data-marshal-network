export class ErrNetworkConfig extends Error {
  public constructor(message?: string) {
    super(
      message ||
        'Network configuration is not set. Call setNetworkConfig static method before calling any method that requires network configuration.'
    );
  }
}
