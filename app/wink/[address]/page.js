"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { ConnectButton } from '../../providers';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

export default function DonationPage() {
  const params = useParams();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recipientAddress = params.address || "";

  console.log("recipientAddress", recipientAddress);
  

  // Get wallet connection 
  const { isConnected } = useAccount();
  
  // Transaction hooks
  const { sendTransaction } = useSendTransaction();
  const { isLoading: isTransactionPending } = useWaitForTransactionReceipt();

  const handleDonate = async () => {
    if (!amount || !isConnected) return;

    try {
      setIsLoading(true);
      await sendTransaction({
        to: recipientAddress,
        value: parseEther(amount),
      });
    } catch (error) {
      console.error('Transaction failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const iframeUrl = `https://memespin.io/?ref=${recipientAddress}`;


  return (
    <div className="min-h-screen bg-gradient-to-t from-customStart to-customEnd/50">
    <iframe 
      src={iframeUrl}
      className="w-full h-screen border-0"
      allow="web3"
      allowFullScreen
    />
  </div>

  );
}