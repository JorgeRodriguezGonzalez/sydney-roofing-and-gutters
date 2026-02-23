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
    <p class="text-[#666666] leading-relaxed mb-6">Quality roof sheathing serves as the essential structural foundation for Newcastle homes, providing critical support for roof coverings while ensuring structural integrity and weather protection. This vital component acts as the primary barrier between your roof covering and the structural framework, distributing loads evenly and providing a stable base for roofing materials. In Newcastle's challenging coastal climate with high humidity, frequent storms, and salt air exposure, quality sheathing becomes crucial for maintaining roof performance and preventing structural damage.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Leading Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Quality Sheathing Materials</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle homeowners can choose from various sheathing materials, each offering distinct advantages for different applications and climate conditions. Plywood sheathing provides excellent strength, dimensional stability, and resistance to moisture, making it ideal for Newcastle's humid coastal environment. Oriented Strand Board (OSB) offers cost-effective performance with good structural properties, while engineered wood products provide consistent quality and predictable performance characteristics.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Material selection significantly impacts sheathing performance, with factors including moisture resistance, dimensional stability, fastener holding power, and compatibility with roofing materials. Professional assessment helps determine the optimal sheathing material for your Newcastle home, considering factors such as roof design, local climate conditions, and long-term performance requirements to ensure both structural integrity and weather protection.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Thickness Requirements & Building Codes</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Australian building codes specify minimum thickness requirements for roof sheathing based on rafter spacing, roof loads, and local wind conditions. Standard thicknesses range from 12mm to 19mm, with thicker materials required for wider rafter spacing and higher wind loads common in Newcastle's coastal environment. Professional installation ensures compliance with all relevant building codes and manufacturer specifications while providing optimal structural performance.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Proper spacing and fastening requirements are essential for sheathing performance, with specific nail patterns and spacing requirements based on material type and local conditions. Professional installation accounts for Newcastle's unique climate challenges, ensuring sheathing provides reliable structural support and weather protection throughout the region's variable weather conditions.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Sheathing Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Thickness</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best For</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost Range</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Plywood</td>
            <td class="p-3 border-b border-gray-200">12-19mm</td>
            <td class="p-3 border-b border-gray-200">High Performance</td>
            <td class="p-3 border-b border-gray-200">$15-25/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">OSB</td>
            <td class="p-3 border-b border-gray-200">12-19mm</td>
            <td class="p-3 border-b border-gray-200">Cost Effective</td>
            <td class="p-3 border-b border-gray-200">$10-18/m²</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Engineered Wood</td>
            <td class="p-3 border-b border-gray-200">12-19mm</td>
            <td class="p-3 border-b border-gray-200">Consistent Quality</td>
            <td class="p-3 border-b border-gray-200">$12-22/m²</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 20px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Why Quality Sheathing Matters for Newcastle Homes</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Provides structural support for roof coverings and loads</li>
        <li>Resists moisture damage from Newcastle's humid climate</li>
        <li>Maintains dimensional stability during temperature changes</li>
        <li>Ensures proper fastener holding power for roofing materials</li>
        <li>Prevents structural damage from wind and weather forces</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional sheathing installation requires careful planning, proper material handling, and expert application techniques to ensure optimal performance and longevity. The installation process begins with thorough framework inspection and preparation, ensuring proper spacing and alignment of structural elements. Sheathing panels must be installed with proper spacing for expansion, correct orientation for strength, and appropriate fastening patterns for optimal performance.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">When to Replace & Signs of Damage</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Sheathing replacement becomes necessary when signs of deterioration, damage, or age compromise its structural integrity and protective capabilities. Common indicators include visible water damage, delamination, soft spots, or evidence of structural movement. Regular roof inspections help identify sheathing issues before they cause significant damage, while professional assessment ensures accurate evaluation of replacement needs and timing.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Early detection of sheathing problems prevents costly structural damage and ensures continued protection for your Newcastle home. Professional inspection services can identify potential issues before they become major problems, while quality replacement materials and expert installation provide long-term structural integrity and weather protection throughout Newcastle's challenging climate conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert sheathing installation or replacement services?</strong> Sydney Roofing & Gutters provides comprehensive sheathing services throughout the Hunter Region. Our experienced team understands Newcastle's unique climate challenges and can help you choose the perfect sheathing solution for your home. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an inspection. For more information about our roof replacement services, visit our <a href="/roof-replacement" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof replacement page</a> to learn about our comprehensive structural solutions. Let us help you protect your investment with professional sheathing services.</p>
`;

const postData = {
  title: "Quality Roof Sheathing Newcastle: Complete Installation Guide",
  excerpt: "Complete guide to roof sheathing in Newcastle. Best materials, installation, and structural support solutions.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-24",
  category: "Structure",
  tags: ["roof sheathing", "roof decking", "plywood roofing", "OSB roofing", "roof structure"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-sheathing",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Quality Roof Sheathing Newcastle | Complete Installation Guide"
        description="Complete guide to roof sheathing in Newcastle. Discover the best materials for superior structural support and roof protection."
        keywords="roof sheathing newcastle, roof decking, plywood roofing, OSB roofing, roof structure"
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
          { name: "Quality Roof Sheathing Newcastle: Complete Installation Guide", url: "https://sydneyroofingandgutters.com.au/roof-sheathing" }
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
                Quality Roof Sheathing Newcastle: Complete Installation Guide
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
  path: "/roof-sheathing/",
  element: <RoofWaterproofingPost />,
};

export default route;