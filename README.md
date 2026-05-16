# 🏦 ArcPro Wallet (Arc Testnet)

A lightweight and secure web-based wallet designed specifically for native USDC transfers on the **Arc Testnet**.  
The application uses **Ethers.js v6** to interact directly with the blockchain inside the browser.

---

## ✨ Features

- **Instant Wallet Connect**  
  Seamless integration with MetaMask and Brave Wallet.

- **Automatic Chain Switching**  
  If Arc Testnet is not added, the app automatically prompts users to add or switch networks.

- **Native USDC Support**  
  Fetches real-time balances and transfers directly from the native USDC contract:
  `0x3600000000000000000000000000000000000000`

- **Live Transaction Ledger**  
  Tracks recent transactions during the active browser session.

- **Optimized Interface**  
  Clean dark-mode UI optimized for both mobile and desktop devices.

---

## 🚀 Setup & Installation

### 1. Create File

Create a file named:

```bash
index.html

Paste the complete application code into that file.

---

2. Run Locally

Open the file in any browser.

For better development experience, use:

- VS Code
- Live Server Extension

---

3. Network Requirements

Setting| Value
RPC URL| "https://arc-testnet.drpc.org"
Chain ID| "5042002"
Hex Chain ID| "0x4cef52"
Currency Symbol| "USDC"

---

🛠 Technical Stack

- Frontend: HTML5, CSS3
- Fonts: Inter
- Blockchain Library: Ethers.js v6.7.0
- Network: Arc Testnet Layer 1

---

📖 How To Use

Connect Wallet

Click the Connect Wallet button and approve the MetaMask or Brave Wallet request.

Check Balance

After connection, your native USDC balance will appear automatically.

Send Tokens

1. Enter recipient address ("0x...")
2. Enter transfer amount
3. Click Process Transfer
4. Confirm transaction inside wallet

Track Activity

Recent transaction history appears inside the built-in ledger section.

---

⚠️ Troubleshooting

Balance Shows Zero

Make sure you have received tokens from the Arc Testnet faucet.

RPC Error

Sometimes the RPC endpoint may temporarily fail. Refresh the page and reconnect.

Transaction Failed

Ensure your wallet has enough native gas tokens for transaction fees.

---

🔒 Security

This application never stores:

- private keys
- seed phrases
- passwords

All signing happens directly inside the connected wallet.

---

Built with authority by @bhupendrxsingh
