//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Send, Paperclip, Search, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

const conversations = [
  {
    id: 1,
    name: "Kouassi Amara",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
    lastMessage: "Parfait, je commence demain !",
    time: "10:30",
    unread: 0,
    online: true,
  },
  {
    id: 2,
    name: "Adjoua Koffi",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adjoua",
    lastMessage: "Pouvez-vous m'envoyer les maquettes ?",
    time: "09:15",
    unread: 2,
    online: true,
  },
  {
    id: 3,
    name: "Yao Christophe",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yao",
    lastMessage: "D'accord, je vous envoie le devis",
    time: "Hier",
    unread: 0,
    online: false,
  },
];

export function MessagingView({ onNavigate }) {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState("");

  const messages = [
    { id: 1, sender: "other", text: "Bonjour ! J'ai bien reçu votre proposition de mission.", time: "10:00" },
    { id: 2, sender: "me", text: "Excellent ! Quand pourriez-vous commencer ?", time: "10:15" },
    { id: 3, sender: "other", text: "Je suis disponible dès demain. Le délai de 2 semaines vous convient ?", time: "10:25" },
    { id: 4, sender: "me", text: "Parfait pour moi ! Je vous envoie les détails du projet.", time: "10:28" },
    { id: 5, sender: "other", text: "Parfait, je commence demain !", time: "10:30" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Ajouter logique d'envoi ici
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => onNavigate("landing")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-200px)]">
          <Card className="h-full flex overflow-hidden">
            {/* Liste des conversations */}
            <div className="w-full md:w-80 border-r border-border flex flex-col">
              <div className="p-4 border-b">
                <h2 className="mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Rechercher..." className="pl-9 rounded-full" />
                </div>
              </div>

              <ScrollArea className="flex-1">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`p-4 border-b cursor-pointer hover:bg-accent/50 transition-colors ${
                      selectedConversation.id === conv.id ? "bg-accent" : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={conv.photo} alt={conv.name} />
                          <AvatarFallback>{conv.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm truncate">{conv.name}</h4>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                          {conv.unread > 0 && (
                            <div className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 ml-2">
                              {conv.unread}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </div>

            {/* Zone de chat */}
            <div className="flex-1 flex flex-col">
              {/* Header chat */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedConversation.photo} alt={selectedConversation.name} />
                      <AvatarFallback>{selectedConversation.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    {selectedConversation.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm">{selectedConversation.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.online ? "En ligne" : "Hors ligne"}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[70%] ${msg.sender === "me" ? "order-2" : ""}`}>
                        <div
                          className={`rounded-2xl px-4 py-2 ${
                            msg.sender === "me"
                              ? "bg-gradient-to-r from-primary to-secondary text-white rounded-br-none"
                              : "bg-muted rounded-bl-none"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 px-2">{msg.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full flex-shrink-0">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Input
                    placeholder="Tapez votre message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    className="rounded-full"
                  />
                  <Button
                    size="icon"
                    onClick={handleSend}
                    className="rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
