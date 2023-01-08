import pFundingABI from "../contracts/abi/pFunding.json";
//import { pFundingAddress } from "../contracts/contract";
import { useContract } from "wagmi";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const Web3 = require("web3");

const web3 = new Web3(
  "https://goerli.infura.io/v3/e7e63350a02446cd83ab4073d9c266d4"
);
export const getPfundingContract = async (pFundingAddress) => {
  //const contract = new web3.eth.Contract(pFundingABI, pFundingAddress);

  /*
  const contract = useContract({
    address: pFundingAddress,
    abi: pFundingABI,
  });
  */
  if (typeof pFundingAddress == "undefined") return;

  console.log("hi", pFundingAddress);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    pFundingAddress,
    pFundingABI,
    provider
    //signer
  );
  console.log(contract);

  return contract;
};
