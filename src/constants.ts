import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  SEPOLIA = 11155111,
  ETH = 1,
  IOTXTEST=4690,
  IOTEX=4689,
  ZKFAIR=42766,
  // BASE=8453
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x163Cb656D3e038F4ab2faE28A738250ebbaeCD55'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.SEPOLIA]: '0x163Cb656D3e038F4ab2faE28A738250ebbaeCD55',
  [ChainId.ETH]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17',
  [ChainId.IOTXTEST]:'0xF66cE79333e6c99e7AdAC4EeAF0CD30f42253838',
  [ChainId.ZKFAIR]:'0xaCeb638434aDfcEdf5DB2734C3b33CB56D8D6Ed2',
  [ChainId.IOTEX]:'0x907830e9bb62A93b12090C0c3E6655F6d5806B6e',
  // [ChainId.BASE]:'0x8909dc15e40173ff4699343b6eb8132c65e18ec6',
}

export const INIT_CODE_HASH = '0xed6641270172af5525ec71dfbdcb67ef10dc6139a0be714bace24b41a0fa4064'
// 96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f
export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  // [ChainId.TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  // [ChainId.SEPOLIA]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  // [ChainId.ETH]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
  [ChainId.TESTNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.SEPOLIA]: '0x3f3c6b780b8a5605d735e48e67eb5e7d6244258be01d979d64bf7696e40b5b63',
  [ChainId.ETH]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.IOTXTEST]:"0xee58664650791f4f0b583c76ceda888cfabb45bf74b11c1bf07f43f851531b90",
  [ChainId.ZKFAIR]:"0xee58664650791f4f0b583c76ceda888cfabb45bf74b11c1bf07f43f851531b90",
  [ChainId.IOTEX]:"0xed6641270172af5525ec71dfbdcb67ef10dc6139a0be714bace24b41a0fa4064",
  // [ChainId.BASE]:"0xee58664650791f4f0b583c76ceda888cfabb45bf74b11c1bf07f43f851531b90"
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
