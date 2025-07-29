
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AttendanceStats = () => {
  const departmentData = [
    {
      name: "一区一部",
      stats: {
        absent: { value: 2, max: 10 },
        earlyLeave: { value: 3, max: 10 },
        missing: { value: 1, max: 10 },
        workHours: { value: 168, max: 200 }
      }
    },
    {
      name: "二区一部", 
      stats: {
        absent: { value: 1, max: 10 },
        earlyLeave: { value: 2, max: 10 },
        missing: { value: 0, max: 10 },
        workHours: { value: 185, max: 200 }
      }
    },
    {
      name: "三区一部",
      stats: {
        absent: { value: 3, max: 10 },
        earlyLeave: { value: 4, max: 10 },
        missing: { value: 2, max: 10 },
        workHours: { value: 155, max: 200 }
      }
    }
  ];

  const getProgressColor = (value: number, max: number, isWorkHours: boolean = false) => {
    const percentage = (value / max) * 100;
    if (isWorkHours) {
      if (percentage >= 90) return "bg-green-500";
      if (percentage >= 75) return "bg-yellow-500";
      return "bg-red-500";
    } else {
      if (percentage <= 10) return "bg-green-500";
      if (percentage <= 30) return "bg-yellow-500";
      return "bg-red-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">员工考勤情况</h1>
          <p className="text-gray-600 mt-1">分部门展示员工考勤统计数据</p>
        </div>
      </div>

      <div className="grid gap-6">
        {departmentData.map((dept) => (
          <Card key={dept.name} className="p-6">
            <h3 className="text-lg font-semibold mb-6">{dept.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">旷工天数</span>
                  <span className="text-sm text-gray-600">{dept.stats.absent.value}天</span>
                </div>
                <Progress 
                  value={(dept.stats.absent.value / dept.stats.absent.max) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">早退天数</span>
                  <span className="text-sm text-gray-600">{dept.stats.earlyLeave.value}天</span>
                </div>
                <Progress 
                  value={(dept.stats.earlyLeave.value / dept.stats.earlyLeave.max) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">打卡缺勤数</span>
                  <span className="text-sm text-gray-600">{dept.stats.missing.value}次</span>
                </div>
                <Progress 
                  value={(dept.stats.missing.value / dept.stats.missing.max) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">工时</span>
                  <span className="text-sm text-gray-600">{dept.stats.workHours.value}小时</span>
                </div>
                <Progress 
                  value={(dept.stats.workHours.value / dept.stats.workHours.max) * 100}
                  className="h-2"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AttendanceStats;
