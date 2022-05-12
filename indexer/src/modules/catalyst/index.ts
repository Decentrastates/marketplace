import { dataSource } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

export function getCatalystBase(): string {
  let network = dataSource.network()
  if (network == 'mainnet' || network == 'matic') {
    return 'https://peer.ftc.tc'
  }

  if (network == 'ropsten' || network == 'goerli' || network == 'mumbai') {
    return 'https://peer.ftc.tc'
  }

  log.debug('Invalid network {}', [network])
  return ''
}
