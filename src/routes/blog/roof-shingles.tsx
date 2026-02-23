import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import ContactCTA from "@/components/ContactCTA";
import BlogPost from "@/components/blog/BlogPost";
import SEOHead from "@/components/SEOHead";
import { SchemaArticle, SchemaBreadcrumb } from '@/components/schema';
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

// Función para generar el HTML string del contenido
const generatePostContent = () => `
    <p class="text-[#666666] leading-relaxed mb-6">Roof shingles represent the first line of defence against Newcastle's challenging weather conditions, providing essential protection while enhancing your home's aesthetic appeal. These overlapping roofing materials create a water-resistant barrier that shields your property from rain, wind, and harsh coastal elements. In Newcastle's unique climate, characterised by salt air exposure, high humidity, and variable weather patterns, selecting the right shingle material becomes crucial for long-term roof performance and durability.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Sydney Roofing & Gutters</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Best Roof Shingle Types for Newcastle</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Asphalt shingles dominate Newcastle's residential roofing market due to their exceptional value, versatility, and proven performance in Australian conditions. These shingles feature a fibreglass mat base saturated with asphalt and coated with protective granules that resist UV degradation and weather damage. Architectural shingles, also known as dimensional or laminated shingles, offer enhanced durability and visual appeal with their multi-layered construction that creates depth and texture resembling premium materials like slate or wood.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Three-tab shingles provide cost-effective protection with their traditional flat appearance and uniform cutout pattern. While less visually striking than architectural options, they deliver reliable performance for budget-conscious Newcastle homeowners. Premium luxury shingles feature enhanced granule technology, superior wind resistance ratings, and extended warranty coverage, making them ideal for coastal properties in areas like Merewether, Bar Beach, and Hamilton where salt air exposure demands maximum durability.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0">
        <thead>
          <tr style="background: #F9FAFB">
            <th class="text-left p-3 border-b-2 border-gray-200">Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lifespan</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best For</th>
          </tr>
        </thead>
        <tbody style="color: #666666">
          <tr>
            <td class="p-3 border-b border-gray-200">3-Tab Asphalt</td>
            <td class="p-3 border-b border-gray-200">15-20 years</td>
            <td class="p-3 border-b border-gray-200">$6-12/m²</td>
            <td class="p-3 border-b border-gray-200">Budget builds</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Architectural</td>
            <td class="p-3 border-b border-gray-200">20-30 years</td>
            <td class="p-3 border-b border-gray-200">$12-25/m²</td>
            <td class="p-3 border-b border-gray-200">Most homes</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Premium Luxury</td>
            <td class="p-3 border-b border-gray-200">30-40 years</td>
            <td class="p-3 border-b border-gray-200">$25-45/m²</td>
            <td class="p-3 border-b border-gray-200">Coastal properties</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Pros and Cons for Newcastle Climate</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's coastal climate presents both advantages and challenges for shingle roofing systems. The moderate temperatures throughout most of the year prevent the extreme thermal cycling that can damage shingles in more inland locations. However, consistent salt air exposure, high humidity levels, and frequent rainfall demand shingles with superior moisture resistance and corrosion protection. Quality architectural shingles excel in these conditions, offering enhanced granule adhesion and improved seal-down performance.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Wind resistance becomes particularly crucial for Newcastle properties, especially those in elevated areas like Charlestown and Adamstown where exposure increases significantly. Modern architectural shingles typically feature wind ratings up to 180 km/h, providing excellent protection against the strong coastal winds common during storm seasons. The algae-resistant granules found in premium shingles also combat the moisture-loving organisms that thrive in Newcastle's humid environment.</p>

    <div style="background: rgba(52,152,219,.08); border-left: 4px solid #3498DB; padding: 16px; border-radius: 8px; margin: 32px 0">
      <h4 style="margin: 0 0 6px 0; color: #2C3E50">Top Benefits of Quality Shingles</h4>
      <ul style="margin: 0; padding-left: 18px; color: #666666">
        <li>Superior weather protection against Newcastle's coastal conditions</li>
        <li>Enhanced curb appeal with architectural depth and colour options</li>
        <li>Proven durability with 20-30 year manufacturer warranties</li>
        <li>Cost-effective protection compared to premium roofing materials</li>
        <li>Professional installation ensures optimal performance and longevity</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Process & Lifespan</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional shingle installation begins with thorough roof deck preparation, including inspection for structural integrity and proper ventilation systems. Quality underlayment installation creates the critical moisture barrier, followed by precise shingle placement using manufacturer-specified fastening patterns. Proper installation techniques ensure optimal wind resistance, weather sealing, and aesthetic alignment that maximises both performance and visual appeal.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Expected lifespan varies significantly based on shingle quality, installation precision, and maintenance practices. Three-tab shingles typically deliver 15-20 years of reliable service in Newcastle conditions, while architectural shingles often exceed 25-30 years with proper care. Premium luxury shingles can provide 30-40 years of exceptional performance, making them excellent long-term investments for discerning homeowners throughout the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Costs & When to Replace</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Shingle replacement costs in Newcastle range from $8,000-15,000 for typical residential properties, depending on roof size, pitch complexity, and material selection. Signs requiring replacement include granule loss, curling edges, missing shingles, or visible daylight through the roof structure. Professional inspection every 2-3 years helps identify issues early, preventing costly structural damage and ensuring optimal protection.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Replacement timing depends on age, condition, and performance factors rather than arbitrary schedules. Quality architectural shingles showing minimal wear after 20 years may continue providing excellent protection, while damaged or poorly installed systems might require earlier replacement regardless of age.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Ready to upgrade your roof with quality shingles?</strong> Sydney Roofing & Gutters provides expert shingle installation and replacement services throughout Newcastle and the Hunter Region. Our experienced team helps you select the perfect shingle solution for your home's unique requirements and budget. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a comprehensive consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your free estimate. For complete roof replacement services, explore our <a href="/roof-replacement" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof replacement solutions</a> designed specifically for Newcastle's coastal conditions.</p>
`;

const postData = {
  title: "Best Roof Shingles Newcastle: Complete Installation Guide",
  excerpt: "Expert guide to roof shingles in Newcastle. Types, installation, costs, and benefits for Australian homes.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-23",
  category: "Materials",
  tags: ["roof shingles", "asphalt shingles", "roofing materials", "shingle installation"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-shingles",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Best Roof Shingles Newcastle | Expert Installation Guide"
        description="Complete guide to roof shingles in Newcastle. Expert advice on types, installation, costs, and top materials for Australian homes."
        keywords="roof shingles newcastle, asphalt shingles, best roofing materials, shingle installation, roof replacement"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Sydney Roofing & Gutters"
        customDescription="Professional roofing services in Newcastle with 24/7 emergency response"
      />
      
      <SchemaArticle 
        headline={postData.title}
        description={postData.excerpt}
        datePublished={postData.publishDate}
        dateModified={postData.publishDate}
        url={`https://sydneyroofingandgutters.com.au/${postData.slug}`}
        image={`https://sydneyroofingandgutters.com.au${postData.featuredImage}`}
      />
      
      <SchemaBreadcrumb 
        items={[
          { name: "Home", url: "https://sydneyroofingandgutters.com.au/" },
          { name: "Blog", url: "https://sydneyroofingandgutters.com.au/blog" },
          { name: "Best Roof Shingles Newcastle: Complete Installation Guide", url: "https://sydneyroofingandgutters.com.au/roof-shingles" }
        ]}
      />
      
      <Header />
      
      {/* Featured Image - MANTENER fuera del BlogPost */}
      <div className="w-full">
        <div className="w-full overflow-hidden" style={{height: '350px'}}>
          <img 
            src={postData.featuredImage} 
            alt={postData.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Post Header - MANTENER fuera del BlogPost */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <Badge className="mb-4" style={{backgroundColor: '#3498DB', color: '#FFFFFF'}}>
                {postData.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6 leading-tight">
                Best Roof Shingles Newcastle: Complete Installation Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>24 December 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{postData.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{postData.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BlogPost post={{ content: postData.content, tags: postData.tags }} />
      <ContactCTA />
      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route = {
  path: "/roof-shingles/",
  element: <RoofWaterproofingPost />,
};

export default route;