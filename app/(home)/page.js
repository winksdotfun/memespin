"use client";
import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);

  // Function to validate Ethereum address
  const validateEthAddress = (address) => {
    // Check if it matches the Ethereum address format (0x followed by 40 hex chars)
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    return ethAddressRegex.test(address);
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    
    // Only validate if there's input
    if (newAddress) {
      setIsValidAddress(validateEthAddress(newAddress));
    } else {
      setIsValidAddress(true); // Reset validation when input is empty
    }
  };

  const generateLink = () => {
    if (!address || !isValidAddress) return;
    const link = `http://localhost:3000/wink/${address}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    if (generatedLink) {
      try {
        await navigator.clipboard.writeText(generatedLink);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-customStart to-customEnd/50 font-mono text-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Memespin</h1>
        <p className="text-lg">
          Play Memespin, a fair blockchain game where winners share the prize
          pool, draws get half back, and losers get nothing.
        </p>
      </div>
    </div>
  );
}