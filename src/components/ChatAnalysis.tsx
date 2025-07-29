
import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";

const ChatAnalysis = () => {
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [roundsFilter, setRoundsFilter] = useState("all");

  const mockData = [
    {
      employee: "张三",
      department: "三区一部",
      customer: "XX医院",
      chatRounds: 8,
      monthlyChats: 15,
      keywords: ["价格", "技能", "共情"],
      recordLink: "#"
    },
    {
      employee: "李四",
      department: "三区二部", 
      customer: "YY诊所",
      chatRounds: 3,
      monthlyChats: 6,
      keywords: ["合同", "心态"],
      recordLink: "#"
    },
    {
      employee: "王五",
      department: "一区一部",
      customer: "ZZ机构",
      chatRounds: 12,
      monthlyChats: 25,
      keywords: ["价格", "友商", "共识"],
      recordLink: "#"
    },
    {
      employee: "赵六",
      department: "一区二部",
      customer: "AA诊所",
      chatRounds: 5,
      monthlyChats: 10,
      keywords: ["技能", "共情"],
      recordLink: "#"
    },
    {
      employee: "孙七",
      department: "二区一部",
      customer: "BB医院",
      chatRounds: 2,
      monthlyChats: 4,
      keywords: ["价格", "心态"],
      recordLink: "#"
    },
    {
      employee: "周八",
      department: "二区二部",
      customer: "CC机构",
      chatRounds: 7,
      monthlyChats: 18,
      keywords: ["合同", "友商", "共行"],
      recordLink: "#"
    },
    {
      employee: "吴九",
      department: "资源拓展部",
      customer: "DD集团",
      chatRounds: 4,
      monthlyChats: 8,
      keywords: ["技能", "共识"],
      recordLink: "#"
    }
  ];

  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      if (departmentFilter !== "all" && item.department !== departmentFilter) return false;
      if (roundsFilter !== "all") {
        const rounds = item.chatRounds;
        if (roundsFilter === "below-3" && rounds >= 3) return false;
        if (roundsFilter === "3-6" && (rounds < 3 || rounds > 6)) return false;
        if (roundsFilter === "above-6" && rounds <= 6) return false;
      }
      return true;
    });
  }, [departmentFilter, roundsFilter]);

  const getKeywordColor = (keyword: string) => {
    if (["价格", "合同", "友商"].includes(keyword)) return "bg-blue-100 text-blue-700";
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">聊天记录分析</h1>
          <p className="text-gray-600 mt-1">分析员工微信聊天记录，每日更新</p>
        </div>
        <div className="text-sm text-gray-500">
          最后更新: {new Date().toLocaleDateString()}
        </div>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">筛选条件</span>
          </div>
          
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="选择部门" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部部门</SelectItem>
              <SelectItem value="一区一部">一区一部</SelectItem>
              <SelectItem value="一区二部">一区二部</SelectItem>
              <SelectItem value="二区一部">二区一部</SelectItem>
              <SelectItem value="二区二部">二区二部</SelectItem>
              <SelectItem value="三区一部">三区一部</SelectItem>
              <SelectItem value="三区二部">三区二部</SelectItem>
              <SelectItem value="资源拓展部">资源拓展部</SelectItem>
            </SelectContent>
          </Select>

          <Select value={roundsFilter} onValueChange={setRoundsFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="聊天轮数" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部轮数</SelectItem>
              <SelectItem value="below-3">3轮以下</SelectItem>
              <SelectItem value="3-6">3轮到6轮</SelectItem>
              <SelectItem value="above-6">6轮以上</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>员工</TableHead>
                <TableHead>部门</TableHead>
                <TableHead>客户</TableHead>
                <TableHead>聊天轮数</TableHead>
                <TableHead>当月聊天次数</TableHead>
                <TableHead>关键词</TableHead>
                <TableHead>完整记录</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{item.employee}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.chatRounds}轮</TableCell>
                  <TableCell>{item.monthlyChats}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {item.keywords.map((keyword, i) => (
                        <Badge key={i} variant="secondary" className={getKeywordColor(keyword)}>
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ChatAnalysis;
