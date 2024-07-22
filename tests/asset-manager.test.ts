import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { AccountTransfer } from "../generated/schema"
import { AccountTransfer as AccountTransferEvent } from "../generated/assetManager/assetManager"
import { handleAccountTransfer } from "../src/asset-manager"
import { createAccountTransferEvent } from "./asset-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let accountId = Bytes.fromI32(1234567890)
    let toAccountId = Bytes.fromI32(1234567890)
    let assetKey = "ethereum.Tuple Not implemented"
    let assetAmount = BigInt.fromI32(234)
    let newAccountTransferEvent = createAccountTransferEvent(
      accountId,
      toAccountId,
      assetKey,
      assetAmount
    )
    handleAccountTransfer(newAccountTransferEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AccountTransfer created and stored", () => {
    assert.entityCount("AccountTransfer", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AccountTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "accountId",
      "1234567890"
    )
    assert.fieldEquals(
      "AccountTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "toAccountId",
      "1234567890"
    )
    assert.fieldEquals(
      "AccountTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetKey",
      "ethereum.Tuple Not implemented"
    )
    assert.fieldEquals(
      "AccountTransfer",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
