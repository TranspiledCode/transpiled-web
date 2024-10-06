// start.js
const { exec } = require('child_process');
const os = require('os');

const PORT = 2024;
const ENTRY = 'public/index.html';

// Function to get local IP address
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(interfaces)) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

// Start Parcel server
const parcel = exec(
  `parcel serve ${ENTRY} --host localhost --port ${PORT} --no-cache`
);

// Handle Parcel stdout
parcel.stdout.on('data', (data) => {
  console.log(data.toString());
});

// Handle Parcel stderr
parcel.stderr.on('data', (data) => {
  console.error(data.toString());
});

// Get and display local IP
const ip = getLocalIp();
console.log(`Access your app at: http://${ip}:${PORT}`);
