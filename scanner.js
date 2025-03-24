const axios = require('axios');

async function testSQLInjection(url) {
  try {
    const res = await axios.get(`${url}' OR 1=1 --`);
    
    if (res.status === 200 && res.data.includes('error')) {
      return { message: "Potential SQL Injection detected!", risk: "High" };
    }
    
    return { message: "No SQL Injection detected.", risk: "Low" };
  } catch (error) {
    return { message: "Error scanning URL. The server might have blocked the request.", risk: "Unknown" };
  }
}

module.exports = { testSQLInjection };
