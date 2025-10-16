//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { Search, Filter, Star, Code, Palette, Smartphone, Database, Megaphone, BarChart, ArrowLeft, Plus, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function ServiceCatalog({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState("");
  //const [selectedCategory, setSelectedCategory] = useState(null);

  /*const freelancers = [
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
  ]; */

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-black/10 shadow-sm sticky top-0 supports-[top:env(safe-area-inset-top)]:top-[env(safe-area-inset-top)] z-50 relative">
        {/* User icon top-right */}
        <button
          aria-label="Profil utilisateur"
          className="absolute right-4 top-2 sm:top-3 h-10 w-10 rounded-full border-2 border-orange-500 text-orange-600 bg-white hover:bg-orange-500 hover:text-white transition-colors duration-200 flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <User className="w-5 h-5" />
        </button>
        <div className="container mx-auto px-4 pr-16 py-3 sm:py-4">
          <div className="flex flex-wrap items-center gap-3 sm:justify-between mb-2">
            <Button className="text-red-600 bg-gray-700 hover:bg-gray-950 w-full sm:w-auto order-2 sm:order-1" variant="ghost" onClick={() => onNavigate("landing")}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Se déconnecter
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-green-600 text-white w-full sm:w-auto sm:ml-auto order-1 sm:order-2">
              <Plus className="w-4 h-4 mr-2" /> Publier une mission
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 bg-white">
        {/* Search and Filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold text-center"><span className="text-orange-500">Freelancing</span><span className="text-green-600">IT</span> Trouvez votre talent IT</h1>

          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher par compétence, nom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-2 h-11 sm:h-12 text-sm sm:text-base"
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
            <Button variant="outline" className="rounded-full w-full md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>
        </motion.div>       
      </div>
    </div>
  );
}
