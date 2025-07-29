
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AttendanceStats = () => {
  const attendanceData = [
    {
      department: "一区一部",
      employees: [
        {
          name: "张三",
          stats: {
            absent: { value: 1, max: 5 },
            earlyLeave: { value: 2, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 185, max: 200 }
          }
        },
        {
          name: "李明",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 1, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 195, max: 200 }
          }
        }
      ]
    },
    {
      department: "一区二部",
      employees: [
        {
          name: "赵六",
          stats: {
            absent: { value: 2, max: 5 },
            earlyLeave: { value: 3, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 160, max: 200 }
          }
        },
        {
          name: "王华",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 1, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 190, max: 200 }
          }
        }
      ]
    },
    {
      department: "二区一部",
      employees: [
        {
          name: "李四",
          stats: {
            absent: { value: 1, max: 5 },
            earlyLeave: { value: 2, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 175, max: 200 }
          }
        },
        {
          name: "陈强",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 0, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 198, max: 200 }
          }
        }
      ]
    },
    {
      department: "二区二部",
      employees: [
        {
          name: "孙七",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 1, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 188, max: 200 }
          }
        },
        {
          name: "刘伟",
          stats: {
            absent: { value: 1, max: 5 },
            earlyLeave: { value: 2, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 170, max: 200 }
          }
        }
      ]
    },
    {
      department: "三区一部",
      employees: [
        {
          name: "王五",
          stats: {
            absent: { value: 2, max: 5 },
            earlyLeave: { value: 3, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 155, max: 200 }
          }
        },
        {
          name: "张敏",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 1, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 185, max: 200 }
          }
        }
      ]
    },
    {
      department: "三区二部",
      employees: [
        {
          name: "周八",
          stats: {
            absent: { value: 1, max: 5 },
            earlyLeave: { value: 1, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 180, max: 200 }
          }
        },
        {
          name: "杨丽",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 2, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 175, max: 200 }
          }
        }
      ]
    },
    {
      department: "资源拓展部",
      employees: [
        {
          name: "吴九",
          stats: {
            absent: { value: 0, max: 5 },
            earlyLeave: { value: 1, max: 5 },
            missing: { value: 0, max: 5 },
            workHours: { value: 195, max: 200 }
          }
        },
        {
          name: "林峰",
          stats: {
            absent: { value: 1, max: 5 },
            earlyLeave: { value: 0, max: 5 },
            missing: { value: 1, max: 5 },
            workHours: { value: 185, max: 200 }
          }
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">员工考勤情况</h1>
          <p className="text-gray-600 mt-1">分部门展示具体员工考勤统计数据</p>
        </div>
      </div>

      <div className="grid gap-6">
        {attendanceData.map((dept) => (
          <Card key={dept.department} className="p-6">
            <h3 className="text-lg font-semibold mb-6">{dept.department}</h3>
            
            {dept.employees.map((employee, empIndex) => (
              <div key={empIndex} className="mb-6 last:mb-0">
                <h4 className="text-md font-medium text-gray-800 mb-4">{employee.name}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">旷工天数</span>
                      <span className="text-sm text-gray-600">{employee.stats.absent.value}天</span>
                    </div>
                    <Progress 
                      value={(employee.stats.absent.value / employee.stats.absent.max) * 100}
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">早退天数</span>
                      <span className="text-sm text-gray-600">{employee.stats.earlyLeave.value}天</span>
                    </div>
                    <Progress 
                      value={(employee.stats.earlyLeave.value / employee.stats.earlyLeave.max) * 100}
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">打卡缺勤数</span>
                      <span className="text-sm text-gray-600">{employee.stats.missing.value}次</span>
                    </div>
                    <Progress 
                      value={(employee.stats.missing.value / employee.stats.missing.max) * 100}
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">工时</span>
                      <span className="text-sm text-gray-600">{employee.stats.workHours.value}小时</span>
                    </div>
                    <Progress 
                      value={(employee.stats.workHours.value / employee.stats.workHours.max) * 100}
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AttendanceStats;
