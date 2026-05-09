// ethers.js integration for real-time updates
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// 1. real-time balance listener
async function watchBalance(address) {
    provider.on("block", async () => {
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.utils.formatEther(balance);
        document.getElementById("balance-display").innerText = `${formattedBalance} ARC`;
        console.log("balance auto-refreshed:", formattedBalance);
    });
}

// 2. transaction ledger (fetching on-chain history)
async function fetchHistory(address) {
    const historyContainer = document.getElementById("transaction-ledger");
    // filters for transactions sent from the user
    const filter = {
        from: address,
        fromBlock: 0
    };
    
    const logs = await provider.getLogs(filter);
    historyContainer.innerHTML = logs.map(log => `
        <div class="transaction-item">
            <span>TX: ${log.transactionHash.slice(0, 6)}...</span>
            <a href="https://arcscan.io/tx/${log.transactionHash}" target="_blank">view</a>
        </div>
    `).join('');
}

// 3. enhanced send function with state feedback
async function sendTransaction(to, amount) {
    const btn = document.getElementById("send-btn");
    try {
        btn.innerText = "pending...";
        btn.disabled = true;

        const tx = await signer.sendTransaction({
            to: to,
            value: ethers.utils.parseEther(amount)
        });

        console.log("transaction hash:", tx.hash);
        
        // wait for 1 confirmation
        await tx.wait();
        
        btn.innerText = "success!";
        setTimeout(() => btn.innerText = "send", 2000);
    } catch (error) {
        console.error("tx failed", error);
        btn.innerText = "failed";
    } finally {
        btn.disabled = false;
    }
}
