
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Send, Bot } from "lucide-react";

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant = ({ onClose }: AIAssistantProps) => {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "您好！我是销售部主管AI助理。我可以帮您分析部门业绩总结、识别过程量下滑问题、制定业绩提升策略等。请问有什么可以帮助您的吗？"
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "本月业绩总结报告",
    "哪些部门过程量下滑？",
    "业绩提升策略建议",
    "考核不达标员工分析"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: "user", content: input }]);
    
    // 模拟AI回复
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "ai",
        content: `基于您的问题"${input}"，我为您分析如下：\n\n1. 当前一区一部表现优异，业绩同比上升8.9%\n2. 二区一部和三区一部出现下滑趋势\n3. 建议重点关注30S有效外呼转化率和微信深度沟通频次\n\n需要我提供更详细的分析报告吗？`
      }]);
    }, 1000);

    setInput("");
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl h-[600px] m-4 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">销售部主管AI助理</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${
                msg.type === "user" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 text-gray-900"
              }`}>
                <div className="whitespace-pre-line text-sm">{msg.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t space-y-3">
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question) => (
              <Button
                key={question}
                variant="outline"
                size="sm"
                onClick={() => handleQuickQuestion(question)}
                className="text-xs"
              >
                {question}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="请输入您的问题..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend} disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIAssistant;
