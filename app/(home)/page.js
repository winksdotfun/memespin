"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [config, setConfig] = useState("");

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

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get('/api/config')
        const data = res.data
        console.log(typeof data);
        
        console.log(data)
        setConfig(data.REFERRAL)
      } catch (error) {
        console.error(error)
      }
    }
    
    fetchConfig()
  }, [])

  const iframeUrl = `https://memespin.io/?ref=${config}`;


  return (
  //   <iframe 
  //   src={iframeUrl}
  //   className="w-full h-screen border-0"
  //   allow="web3"
  //   allowFullScreen
  // />
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
