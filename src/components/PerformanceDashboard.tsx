
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const PerformanceDashboard = () => {
  const departmentPerformance = [
    {
      name: "一区一部",
      performance: {
        current: 85,
        target: 100,
        lastYear: 78,
        lastMonth: 82
      },
      status: "上升",
      color: "green"
    },
    {
      name: "一区二部",
      performance: {
        current: 75,
        target: 100,
        lastYear: 82,
        lastMonth: 78
      },
      status: "下滑",
      color: "red"
    },
    {
      name: "二区一部",
      performance: {
        current: 72,
        target: 100, 
        lastYear: 80,
        lastMonth: 75
      },
      status: "下滑",
      color: "red"
    },
    {
      name: "二区二部",
      performance: {
        current: 88,
        target: 100,
        lastYear: 85,
        lastMonth: 86
      },
      status: "上升",
      color: "green"
    },
    {
      name: "三区一部",
      performance: {
        current: 68,
        target: 100,
        lastYear: 65,
        lastMonth: 70
      },
      status: "下滑",
      color: "red"
    },
    {
      name: "三区二部",
      performance: {
        current: 90,
        target: 100,
        lastYear: 87,
        lastMonth: 89
      },
      status: "上升",
      color: "green"
    },
    {
      name: "资源拓展部",
      performance: {
        current: 80,
        target: 100,
        lastYear: 75,
        lastMonth: 77
      },
      status: "上升",
      color: "green"
    }
  ];

  const businessSummary = {
    summary: "当前月份整体业绩表现：一区一部、二区二部、三区二部、资源拓展部表现优异，业绩呈上升趋势；一区二部、二区一部和三区一部出现下滑趋势，需要重点关注。",
    recommendations: {
      "一区二部": "建议加强电销技能培训，提高30S有效外呼转化率",
      "二区一部": "建议优化外呼时间安排，提升接通率和有效沟通时长",
      "三区一部": "建议增加微信深度沟通频次，优化朋友圈营销策略"
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">部门业绩看板</h1>
          <p className="text-gray-600 mt-1">总览部门当月各项指标表现</p>
        </div>
      </div>

      <div className="grid gap-6">
        {departmentPerformance.map((dept) => (
          <Card key={dept.name} className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{dept.name}</h3>
              <Badge 
                variant={dept.color === "green" ? "default" : "destructive"}
                className={dept.color === "green" ? "bg-green-100 text-green-700" : ""}
              >
                {dept.status}
              </Badge>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">月度目标完成度</span>
                  <span className="text-sm text-gray-600">{dept.performance.current}%</span>
                </div>
                <Progress value={dept.performance.current} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">同比去年: </span>
                  <span className={dept.performance.current > dept.performance.lastYear ? "text-green-600" : "text-red-600"}>
                    {dept.performance.current > dept.performance.lastYear ? "+" : ""}
                    {((dept.performance.current - dept.performance.lastYear) / dept.performance.lastYear * 100).toFixed(1)}%
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">环比上月: </span>
                  <span className={dept.performance.current > dept.performance.lastMonth ? "text-green-600" : "text-red-600"}>
                    {dept.performance.current > dept.performance.lastMonth ? "+" : ""}
                    {((dept.performance.current - dept.performance.lastMonth) / dept.performance.lastMonth * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">业务动态总结</h3>
        <div className="space-y-4">
          <p className="text-gray-700">{businessSummary.summary}</p>
          
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">改进建议</h4>
            {Object.entries(businessSummary.recommendations).map(([dept, suggestion]) => (
              <div key={dept} className="flex items-start gap-2">
                <Badge variant="outline" className="text-red-700 border-red-200 bg-red-50">
                  {dept}
                </Badge>
                <span className="text-sm text-gray-700">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PerformanceDashboard;
