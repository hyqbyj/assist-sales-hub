
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

const RecordingAnalysis = () => {
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");

  const mockData = [
    {
      employee: "张三",
      department: "一区一部",
      customer: "XX医院",
      duration: "3分15秒",
      monthlyCallCount: 12,
      keywords: ["价格", "合同", "心态"],
      recordLink: "#"
    },
    {
      employee: "李四",
      department: "二区一部",
      customer: "YY集团",
      duration: "1分45秒",
      monthlyCallCount: 8,
      keywords: ["友商", "技能", "共情"],
      recordLink: "#"
    },
    {
      employee: "王五",
      department: "三区二部",
      customer: "ZZ机构",
      duration: "45秒",
      monthlyCallCount: 5,
      keywords: ["价格", "共识"],
      recordLink: "#"
    }
  ];

  const getKeywordColor = (keyword: string) => {
    if (["价格", "合同", "友商"].includes(keyword)) return "bg-blue-100 text-blue-700";
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">录音分析</h1>
          <p className="text-gray-600 mt-1">分析员工通话录音，每日更新</p>
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
              <SelectItem value="1-1">一区一部</SelectItem>
              <SelectItem value="1-2">一区二部</SelectItem>
              <SelectItem value="2-1">二区一部</SelectItem>
              <SelectItem value="2-2">二区二部</SelectItem>
              <SelectItem value="3-1">三区一部</SelectItem>
              <SelectItem value="3-2">三区二部</SelectItem>
              <SelectItem value="resource">资源拓展部</SelectItem>
            </SelectContent>
          </Select>

          <Select value={durationFilter} onValueChange={setDurationFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="通话时长" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部时长</SelectItem>
              <SelectItem value="20s-1m">20秒-1分钟</SelectItem>
              <SelectItem value="1m-3m">1分钟-3分钟</SelectItem>
              <SelectItem value="3m+">3分钟以上</SelectItem>
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
                <TableHead>通话时长</TableHead>
                <TableHead>当月通话次数</TableHead>
                <TableHead>关键词</TableHead>
                <TableHead>完整记录</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{item.employee}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.duration}</TableCell>
                  <TableCell>{item.monthlyCallCount}</TableCell>
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

export default RecordingAnalysis;
