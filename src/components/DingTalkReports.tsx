
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

const DingTalkReports = () => {
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [periodFilter, setPeriodFilter] = useState("2024-01");

  const mockData = [
    {
      employee: "张三",
      department: "一区一部",
      historicalTarget: "月度销售额50万",
      currentTarget: "月度销售额60万",
      executionAnalysis: "目标完成度78%，进度良好"
    },
    {
      employee: "李四", 
      department: "二区一部",
      historicalTarget: "月度销售额40万",
      currentTarget: "月度销售额45万", 
      executionAnalysis: "目标完成度45%，需要加强"
    }
  ];

  const getStatusColor = (analysis: string) => {
    if (analysis.includes("良好")) return "bg-green-100 text-green-700";
    if (analysis.includes("需要加强")) return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">钉钉月报执行情况追踪</h1>
          <p className="text-gray-600 mt-1">对照月报目标规划和工作总结进行执行情况分析</p>
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

          <Select value={periodFilter} onValueChange={setPeriodFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="历史目标" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-01">2024年1月</SelectItem>
              <SelectItem value="2023-12">2023年12月</SelectItem>
              <SelectItem value="2023-11">2023年11月</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>员工</TableHead>
                <TableHead>部门</TableHead>
                <TableHead>历史目标</TableHead>
                <TableHead>本月目标</TableHead>
                <TableHead>执行情况分析</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{item.employee}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>{item.historicalTarget}</TableCell>
                  <TableCell>{item.currentTarget}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(item.executionAnalysis)}>
                      {item.executionAnalysis}
                    </Badge>
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

export default DingTalkReports;
