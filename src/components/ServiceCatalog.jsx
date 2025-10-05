//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { Search, Filter, Star, Code, Palette, Smartphone, Database, Megaphone, BarChart, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function ServiceCatalog({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const freelancers = [
    {
      id: 1,
      name: "Kouassi Amara",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
      specialty: "Développeur Full Stack",
      rating: 4.9,
      reviews: 47,
      hourlyRate: "15,000",
      skills: ["React", "Node.js", "TypeScript"],
      alumni: "INPHB",
      available: true,
    },
    {
      id: 2,
      name: "Adjoua Koffi",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adjoua",
      specialty: "Designer UI/UX",
      rating: 4.8,
      reviews: 35,
      hourlyRate: "12,000",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      alumni: "ESI",
      available: true,
    },
    {
      id: 3,
      name: "Yao Christophe",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yao",
      specialty: "Développeur Mobile",
      rating: 4.7,
      reviews: 28,
      hourlyRate: "18,000",
      skills: ["Flutter", "React Native", "iOS"],
      alumni: "ESATIC",
      available: false,
    },
    {
      id: 4,
      name: "Kouadio Marie",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
      specialty: "Data Analyst",
      rating: 5.0,
      reviews: 52,
      hourlyRate: "20,000",
      skills: ["Python", "SQL", "Power BI"],
      alumni: "INPHB",
      available: true,
    },
    {
      id: 5,
      name: "N'Guessan Arnaud",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arnaud",
      specialty: "Marketing Digital",
      rating: 4.6,
      reviews: 31,
      hourlyRate: "10,000",
      skills: ["SEO", "Google Ads", "Social Media"],
      alumni: "UCAO",
      available: true,
    },
    {
      id: 6,
      name: "Diallo Fatou",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatou",
      specialty: "Designer Graphique",
      rating: 4.9,
      reviews: 44,
      hourlyRate: "11,000",
      skills: ["Photoshop", "Illustrator", "Branding"],
      alumni: "ESI",
      available: true,
    },
  ];

  const categories = [
    { icon: Code, name: "Développement Web", color: "bg-orange-100 text-orange-600" },
    { icon: Smartphone, name: "Mobile", color: "bg-green-100 text-green-600" },
    { icon: Palette, name: "Design", color: "bg-purple-100 text-purple-600" },
    { icon: Database, name: "Data", color: "bg-blue-100 text-blue-600" },
    { icon: Megaphone, name: "Marketing", color: "bg-pink-100 text-pink-600" },
    { icon: BarChart, name: "Analytics", color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" onClick={() => onNavigate("landing")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Freelancing IT
              </span>
            </div>
            <Button onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-primary to-secondary">
              Connexion
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl mb-6">Trouvez votre talent IT</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher par compétence, nom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-2"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px] rounded-full">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">- 10,000 FCFA/h</SelectItem>
                <SelectItem value="medium">10,000 - 20,000 FCFA/h</SelectItem>
                <SelectItem value="high">20,000+ FCFA/h</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[200px] rounded-full">
                <SelectValue placeholder="Alumni" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inphb">INPHB</SelectItem>
                <SelectItem value="esatic">ESATIC</SelectItem>
                <SelectItem value="esi">ESI</SelectItem>
                <SelectItem value="ucao">UCAO</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="rounded-full">
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                className={`rounded-full flex-shrink-0 ${selectedCategory === category.name ? "bg-gradient-to-r from-primary to-secondary" : ""}`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Freelancer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer, index) => (
            <motion.div
              key={freelancer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-6 hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1 border-2 hover:border-primary/50"
                onClick={() => onNavigate("profile", freelancer)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <Avatar className="w-16 h-16 border-2 border-primary/20">
                      <AvatarImage src={freelancer.photo} alt={freelancer.name} />
                      <AvatarFallback>{freelancer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="mb-1">{freelancer.name}</h3>
                      <p className="text-sm text-muted-foreground">{freelancer.specialty}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {freelancer.alumni}
                      </Badge>
                    </div>
                  </div>
                  {freelancer.available && <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />}
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{freelancer.rating}</span>
                  <span className="text-xs text-muted-foreground">({freelancer.reviews} avis)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {freelancer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Tarif horaire</p>
                    <p className="text-lg text-primary">{freelancer.hourlyRate} FCFA</p>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-secondary rounded-full">
                    Voir profil
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
