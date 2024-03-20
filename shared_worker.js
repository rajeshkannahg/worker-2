// shared_worker.js

// Listen for connections
onconnect = function(e) {
    // Get the port for communication
    var port = e.ports[0];
  
    // Handle messages from the main script
    port.onmessage = function(event) {
      // Log the received message
      console.log('Message received in shared worker:2', event.data);
      // Echo the message back to the main script
      port.postMessage('Echo from shared worker:2 ' + event.data);
      port.postMessage('Origin of the shared worker2:'+ self.origin);

    };
  
    // Let the main script know that the shared worker is ready
    port.postMessage('Shared worker2 connected');
  };
  