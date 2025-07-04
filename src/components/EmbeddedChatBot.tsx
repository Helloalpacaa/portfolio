"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// Removed unused FaRobot import

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const EmbeddedChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Heidi. Ask me anything about my background, skills, projects, or experience!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What is your background?",
    "Tell me about your projects",
    "What are your technical skills?",
    "Where did you study?",
    "Why are you a fit for [role]?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.reply,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble responding right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-full max-w-2xl mx-auto bg-[#1a1a1a] rounded-xl border border-accent/20 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-3 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="text-2xl animate-pulse text-blue-400">🐱</div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 via-accent to-green-300 bg-clip-text text-transparent animate-pulse">
            Ask Anything About Heidi
          </h2>
        </div>
        <p className="text-white/70 text-xs">
          Get instant answers about my background, projects, and experience
        </p>
      </div>

      {/* Input Section */}
      <div className="p-3 border-b border-white/10">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
            placeholder="Ask me anything about Heidi..."
            className="flex-1 bg-gradient-to-r from-[#2a2a2a] to-[#333333] text-white placeholder:text-white/60 px-4 py-3 rounded-xl border border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent focus:shadow-lg focus:shadow-accent/10 transition-all duration-300"
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !inputMessage.trim()}
            className="bg-accent text-primary px-6 py-3 rounded-xl hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="p-3 border-b border-white/10">
        <p className="text-white/70 mb-2 text-center text-sm">Try asking:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => sendMessage(question)}
              className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] text-white/90 px-3 py-2 rounded-lg border border-accent/40 hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:scale-105 transition-all duration-300 text-left font-medium text-sm"
              disabled={isLoading}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="p-3 h-48 overflow-y-auto">
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-start gap-3 max-w-[80%]">
                <div
                  className={`p-4 rounded-xl ${
                    message.isUser
                      ? "bg-accent text-primary"
                      : "bg-[#2a2a2a] text-white"
                  }`}
                >
                  {!message.isUser && (
                    <p className="text-xs text-blue-400 mb-2 font-medium">🐱 HEIDI (BOT):</p>
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start gap-3">
                <div className="bg-[#2a2a2a] text-white p-4 rounded-xl">
                  <p className="text-xs text-blue-400 mb-2 font-medium">🐱 HEIDI (BOT):</p>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>
    </motion.div>
  );
};

export default EmbeddedChatBot;
