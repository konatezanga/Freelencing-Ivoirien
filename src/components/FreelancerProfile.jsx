//eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ArrowLeft, Star, MapPin, Briefcase, GraduationCap, Mail, Phone, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./fullback/ImageWithFallback";

export function FreelancerProfile({ onNavigate, freelancer }) {
  const profile = freelancer || {
    name: "Kouassi Amara",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
    specialty: "Développeur Full Stack",
    rating: 4.9,
    reviews: 47,
    hourlyRate: "15,000",
    dailyRate: "100,000",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
    alumni: "INPHB - Institut National Polytechnique Houphouët-Boigny",
    location: "Abidjan, Côte d'Ivoire",
    experience: "5+ ans",
    available: true,
    bio: "Développeur passionné avec plus de 5 ans d'expérience dans le développement d'applications web modernes. Spécialisé en React et Node.js, j'aide les entreprises à digitaliser leurs processus.",
  };

  const portfolio = [
    {
      title: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Plateforme de vente en ligne moderne",
    },
    {
      title: "Banking App",
      image: "https://images.unsplash.com/photo-1748665194498-21a7e3d8ff19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Application bancaire mobile",
    },
    {
      title: "Dashboard Analytics",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      description: "Tableau de bord analytique",
    },
  ];

  const reviews = [
    {
      author: "Diabaté Moussa",
      rating: 5,
      date: "Il y a 2 semaines",
      comment: "Excellent travail ! Livraison rapide et qualité au rendez-vous. Je recommande vivement.",
    },
    {
      author: "Traoré Aminata",
      rating: 5,
      date: "Il y a 1 mois",
      comment: "Très professionnel et à l'écoute. Le projet a été livré avant la deadline.",
    },
    {
      author: "Koné Sékou",
      rating: 4,
      date: "Il y a 2 mois",
      comment: "Bon développeur, communication fluide tout au long du projet.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => onNavigate("catalog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la recherche
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="text-center mb-6">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarImage src={profile.photo} alt={profile.name} />
                  <AvatarFallback>{profile.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h2 className="mb-1">{profile.name}</h2>
                <p className="text-muted-foreground mb-2">{profile.specialty}</p>
                {profile.available && (
                  <Badge className="bg-green-100 text-green-700">Disponible maintenant</Badge>
                )}
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>{profile.experience} d'expérience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  <span>{profile.alumni}</span>
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Tarif horaire</span>
                  <span className="text-lg text-primary">{profile.hourlyRate} FCFA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tarif journalier</span>
                  <span className="text-lg text-primary">{profile.dailyRate} FCFA</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-gradient-to-r from-primary to-secondary rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contacter
                </Button>
                <Button variant="outline" className="w-full rounded-full">
                  Proposer une mission
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-white rounded-full p-1">
                <TabsTrigger value="about" className="rounded-full">À propos</TabsTrigger>
                <TabsTrigger value="portfolio" className="rounded-full">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-full">Avis ({profile.reviews})</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card className="p-6">
                  <h3 className="mb-4">Bio</h3>
                  <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4">Compétences</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2">{skill}</Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4">Évaluations</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-4xl text-primary mb-1">{profile.rating}</div>
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">{profile.reviews} avis</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2">
                          <span className="text-xs w-8">{rating} ★</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400"
                              style={{ width: `${rating === 5 ? 85 : rating === 4 ? 12 : 3}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolio.map((item, index) => (
                    <motion.div key={item.title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
                      <Card className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                        <ImageWithFallback src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                        <div className="p-4">
                          <h4 className="mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                            Voir le projet <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {reviews.map((review, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                    <Card className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="mb-1">{review.author}</h4>
                          <div className="flex gap-1 mb-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
