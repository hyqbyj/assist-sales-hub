
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CRMAnalysis = () => {
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
    }
  ];

  const departmentStats = {
    "一区一部": {
      failedEmployees: [
        { name: "王五", metric: "30S有效外呼", value: 25, target: 40, status: "不达标" },
        { name: "赵六", metric: "朋友圈数", value: 2, target: 3, status: "不达标" }
      ]
    },
    "三区一部": {
      failedEmployees: [
        { name: "李四", metric: "微信深聊+1分钟电话", value: 18, target: 25, status: "不达标" }
      ]
    }
  };

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
                    <TableHead className="sticky left-0 bg-white">员工</TableHead>
                    <TableHead>微信深聊+1分钟电话</TableHead>
                    <TableHead>今日业绩</TableHead>
                    <TableHead>微信好友总数</TableHead>
                    <TableHead>触达数量</TableHead>
                    <TableHead>触达率</TableHead>
                    <TableHead>新增微信好友数</TableHead>
                    <TableHead>朋友圈数</TableHead>
                    <TableHead>朋友圈评论数</TableHead>
                    <TableHead>朋友圈点赞数</TableHead>
                    <TableHead>外呼</TableHead>
                    <TableHead>外呼时长(分钟)</TableHead>
                    <TableHead>接通数</TableHead>
                    <TableHead>接通率</TableHead>
                    <TableHead>30S有效外呼</TableHead>
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
                  {mockTableData.map((item, index) => (
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
                  <h4 className="text-sm font-medium text-gray-600">考核不合格员工</h4>
                  {data.failedEmployees.map((employee, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{employee.name} - {employee.metric}</span>
                        <Badge variant="destructive">{employee.status}</Badge>
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
