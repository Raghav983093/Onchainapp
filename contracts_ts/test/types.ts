// import type { HardhatEthersSigner,  } from "@nomicfoundation/hardhat-ethers/signers";
// import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers } from "hardhat";
// import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { Hex, Address as ContractAddress } from "viem";
import type { BuyerV1, Factory, RoleBased, SellerV1, TestUSDT } from "../typechain-types";
// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

// import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
// import { IFactory } from "../typechain-types/contracts/interfaces/IFactory";

// export type BigNumber = ethers.BigNumberish
// export type BigNumber = ethers
export type AddressReturn = Promise<Address>;
export type Signer = SignerWithAddress;
export type Addresses = Array<Address>;
export type Null = Promise<void>;
export type NullNoPromise = void;
export type Address = ContractAddress;
export type StrBigHex = string | Hex | number;
export type Signers = Promise<Signer[]>;

export interface SignersObj {
  deployer: Signer; 
  alc1: Signer; 
  alc2: Signer; 
  alc3: Signer; 
  routeTo: Signer; 
  feeTo: Signer; 
  signer1:Signer; 
  signer2:Signer; 
  signer3:Signer; 
  devAddr:Signer;
};

export type SignersArr = Signer[];

// export interface CreateRouterParam {
//   quorum: number;
//   durationInHours : number; 
//   colCoverageRatio: number;
//   amount: bigint;
//   asset: Address;
//   participants: Addresses;
//   contract: FactoryContract;
//   creator: Signer;
// }

// export interface FunctionParam {
//   epochId: number; 
//   from: Signer;
//   factory: FactoryContract;
//   account?: Address;
// }

// export interface Liquidation {
//   position : number;
//   target: Address;
//   expectedRepaymentTime: number;
//   debt: BigNumber;
//   colBalInToken: BigNumber;
// }

// export interface PermissionLessBandParam {
//   intRate: number;
//   quorum : number;
//   colCoverage: number;
//   deployer: Signer;
//   durationInHours: number;
//   unitLiquidity: bigint;
//   asset: TestAssetContract;
//   factory: FactoryContract;
//   signer: Signer;
// }

// export interface RemoveLiquidityParam {
//   factory: FactoryContract;
//   signer: Signer;
//   epochId: bigint;
// }

// export interface PermissionedBandParam {
//   factory: FactoryContract;
//   signer: Signer;
//   deployer: Signer;
//   intRate: number;
//   durationInHours: number;
//   colCoverage: number;
//   unitLiquidity: bigint;
//   asset: TestAssetContract;
//   contributors: Addresses;
// }

// export interface BandParam {
//   epochId: bigint;
//   hrsOfUse_choice?: number;
//   factory: FactoryContract;
//   signers: Signer[];
// }

// export interface SetVariableParam {
//   factory: FactoryContract;
//   signer: Signer;
//   feeTo: Address;
//   assetMgr: Address;
//   makerRate: number;
//   creationFee: bigint;
// }

// export interface FactoryTxReturn {
//   items: IFactory.ItemStructOutput;
//   itemId: bigint;
//   negotiationId: bigint;
// }

// export interface FundAccountParam {
//   asset: TestAssetContract;
//   testAssetAddr?: Address;
//   recipients: Address[];
//   sender: Signer;
//   amount: bigint;
// }

// export interface JoinABandParam {
//   testAsset: TestAssetContract;
//   factory: FactoryContract;
//   factoryAddr: Address;
//   signers: SignersArr;
//   deployer: Signer;
//   epochId: bigint;
//   contribution: bigint;
// }

// export interface LiquidateParam extends BandParam {
//   debt?: bigint;
//   asset: TestAssetContract;
//   deployer: Signer;
// }

// export interface GetFinanceParam extends BandParam {}

// export interface PaybackParam extends LiquidateParam {
//   asset: TestAssetContract;
// }

// export interface GetPaidParam {
//   factory: FactoryContract;
//   signers: SignersArr;
//   epochId: number;
//   runPayback: boolean;
//   tcUSD: TestAssetContract;
//   signerAddrs: Addresses;
//   strategies: Addresses;
//   trusteeAddr: Address;
// }

// export interface GetPaidResultParam {
//   tokenB4: BigIntArray;
//   tokenAfter: BigIntArray;
//   usdB4: BigIntArray;
//   usdAfter: BigIntArray;
// }

export type FactoryContract = Factory;
export type TestUSDTContract = TestUSDT;
export type Buyer = BuyerV1 ;
export type Seller = SellerV1;
export type RoleBasedContract = RoleBased;
