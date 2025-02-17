const axios = require("axios");

const stkPush = async (req, res) => {
    const token = ""; 
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    const data = {
        BusinessShortCode: "174379",
        Password: "GENERATED_PASSWORD",
        Timestamp: "YYYYMMDDHHMMSS",
        TransactionType: "CustomerPayBillOnline",
        Amount: "100",
        PartyA: "254711111111",
        PartyB: "174379",
        PhoneNumber: "254700000000",
        CallBackURL: "https://ecommerce.com/callback",
        AccountReference: "Test Payment",
        TransactionDesc: "Payment for services",
    };

    try {
        const response = await axios.post(url, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Payment initiation failed" });
    }
};
