import { DataMarshal } from '../src/data-marshal';

describe('Test marshal', () => {
  test('#test encrypted data', async () => {
    const dataMarshal = new DataMarshal('devnet');

    const dataStream: string = 'https://google.com';
    const creatorAddress =
      'erd1an4xpn58j7ymd58m2jznr32t0vmas75egrdfa8mta6fzvqn9tkxq4jvghn';

    const { messageHash, dataStreamEncrypted } =
      await dataMarshal.encryptDataStream(dataStream, creatorAddress);

    expect(typeof messageHash).toBe('string');
    expect(typeof dataStreamEncrypted).toBe('string');
  });

  test('#test check uptime', async () => {
    const dataMarshal = new DataMarshal('devnet');
    const tokenIdentifier = 'DATANFTFT-e0b917-1b';

    const response = await dataMarshal.checkUpTime(tokenIdentifier);

    expect(typeof response.response_code).toBe('number');
  }, 20000);

  test('#test check uptime 2', async () => {
    const dataMarshal = new DataMarshal('devnet');
    const tokenIdentifier = 'DATANFTFT-e0b917-1b';

    const response = await dataMarshal.checkUpTime(tokenIdentifier);

    expect(typeof response.response_code).toBe('number');
  }, 20000);

  test('#test check uptime 3', async () => {
    const dataMarshal = new DataMarshal('mainnet');
    const tokenIdentifier = 'DATANFTFT-e936d4-01';

    const response = await dataMarshal.checkUpTime(tokenIdentifier);

    expect(typeof response.response_code).toBe('number');
  }, 20000);

  test('#test preaccess devnet', async () => {
    const dataMarshal = new DataMarshal('devnet');

    const response = await dataMarshal.preaccess();
    expect(typeof response.nonce).toBe('string');
  }, 20000);

  test('#test preaccess mainnet', async () => {
    const dataMarshal = new DataMarshal('mainnet');

    const response = await dataMarshal.preaccess();
    expect(typeof response.nonce).toBe('string');
  }, 20000);
});
