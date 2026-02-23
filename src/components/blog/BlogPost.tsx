import { Calendar, Clock, User, Tag, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  post: {
    content: string;
    tags: string[];
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  // Validación defensiva
  if (!post) {
    return <div>Loading...</div>;
  }

  // Verificar que todas las propiedades necesarias existen
  const {
    content = '',
    tags = []
  } = post;


  // Related posts - estos deberían venir como prop en producción
  const relatedPosts = [
    {
      title: "Signs Your Roof Needs Immediate Repair",
      image: "/images/roof-repair-and-restoration-1.jpg",
      date: "15 Dec 2024",
      slug: "signs-roof-needs-repair"
    },
    {
      title: "Cost of Roof Replacement in Newcastle 2024",
      image: "/images/complete-roof-replacement-after.jpg",
      date: "10 Dec 2024",
      slug: "roof-replacement-cost-newcastle"
    },
    {
      title: "Choosing the Right Roofing Material",
      image: "/images/roof-painting-transformation-after.jpg",
      date: "5 Dec 2024",
      slug: "choosing-roofing-material"
    }
  ];

  // Categories
  const categories = [
    { name: "Roof Repairs", slug: "roof-repairs", count: 8 },
    { name: "Emergency", slug: "emergency", count: 5 },
    { name: "Maintenance", slug: "maintenance", count: 12 },
    { name: "Installation", slug: "installation", count: 6 },
    { name: "Materials", slug: "materials", count: 7 }
  ];


  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - 8 columns */}
          <div className="lg:col-span-8">
            <div 
              className="prose prose-lg max-w-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            
            {/* Tags con más margen superior */}
            <div className="mt-16 pt-8 border-t border-gray-200 mb-16">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="h-5 w-5 text-[#3498DB]" />
                <span className="text-sm font-semibold text-[#2C3E50]">Tags:</span>
                {tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="text-[#666666] border-[#E5E7EB]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Related Posts */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E50] mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <a 
                      key={index}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-20 h-20 object-cover rounded flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#2C3E50] group-hover:text-[#3498DB] transition-colors line-clamp-2 mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-[#666666]">{relatedPost.date}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Emergency CTA */}
              <Card className="p-6 bg-gradient-to-br from-[#2C3E50] to-[#3498DB] text-white">
                <h3 className="text-lg font-bold mb-3">Need Emergency Service?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Available 24/7 across Newcastle and Hunter Region
                </p>
                <Button 
                  className="w-full bg-white text-[#2C3E50] hover:bg-white/90" 
                  asChild
                >
                  <a href="tel:1300796024">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (02) 4089 4613
                  </a>
                </Button>
              </Card>

              {/* Categories */}
              <Card className="p-6 mb-16">
                <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <a
                      key={index}
                      href={`/blog?category=${cat.slug}`}
                      className="flex items-center justify-between text-sm text-[#666666] hover:text-[#3498DB] transition-colors py-2 border-b border-gray-100 last:border-0"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.count}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;