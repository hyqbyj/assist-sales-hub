
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import RecordingAnalysis from "./RecordingAnalysis";
import ChatAnalysis from "./ChatAnalysis";
import DingTalkReports from "./DingTalkReports";
import CRMAnalysis from "./CRMAnalysis";
import AttendanceStats from "./AttendanceStats";
import PerformanceDashboard from "./PerformanceDashboard";
import AIAssistant from "./AIAssistant";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("recording");
  const [showAI, setShowAI] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "recording":
        return <RecordingAnalysis />;
      case "chat":
        return <ChatAnalysis />;
      case "reports":
        return <DingTalkReports />;
      case "crm":
        return <CRMAnalysis />;
      case "attendance":
        return <AttendanceStats />;
      case "performance":
        return <PerformanceDashboard />;
      default:
        return <RecordingAnalysis />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar activeTab={activeTab} onTabChange={setActiveTab} onAIClick={() => setShowAI(true)} />
        
        <main className="flex-1 overflow-hidden">
          <div className="h-full p-6">
            {renderContent()}
          </div>
        </main>

        {showAI && (
          <AIAssistant onClose={() => setShowAI(false)} />
        )}
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
