document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const userInput = document.getElementById('userInput');
    const chatContainer = document.getElementById('chatContainer');
  
    chatForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
  
      const userMessage = userInput.value;
      appendMessage(userMessage, 'user-message');
      generateAutomaticAnswer(userMessage);
      userInput.value = ''; // Clear the input field
    });
  
    function appendMessage(message, className) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', className);
      messageElement.innerText = message;
  
      // Check if there are existing messages in the chat container
      const messages = chatContainer.getElementsByClassName('message');
      if (messages.length > 0) {
        // If there are existing messages, append the new message after the last message
        const lastMessage = messages[messages.length - 1];
        lastMessage.insertAdjacentElement('afterend', messageElement);
      } else {
        // If there are no existing messages, simply append the new message
        chatContainer.appendChild(messageElement);
      }
    }
  
    function generateAutomaticAnswer(userMessage) {
      // Here, you can implement your logic to generate automatic answers based on the user message
      // For the purpose of demonstration, let's assume the answer is 'Hello, how can I assist you?'
  
      const assistantMessage = 'Hello, how can I assist you?';
      appendMessage(assistantMessage, 'assistant-message');
    }
  });
  function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.innerText = message;
  
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom of the chat container
  }
    