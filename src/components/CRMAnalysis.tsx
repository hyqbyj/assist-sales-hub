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
  const [touchRateFilter, setTouchRateFilter] = useState("all");
  const [wechatDeepFilter, setWechatDeepFilter] = useState("all");
  const [deepChatRateFilter, setDeepChatRateFilter] = useState("all");
  const [newWechatFriendsFilter, setNewWechatFriendsFilter] = useState("all");
  const [momentsCountFilter, setMomentsCountFilter] = useState("all");
  const [momentsCommentsFilter, setMomentsCommentsFilter] = useState("all");
  const [momentsLikesFilter, setMomentsLikesFilter] = useState("all");
  const [outboundCallsFilter, setOutboundCallsFilter] = useState("all");
  const [callDurationFilter, setCallDurationFilter] = useState("all");
  const [connectedCallsFilter, setConnectedCallsFilter] = useState("all");
  const [connectionRateFilter, setConnectionRateFilter] = useState("all");
  const [valid30sFilter, setValid30sFilter] = useState("all");
  const [valid60sFilter, setValid60sFilter] = useState("all");
  const [valid60sDurationFilter, setValid60sDurationFilter] = useState("all");
  const [valid60sRateFilter, setValid60sRateFilter] = useState("all");
  const [valid3minFilter, setValid3minFilter] = useState("all");
  const [valid10minFilter, setValid10minFilter] = useState("all");
  const [valid10minDurationFilter, setValid10minDurationFilter] = useState("all");
  const [newKPFilter, setNewKPFilter] = useState("all");
  const [todayValidTotalFilter, setTodayValidTotalFilter] = useState("all");
  const [newOpportunitiesFilter, setNewOpportunitiesFilter] = useState("all");
  const [newIntentionsFilter, setNewIntentionsFilter] = useState("all");
  const [newPotentialFilter, setNewPotentialFilter] = useState("all");
  const [newInterestFilter, setNewInterestFilter] = useState("all");
  const [wonDealsFilter, setWonDealsFilter] = useState("all");
  const [newRobotTestsFilter, setNewRobotTestsFilter] = useState("all");

  const mockTableData = [
    {
      employee: "张三",
      department: "一区一部",
      wechatDeepChat: 12,
      todayPerformance: 8500,
      wechatFriends: 320,
      touchCount: 45,
      touchRate: "14.1%",
      wechatDeep: 15,
      deepChatRate: "33.3%",
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
      wechatDeep: 12,
      deepChatRate: "31.6%",
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
      wechatDeep: 18,
      deepChatRate: "34.6%",
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
            wechatDeep: 8,
      deepChatRate: "36.4%",
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
      wechatDeep: 14,
      deepChatRate: "40.0%",
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
      wechatDeep: 20,
      deepChatRate: "41.7%",
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
      wechatDeep: 6,
      deepChatRate: "33.3%",
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

  // 解析百分比字符串为数字
  const parsePercentage = (percentStr: string): number => {
    return parseFloat(percentStr.replace('%', ''));
  };

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

      if (touchRateFilter !== "all") {
        const value = parsePercentage(item.touchRate);
        if (touchRateFilter === "below-13" && value >= 13) return false;
        if (touchRateFilter === "13-14" && (value < 13 || value > 14)) return false;
        if (touchRateFilter === "above-14" && value <= 14) return false;
      }

      if (wechatDeepFilter !== "all") {
        const value = item.wechatDeep;
        if (wechatDeepFilter === "below-10" && value >= 10) return false;
        if (wechatDeepFilter === "10-15" && (value < 10 || value > 15)) return false;
        if (wechatDeepFilter === "above-15" && value <= 15) return false;
      }

      if (deepChatRateFilter !== "all") {
        const value = parsePercentage(item.deepChatRate);
        if (deepChatRateFilter === "below-35" && value >= 35) return false;
        if (deepChatRateFilter === "35-40" && (value < 35 || value > 40)) return false;
        if (deepChatRateFilter === "above-40" && value <= 40) return false;
      }

      if (newWechatFriendsFilter !== "all") {
        const value = item.newWechatFriends;
        if (newWechatFriendsFilter === "below-3" && value >= 3) return false;
        if (newWechatFriendsFilter === "3-5" && (value < 3 || value > 5)) return false;
        if (newWechatFriendsFilter === "above-5" && value <= 5) return false;
      }

      if (momentsCountFilter !== "all") {
        const value = item.momentsCount;
        if (momentsCountFilter === "below-2" && value >= 2) return false;
        if (momentsCountFilter === "2-3" && (value < 2 || value > 3)) return false;
        if (momentsCountFilter === "above-3" && value <= 3) return false;
      }

      if (momentsCommentsFilter !== "all") {
        const value = item.momentsComments;
        if (momentsCommentsFilter === "below-5" && value >= 5) return false;
        if (momentsCommentsFilter === "5-8" && (value < 5 || value > 8)) return false;
        if (momentsCommentsFilter === "above-8" && value <= 8) return false;
      }

      if (momentsLikesFilter !== "all") {
        const value = item.momentsLikes;
        if (momentsLikesFilter === "below-15" && value >= 15) return false;
        if (momentsLikesFilter === "15-25" && (value < 15 || value > 25)) return false;
        if (momentsLikesFilter === "above-25" && value <= 25) return false;
      }
      
      if (outboundCallsFilter !== "all") {
        const value = item.outboundCalls;
        if (outboundCallsFilter === "below-50" && value >= 50) return false;
        if (outboundCallsFilter === "50-70" && (value < 50 || value > 70)) return false;
        if (outboundCallsFilter === "above-70" && value <= 70) return false;
      }

      if (callDurationFilter !== "all") {
        const value = item.callDuration;
        if (callDurationFilter === "below-120" && value >= 120) return false;
        if (callDurationFilter === "120-180" && (value < 120 || value > 180)) return false;
        if (callDurationFilter === "above-180" && value <= 180) return false;
      }

      if (connectedCallsFilter !== "all") {
        const value = item.connectedCalls;
        if (connectedCallsFilter === "below-20" && value >= 20) return false;
        if (connectedCallsFilter === "20-30" && (value < 20 || value > 30)) return false;
        if (connectedCallsFilter === "above-30" && value <= 30) return false;
      }

      if (connectionRateFilter !== "all") {
        const value = parsePercentage(item.connectionRate);
        if (connectionRateFilter === "below-35" && value >= 35) return false;
        if (connectionRateFilter === "35-40" && (value < 35 || value > 40)) return false;
        if (connectionRateFilter === "above-40" && value <= 40) return false;
      }
      
      if (valid30sFilter !== "all") {
        const value = item.valid30s;
        if (valid30sFilter === "below-15" && value >= 15) return false;
        if (valid30sFilter === "15-25" && (value < 15 || value > 25)) return false;
        if (valid30sFilter === "above-25" && value <= 25) return false;
      }

      if (valid60sFilter !== "all") {
        const value = item.valid60s;
        if (valid60sFilter === "below-12" && value >= 12) return false;
        if (valid60sFilter === "12-20" && (value < 12 || value > 20)) return false;
        if (valid60sFilter === "above-20" && value <= 20) return false;
      }

      if (valid60sDurationFilter !== "all") {
        const value = item.valid60sDuration;
        if (valid60sDurationFilter === "below-100" && value >= 100) return false;
        if (valid60sDurationFilter === "100-150" && (value < 100 || value > 150)) return false;
        if (valid60sDurationFilter === "above-150" && value <= 150) return false;
      }

      if (valid60sRateFilter !== "all") {
        const value = parsePercentage(item.valid60sRate);
        if (valid60sRateFilter === "below-65" && value >= 65) return false;
        if (valid60sRateFilter === "65-70" && (value < 65 || value > 70)) return false;
        if (valid60sRateFilter === "above-70" && value <= 70) return false;
      }

      if (valid3minFilter !== "all") {
        const value = item.valid3min;
        if (valid3minFilter === "below-8" && value >= 8) return false;
        if (valid3minFilter === "8-12" && (value < 8 || value > 12)) return false;
        if (valid3minFilter === "above-12" && value <= 12) return false;
      }

      if (valid10minFilter !== "all") {
        const value = item.valid10min;
        if (valid10minFilter === "below-4" && value >= 4) return false;
        if (valid10minFilter === "4-6" && (value < 4 || value > 6)) return false;
        if (valid10minFilter === "above-6" && value <= 6) return false;
      }

      if (valid10minDurationFilter !== "all") {
        const value = item.valid10minDuration;
        if (valid10minDurationFilter === "below-60" && value >= 60) return false;
        if (valid10minDurationFilter === "60-90" && (value < 60 || value > 90)) return false;
        if (valid10minDurationFilter === "above-90" && value <= 90) return false;
      }

      if (newKPFilter !== "all") {
        const value = item.newKP;
        if (newKPFilter === "below-2" && value >= 2) return false;
        if (newKPFilter === "2-3" && (value < 2 || value > 3)) return false;
        if (newKPFilter === "above-3" && value <= 3) return false;
      }

      if (todayValidTotalFilter !== "all") {
        const value = item.todayValidTotal;
        if (todayValidTotalFilter === "below-20" && value >= 20) return false;
        if (todayValidTotalFilter === "20-30" && (value < 20 || value > 30)) return false;
        if (todayValidTotalFilter === "above-30" && value <= 30) return false;
      }

      if (newOpportunitiesFilter !== "all") {
        const value = item.newOpportunities;
        if (newOpportunitiesFilter === "0" && value !== 0) return false;
        if (newOpportunitiesFilter === "1-2" && (value < 1 || value > 2)) return false;
        if (newOpportunitiesFilter === "above-2" && value <= 2) return false;
      }

      if (newIntentionsFilter !== "all") {
        const value = item.newIntentions;
        if (newIntentionsFilter === "below-2" && value >= 2) return false;
        if (newIntentionsFilter === "2-3" && (value < 2 || value > 3)) return false;
        if (newIntentionsFilter === "above-3" && value <= 3) return false;
      }

      if (newPotentialFilter !== "all") {
        const value = item.newPotential;
        if (newPotentialFilter === "below-3" && value >= 3) return false;
        if (newPotentialFilter === "3-5" && (value < 3 || value > 5)) return false;
        if (newPotentialFilter === "above-5" && value <= 5) return false;
      }

      if (newInterestFilter !== "all") {
        const value = item.newInterest;
        if (newInterestFilter === "below-5" && value >= 5) return false;
        if (newInterestFilter === "5-7" && (value < 5 || value > 7)) return false;
        if (newInterestFilter === "above-7" && value <= 7) return false;
      }

      if (wonDealsFilter !== "all") {
        const value = item.wonDeals;
        if (wonDealsFilter === "0" && value !== 0) return false;
        if (wonDealsFilter === "1" && value !== 1) return false;
        if (wonDealsFilter === "above-1" && value <= 1) return false;
      }

      if (newRobotTestsFilter !== "all") {
        const value = item.newRobotTests;
        if (newRobotTestsFilter === "0" && value !== 0) return false;
        if (newRobotTestsFilter === "1" && value !== 1) return false;
        if (newRobotTestsFilter === "above-1" && value <= 1) return false;
      }

      return true;
    });
  }, [employeeFilter, wechatDeepChatFilter, performanceFilter, wechatFriendsFilter, touchCountFilter, touchRateFilter, wechatDeepFilter, deepChatRateFilter, newWechatFriendsFilter, momentsCountFilter, momentsCommentsFilter, momentsLikesFilter, outboundCallsFilter, callDurationFilter, connectedCallsFilter, connectionRateFilter, valid30sFilter, valid60sFilter, valid60sDurationFilter, valid60sRateFilter, valid3minFilter, valid10minFilter, valid10minDurationFilter, newKPFilter, todayValidTotalFilter, newOpportunitiesFilter, newIntentionsFilter, newPotentialFilter, newInterestFilter, wonDealsFilter, newRobotTestsFilter]);

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
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>触达/总数</span>
                        <FilterSelect
                          value={touchRateFilter}
                          onValueChange={setTouchRateFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-13", label: "13%以下" },
                            { value: "13-14", label: "13%-14%" },
                            { value: "above-14", label: "14%以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>微信深聊</span>
                        <FilterSelect
                          value={wechatDeepFilter}
                          onValueChange={setWechatDeepFilter}
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
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>深聊/沟通数</span>
                        <FilterSelect
                          value={deepChatRateFilter}
                          onValueChange={setDeepChatRateFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-35", label: "35%以下" },
                            { value: "35-40", label: "35%-40%" },
                            { value: "above-40", label: "40%以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>新增微信好友数</span>
                        <FilterSelect
                          value={newWechatFriendsFilter}
                          onValueChange={setNewWechatFriendsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-3", label: "3以下" },
                            { value: "3-5", label: "3-5" },
                            { value: "above-5", label: "5以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>朋友圈数</span>
                        <FilterSelect
                          value={momentsCountFilter}
                          onValueChange={setMomentsCountFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-2", label: "2以下" },
                            { value: "2-3", label: "2-3" },
                            { value: "above-3", label: "3以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>朋友圈评论数</span>
                        <FilterSelect
                          value={momentsCommentsFilter}
                          onValueChange={setMomentsCommentsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-5", label: "5以下" },
                            { value: "5-8", label: "5-8" },
                            { value: "above-8", label: "8以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>朋友圈点赞数</span>
                        <FilterSelect
                          value={momentsLikesFilter}
                          onValueChange={setMomentsLikesFilter}
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
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>外呼时长(分钟)</span>
                        <FilterSelect
                          value={callDurationFilter}
                          onValueChange={setCallDurationFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-120", label: "120以下" },
                            { value: "120-180", label: "120-180" },
                            { value: "above-180", label: "180以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>接通数</span>
                        <FilterSelect
                          value={connectedCallsFilter}
                          onValueChange={setConnectedCallsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-20", label: "20以下" },
                            { value: "20-30", label: "20-30" },
                            { value: "above-30", label: "30以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>接通率</span>
                        <FilterSelect
                          value={connectionRateFilter}
                          onValueChange={setConnectionRateFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-35", label: "35%以下" },
                            { value: "35-40", label: "35%-40%" },
                            { value: "above-40", label: "40%以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
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
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>60S有效外呼</span>
                        <FilterSelect
                          value={valid60sFilter}
                          onValueChange={setValid60sFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-12", label: "12以下" },
                            { value: "12-20", label: "12-20" },
                            { value: "above-20", label: "20以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>60S时长(分钟)</span>
                        <FilterSelect
                          value={valid60sDurationFilter}
                          onValueChange={setValid60sDurationFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-100", label: "100以下" },
                            { value: "100-150", label: "100-150" },
                            { value: "above-150", label: "150以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>60S/接通率</span>
                        <FilterSelect
                          value={valid60sRateFilter}
                          onValueChange={setValid60sRateFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-65", label: "65%以下" },
                            { value: "65-70", label: "65%-70%" },
                            { value: "above-70", label: "70%以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>3分钟有效外呼</span>
                        <FilterSelect
                          value={valid3minFilter}
                          onValueChange={setValid3minFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-8", label: "8以下" },
                            { value: "8-12", label: "8-12" },
                            { value: "above-12", label: "12以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>10分钟有效外呼</span>
                        <FilterSelect
                          value={valid10minFilter}
                          onValueChange={setValid10minFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-4", label: "4以下" },
                            { value: "4-6", label: "4-6" },
                            { value: "above-6", label: "6以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>10分钟时长</span>
                        <FilterSelect
                          value={valid10minDurationFilter}
                          onValueChange={setValid10minDurationFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-60", label: "60以下" },
                            { value: "60-90", label: "60-90" },
                            { value: "above-90", label: "90以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>新增KP</span>
                        <FilterSelect
                          value={newKPFilter}
                          onValueChange={setNewKPFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-2", label: "2以下" },
                            { value: "2-3", label: "2-3" },
                            { value: "above-3", label: "3以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>今日有效小计数</span>
                        <FilterSelect
                          value={todayValidTotalFilter}
                          onValueChange={setTodayValidTotalFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-20", label: "20以下" },
                            { value: "20-30", label: "20-30" },
                            { value: "above-30", label: "30以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>新增商机数</span>
                        <FilterSelect
                          value={newOpportunitiesFilter}
                          onValueChange={setNewOpportunitiesFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "0", label: "0个" },
                            { value: "1-2", label: "1-2个" },
                            { value: "above-2", label: "2个以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>新增意向</span>
                        <FilterSelect
                          value={newIntentionsFilter}
                          onValueChange={setNewIntentionsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-2", label: "2以下" },
                            { value: "2-3", label: "2-3" },
                            { value: "above-3", label: "3以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>新增潜在</span>
                        <FilterSelect
                          value={newPotentialFilter}
                          onValueChange={setNewPotentialFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-3", label: "3以下" },
                            { value: "3-5", label: "3-5" },
                            { value: "above-5", label: "5以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>新增兴趣</span>
                        <FilterSelect
                          value={newInterestFilter}
                          onValueChange={setNewInterestFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "below-5", label: "5以下" },
                            { value: "5-7", label: "5-7" },
                            { value: "above-7", label: "7以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>赢单</span>
                        <FilterSelect
                          value={wonDealsFilter}
                          onValueChange={setWonDealsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "0", label: "0个" },
                            { value: "1", label: "1个" },
                            { value: "above-1", label: "1个以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex flex-col gap-1">
                        <span>订单新增机器人测试</span>
                        <FilterSelect
                          value={newRobotTestsFilter}
                          onValueChange={setNewRobotTestsFilter}
                          options={[
                            { value: "all", label: "全部" },
                            { value: "0", label: "0个" },
                            { value: "1", label: "1个" },
                            { value: "above-1", label: "1个以上" }
                          ]}
                          placeholder="全部"
                        />
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell className="sticky left-0 bg-white font-medium">
                        <div>
                          <div>{item.employee}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.department}</div>
                        </div>
                      </TableCell>
                      <TableCell>{item.wechatDeepChat}</TableCell>
                      <TableCell>{item.todayPerformance}</TableCell>
                      <TableCell>{item.wechatFriends}</TableCell>
                      <TableCell>{item.touchCount}</TableCell>
                      <TableCell>{item.touchRate}</TableCell>
                      <TableCell>{item.wechatDeep}</TableCell>
                      <TableCell>{item.deepChatRate}</TableCell>
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
