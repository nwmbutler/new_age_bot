module.exports = {
    consumer_key:         `${process.env.CONS_KEY}`,
    consumer_secret:      `${process.env.CONS_SECRET}`,
    access_token:         `${process.env.ACC_TOKEN}`,
    access_token_secret:  `${process.env.ACC_SECRET}`,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
}