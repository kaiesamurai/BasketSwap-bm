
# BasketSwap
Wrap multiple ERC20s into NFTs. Swap with HTLC! Sell for ETH! As permissionless as it can be!

## Inspiration
BasketSwap was inspired by the need for a more efficient and flexible way to manage and trade multiple ERC20 tokens. Traditional token exchanges can be costly and time-consuming, especially when dealing with multiple tokens. We wanted to create a solution that simplifies this process, allowing users to bundle multiple tokens into a single NFT, enabling easier transfer, swapping, and selling, all while maintaining security and fairness.

## What it does
BasketSwap allows users to create a "basket" of ERC20 tokens wrapped into an ERC721 NFT. This NFT can then be transferred, swapped, or sold. Key features include:
- **Wrapping**: Convert multiple ERC20 tokens into a single ERC721 NFT.
- **Unwrapping**: Convert the NFT back into the original ERC20 tokens.
- **Transfer**: Transfer the NFT to another user, transferring ownership of the underlying tokens.
- **Sell**: Sell the NFT for ETH, using Chainlink price feeds to ensure fair pricing.
- **Swap**: Perform atomic swaps of NFTs with other users without third-party involvement, using hashed-timelock contracts (HTLC).

## How we built it
BasketSwap was built using the following technologies:
- **Solidity**: For writing smart contracts deployed on the Matic Network.
- **Chainlink**: To provide price feeds for accurate and fair token valuation.
- **Hardhat**: For testing, deployment, and development of smart contracts.
- **Ethers.js**: For interacting with the Ethereum blockchain.
- **Matic Network**: To take advantage of lower transaction fees and faster processing times.
- **React**: For the frontend application that interacts with our smart contracts.

## Challenges we ran into
- **Cross-Chain Compatibility**: Ensuring that our solution works seamlessly across different blockchain networks.
- **Accurate Pricing**: Integrating Chainlink oracles to provide reliable price feeds for a fair and transparent token exchange process.
- **Gas Optimization**: Minimizing transaction costs, especially given the complexity of wrapping multiple tokens into a single NFT.
- **Security**: Implementing secure and reliable smart contracts that protect user funds and ensure proper execution of all transactions.

## Accomplishments that we're proud of
- Successfully creating a fully functional prototype that allows users to wrap, unwrap, transfer, sell, and swap baskets of tokens.
- Integrating Chainlink oracles for accurate and fair pricing of token baskets.
- Deploying our solution on the Matic Network, enabling low-cost and fast transactions.
- Developing a user-friendly interface that makes it easy for users to interact with the BasketSwap protocol.

## What we learned
- **Smart Contract Development**: Gained deeper insights into writing and deploying secure and efficient smart contracts.
- **Blockchain Interoperability**: Overcame challenges related to ensuring seamless operation across different blockchain networks.
- **Oracle Integration**: Learned how to effectively integrate Chainlink oracles for reliable price data.
- **User Experience**: Understood the importance of creating an intuitive and user-friendly interface to facilitate user interaction with blockchain applications.

## What's next for BasketSwap
- **Expand Blockchain Support**: Integrate additional blockchain networks to widen the scope and usability of BasketSwap.
- **Enhanced Features**: Implement additional features like using TheGraph protocol for event handling, utilizing ERC721 metadata for financial calculations, and creating a more liquid trading system.
- **IPFS Hosting**: Host the entire protocol on IPFS for greater decentralization and reliability.
- **Lending & Staking**: Develop a lending and staking platform against user-composed baskets.
- **Fiat On-Ramp**: Introduce a fiat on-ramp to make it easier for users to buy into multiple token positions directly.

## Introduction

BasketSwap allows users to create an NFT, called a Basket, by transferring ERC20 tokens to a contract and minting an ERC721 token that holds balances of ERC20s internally. Only tokens with available Chainlink price feeds are allowed inside a basket, ensuring security and functionality. The contract is deployed on the Matic network to enable cheap transactions, especially for OTC trades on-chain.

After minting an NFT, users can:
- Unwrap the basket back to original ERC20s.
- Transfer the basket to any other ETH address.
- Sell baskets for ETH using Chainlink price feeds to ensure fair pricing.
- Perform atomic swaps, Basket-to-Basket with any other user, using built-in HTLC capabilities.


## What is this protocol trying to achieve?

We aim to allow users to create personal indexes of tokens with sufficient underlying liquidity for easy trading and swapping. The main benefit is instant entry and exit into multiple tokens within one transaction, saving gas costs and enabling better trading strategies and arbitrage driven by demand for multiple tokens.

## What's Next?

Given our limited time and small team, there are numerous improvements we plan to introduce, such as:
- Using TheGraph protocol for handling events.
- Utilizing ERC721 metadata for additional features and financial calculations related to basket composition.
- Creating a more liquid trading system, outside of currently proposed direct bidding.
- IPFS hosting for the entire protocol.
- Lending & staking platform against user-composed baskets.
- Fiat on-ramp to easily buy into multiple positions.

## Built With

- ethers
- hardhat
- matic
- solidity

## Try it out

# ERC20 Basketz!

Wrap your ERC20 tokens in an ERC721 basket to transfer, swap, sell, and more...

### Breakdown of Contract Functions

- Wrap and unwrap ERC20 Baskets, storing any allowed ERC20 as one NFT.
- Transfer ERC20 Baskets as NFTs in one transaction.
- Use `hashed-timelock-contract` [[HTLC]](https://github.com/ConsenSys/hashed-timelock-contract-ethereum) to swap basket-to-basket without third-party involvement.
- Auction your Basket for ETH.

### Deployment Data

Contracts are deployed on the Matic Network. ABI data can be found in the `contracts/abis` folder.

#### Matic Network Deployment

- Wrapper deployed to: 0x1F6cF4780540D2E829964d0851146feaeA686827
- Deployer address: 0xc3f8e4bC305dcaAbd410b220E0734d4DeA7C0bc9

#### Kovan Network Deployment

- Wrapper deployed to: 0xac92c3eCEF51276f8F9154e94A55103D2341dE0A
- Deployer address: 0xc3f8e4bC305dcaAbd410b220E0734d4DeA7C0bc9

### Why This is Cool?

- Batch transfer your ERC20 tokens as an ERC721.
- Create a custom token-index composed of any ERC20s and arbitrage on demand for a given composition of tokens.
- Swap any basket of tokens for any other basket of tokens, changing exposure to multiple tokens with one transaction.
- Instantly sell a basket of multiple tokens in one transaction.
- Contract operates in a permissionless manner in the spirit of crypto finance.

### User Perspective

1. Users create a **wrap** by sending tokens (min. 2, max. 10) to the `wrapper()` function.
2. Contract checks if tokens are whitelisted for wrapping (avoiding low liquidity and unverified tokens).
3. User **mints** an NFT token corresponding to transferred tokens (tokens balance held in mapping `wrapped`).
4. User can **unwrap** the NFT they own back to their ERC20 tokens.
5. User can **transfer** the NFT and ownership with a claim on wrapped tokens.
6. User can **swap** any basket with any other basket using a hashed timelock contract, avoiding third-party involvement.
7. User can check the balance of their basket using `wrappedBalance()`.
8. Contract uses Chainlink price feeds to calculate the value of the Basket.

### Chainlink Price Feeds Role

**Basket Creation**

To ensure baskets are created only with verified tokens and avoid mistakes, we leverage Chainlink price feeds as a conditional check when creating baskets. Only tokens tracked by Chainlink are allowed in a basket.

**Basket Pricing**

The contract allows swaps and sales of baskets, requiring the real value of the basket at the current time. Users can set their premium over the real price returned by Chainlink price feeds.

### Current Gas Costs, Non-optimized

[Gas Used in Tests]

### Tests Output

Local tests will fail on order-related operations due to inaccessible Chainlink price feeds. However, the contract was tested with mock-up price feeds before actual deployment.

````html
  ErcWrapper

    ✓ Standard wrapping
    ✓ Wrapping only from allowed list
    ✓ Unwrapping
    ✓ Transfer from U1 to U2
    ✓ User1 tries to unwrap already sent Basket
    ✓ User2 can unwrap after transfer
    ✓ Show balances
    ✓ Mint 2 new baskets
    ✓ Create Order
         no doubling orders!
         only the owner of the basket can create an order!
    ✓ Negative cases for createOrder, owner operations
         user1 cannot transfer basket currently for sale
    ✓ Negative cases for createOrder, transfers locked
         user2 doesnt send enough of the funds!
    ✓ Negative case for fillOrder, not enough funds
         user2 cannot buy what user1 didnt list!
    ✓ Negative case for fillOrder, basket not for sale
    ✓ Fill Order
    ✓ Negative case for fillOrder, cannot fill already filled
    ✓ Negative case for cancelOrder, only owner can cancel
    ✓ Negative case for cancelOrder, cannot cancel unlisted
    ✓ Cancel Order
    ✓ Update price

  HTLC Basket Swap

    ✓ Create Basket for U1 and U2 to exchange later
    ✓ U1 sets up swap with Basket1
    ✓ U2 sets up swap with Basket2
    ✓ Check HTLC balance before users swap
         approve fails because basket is already owned by htlc
    ✓ U1 tries to transfer basket locked in swap
         createOrder fails because basket is already owned by htlc
    ✓ U1 tries to create an order when basket locked in swap
    ✓ U1 withdraws
    ✓ U2 withdraws with secret
         users balances after swap match!
    ✓ Check balances
    ✓ Check Basket ownership after swap
````

## How to Run

### Pre-requisites

Before running any command, ensure to install dependencies:

```sh
$ yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### Run Tests

```sh
$ yarn tests
```