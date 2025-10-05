//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { Home, Briefcase, MessageCircle, User, Settings, Bell, TrendingUp, Clock, Star, DollarSign, Code } from "lucide-react";
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
  { icon: Briefcase, label: "Missions actives", value: "3", color: "text-orange-500" },
  { icon: Star, label: "Note moyenne", value: "4.9", color: "text-yellow-500" },
  { icon: DollarSign, label: "Revenus ce mois", value: "850K", color: "text-green-500" },
  { icon: Clock, label: "Heures travaillées", value: "124h", color: "text-blue-500" },
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

const notifications = [
  {
    id: 1,
    type: "mission",
    title: "Nouvelle mission disponible",
    message: "Diabaté Moussa vous a envoyé une proposition",
    time: "Il y a 2h",
  },
  {
    id: 2,
    type: "message",
    title: "Nouveau message",
    message: "Traoré Aminata: Les maquettes sont parfaites !",
    time: "Il y a 4h",
  },
  {
    id: 3,
    type: "payment",
    title: "Paiement reçu",
    message: "300,000 FCFA de Koné Sékou",
    time: "Hier",
  },
];

export function FreelancerDashboard({ onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-64 bg-white border-r border-border flex flex-col"
        >
          {/* Logo */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-sm">Freelancing IT</h2>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amara" alt="Profile" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm truncate">Kouassi Amara</h3>
                <p className="text-xs text-muted-foreground truncate">Développeur Full Stack</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%]" />
              </div>
              <span className="text-xs text-muted-foreground">85%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Profil complété</p>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.value}>
                  <button
                    onClick={() => setActiveMenu(item.value)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeMenu === item.value
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "hover:bg-accent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <Button
              variant="outline"
              className="w-full rounded-xl"
              onClick={() => onNavigate("landing")}
            >
              Déconnexion
            </Button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-10">
            <div className="px-8 py-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl">
                  {menuItems.find(m => m.value === activeMenu)?.label || "Accueil"}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Bienvenue, Kouassi 👋
                </p>
              </div>
              <Button variant="outline" size="icon" className="rounded-full relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-white text-xs flex items-center justify-center">
                  3
                </div>
              </Button>
            </div>
          </header>

          <div className="p-8">
            {/* Home Tab */}
            {activeMenu === "home" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <stat.icon className={`w-8 h-8 ${stat.color}`} />
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        </div>
                        <p className="text-2xl mb-1">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Active Missions */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl">Missions actives</h2>
                    <Button variant="link" className="text-primary">
                      Voir tout
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeMissions.map((mission, index) => (
                      <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <Card className="p-6 hover:shadow-lg transition-all">
                          <h3 className="mb-2">{mission.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{mission.client}</p>
                          
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Progression</span>
                              <span className="text-primary">{mission.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-secondary transition-all"
                                style={{ width: `${mission.progress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{mission.deadline}</span>
                            </div>
                            <span className="text-primary">{mission.budget}</span>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div>
                  <h2 className="text-xl mb-4">Notifications récentes</h2>
                  <div className="space-y-3">
                    {notifications.map((notif, index) => (
                      <motion.div
                        key={notif.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <Card className="p-4 hover:shadow-md transition-all cursor-pointer">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                              <Bell className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <h4 className="text-sm">{notif.title}</h4>
                                <span className="text-xs text-muted-foreground flex-shrink-0">{notif.time}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{notif.message}</p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
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
                  <div className="flex items-center gap-6 mb-6">
                    <Avatar className="w-24 h-24 border-4 border-primary/20">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amara" alt="Profile" />
                      <AvatarFallback>KA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl mb-1">Kouassi Amara</h2>
                      <p className="text-muted-foreground mb-2">Développeur Full Stack</p>
                      <Button size="sm" variant="outline" className="rounded-full">
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
                      <Button variant="outline" size="sm" className="rounded-full">
                        Ajouter une compétence
                      </Button>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        Sauvegarder
                      </Button>
                      <Button variant="outline">
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
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeMissions.map((mission) => (
                        <Card key={mission.id} className="p-6 hover:shadow-lg transition-all">
                          <h3 className="mb-2">{mission.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{mission.client}</p>
                          
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Progression</span>
                              <span className="text-primary">{mission.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-secondary"
                                style={{ width: `${mission.progress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{mission.deadline}</span>
                            </div>
                            <span className="text-primary">{mission.budget}</span>
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
                <Card className="p-12 text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="mb-2">Messagerie</h3>
                  <p className="text-muted-foreground mb-6">
                    Communiquez avec vos clients directement
                  </p>
                  <Button
                    onClick={() => onNavigate("messages")}
                    className="bg-gradient-to-r from-primary to-secondary rounded-full"
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
                  <h3 className="mb-4">Paramètres du compte</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>Email</Label>
                      <Input type="email" defaultValue="kouassi.amara@example.com" className="mt-2" />
                    </div>
                    <div>
                      <Label>Téléphone</Label>
                      <Input type="tel" defaultValue="+225 01 02 03 04 05" className="mt-2" />
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-secondary">
                      Sauvegarder
                    </Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4">Sécurité</h3>
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
                    <Button variant="outline">
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