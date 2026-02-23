import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Blog = () => {
  const blogPosts = [
    {
      title: "Roof Wind Damage in Newcastle: Prevention & Emergency Response",
      excerpt: "Complete guide to understanding, preventing, and responding to roof wind damage in Newcastle and the Hunter Region. Learn what to do when strong winds affect your roof.",
      date: "December 19, 2024",
      author: "Sydney Roofing & Gutters",
      category: "Emergency",
      image: "/images/emergency-roof-repairs-1.jpg",
      slug: "roof-wind-damage-newcastle"
    },
    {
      title: "Signs Your Roof Needs Immediate Repair",
      excerpt: "Learn to identify critical warning signs that indicate your roof needs urgent professional attention before damage worsens.",
      date: "March 15, 2024",
      author: "James Mitchell",
      category: "Roof Repairs",
      image: "/images/emergency-roof-repairs-1.jpg",
      slug: "signs-roof-needs-repair"
    },
    {
      title: "Cost of Roof Replacement in Newcastle 2024",
      excerpt: "Complete pricing guide for roof replacement including material costs, labour, and factors that affect your total investment.",
      date: "March 10, 2024",
      author: "Sarah Chen",
      category: "Costs",
      image: "/images/complete-roof-replacement-after.jpg",
      slug: "cost-roof-replacement-newcastle"
    },
    {
      title: "Colorbond vs Tile Roofing: Which is Best?",
      excerpt: "Compare Colorbond metal roofing and traditional tiles to find the perfect roofing solution for your Newcastle home.",
      date: "March 5, 2024",
      author: "Michael Brown",
      category: "Materials",
      image: "/images/roof-painting-transformation-after.jpg",
      slug: "colorbond-vs-tile-roofing"
    },
    {
      title: "Roof Maintenance Tips for Newcastle Weather",
      excerpt: "Essential maintenance tips to protect your roof from Newcastle's coastal climate and seasonal weather changes.",
      date: "February 28, 2024",
      author: "Lisa Wang",
      category: "Maintenance",
      image: "/images/roof-restoration-project-after.jpg",
      slug: "roof-maintenance-newcastle-weather"
    },
    {
      title: "When to Call for Emergency Roof Repairs",
      excerpt: "Understanding when roof damage requires immediate 24/7 emergency response versus scheduled repairs.",
      date: "February 20, 2024",
      author: "David Lee",
      category: "Emergency",
      image: "/images/emergency-roof-repairs-before.jpg",
      slug: "when-call-emergency-roof-repairs"
    },
    {
      title: "Complete Guide to Roof Inspections",
      excerpt: "What to expect during a professional roof inspection and why regular inspections save money in the long run.",
      date: "February 15, 2024",
      author: "Emma Taylor",
      category: "Inspections",
      image: "/images/roof-repair-and-restoration-1.jpg",
      slug: "complete-guide-roof-inspections"
    }
  ];

  const categories = ["All", "Roof Repairs", "Maintenance", "Emergency", "Materials", "Inspections", "Costs"];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Roofing Tips & Guides | Sydney Roofing & Gutters Blog"
        description="Expert roofing tips, maintenance guides, and industry insights from Newcastle's trusted roofing specialists. Learn about roof repairs, materials, costs, and emergency services."
        keywords="roofing tips newcastle, roof maintenance guide, roofing materials, roof repair advice, newcastle roofing blog, emergency roof repairs, roofing costs"
        ogTitle="Roofing Tips & Guides | Sydney Roofing & Gutters Blog"
        ogDescription="Expert roofing advice and maintenance tips from Newcastle's professional roofing specialists. 24/7 emergency service available."
        ogImage="https://sydneyroofingandgutters.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Sydney Roofing & Gutters"
        customDescription="Professional roofing services in Newcastle and Hunter Region - Expert tips and guides"
      />
      <Header />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
          <div className="absolute inset-0 architectural-grid opacity-20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center text-white">
              <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
              <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
                Roofing Tips & Expert Advice
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Professional roofing insights, maintenance tips, and emergency advice from 
                Newcastle's trusted roofing specialists. Available 24/7 for emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search roofing articles..." 
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 blueprint-hover">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                          <a href={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg">
                  Load More Roofing Tips
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export default Blog;