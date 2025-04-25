
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Check, CircleX, CircleHalf } from "lucide-react";

interface Project {
  name: string;
  status: "completed" | "in-progress" | "not-started";
  progress: number;
}

const projects: Project[] = [
  { name: "Annual Report 2024", status: "completed", progress: 100 },
  { name: "Q1 Performance Review", status: "in-progress", progress: 65 },
  { name: "Team Building Event", status: "in-progress", progress: 45 },
  { name: "Budget Planning", status: "not-started", progress: 0 },
];

const getStatusIcon = (status: Project["status"]) => {
  switch (status) {
    case "completed":
      return <Check className="w-4 h-4 text-green-500" />;
    case "in-progress":
      return <CircleHalf className="w-4 h-4 text-yellow-500" />;
    case "not-started":
      return <CircleX className="w-4 h-4 text-red-500" />;
  }
};

const ProjectsCard = () => {
  return (
    <Card className="w-full shadow-lg bg-white/80 border-0">
      <CardHeader className="pb-2 p-3">
        <CardTitle className="flex items-center gap-1.5 text-sm text-primary">
          <FileText className="w-4 h-4" />
          Active Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.name} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5">
                  {getStatusIcon(project.status)}
                  <span className="font-medium">{project.name}</span>
                </div>
                <span className="text-xs text-gray-500">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-1.5" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
