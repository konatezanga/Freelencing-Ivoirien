import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { ServiceCatalog } from "./components/ServiceCatalog";
import { FreelancerProfile } from "./components/FreelancerProfile";
import { MessagingView } from "./components/MessagingView";
import { MissionsView } from "./components/MissionsView";
import { FreelancerDashboard } from "./components/FreelancerDashboard";
import { AuthForm } from "./components/AuthForm";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  const navigate = (page, data) => {
    if (data) {
      setSelectedFreelancer(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full h-full">
      {currentPage === "landing" && <LandingPage onNavigate={navigate} />}
      {currentPage === "catalog" && <ServiceCatalog onNavigate={navigate} />}
      {currentPage === "profile" && (
        <FreelancerProfile
          onNavigate={navigate}
          freelancer={selectedFreelancer}
        />
      )}
      {currentPage === "messages" && <MessagingView onNavigate={navigate} />}
      {currentPage === "missions" && <MissionsView onNavigate={navigate} />}
      {currentPage === "dashboard" && (
        <FreelancerDashboard onNavigate={navigate} />
      )}
      {currentPage === "auth" && <AuthForm onNavigate={navigate} />}
    </div>
  );
}
