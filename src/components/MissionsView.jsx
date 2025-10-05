//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Plus, Clock, XCircle, Code, Palette, Smartphone, Database, Megaphone, BarChart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const categories = [
  { icon: Code, name: "Développement", color: "bg-orange-100 text-orange-600", borderColor: "border-orange-200" },
  { icon: Smartphone, name: "Mobile", color: "bg-green-100 text-green-600", borderColor: "border-green-200" },
  { icon: Palette, name: "Design", color: "bg-purple-100 text-purple-600", borderColor: "border-purple-200" },
  { icon: Database, name: "Data", color: "bg-blue-100 text-blue-600", borderColor: "border-blue-200" },
  { icon: Megaphone, name: "Marketing", color: "bg-pink-100 text-pink-600", borderColor: "border-pink-200" },
  { icon: BarChart, name: "Analytics", color: "bg-yellow-100 text-yellow-600", borderColor: "border-yellow-200" },
];

const missions = [
  {
    id: 1,
    title: "Développement d'une application e-commerce",
    category: "Développement",
    budget: "500,000 - 750,000 FCFA",
    deadline: "4 semaines",
    status: "pending",
    freelancer: null,
    description: "Besoin d'un développeur pour créer une plateforme e-commerce complète avec système de paiement.",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Design d'une application mobile",
    category: "Design",
    budget: "200,000 FCFA",
    deadline: "2 semaines",
    status: "accepted",
    freelancer: { name: "Adjoua Koffi", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adjoua" },
    description: "Création de maquettes UI/UX pour une application mobile de livraison.",
    skills: ["Figma", "UI/UX", "Mobile Design"],
  },
  {
    id: 3,
    title: "Campagne Marketing Digital",
    category: "Marketing",
    budget: "300,000 FCFA",
    deadline: "3 semaines",
    status: "completed",
    freelancer: { name: "N'Guessan Arnaud", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arnaud" },
    description: "Gestion d'une campagne publicitaire sur les réseaux sociaux.",
    skills: ["Facebook Ads", "Instagram", "SEO"],
  },
  {
    id: 4,
    title: "Développement API REST",
    category: "Développement",
    budget: "400,000 FCFA",
    deadline: "3 semaines",
    status: "pending",
    freelancer: null,
    description: "Création d'une API REST pour une application mobile.",
    skills: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Analyse de données clients",
    category: "Data",
    budget: "600,000 FCFA",
    deadline: "5 semaines",
    status: "accepted",
    freelancer: { name: "Kouadio Marie", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie" },
    description: "Analyse des données clients pour optimiser la stratégie marketing.",
    skills: ["Python", "SQL", "Power BI"],
  },
];

export function MissionsView({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending": return <Badge className="bg-yellow-100 text-yellow-700">En attente</Badge>;
      case "accepted": return <Badge className="bg-blue-100 text-blue-700">Acceptée</Badge>;
      case "completed": return <Badge className="bg-green-100 text-green-700">Terminée</Badge>;
      default: return null;
    }
  };

  const filteredMissions = missions.filter((mission) => {
    if (activeTab !== "all" && mission.status !== activeTab) return false;
    if (selectedCategory && mission.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => onNavigate("landing")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary rounded-full">
            <Plus className="w-4 h-4 mr-2" /> Nouvelle mission
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl mb-2">Mes Missions</h1>
          <p className="text-muted-foreground mb-8">Gérez vos projets et suivez leur progression</p>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="mb-4">Parcourir par domaine</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <motion.div key={category.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}>
                  <Card
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    className={`p-6 text-center cursor-pointer hover:shadow-lg transition-all group hover:-translate-y-1 border-2 ${
                      selectedCategory === category.name ? category.borderColor : ""
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm">{category.name}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Missions Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-white rounded-full p-1 mb-6">
              <TabsTrigger value="all" className="rounded-full">Toutes ({missions.length})</TabsTrigger>
              <TabsTrigger value="pending" className="rounded-full">En attente ({missions.filter(m => m.status==="pending").length})</TabsTrigger>
              <TabsTrigger value="accepted" className="rounded-full">Acceptées ({missions.filter(m => m.status==="accepted").length})</TabsTrigger>
              <TabsTrigger value="completed" className="rounded-full">Terminées ({missions.filter(m => m.status==="completed").length})</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredMissions.map((mission, index) => (
                  <motion.div key={mission.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <Card className="p-6 hover:shadow-lg transition-all group hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg mb-2">{mission.title}</h3>
                          <Badge variant="outline">{mission.category}</Badge>
                        </div>
                        {getStatusBadge(mission.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{mission.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">{mission.skills.map(skill => <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>)}</div>
                      <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Budget</p>
                          <p className="text-sm text-primary">{mission.budget}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Délai</p>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <p className="text-sm">{mission.deadline}</p>
                          </div>
                        </div>
                      </div>
                      {mission.freelancer ? (
                        <div className="flex items-center gap-2 pt-4 border-t">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={mission.freelancer.photo} alt={mission.freelancer.name} />
                            <AvatarFallback>{mission.freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm">{mission.freelancer.name}</p>
                            <p className="text-xs text-muted-foreground">Freelance assigné</p>
                          </div>
                          <Button variant="outline" size="sm" className="rounded-full">Voir détails</Button>
                        </div>
                      ) : (
                        <div className="pt-4 border-t">
                          <Button variant="outline" className="w-full rounded-full">
                            Trouver un freelance
                          </Button>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredMissions.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <XCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="mb-2">Aucune mission trouvée</h3>
                  <p className="text-muted-foreground mb-6">{selectedCategory ? "Aucune mission dans cette catégorie" : "Vous n'avez pas encore de missions"}</p>
                  <Button className="bg-gradient-to-r from-primary to-secondary rounded-full">
                    <Plus className="w-4 h-4 mr-2" /> Créer une mission
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
