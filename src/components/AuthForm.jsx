//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Code, User, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AuthForm({ onNavigate }) {
  const [userType, setUserType] = useState(null); // "client" | "freelance" | null
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Freelancing IT
              </span>
            </div>
            <h1 className="text-4xl mb-4">Bienvenue !</h1>
            <p className="text-xl text-muted-foreground">
              Comment souhaitez-vous utiliser Freelancing IT ?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card
                onClick={() => setUserType("client")}
                className="p-8 cursor-pointer hover:shadow-2xl transition-all group hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl text-center mb-3">Je suis Client</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Je recherche des talents IT pour mes projets
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Accès à des centaines de freelances
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Gestion simplifiée de projets
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Paiements sécurisés
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary rounded-full">
                  Continuer en tant que Client
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card
                onClick={() => setUserType("freelance")}
                className="p-8 cursor-pointer hover:shadow-2xl transition-all group hover:-translate-y-2 border-2 hover:border-secondary/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl text-center mb-3">Je suis Freelance</h2>
                <p className="text-center text-muted-foreground mb-6">
                  Je propose mes services IT aux entreprises
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Trouvez des missions locales
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Valorisez votre portfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Réseau alumni exclusif
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-primary rounded-full">
                  Continuer en tant que Freelance
                </Button>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button variant="ghost" onClick={() => onNavigate("landing")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Freelancing IT
              </span>
            </div>
            <h2 className="text-2xl mb-2">
              {userType === "client" ? "Espace Client" : "Espace Freelance"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {authMode === "login"
                ? "Connectez-vous à votre compte"
                : "Créez votre compte"}
            </p>
          </div>

          <Tabs
            value={authMode}
            onValueChange={(v) => setAuthMode(v)}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-2 bg-muted rounded-full p-1">
              <TabsTrigger value="login" className="rounded-full">
                Connexion
              </TabsTrigger>
              <TabsTrigger value="signup" className="rounded-full">
                Inscription
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 mt-6">
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="votre@email.com" className="mt-2 rounded-xl" />
              </div>
              <div>
                <Label>Mot de passe</Label>
                <Input type="password" placeholder="••••••••" className="mt-2 rounded-xl" />
              </div>
              <Button
                onClick={() => {
                  if (userType === "freelance") {
                    onNavigate("dashboard");
                  } else {
                    onNavigate("catalog");
                  }
                }}
                className="w-full bg-gradient-to-r from-primary to-secondary rounded-full"
              >
                Se connecter
              </Button>
              <Button variant="link" className="w-full text-sm text-muted-foreground">
                Mot de passe oublié ?
              </Button>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Prénom</Label>
                  <Input placeholder="Kouassi" className="mt-2 rounded-xl" />
                </div>
                <div>
                  <Label>Nom</Label>
                  <Input placeholder="Amara" className="mt-2 rounded-xl" />
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="votre@email.com" className="mt-2 rounded-xl" />
              </div>
              <div>
                <Label>Téléphone</Label>
                <Input type="tel" placeholder="+225 01 02 03 04 05" className="mt-2 rounded-xl" />
              </div>
              {userType === "freelance" && (
                <div>
                  <Label>Établissement / Alumni</Label>
                  <Input placeholder="INPHB, ESATIC, ESI..." className="mt-2 rounded-xl" />
                </div>
              )}
              <div>
                <Label>Mot de passe</Label>
                <Input type="password" placeholder="••••••••" className="mt-2 rounded-xl" />
              </div>
              <Button
                onClick={() => {
                  if (userType === "freelance") {
                    onNavigate("dashboard");
                  } else {
                    onNavigate("catalog");
                  }
                }}
                className="w-full bg-gradient-to-r from-primary to-secondary rounded-full"
              >
                Créer mon compte
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                En vous inscrivant, vous acceptez nos conditions d'utilisation
              </p>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button variant="ghost" size="sm" onClick={() => setUserType(null)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Changer de profil
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
