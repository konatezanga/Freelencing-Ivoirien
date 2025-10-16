//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import {
  Home,
  Briefcase,
  MessageCircle,
  User,
  Settings,
  Bell,
  TrendingUp,
  Clock,
  Code,
  Menu,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import PropTypes from "prop-types";

const menuItems = [
  { icon: Home, label: "Accueil", value: "home" },
  { icon: Briefcase, label: "Missions", value: "missions" },
  { icon: MessageCircle, label: "Messages", value: "messages" },
  { icon: User, label: "Profil", value: "profile" },
  { icon: Settings, label: "Paramètres", value: "settings" },
];

const stats = [
  {
    icon: Briefcase,
    label: "Missions actives",
    value: "3",
    color: "text-orange-500",
  },
];

const activeMissions = [
  {
    id: 1,
    title: "Développement site e-commerce",
    client: "Diabaté Moussa",
    progress: 65,
    deadline: "Dans 5 jours",
    budget: "500,000 FCFA",
  },
  {
    id: 2,
    title: "Application mobile iOS",
    client: "Traoré Aminata",
    progress: 30,
    deadline: "Dans 12 jours",
    budget: "750,000 FCFA",
  },
  {
    id: 3,
    title: "Refonte design dashboard",
    client: "Koné Sékou",
    progress: 85,
    deadline: "Dans 3 jours",
    budget: "300,000 FCFA",
  },
];

function Divider({ label }) {
  return (
    <div className="relative my-4">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
      {label ? (
        <div className="absolute inset-0 -top-3 flex justify-center">
          <span className="px-2 py-0.5 text-xs rounded-full bg-white text-muted-foreground ring-1 ring-orange-300/40">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function FreelancerDashboard({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const btnInteractive =
    "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="flex min-h-screen">
        {/* Overlay mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-border flex flex-col transform transition-transform duration-300 md:relative md:translate-x-0 md:flex md:w-64 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo */}
          <div className="p-6 flex items-center gap-2">
              <img
              src="/Logo.png"
              alt="Logo FreelanceIT"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h2 className="text-sm font-semibold">Freelancing IT</h2>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
          <Divider />

          {/* Profil */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amara"
                  alt="Profile"
                />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium truncate">Kouassi Amara</h3>
                <p className="text-xs text-muted-foreground truncate">
                  Développeur Full Stack
                </p>
              </div>
            </div>
          </div>
          <Divider />

          {/* Menu latéral */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => {
                      setActiveMenu(item.value);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none ${
                      activeMenu === item.value
                        ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-md scale-[1.02]"
                        : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                    } ${btnInteractive}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Déconnexion */}
          <Divider />
          <div className="p-4">
            <Button
              variant="outline"
              className={`w-full rounded-xl font-medium ${btnInteractive}`}
              onClick={() => onNavigate("landing")}
            >
              Déconnexion
            </Button>
          </div>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 overflow-auto">
          {/* Header fixé */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full md:hidden ${btnInteractive}`}
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </Button>
                <div>
                  <h1 className="text-xl font-semibold">
                    {menuItems.find((m) => m.value === activeMenu)?.label ||
                      "Accueil"}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Bienvenue, Kouassi 👋
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className={`rounded-full h-10 w-10 relative ${btnInteractive}`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </header>

          {/* Contenu dynamique */}
          <div className="p-4 sm:p-6 md:p-8">
            {activeMenu === "home" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Carte centrée */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-center justify-between mb-2">
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          </div>
                          <p className="text-2xl font-semibold mb-1">
                            {stat.value}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {stat.label}
                          </p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Boutons réactifs */}
                <div>
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 mb-2">
                    <Button
                      variant="link"
                      className={`text-primary font-medium hover:underline underline-offset-4 ${btnInteractive}`}
                    >
                      Voir missions actives
                    </Button>
                    <Button
                      variant="link"
                      className={`text-primary font-medium hover:underline underline-offset-4 ${btnInteractive}`}
                    >
                      Voir messages reçus
                    </Button>
                  </div>
                  <Divider />
                </div>
              </motion.div>
            )}
            {/* Profile Tab */}
                        {activeMenu === "profile" && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl"
                          >
                            <Card className="p-6 mb-6">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                                <Avatar className="w-24 h-24 border-4 border-primary/20">
                                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amara" alt="Profile" />
                                  <AvatarFallback>KA</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h2 className="text-lg sm:text-xl font-semibold mb-1">Kouassi Amara</h2>
                                  <p className="text-muted-foreground mb-2">Développeur Full Stack</p>
                                  <Button size="sm" variant="outline" className={`rounded-full ${btnInteractive}`}>
                                    Changer la photo
                                  </Button>
                                </div>
                              </div>
            
                              <div className="space-y-4">
                                <div>
                                  <Label>Bio</Label>
                                  <Textarea
                                    placeholder="Parlez-nous de vous..."
                                    defaultValue="Développeur passionné avec plus de 5 ans d'expérience dans le développement d'applications web modernes."
                                    className="mt-2"
                                    rows={4}
                                  />
                                </div>
            
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <Label>Tarif horaire (FCFA)</Label>
                                    <Input type="number" defaultValue="15000" className="mt-2" />
                                  </div>
                                  <div>
                                    <Label>Tarif journalier (FCFA)</Label>
                                    <Input type="number" defaultValue="100000" className="mt-2" />
                                  </div>
                                </div>
            
                                <div>
                                  <Label>Établissement / Alumni</Label>
                                  <Input defaultValue="INPHB - Institut National Polytechnique Houphouët-Boigny" className="mt-2" />
                                </div>
            
                                <div>
                                  <Label>Compétences</Label>
                                  <div className="flex flex-wrap gap-2 mt-2 mb-2">
                                    {["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"].map((skill) => (
                                      <Badge key={skill} variant="secondary">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                  <Button variant="outline" size="sm" className={`rounded-full ${btnInteractive}`}>
                                    Ajouter une compétence
                                  </Button>
                                </div>
            
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                  <Button className={`bg-gradient-to-r from-primary to-secondary rounded-full font-medium ${btnInteractive}`}>
                                    Sauvegarder
                                  </Button>
                                  <Button variant="outline" className={`rounded-full ${btnInteractive}`}>
                                    Annuler
                                  </Button>
                                </div>
                              </div>
                            </Card>
                          </motion.div>
                        )}
            
                        {/* Missions Tab */}
                        {activeMenu === "missions" && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <Tabs defaultValue="active">
                              <TabsList className="bg-white rounded-full p-1 mb-6">
                                <TabsTrigger value="active" className="rounded-full">Actives (3)</TabsTrigger>
                                <TabsTrigger value="pending" className="rounded-full">En attente (5)</TabsTrigger>
                                <TabsTrigger value="completed" className="rounded-full">Terminées (12)</TabsTrigger>
                              </TabsList>
            
                              <TabsContent value="active">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {activeMissions.map((mission) => (
                                    <Card key={mission.id} className="p-6 hover:shadow-lg transition-all">
                                      <h3 className="mb-2 font-medium">{mission.title}</h3>
                                      <p className="text-sm text-muted-foreground mb-4">{mission.client}</p>
                                      
                                      <div className="mb-4">
                                        <div className="flex items-center justify-between text-sm mb-2">
                                          <span className="text-muted-foreground">Progression</span>
                                          <span className="text-primary font-medium">{mission.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                          <div
                                            className="h-full bg-gradient-to-r from-primary to-secondary"
                                            style={{ width: `${mission.progress}%` }}
                                          />
                                        </div>
                                      </div>
            
                                      {/* Decorative separator instead of border */}
                                      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-400/40 to-transparent mb-4" />
            
                                      <div className="flex items-center justify-between pt-0">
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                          <Clock className="w-4 h-4" />
                                          <span>{mission.deadline}</span>
                                        </div>
                                        <span className="text-primary font-medium">{mission.budget}</span>
                                      </div>
                                    </Card>
                                  ))}
                                </div>
                              </TabsContent>
                            </Tabs>
                          </motion.div>
                        )}
            
                        {/* Messages Tab */}
                        {activeMenu === "messages" && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <Card className="p-8 sm:p-12 text-center">
                              <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-muted-foreground" />
                              <h3 className="mb-2 text-lg sm:text-xl font-semibold">Messagerie</h3>
                              <p className="text-muted-foreground mb-6">
                                Communiquez avec vos clients directement
                              </p>
                              <Button
                                onClick={() => onNavigate("messages")}
                                className={`bg-gradient-to-r from-primary to-secondary rounded-full font-medium ${btnInteractive}`}
                              >
                                Ouvrir la messagerie
                              </Button>
                            </Card>
                          </motion.div>
                        )}
            
                        {/* Settings Tab */}
                        {activeMenu === "settings" && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl space-y-4"
                          >
                            <Card className="p-6">
                              <h3 className="mb-4 text-lg font-semibold">Paramètres du compte</h3>
                              <div className="space-y-4">
                                <div>
                                  <Label>Email</Label>
                                  <Input type="email" defaultValue="kouassi.amara@example.com" className="mt-2" />
                                </div>
                                <div>
                                  <Label>Téléphone</Label>
                                  <Input type="tel" defaultValue="+225 01 02 03 04 05" className="mt-2" />
                                </div>
                                <Button className={`bg-gradient-to-r from-primary to-secondary rounded-full font-medium ${btnInteractive}`}>
                                  Sauvegarder
                                </Button>
                              </div>
                            </Card>
            
                            <Card className="p-6">
                              <h3 className="mb-4 text-lg font-semibold">Sécurité</h3>
                              <div className="space-y-4">
                                <div>
                                  <Label>Mot de passe actuel</Label>
                                  <Input type="password" className="mt-2" />
                                </div>
                                <div>
                                  <Label>Nouveau mot de passe</Label>
                                  <Input type="password" className="mt-2" />
                                </div>
                                <div>
                                  <Label>Confirmer le mot de passe</Label>
                                  <Input type="password" className="mt-2" />
                                </div>
                                <Button variant="outline" className={`rounded-full ${btnInteractive}`}>
                                  Changer le mot de passe
                                </Button>
                              </div>
                            </Card>
                          </motion.div>
                        )}
          </div>
        </main>
      </div>
    </div>
  );
}

FreelancerDashboard.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};
