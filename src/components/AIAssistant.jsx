
import { useState } from 'react';
import { Send, Sparkles, X } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m your AI course assistant. How can I help you create better educational content today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setIsProcessing(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I can help with that! Let's start by outlining the key learning objectives for your course.",
        "That's a great topic. To make it more engaging, consider adding interactive assessments.",
        "I've analyzed your content and suggest restructuring section 3 to improve knowledge retention.",
        "Would you like me to generate quiz questions based on the content you've provided?",
        "Here's an example narrative that might work well for introducing the concept to beginners."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsProcessing(false);
      setInput('');
    }, 1500);
  };

  return (
    <>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all duration-200 flex items-center"
        >
          <Sparkles className="h-6 w-6" />
          <span className="ml-2 font-medium">AI Assistant</span>
        </button>
      )}
      
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 overflow-hidden">
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              <h3 className="font-medium">AI Course Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 ${message.role === 'user' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="mb-3">
                <div className="inline-block p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for content suggestions..."
              className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={isProcessing}
            />
            <button
              type="submit"
              className={`bg-primary text-white py-2 px-3 rounded-r-md ${
                isProcessing ? 'opacity-70' : 'hover:bg-opacity-90'
              }`}
              disabled={isProcessing}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
