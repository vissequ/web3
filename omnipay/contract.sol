// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentSplitter {
    address public constant feeRecipient = 0x660B4AC6c45D8d710d14735B005835754BBbAFB8;
    uint256 public constant feePercent = 15; // 0.015% expressed as 15 basis points (bps)

    event PaymentProcessed(address indexed sender, address indexed recipient, uint256 totalAmount, uint256 feeAmount);

    function splitPayment(address recipientAddress, uint256 paymentAmount) external payable {
        require(msg.value == paymentAmount, "Insufficient payment sent");
        require(recipientAddress != address(0), "Invalid recipient address");

        // Calculate the fee amount (0.015% of the total)
        uint256 feeAmount = (paymentAmount * feePercent) / 100000;

        // Calculate the remaining amount to send to the recipient
        uint256 recipientAmount = paymentAmount - feeAmount;

        // Transfer the fee to the feeRecipient
        payable(feeRecipient).transfer(feeAmount);

        // Transfer the remaining amount to the recipient
        payable(recipientAddress).transfer(recipientAmount);

        // Emit an event for the payment processing
        emit PaymentProcessed(msg.sender, recipientAddress, paymentAmount, feeAmount);
    }
}
