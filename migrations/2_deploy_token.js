const MyTokenTest = artifacts.require("./MyTokenTest.sol");

module.exports = function (deployer) {
    // const   _name = "MyTokenTest",
    //         _symbol = "MYTKT",
    //         _decimals = 9
  deployer.deploy(MyTokenTest);
};
