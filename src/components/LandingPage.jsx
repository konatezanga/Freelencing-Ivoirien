//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import {
  Users,
  Briefcase,
  Star,
  Shield,
  Search,
  UserPlus,
  Code,
  Palette,
  Smartphone,
  BarChart,
  Megaphone,
  Database,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./fullback/ImageWithFallback";

export function LandingPage({ onNavigate }) {
  const categories = [
    { icon: Code, name: "Développement Web", color: "text-orange-500" },
    { icon: Smartphone, name: "Mobile", color: "text-green-500" },
    { icon: Palette, name: "Design", color: "text-purple-500" },
    { icon: Database, name: "Data", color: "text-blue-500" },
    { icon: Megaphone, name: "Marketing Digital", color: "text-pink-500" },
    { icon: BarChart, name: "Analytics", color: "text-yellow-500" },
  ];

  const features = [
    {
      icon: Users,
      title: "Réseau Alumni",
      description: "Trouvez des freelances de votre école ou université",
    },
    {
      icon: Shield,
      title: "Paiements sécurisés",
      description: "Transactions protégées et fiables",
    },
    {
      icon: Star,
      title: "Talents vérifiés",
      description: "Profils validés et notés par la communauté",
    },
    {
      icon: Briefcase,
      title: "Projets variés",
      description: "Des missions adaptées à tous les niveaux",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Freelancing IT
            </span>
          </motion.div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => onNavigate("auth")}>
              Connexion
            </Button>
            <Button
              onClick={() => onNavigate("auth")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              S'inscrire
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              La plateforme ivoirienne pour trouver et collaborer avec les
              meilleurs talents IT locaux
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connectez-vous avec des développeurs, designers et experts IT de
              confiance. Construisez vos projets avec les meilleurs talents du
              pays.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate("catalog")}
                className="bg-gradient-to-r from-primary to-orange-600 hover:opacity-90 rounded-full"
              >
                <Search className="w-5 h-5 mr-2" />
                Trouver un talent
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("auth")}
                className="rounded-full border-2"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Devenir freelance
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1689857538296-b6e1a392a91d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVjaG5vbG9neSUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTkyMzE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="IT Professionals"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">Explorez nos catégories</h2>
          <p className="text-muted-foreground text-lg">
            Trouvez le talent parfait pour votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <Card
                className="p-6 text-center hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1 border-2 hover:border-primary/50"
                onClick={() => onNavigate("catalog")}
              >
                <category.icon
                  className={`w-12 h-12 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`}
                />
                <p className="text-sm">{category.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl mb-4">Prêt à démarrer ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des centaines de freelances et clients satisfaits
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate("auth")}
            className="bg-white text-primary hover:bg-white/90 rounded-full"
          >
            Créer un compte gratuitement
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg">Freelancing IT</span>
          </div>
          <p className="text-gray-400">
            La plateforme ivoirienne de freelancing IT
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Freelancing IT. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
