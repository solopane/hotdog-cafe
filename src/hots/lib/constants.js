import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
 pancakeFactory: '0xBCfCcbde45cE874adCB698cC183deBcF17952812',
 panecakeRouter: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
 WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
 HOTS: '0x793766efcA4CEF8c55EE950E759AD6FF73D49c09',
 BNBHOTDOG: '0x7b4EA74EE1085bE9361c893Aa4f888E169af0Ee5',
 CAKEHOTDOG: '0x4C0747c9b8c11783AC00d8e653AF9a7774B1E80b',
 HOTDOGBURGER: '0xFAF539671Eb058C2Cef1Fc8eE49d647DE51C974e',
 HOTDOGHOTS: '0x4d67fbd680ba6be639bfe7659a69e2d3b685a20a',
 }

export const contractAddresses = {
  hots: {
    56: '0x793766efcA4CEF8c55EE950E759AD6FF73D49c09',
  },
  hotsMaker: {
    56: '0x0093D493BB6fB0a4dCb76e636e8a350ACc7f5167',
  },
  wbnb: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
}

//BELOW ARE LISTED POOLS
export const supportedPools = [
  {
     pid: 0,
     lpAddresses: {
       56: '0x7b4EA74EE1085bE9361c893Aa4f888E169af0Ee5',
     },
     tokenAddresses: {
       56: '0x55f0799D60F5f1046971d494bCe376A09Dd4C668',
     },
     name: 'HOTDOG - BNB',
     symbol: 'HOTDOG-BNB LP',
     symbolShort: 'HOTDOG-BNB',
     tokenSymbol: 'HOTDOG',
     token2Symbol: 'BNB',
     icon: 'https://hotdog.cafe/hotdog-bnb.svg',
     isHot: true,
     isNew: false,
     rewardValue: '0.07 HOTS',
     apyValue: '2210%',
     protocal: 'PancakeSwap',
     iconProtocal: 'https://exchange.pancakeswap.finance/favicon.png',
     pairLink: 'https://pancakeswap.info/pair/0x7b4ea74ee1085be9361c893aa4f888e169af0ee5',
     addLiquidityLink: 'https://exchange.pancakeswap.finance/#/add/0x55f0799d60f5f1046971d494bce376a09dd4c668/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
   },
   {
     pid: 3,
     lpAddresses: {
       56: '0x4d67fbd680ba6be639bfe7659a69e2d3b685a20a',
     },
     tokenAddresses: {
       56: '0x793766efca4cef8c55ee950e759ad6ff73d49c09',
     },
     name: 'HOTDOG - HOTS',
     symbol: 'HOTDOG-HOTS LP',
     symbolShort: 'HOTDOG-HOTS',
     tokenSymbol: 'HOTDOG',
     token2Symbol: 'HOTS',
     icon: 'https://hotdog.cafe/hotdog-hots.svg',
     isHot: false,
     isNew: true,
     rewardValue: '0.071 HOTS',
     apyValue: '1853%',
     protocal: 'PancakeSwap',
     iconProtocal: 'https://exchange.pancakeswap.finance/favicon.png',
     pairLink: ' https://pancakeswap.info/pair/0x4d67fbd680ba6be639bfe7659a69e2d3b685a20a',
     addLiquidityLink: 'https://exchange.pancakeswap.finance/#/add/0x55f0799d60f5f1046971d494bce376a09dd4c668/0x793766efca4cef8c55ee950e759ad6ff73d49c09'
   }

]
