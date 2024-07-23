import {
  AccountTransfer as AccountTransferEvent,
  AddTimelock as AddTimelockEvent,
  AdminFeeOverride as AdminFeeOverrideEvent,
  Deposit as DepositEvent,
  DepositFeeUpdated as DepositFeeUpdatedEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  OrderCanceled as OrderCanceledEvent,
  OrderFeeUpdated as OrderFeeUpdatedEvent,
  OrderFilled as OrderFilledEvent,
  OrderPlaced as OrderPlacedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdateConfiguration as UpdateConfigurationEvent,
  Withdraw as WithdrawEvent,
  WithdrawFeeUpdated as WithdrawFeeUpdatedEvent
} from "../generated/assetManager/assetManager"
import {
  AccountTransfer,
  AddTimelock,
  AdminFeeOverride,
  Deposit,
  DepositFeeUpdated,
  EIP712DomainChanged,
  Order,
  OrderFeeUpdated,
  OwnershipTransferred,
  UpdateConfiguration,
  Withdraw,
  WithdrawFeeUpdated
} from "../generated/schema"

export function handleAccountTransfer(event: AccountTransferEvent): void {
  let entity = new AccountTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.accountId = event.params.accountId
  entity.toAccountId = event.params.toAccountId
  entity.assetKey_assetAddress = event.params.assetKey.assetAddress
  entity.assetKey_id = event.params.assetKey.id
  entity.assetKey_assetType = event.params.assetKey.assetType
  entity.assetAmount = event.params.assetAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddTimelock(event: AddTimelockEvent): void {
  let entity = new AddTimelock(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sender = event.params._sender
  entity.accountId = event.params.accountId
  entity.assetAddress = event.params.assetAddress
  entity.assetId = event.params.assetId
  entity.assetType = event.params.assetType
  entity._amount = event.params._amount
  entity.releaseTime = event.params.releaseTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminFeeOverride(event: AdminFeeOverrideEvent): void {
  let entity = new AdminFeeOverride(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.organizationId = event.params.organizationId
  entity.isEnabled = event.params.isEnabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sender = event.params._sender
  entity.accountId = event.params.accountId
  entity.assetAddress = event.params.assetAddress
  entity.assetId = event.params.assetId
  entity.assetType = event.params.assetType
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositFeeUpdated(event: DepositFeeUpdatedEvent): void {
  let entity = new DepositFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.organizationId = event.params.organizationId
  entity.feeConfig_isEnabled = event.params.feeConfig.isEnabled
  entity.feeConfig_percentage = event.params.feeConfig.percentage
  entity.feeConfig_minFee = event.params.feeConfig.minFee
  entity.feeConfig_maxFee = event.params.feeConfig.maxFee
  entity.feeConfig_useFlatRate = event.params.feeConfig.useFlatRate
  entity.feeConfig_flatRate = event.params.feeConfig.flatRate
  entity.feeConfig_flatRateFeeAssetKey_assetAddress =
    event.params.feeConfig.flatRateFeeAssetKey.assetAddress
  entity.feeConfig_flatRateFeeAssetKey_id =
    event.params.feeConfig.flatRateFeeAssetKey.id
  entity.feeConfig_flatRateFeeAssetKey_assetType =
    event.params.feeConfig.flatRateFeeAssetKey.assetType
  entity.feeConfig_withdrawAccount_organizationId =
    event.params.feeConfig.withdrawAccount.organizationId
  entity.feeConfig_withdrawAccount_relatedId =
    event.params.feeConfig.withdrawAccount.relatedId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderFeeUpdated(event: OrderFeeUpdatedEvent): void {
  let entity = new OrderFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.organizationId = event.params.organizationId
  entity.feeConfig_isEnabled = event.params.feeConfig.isEnabled
  entity.feeConfig_percentage = event.params.feeConfig.percentage
  entity.feeConfig_minFee = event.params.feeConfig.minFee
  entity.feeConfig_maxFee = event.params.feeConfig.maxFee
  entity.feeConfig_useFlatRate = event.params.feeConfig.useFlatRate
  entity.feeConfig_flatRate = event.params.feeConfig.flatRate
  entity.feeConfig_flatRateFeeAssetKey_assetAddress =
    event.params.feeConfig.flatRateFeeAssetKey.assetAddress
  entity.feeConfig_flatRateFeeAssetKey_id =
    event.params.feeConfig.flatRateFeeAssetKey.id
  entity.feeConfig_flatRateFeeAssetKey_assetType =
    event.params.feeConfig.flatRateFeeAssetKey.assetType
  entity.feeConfig_withdrawAccount_organizationId =
    event.params.feeConfig.withdrawAccount.organizationId
  entity.feeConfig_withdrawAccount_relatedId =
    event.params.feeConfig.withdrawAccount.relatedId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderFilled(event: OrderFilledEvent): void {

  let order = Order.load(event.params.orderId.toHex());

  if (!order) {
    order = new Order(event.params.orderId.toHex());
    order.orderId = event.params.orderId;
    order.accountId = event.params.accountId;
  }
  
  order.status = "FILLED";
  order.orderFiller = event.params.orderFiller;
  order.cancelOrFilledTransactionHash = event.transaction.hash;
  order.save();

}

export function handleOrderPlaced(event: OrderPlacedEvent): void {
  let order = new Order(event.params.orderId.toHex());
  order.orderId = event.params.orderId;
  order.accountId = event.params.accountId;
  order.status = "OPEN";
  order.createdTransactionHash = event.transaction.hash;

  //TODO: Regenerate and get
  // order.expiration = event.block.timestamp.plus(BigInt.fromI32(3600));

  order.save();
}

export function handleOrderCanceled(event: OrderCanceledEvent): void {
  let order = Order.load(event.params.orderId.toHex());
  
  //TODO: verify whether this is really needed, the graph should verify that all entities are created so ideally this should already be created
  if (!order) {
    order = new Order(event.params.orderId.toHex());
    order.orderId = event.params.orderId;
    order.accountId = event.params.accountId
  }

  order.cancelOrFilledTransactionHash = event.transaction.hash;
  order.status = "CANCELED";
  order.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateConfiguration(
  event: UpdateConfigurationEvent
): void {
  let entity = new UpdateConfiguration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sender = event.params._sender
  entity.accountId = event.params.accountId
  entity.oldWithdrawAddress = event.params.oldWithdrawAddress
  entity.newWithdrawAddress = event.params.newWithdrawAddress
  entity.locktime = event.params.locktime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._sender = event.params._sender
  entity.accountId = event.params.accountId
  entity.assetAddress = event.params.assetAddress
  entity.assetId = event.params.assetId
  entity.assetType = event.params.assetType
  entity.withdrawAddress = event.params.withdrawAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawFeeUpdated(event: WithdrawFeeUpdatedEvent): void {
  let entity = new WithdrawFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.organizationId = event.params.organizationId
  entity.feeConfig_isEnabled = event.params.feeConfig.isEnabled
  entity.feeConfig_percentage = event.params.feeConfig.percentage
  entity.feeConfig_minFee = event.params.feeConfig.minFee
  entity.feeConfig_maxFee = event.params.feeConfig.maxFee
  entity.feeConfig_useFlatRate = event.params.feeConfig.useFlatRate
  entity.feeConfig_flatRate = event.params.feeConfig.flatRate
  entity.feeConfig_flatRateFeeAssetKey_assetAddress =
    event.params.feeConfig.flatRateFeeAssetKey.assetAddress
  entity.feeConfig_flatRateFeeAssetKey_id =
    event.params.feeConfig.flatRateFeeAssetKey.id
  entity.feeConfig_flatRateFeeAssetKey_assetType =
    event.params.feeConfig.flatRateFeeAssetKey.assetType
  entity.feeConfig_withdrawAccount_organizationId =
    event.params.feeConfig.withdrawAccount.organizationId
  entity.feeConfig_withdrawAccount_relatedId =
    event.params.feeConfig.withdrawAccount.relatedId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
