
import { Bot, BarChart3, MessageSquare, FileText, Users, Clock, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { id: "recording", title: "录音分析", icon: BarChart3 },
  { id: "chat", title: "聊天记录分析", icon: MessageSquare },
  { id: "reports", title: "钉钉月报追踪", icon: FileText },
  { id: "crm", title: "CRM过程量分析", icon: TrendingUp },
  { id: "attendance", title: "员工考勤情况", icon: Clock },
  { id: "performance", title: "部门业绩看板", icon: Users },
];

interface AppSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onAIClick: () => void;
}

const AppSidebar = ({ activeTab, onTabChange, onAIClick }: AppSidebarProps) => {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h2 className="font-semibold text-gray-900">销售管理系统</h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="h-8 w-8"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <SidebarContent className="flex-1 bg-white">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      isActive={activeTab === item.id}
                      onClick={() => onTabChange(item.id)}
                      className="w-full justify-start hover:bg-blue-50 hover:text-blue-700 data-[active=true]:bg-blue-100 data-[active=true]:text-blue-700 transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <div className="p-4 border-t bg-white">
          <Button
            onClick={onAIClick}
            className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            <Bot className="h-5 w-5" />
            {!collapsed && <span className="ml-3">AI助理</span>}
          </Button>
        </div>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
