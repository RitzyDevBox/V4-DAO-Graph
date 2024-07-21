import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AccountTransfer,
  AddTimelock,
  AdminFeeOverride,
  Deposit,
  DepositFeeUpdated,
  OrderCanceled,
  OrderFeeUpdated,
  OrderFilled,
  OrderPlaced,
  OwnershipTransferred,
  UpdateConfiguration,
  Withdraw,
  WithdrawFeeUpdated
} from "../generated/AssetManager/AssetManager"

export function createAccountTransferEvent(
  accountId: Bytes,
  toAccountId: Bytes,
  assetKey: ethereum.Tuple,
  assetAmount: BigInt
): AccountTransfer {
  let accountTransferEvent = changetype<AccountTransfer>(newMockEvent())

  accountTransferEvent.parameters = new Array()

  accountTransferEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromFixedBytes(accountId)
    )
  )
  accountTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toAccountId",
      ethereum.Value.fromFixedBytes(toAccountId)
    )
  )
  accountTransferEvent.parameters.push(
    new ethereum.EventParam("assetKey", ethereum.Value.fromTuple(assetKey))
  )
  accountTransferEvent.parameters.push(
    new ethereum.EventParam(
      "assetAmount",
      ethereum.Value.fromUnsignedBigInt(assetAmount)
    )
  )

  return accountTransferEvent
}

export function createAddTimelockEvent(
  _sender: Address,
  accountIdentityKey: ethereum.Tuple,
  assetKey: ethereum.Tuple,
  _amount: BigInt,
  releaseTime: BigInt
): AddTimelock {
  let addTimelockEvent = changetype<AddTimelock>(newMockEvent())

  addTimelockEvent.parameters = new Array()

  addTimelockEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  addTimelockEvent.parameters.push(
    new ethereum.EventParam(
      "accountIdentityKey",
      ethereum.Value.fromTuple(accountIdentityKey)
    )
  )
  addTimelockEvent.parameters.push(
    new ethereum.EventParam("assetKey", ethereum.Value.fromTuple(assetKey))
  )
  addTimelockEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  addTimelockEvent.parameters.push(
    new ethereum.EventParam(
      "releaseTime",
      ethereum.Value.fromUnsignedBigInt(releaseTime)
    )
  )

  return addTimelockEvent
}

export function createAdminFeeOverrideEvent(
  organizationId: BigInt,
  isEnabled: boolean
): AdminFeeOverride {
  let adminFeeOverrideEvent = changetype<AdminFeeOverride>(newMockEvent())

  adminFeeOverrideEvent.parameters = new Array()

  adminFeeOverrideEvent.parameters.push(
    new ethereum.EventParam(
      "organizationId",
      ethereum.Value.fromUnsignedBigInt(organizationId)
    )
  )
  adminFeeOverrideEvent.parameters.push(
    new ethereum.EventParam("isEnabled", ethereum.Value.fromBoolean(isEnabled))
  )

  return adminFeeOverrideEvent
}

export function createDepositEvent(
  _sender: Address,
  accountId: Bytes,
  assetKey: ethereum.Tuple,
  _amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromFixedBytes(accountId)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("assetKey", ethereum.Value.fromTuple(assetKey))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return depositEvent
}

export function createDepositFeeUpdatedEvent(
  organizationId: BigInt,
  feeConfig: ethereum.Tuple
): DepositFeeUpdated {
  let depositFeeUpdatedEvent = changetype<DepositFeeUpdated>(newMockEvent())

  depositFeeUpdatedEvent.parameters = new Array()

  depositFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "organizationId",
      ethereum.Value.fromUnsignedBigInt(organizationId)
    )
  )
  depositFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("feeConfig", ethereum.Value.fromTuple(feeConfig))
  )

  return depositFeeUpdatedEvent
}

export function createOrderCanceledEvent(
  orderId: BigInt,
  accountId: Bytes
): OrderCanceled {
  let orderCanceledEvent = changetype<OrderCanceled>(newMockEvent())

  orderCanceledEvent.parameters = new Array()

  orderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromFixedBytes(accountId)
    )
  )

  return orderCanceledEvent
}

export function createOrderFeeUpdatedEvent(
  organizationId: BigInt,
  feeConfig: ethereum.Tuple
): OrderFeeUpdated {
  let orderFeeUpdatedEvent = changetype<OrderFeeUpdated>(newMockEvent())

  orderFeeUpdatedEvent.parameters = new Array()

  orderFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "organizationId",
      ethereum.Value.fromUnsignedBigInt(organizationId)
    )
  )
  orderFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("feeConfig", ethereum.Value.fromTuple(feeConfig))
  )

  return orderFeeUpdatedEvent
}

export function createOrderFilledEvent(
  orderId: BigInt,
  accountId: Bytes,
  orderFiller: Address,
  amountToSwap: BigInt,
  amountSwapped: BigInt
): OrderFilled {
  let orderFilledEvent = changetype<OrderFilled>(newMockEvent())

  orderFilledEvent.parameters = new Array()

  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromFixedBytes(accountId)
    )
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "orderFiller",
      ethereum.Value.fromAddress(orderFiller)
    )
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "amountToSwap",
      ethereum.Value.fromUnsignedBigInt(amountToSwap)
    )
  )
  orderFilledEvent.parameters.push(
    new ethereum.EventParam(
      "amountSwapped",
      ethereum.Value.fromUnsignedBigInt(amountSwapped)
    )
  )

  return orderFilledEvent
}

export function createOrderPlacedEvent(
  orderId: BigInt,
  accountId: Bytes
): OrderPlaced {
  let orderPlacedEvent = changetype<OrderPlaced>(newMockEvent())

  orderPlacedEvent.parameters = new Array()

  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromFixedBytes(accountId)
    )
  )

  return orderPlacedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpdateConfigurationEvent(
  _sender: Address,
  accountIdentityKey: ethereum.Tuple,
  oldWithdrawAddress: Address,
  newWithdrawAddress: Address,
  locktime: BigInt
): UpdateConfiguration {
  let updateConfigurationEvent = changetype<UpdateConfiguration>(newMockEvent())

  updateConfigurationEvent.parameters = new Array()

  updateConfigurationEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  updateConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "accountIdentityKey",
      ethereum.Value.fromTuple(accountIdentityKey)
    )
  )
  updateConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "oldWithdrawAddress",
      ethereum.Value.fromAddress(oldWithdrawAddress)
    )
  )
  updateConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "newWithdrawAddress",
      ethereum.Value.fromAddress(newWithdrawAddress)
    )
  )
  updateConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "locktime",
      ethereum.Value.fromUnsignedBigInt(locktime)
    )
  )

  return updateConfigurationEvent
}

export function createWithdrawEvent(
  _sender: Address,
  accountId: Bytes,
  assetKey: ethereum.Tuple,
  withdrawAddress: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("_sender", ethereum.Value.fromAddress(_sender))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "accountId",
      ethereum.Value.fromFixedBytes(accountId)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("assetKey", ethereum.Value.fromTuple(assetKey))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawAddress",
      ethereum.Value.fromAddress(withdrawAddress)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}

export function createWithdrawFeeUpdatedEvent(
  organizationId: BigInt,
  feeConfig: ethereum.Tuple
): WithdrawFeeUpdated {
  let withdrawFeeUpdatedEvent = changetype<WithdrawFeeUpdated>(newMockEvent())

  withdrawFeeUpdatedEvent.parameters = new Array()

  withdrawFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "organizationId",
      ethereum.Value.fromUnsignedBigInt(organizationId)
    )
  )
  withdrawFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam("feeConfig", ethereum.Value.fromTuple(feeConfig))
  )

  return withdrawFeeUpdatedEvent
}
