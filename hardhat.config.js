require("hardhat-circom");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.11",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  circom: {
    inputBasePath: "./circuits",
    ptau: "powersOfTau28_hez_final_22.ptau",
    circuits: [
      {
        name: "email",
        input: "email_public.json"
      },
    ],
  },
};
