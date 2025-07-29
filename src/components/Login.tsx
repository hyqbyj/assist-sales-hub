
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Building2 } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Building2 className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">销售部主管AI助理</h1>
          <p className="text-gray-600">企业级销售管理分析平台</p>
        </div>

        <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <div className="text-center space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300">
              <QrCode className="mx-auto h-24 w-24 text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-2">使用钉钉扫码登录</p>
              <p className="text-xs text-gray-400">请打开钉钉APP扫描上方二维码</p>
            </div>

            <div className="pt-4">
              <Button 
                onClick={onLogin}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
              >
                模拟登录（演示用）
              </Button>
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <p>仅支持企业钉钉账号登录</p>
              <p>如有问题请联系系统管理员</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
