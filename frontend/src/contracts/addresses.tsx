type ABI = 'erc20' | 'mockTokenA' | 'ercWrapper' | 'mockTokenB' | 'mockTokenC' | 'mockTokenD';

export interface TokenInfo {
  name: string;
  address: string;
  abi: ABI;
}

export interface Addresses {
  [chainID: number]: TokenInfo[];
}

// Change to uniswap list of addresses?
export const tokensList: Addresses = {
  4: [//Rinkeby
    { name: 'ercW', address: '0x5582E24970e186B28c51F6D0c1F2Bd8a4B281962', abi: 'ercWrapper' },
    { name: 'MockA', address: '0x220b45711340265481ACfF4302b5F0e17011503f', abi: 'mockTokenA' }
  ],
  42: [//Kovan
    { name: 'ercW', address: '0xac92c3eCEF51276f8F9154e94A55103D2341dE0A', abi: 'ercWrapper' },
    { name: 'MockA', address: '0x468C26d86c614cC3d8Eb8cFd89D5607f79D46289', abi: 'mockTokenA' },
    { name: 'MockB', address: '0x9C35eb2Ddf340AD3ac051455ea26D44e1ed87DC9', abi: 'mockTokenB' },
    { name: 'MockC', address: '0x1F6cF4780540D2E829964d0851146feaeA686827', abi: 'mockTokenC' },
    { name: 'MockD', address: '0x7aAE0b58df51A346182a11294e4Af42EEB3dA4c0', abi: 'mockTokenD' },
  ],
  80001: [
    { name: 'ercW', address: '0x1F6cF4780540D2E829964d0851146feaeA686827', abi: 'ercWrapper' },
    { name: 'MockA', address: '0x585477b415Ea1Bc88ABcA26c32755952CF24C631', abi: 'mockTokenA' },
    { name: 'MockB', address: '0xa30000D7B0B6b645FAAB3931C02320649f6Bee23', abi: 'mockTokenB' },
    { name: 'MockC', address: '0x468C26d86c614cC3d8Eb8cFd89D5607f79D46289', abi: 'mockTokenC' },
    { name: 'MockD', address: '0x9C35eb2Ddf340AD3ac051455ea26D44e1ed87DC9', abi: 'mockTokenD' },
  ]
}

interface ContractName {
  [address: string]: string;
}

export interface ContractNames {
  [chainID: number]: ContractName;
}

export const contractNames: ContractNames = {
  4: {//Rinkeby
    '0x5582E24970e186B28c51F6D0c1F2Bd8a4B281962': 'ercWrapper',
    '0x220b45711340265481ACfF4302b5F0e17011503f': 'mockTokenA',
  },
  42: {//Kovan
    '0xac92c3eCEF51276f8F9154e94A55103D2341dE0A': 'Basketz',
    '0x468C26d86c614cC3d8Eb8cFd89D5607f79D46289': 'MockA',
    '0x9C35eb2Ddf340AD3ac051455ea26D44e1ed87DC9': 'MockB',
    '0x1F6cF4780540D2E829964d0851146feaeA686827': 'MockC',
    '0x7aAE0b58df51A346182a11294e4Af42EEB3dA4c0': 'MockD',
  },
  80001: {
    '0x1F6cF4780540D2E829964d0851146feaeA686827': 'Basketz',
    '0x585477b415Ea1Bc88ABcA26c32755952CF24C631': 'MockA',
    '0xa30000D7B0B6b645FAAB3931C02320649f6Bee23': 'MockB',
    '0x468C26d86c614cC3d8Eb8cFd89D5607f79D46289': 'MockC',
    '0x9C35eb2Ddf340AD3ac051455ea26D44e1ed87DC9': 'MockD',
  }
}
