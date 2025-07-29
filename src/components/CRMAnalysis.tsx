
import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const CRMAnalysis = () => {
  const [employeeFilter, setEmployeeFilter] = useState("all");
  const [wechatDeepChatFilter, setWechatDeepChatFilter] = useState("all");
  const [performanceFilter, setPerformanceFilter] = useState("all");
  const [wechatFriendsFilter, setWechatFriendsFilter] = useState("all");
  const [touchCountFilter, setTouchCountFilter] = useState("all");
  const [outboundCallsFilter, setOutboundCallsFilter] = useState("all");
  const [valid30sFilter, setValid30sFilter] = useState("all");

  const mockTableData = [
    {
      employee: "张三",
      department: "一区一部",
      wechatDeepChat: 12,
      todayPerformance: 8500,
      wechatFriends: 320,
      touchCount: 45,
      touchRate: "14.1%",
      newWechatFriends: 5,
      momentsCount: 3,
      momentsComments: 8,
      momentsLikes: 25,
      outboundCalls: 85,
      callDuration: 240,
      connectedCalls: 32,
      connectionRate: "37.6%",
      valid30s: 28,
      valid60s: 22,
      valid60sDuration: 180,
      valid60sRate: "68.8%",
      valid3min: 15,
      valid10min: 8,
      valid10minDuration: 120,
      newKP: 3,
      todayValidTotal: 35,
      newOpportunities: 2,
      newIntentions: 4,
      newPotential: 6,
      newInterest: 8,
      wonDeals: 1,
      newRobotTests: 0
    },
    {
      employee: "李四",
      department: "二区一部",
      wechatDeepChat: 8,
      todayPerformance: 5200,
      wechatFriends: 280,
      touchCount: 38,
      touchRate: "13.5%",
      newWechatFriends: 3,
      momentsCount: 2,
      momentsComments: 6,
      momentsLikes: 18,
      outboundCalls: 62,
      callDuration: 180,
      connectedCalls: 25,
      connectionRate: "40.3%",
      valid30s: 20,
      valid60s: 18,
      valid60sDuration: 150,
      valid60sRate: "72.0%",
      valid3min: 12,
      valid10min: 6,
      valid10minDuration: 90,
      newKP: 2,
      todayValidTotal: 28,
      newOpportunities: 1,
      newIntentions: 3,
      newPotential: 4,
      newInterest: 6,
      wonDeals: 0,
      newRobotTests: 1
    },
    {
      employee: "王五",
      department: "三区一部",
      wechatDeepChat: 15,
      todayPerformance: 3800,
      wechatFriends: 420,
      touchCount: 52,
      touchRate: "12.4%",
      newWechatFriends: 7,
      momentsCount: 4,
      momentsComments: 12,
      momentsLikes: 35,
      outboundCalls: 45,
      callDuration: 160,
      connectedCalls: 18,
      connectionRate: "40.0%",
      valid30s: 15,
      valid60s: 12,
      valid60sDuration: 120,
      valid60sRate: "66.7%",
      valid3min: 8,
      valid10min: 4,
      valid10minDuration: 60,
      newKP: 4,
      todayValidTotal: 22,
      newOpportunities: 3,
      newIntentions: 2,
      newPotential: 5,
      newInterest: 7,
      wonDeals: 2,
      newRobotTests: 0
    },
    {
      employee: "赵六",
      department: "一区二部",
      wechatDeepChat: 6,
      todayPerformance: 2400,
      wechatFriends: 180,
      touchCount: 22,
      touchRate: "12.2%",
      newWechatFriends: 2,
      momentsCount: 1,
      momentsComments: 3,
      momentsLikes: 8,
      outboundCalls: 35,
      callDuration: 90,
      connectedCalls: 12,
      connectionRate: "34.3%",
      valid30s: 10,
      valid60s: 8,
      valid60sDuration: 60,
      valid60sRate: "66.7%",
      valid3min: 5,
      valid10min: 2,
      valid10minDuration: 30,
      newKP: 1,
      todayValidTotal: 15,
      newOpportunities: 1,
      newIntentions: 1,
      newPotential: 2,
      newInterest: 3,
      wonDeals: 0,
      newRobotTests: 0
    },
    {
      employee: "孙七",
      department: "二区二部",
      wechatDeepChat: 10,
      todayPerformance: 4600,
      wechatFriends: 250,
      touchCount: 35,
      touchRate: "14.0%",
      newWechatFriends: 4,
      momentsCount: 3,
      momentsComments: 7,
      momentsLikes: 20,
      outboundCalls: 55,
      callDuration: 140,
      connectedCalls: 20,
      connectionRate: "36.4%",
      valid30s: 18,
      valid60s: 15,
      valid60sDuration: 110,
      valid60sRate: "75.0%",
      valid3min: 10,
      valid10min: 5,
      valid10minDuration: 75,
      newKP: 2,
      todayValidTotal: 25,
      newOpportunities: 2,
      newIntentions: 2,
      newPotential: 3,
      newInterest: 5,
      wonDeals: 1,
      newRobotTests: 0
    },
    {
      employee: "周八",
      department: "三区二部",
      wechatDeepChat: 18,
      todayPerformance: 6200,
      wechatFriends: 380,
      touchCount: 48,
      touchRate: "12.6%",
      newWechatFriends: 6,
      momentsCount: 4,
      momentsComments: 10,
      momentsLikes: 28,
      outboundCalls: 40,
      callDuration: 120,
      connectedCalls: 15,
      connectionRate: "37.5%",
      valid30s: 12,
      valid60s: 10,
      valid60sDuration: 90,
      valid60sRate: "66.7%",
      valid3min: 7,
      valid10min: 3,
      valid10minDuration: 45,
      newKP: 3,
      todayValidTotal: 20,
      newOpportunities: 2,
      newIntentions: 3,
      newPotential: 4,
      newInterest: 6,
      wonDeals: 1,
      newRobotTests: 1
    },
    {
      employee: "吴九",
      department: "资源拓展部",
      wechatDeepChat: 5,
      todayPerformance: 1800,
      wechatFriends: 150,
      touchCount: 18,
      touchRate: "12.0%",
      newWechatFriends: 2,
      momentsCount: 2,
      momentsComments: 4,
      momentsLikes: 12,
      outboundCalls: 65,
      callDuration: 200,
      connectedCalls: 28,
      connectionRate: "43.1%",
      valid30s: 25,
      valid60s: 20,
      valid60sDuration: 160,
      valid60sRate: "71.4%",
      valid3min: 15,
      valid10min: 8,
      valid10minDuration: 120,
      newKP: 5,
      todayValidTotal: 30,
      newOpportunities: 1,
      newIntentions: 2,
      newPotential: 3,
      newInterest: 4,
      wonDeals: 0,
      newRobotTests: 0
    }
  ];

  const filteredData = useMemo(() => {
    return mockTableData.filter(item => {
      if (employeeFilter !== "all" && item.department !== employeeFilter) return false;
      if (wechatDeepChatFilter !== "all") {
        const value = item.wechatDeepChat;
        if (wechatDeepChatFilter === "below-10" && value >= 10) return false;
        if (wechatDeepChatFilter === "10-15" && (value < 10 || value > 15)) return false;
        if (wechatDeepChatFilter === "above-15" && value <= 15) return false;
      }
      if (performanceFilter !== "all") {
        const value = item.todayPerformance;
        if (performanceFilter === "below-3000" && value >= 3000) return false;
        if (performanceFilter === "3000-6000" && (value < 3000 || value > 6000)) return false;
        if (performanceFilter === "above-6000" && value <= 6000) return false;
      }
      if (wechatFriendsFilter !== "all") {
        const value = item.wechatFriends;
        if (wechatFriendsFilter === "below-200" && value >= 200) return false;
        if (wechatFriendsFilter === "200-300" && (value < 200 || value > 300)) return false;
        if (wechatFriendsFilter === "above-300" && value <= 300) return false;
      }
      if (touchCountFilter !== "all") {
        const value = item.touchCount;
        if (touchCountFilter === "below-30" && value >= 30) return false;
        if (touchCountFilter === "30-45" && (value < 30 || value > 45)) return false;
        if (touchCountFilter === "above-45" && value <= 45) return false;
      }
      if (outboundCallsFilter !== "all") {
        const value = item.outboundCalls;
        if (outboundCallsFilter === "below-50" && value >= 50) return false;
        if (outboundCallsFilter === "50-70" && (value < 50 || value > 70)) return false;
        if (outboundCallsFilter === "above-70" && value <= 70) return false;
      }
      if (valid30sFilter !== "all") {
        const value = item.valid30s;
        if (valid30sFilter === "below-15" && value >= 15) return false;
        if (valid30sFilter === "15-25" && (value < 15 || value > 25)) return false;
        if (valid30sFilter === "above-25" && value <= 25) return false;
      }
      return true;
    });
  }, [employeeFilter, wechatDeepChatFilter, performanceFilter, wechatFriendsFilter, touchCountFilter, outboundCallsFilter, valid30sFilter]);

  const departmentStats = {
    "一区一部": {
      failedEmployees: [
        { name: "张三", metric: "30S有效外呼", value: 28, target: 40, status: "不达标" },
        { name: "张三", metric: "朋友圈数", value: 3, target: 3, status: "达标" }
      ]
    },
    "一区二部": {
      failedEmployees: [
        { name: "赵六", metric: "30S有效外呼", value: 10, target: 40, status: "不达标" },
        { name: "赵六", metric: "朋友圈数", value: 1, target: 3, status: "不达标" }
      ]
    },
    "二区一部": {
      failedEmployees: [
        { name: "李四", metric: "30S有效外呼", value: 20, target: 40, status: "不达标" },
        { name: "李四", metric: "朋友圈数", value: 2, target: 3, status: "不达标" }
      ]
    },
    "二区二部": {
      failedEmployees: [
        { name: "孙七", metric: "30S有效外呼", value: 18, target: 40, status: "不达标" },
        { name: "孙七", metric: "朋友圈数", value: 3, target: 3, status: "达标" }
      ]
    },
    "三区一部": {
      failedEmployees: [
        { name: "王五", metric: "微信深聊+1分钟电话", value: 15, target: 25, status: "不达标" },
        { name: "王五", metric: "朋友圈数", value: 4, target: 3, status: "达标" }
      ]
    },
    "三区二部": {
      failedEmployees: [
        { name: "周八", metric: "微信深聊+1分钟电话", value: 18, target: 25, status: "不达标" },
        { name: "周八", metric: "朋友圈数", value: 4, target: 3, status: "达标" }
      ]
    },
    "资源拓展部": {
      failedEmployees: [
        { name: "吴九", metric: "新增KP", value: 5, target: 4, status: "达标" },
        { name: "吴九", metric: "30S有效外呼", value: 25, target: 40, status: "不达标" }
      ]
    }
  };

  const FilterSelect = ({ value, onValueChange, options, placeholder }: {
    value: string;
    onValueChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder: string;
  }) => (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-32 h-8">
        <SelectValue placeholder={placeholder} />
        <ChevronDown className="h-3 w-3" />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CRM过程量分析</h1>
          <p className="text-gray-600 mt-1">基于拓客CRM数据的考核指标分析</p>
        </div>
      </div>

      <Tabs defaultValue="table" className="space-y-6">
        <TabsList>
          <TabsTrigger value="table">数据表格</TabsTrigger>
          <TabsTrigger value="dashboard">数据看板</TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <Card className="p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-white min-w-[100px]">
                      <div className="flex flex-col gap-1">
                        <span>员工</span>
                        <FilterSelect
                          value={employeeFilter}
                          onValueChange={setEmployeeFilter}
                          options={[
                            { value: "all", label: "全部部门" },
                            { value: "一区一部", label: "一区一部" },
                            { value: "一区二部", label: "一区二部" },
                            { value: "二区一部", label: "二区一部" },
                            { value: "二区二部", label: "二区二部" },
                            { value: "三区一部", label: "三区一部" },
                            { value: "三区二部", label: "三区二部" },
                            { value: "资源拓展部", label: "资源拓展部" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[120px]">
                      <div className="flex flex-col gap-1">
                        <span>微信深聊+1分钟电话</span>
                        <FilterSelect
                          value={wechatDeepChatFilter}
                          onValueChange={setWechatDeepChatFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-10", label: "10以下" },
                            { value: "10-15", label: "10-15" },
                            { value: "above-15", label: "15以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[100px]">
                      <div className="flex flex-col gap-1">
                        <span>今日业绩</span>
                        <FilterSelect
                          value={performanceFilter}
                          onValueChange={setPerformanceFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-3000", label: "3000以下" },
                            { value: "3000-6000", label: "3000-6000" },
                            { value: "above-6000", label: "6000以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[120px]">
                      <div className="flex flex-col gap-1">
                        <span>微信好友总数</span>
                        <FilterSelect
                          value={wechatFriendsFilter}
                          onValueChange={setWechatFriendsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-200", label: "200以下" },
                            { value: "200-300", label: "200-300" },
                            { value: "above-300", label: "300以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead className="min-w-[100px]">
                      <div className="flex flex-col gap-1">
                        <span>触达数量</span>
                        <FilterSelect
                          value={touchCountFilter}
                          onValueChange={setTouchCountFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-30", label: "30以下" },
                            { value: "30-45", label: "30-45" },
                            { value: "above-45", label: "45以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>触达率</TableHead>
                    <TableHead>新增微信好友数</TableHead>
                    <TableHead>朋友圈数</TableHead>
                    <TableHead>朋友圈评论数</TableHead>
                    <TableHead>朋友圈点赞数</TableHead>
                    <TableHead className="min-w-[80px]">
                      <div className="flex flex-col gap-1">
                        <span>外呼</span>
                        <FilterSelect
                          value={outboundCallsFilter}
                          onValueChange={setOutboundCallsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-50", label: "50以下" },
                            { value: "50-70", label: "50-70" },
                            { value: "above-70", label: "70以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>外呼时长(分钟)</TableHead>
                    <TableHead>接通数</TableHead>
                    <TableHead>接通率</TableHead>
                    <TableHead className="min-w-[120px]">
                      <div className="flex flex-col gap-1">
                        <span>30S有效外呼</span>
                        <FilterSelect
                          value={valid30sFilter}
                          onValueChange={setValid30sFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-15", label: "15以下" },
                            { value: "15-25", label: "15-25" },
                            { value: "above-25", label: "25以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>60S有效外呼</TableHead>
                    <TableHead>60S时长(分钟)</TableHead>
                    <TableHead>60S/接通率</TableHead>
                    <TableHead>3分钟有效外呼</TableHead>
                    <TableHead>10分钟有效外呼</TableHead>
                    <TableHead>10分钟时长</TableHead>
                    <TableHead>新增KP</TableHead>
                    <TableHead>今日有效小计数</TableHead>
                    <TableHead>新增商机数</TableHead>
                    <TableHead>新增意向</TableHead>
                    <TableHead>新增潜在</TableHead>
                    <TableHead>新增兴趣</TableHead>
                    <TableHead>赢单</TableHead>
                    <TableHead>订单新增机器人测试</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="sticky left-0 bg-white font-medium">{item.employee}</TableCell>
                      <TableCell>{item.wechatDeepChat}</TableCell>
                      <TableCell>{item.todayPerformance}</TableCell>
                      <TableCell>{item.wechatFriends}</TableCell>
                      <TableCell>{item.touchCount}</TableCell>
                      <TableCell>{item.touchRate}</TableCell>
                      <TableCell>{item.newWechatFriends}</TableCell>
                      <TableCell>{item.momentsCount}</TableCell>
                      <TableCell>{item.momentsComments}</TableCell>
                      <TableCell>{item.momentsLikes}</TableCell>
                      <TableCell>{item.outboundCalls}</TableCell>
                      <TableCell>{item.callDuration}</TableCell>
                      <TableCell>{item.connectedCalls}</TableCell>
                      <TableCell>{item.connectionRate}</TableCell>
                      <TableCell>{item.valid30s}</TableCell>
                      <TableCell>{item.valid60s}</TableCell>
                      <TableCell>{item.valid60sDuration}</TableCell>
                      <TableCell>{item.valid60sRate}</TableCell>
                      <TableCell>{item.valid3min}</TableCell>
                      <TableCell>{item.valid10min}</TableCell>
                      <TableCell>{item.valid10minDuration}</TableCell>
                      <TableCell>{item.newKP}</TableCell>
                      <TableCell>{item.todayValidTotal}</TableCell>
                      <TableCell>{item.newOpportunities}</TableCell>
                      <TableCell>{item.newIntentions}</TableCell>
                      <TableCell>{item.newPotential}</TableCell>
                      <TableCell>{item.newInterest}</TableCell>
                      <TableCell>{item.wonDeals}</TableCell>
                      <TableCell>{item.newRobotTests}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard">
          <div className="grid gap-6">
            {Object.entries(departmentStats).map(([dept, data]) => (
              <Card key={dept} className="p-6">
                <h3 className="text-lg font-semibold mb-4">{dept}</h3>
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-gray-600">考核指标完成情况</h4>
                  {data.failedEmployees.map((employee, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{employee.name} - {employee.metric}</span>
                        <Badge variant={employee.status === "达标" ? "secondary" : "destructive"}>
                          {employee.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress 
                          value={(employee.value / employee.target) * 100} 
                          className="flex-1 h-2"
                        />
                        <span className="text-sm text-gray-600">
                          {employee.value}/{employee.target}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CRMAnalysis;
