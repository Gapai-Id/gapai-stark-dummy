'use client'

import React, { useState } from 'react';
import { X, Send, User } from 'lucide-react';
import { Button } from '@/components/design-system/Button';

interface Message {
  id: string;
  sender: 'user' | 'gapai';
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'gapai',
    text: 'Halo! Ada yang bisa Admin Gapai bantu? 😊',
    time: '10:30'
  }
];

export default function ModalTimGapaiChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleClose = () => {
    console.log('Close chat');
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'gapai',
        text: 'Terima kasih! Tim kami akan segera membantu kamu. 👍',
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-[var(--brand-green-500)] text-white px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white">Admin Gapai</h3>
          <button
            onClick={handleClose}
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <p className="text-[13px] text-green-100">Online - Siap membantu</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[var(--surface-page)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex items-start gap-2 max-w-[80%]">
              {message.sender === 'gapai' && (
                <div className="w-8 h-8 rounded-full bg-[var(--brand-green-500)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[14px] font-bold text-white">G</span>
                </div>
              )}
              <div>
                <div
                  className={`rounded-[12px] px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-[var(--brand-green-500)] text-white'
                      : 'bg-white border border-[var(--border-default)]'
                  }`}
                >
                  <p className={`text-[14px] leading-[20px] ${
                    message.sender === 'user' ? 'text-white' : 'text-[var(--text-primary)]'
                  }`}>
                    {message.text}
                  </p>
                </div>
                <p className={`text-[11px] text-[var(--text-muted)] mt-1 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      <div className="px-5 py-3 bg-white border-t border-[var(--border-subtle)]">
        <p className="text-[12px] text-[var(--text-muted)] mb-2">Pertanyaan cepat:</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setInputText('Bagaimana cara mengecek status dokumen?')}
            className="px-3 py-2 bg-[var(--neutral-100)] rounded-full text-[13px] text-[var(--text-primary)] whitespace-nowrap"
          >
            Status dokumen
          </button>
          <button
            onClick={() => setInputText('Kapan jadwal pelatihan selanjutnya?')}
            className="px-3 py-2 bg-[var(--neutral-100)] rounded-full text-[13px] text-[var(--text-primary)] whitespace-nowrap"
          >
            Jadwal pelatihan
          </button>
          <button
            onClick={() => setInputText('Saya butuh bantuan dengan pembayaran')}
            className="px-3 py-2 bg-[var(--neutral-100)] rounded-full text-[13px] text-[var(--text-primary)] whitespace-nowrap"
          >
            Pembayaran
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-5 py-4 bg-white border-t border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ketik pesan..."
            className="flex-1 h-[48px] px-4 rounded-full border border-[var(--border-default)] bg-[var(--surface-page)] text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-500)]"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              inputText.trim()
                ? 'bg-[var(--brand-green-500)] text-white'
                : 'bg-[var(--neutral-200)] text-[var(--text-muted)]'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
