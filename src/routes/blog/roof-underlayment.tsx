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
    <p class="text-[#666666] leading-relaxed mb-6">Roof underlayment serves as the critical second line of defence against water infiltration in Newcastle homes, providing essential protection between your roof covering and the structural deck. This vital component acts as a waterproof barrier that prevents moisture from reaching your home's interior, protecting against leaks, mould growth, and structural damage. In Newcastle's challenging coastal climate with high humidity, frequent rainfall, and salt air exposure, quality underlayment becomes even more crucial for maintaining roof integrity and preventing costly water damage.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Top Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Essential Roof Underlayment Types</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Understanding the different types of roof underlayment helps Newcastle homeowners make informed decisions about their roof protection. Traditional felt underlayment, made from organic or fibreglass materials saturated with asphalt, remains popular for its cost-effectiveness and reliable performance. Synthetic underlayment, constructed from polypropylene or polyethylene materials, offers superior durability, tear resistance, and weather protection. Rubberized asphalt underlayment provides exceptional waterproofing capabilities with self-sealing properties around fasteners, making it ideal for high-wind areas and complex roof designs.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Each underlayment type offers distinct advantages depending on your specific needs, roof design, and budget considerations. Felt underlayment provides basic protection at an affordable price point, while synthetic options deliver enhanced performance and longevity. Rubberized underlayment offers premium protection with superior sealing capabilities, particularly valuable in Newcastle's variable weather conditions. Professional assessment of your roof's requirements ensures optimal underlayment selection for maximum protection and value.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Underlayment Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Material</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lifespan</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost Range</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Felt</td>
            <td class="p-3 border-b border-gray-200">Organic/Fibreglass + Asphalt</td>
            <td class="p-3 border-b border-gray-200">10-15 years</td>
            <td class="p-3 border-b border-gray-200">$0.50-1.50/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Synthetic</td>
            <td class="p-3 border-b border-gray-200">Polypropylene/Polyethylene</td>
            <td class="p-3 border-b border-gray-200">20-30 years</td>
            <td class="p-3 border-b border-gray-200">$1.50-3.00/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Rubberized</td>
            <td class="p-3 border-b border-gray-200">Rubberized Asphalt</td>
            <td class="p-3 border-b border-gray-200">25-35 years</td>
            <td class="p-3 border-b border-gray-200">$2.50-4.50/m²</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Best Materials for Newcastle's Coastal Climate</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's coastal environment presents unique challenges that require carefully selected underlayment materials capable of withstanding salt air, high humidity, and frequent weather changes. Synthetic underlayment excels in coastal conditions due to its superior resistance to moisture absorption, UV degradation, and temperature fluctuations. The non-porous nature of synthetic materials prevents water vapour from penetrating the underlayment, while their flexibility accommodates thermal expansion and contraction common in Newcastle's variable climate.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Rubberized asphalt underlayment provides exceptional protection against wind-driven rain and salt air exposure, making it particularly suitable for Newcastle's coastal properties. The self-sealing properties around fasteners create additional protection against water infiltration, while the material's durability ensures long-term performance despite harsh environmental conditions. Professional installation of appropriate underlayment materials ensures optimal protection for your Newcastle home's most valuable asset.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 20px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Critical Importance of Proper Underlayment Installation</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Proper overlap prevents water infiltration at seams</li>
        <li>Correct fastening ensures wind resistance and stability</li>
        <li>Sealing around penetrations prevents leaks at vulnerable points</li>
        <li>Professional installation maximizes material performance and lifespan</li>
        <li>Quality underlayment reduces long-term maintenance costs significantly</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Process & Lifespan</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional underlayment installation requires careful surface preparation, proper material handling, and expert application techniques to ensure optimal performance and longevity. The installation process begins with thorough deck inspection and preparation, ensuring the surface is clean, dry, and free from debris. Underlayment must be installed with proper overlap patterns, typically 150mm horizontal and 100mm vertical, to create continuous waterproof barriers that prevent water infiltration at seams and joints.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Fastening requirements vary by underlayment type and local building codes, with proper spacing and penetration sealing essential for optimal performance. Professional installation ensures consistent coverage, proper sealing around penetrations, and compliance with manufacturer specifications and Australian building standards. Quality installation significantly extends underlayment lifespan and provides reliable protection throughout Newcastle's challenging weather conditions.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">When to Replace & Costs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Underlayment replacement becomes necessary when signs of deterioration, damage, or age compromise its protective capabilities. Common indicators include visible tears, brittleness, water staining, or evidence of moisture penetration. Regular roof inspections help identify underlayment issues before they cause significant damage, while professional assessment ensures accurate evaluation of replacement needs and timing.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Replacement costs vary depending on underlayment type, roof size, accessibility, and labour requirements. While initial costs may seem significant, quality underlayment provides excellent value by preventing costly water damage and extending overall roof life. Professional installation ensures optimal performance and maximizes your investment in roof protection for your Newcastle home.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert underlayment installation or replacement services?</strong> Sydney Roofing & Gutters provides comprehensive underlayment services throughout the Hunter Region. Our experienced team understands Newcastle's unique climate challenges and can help you choose the perfect underlayment solution for your home. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an inspection. For more information about our waterproofing services, visit our <a href="/roof-waterproofing" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof waterproofing page</a> to learn about our comprehensive protection solutions. Let us help you protect your investment with professional underlayment services.</p>
`;

const postData = {
  title: "Essential Roof Underlayment Newcastle: Complete Protection Guide",
  excerpt: "Complete guide to roof underlayment in Newcastle. Best materials, installation, and waterproofing protection.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-24",
  category: "Materials",
  tags: ["roof underlayment", "roof protection", "waterproof membrane", "roofing felt"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-underlayment",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Essential Roof Underlayment Newcastle | Complete Protection Guide"
        description="Complete guide to roof underlayment in Newcastle. Discover the best materials for superior waterproofing and roof protection."
        keywords="roof underlayment newcastle, roofing felt, waterproof membrane, roof protection, underlayment installation"
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
          { name: "Essential Roof Underlayment Newcastle: Complete Protection Guide", url: "https://sydneyroofingandgutters.com.au/roof-underlayment" }
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
                Essential Roof Underlayment Newcastle: Complete Protection Guide
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
  path: "/roof-underlayment/",
  element: <RoofWaterproofingPost />,
};

export default route;