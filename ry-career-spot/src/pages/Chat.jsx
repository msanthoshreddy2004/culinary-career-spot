import { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'owner', text: 'Hello, are you available for morning shift?' },
    { from: 'chef', text: 'Yes, I am available from 6am.' },
  ])
  const [text, setText] = useState('')

  function sendMessage() {
    if (!text.trim()) return
    setMessages([...messages, { from: 'me', text }])
    setText('')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold">Chat (placeholder)</h1>
      <div className="mt-4 border rounded-xl bg-white h-[60vh] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${m.from==='me' ? 'ml-auto bg-gray-900 text-white' : 'bg-gray-100'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="border-t p-3 flex gap-2">
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message" className="flex-1 border rounded-md px-3 py-2 text-sm" />
          <button onClick={sendMessage} className="bg-gray-900 text-white rounded-md px-4">Send</button>
        </div>
      </div>
    </div>
  )
}
