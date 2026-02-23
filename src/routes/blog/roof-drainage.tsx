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
    <p class="text-[#666666] leading-relaxed mb-6">Professional roof drainage systems are essential for protecting Newcastle homes from water damage, foundation issues, and structural problems caused by improper water management. Effective drainage prevents water accumulation on roofs, directs runoff away from building foundations, and maintains proper water flow during Newcastle's frequent rainfall events. A well-designed drainage system protects your home's structural integrity while preventing costly water damage and mould growth in Newcastle's humid coastal climate.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Expert Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Drainage Components</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Comprehensive roof drainage systems consist of multiple components working together to manage water flow effectively. Gutters collect water from roof edges and direct it toward downpipes, while valley gutters handle water runoff from roof intersections and complex roof designs. Downpipes transport collected water safely to ground level, where proper drainage directs it away from building foundations. Additional components include gutter guards to prevent debris accumulation, splash blocks to control water discharge, and overflow systems for extreme weather conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional installation ensures all components work together seamlessly, with proper sizing based on roof area, local rainfall intensity, and building requirements. Quality materials and expert workmanship provide reliable performance throughout Newcastle's variable weather conditions, while regular maintenance ensures continued effectiveness and prevents costly damage from blocked or malfunctioning drainage systems.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Types of Gutter Systems</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle homeowners can choose from various gutter systems designed to meet different aesthetic preferences, performance requirements, and budget considerations. Box gutters provide seamless integration with modern architecture while offering excellent water capacity and durability. Quad gutters feature traditional rectangular profiles that complement heritage and contemporary homes, while half-round gutters offer classic styling with smooth water flow characteristics. Each system type provides distinct advantages depending on your home's design, local weather conditions, and maintenance preferences.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Material selection significantly impacts gutter performance and longevity, with options including aluminium for lightweight durability, steel for strength and weather resistance, and copper for premium appearance and longevity. Professional assessment helps determine the optimal gutter system for your Newcastle home, considering factors such as roof pitch, rainfall patterns, and architectural style to ensure both functional performance and aesthetic appeal.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Gutter Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best For</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Capacity</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Cost Range</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Box Gutters</td>
            <td class="p-3 border-b border-gray-200">Modern Architecture</td>
            <td class="p-3 border-b border-gray-200">High</td>
            <td class="p-3 border-b border-gray-200">$80-120/m</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Quad Gutters</td>
            <td class="p-3 border-b border-gray-200">Traditional Homes</td>
            <td class="p-3 border-b border-gray-200">Medium-High</td>
            <td class="p-3 border-b border-gray-200">$60-100/m</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Half-Round</td>
            <td class="p-3 border-b border-gray-200">Heritage Properties</td>
            <td class="p-3 border-b border-gray-200">Medium</td>
            <td class="p-3 border-b border-gray-200">$70-110/m</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 20px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Top Drainage Maintenance Tips for Newcastle Homes</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Clean gutters monthly during peak rainfall seasons</li>
        <li>Inspect downpipes for blockages and damage regularly</li>
        <li>Check gutter alignment and fastening after storms</li>
        <li>Ensure proper slope for effective water flow</li>
        <li>Install gutter guards to reduce maintenance requirements</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Newcastle's Rainfall Challenges</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's coastal location and variable weather patterns create unique challenges for roof drainage systems. The region experiences both heavy rainfall events and extended dry periods, requiring drainage systems capable of handling sudden downpours while remaining functional during dry spells. High humidity levels can accelerate corrosion in metal components, while salt air exposure affects material durability and performance over time.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Wind-driven rain presents additional challenges, requiring properly designed and installed drainage systems that can handle water from various angles and intensities. Professional installation accounts for these local conditions, ensuring drainage systems provide reliable protection throughout Newcastle's challenging weather patterns while maintaining optimal performance and longevity.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Installation Costs & Maintenance</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Drainage system installation costs vary depending on gutter type, material selection, roof complexity, and accessibility requirements. Professional installation ensures proper sizing, alignment, and integration with existing roof systems, while quality materials provide long-term performance and value. Regular maintenance is essential for optimal drainage performance, including gutter cleaning, downpipe inspection, and component replacement as needed.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional maintenance services help identify potential issues before they cause significant damage, while proper care extends system lifespan and ensures continued protection for your Newcastle home. Investment in quality drainage systems and regular maintenance provides excellent value by preventing costly water damage and maintaining your home's structural integrity throughout Newcastle's challenging weather conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need professional drainage installation or maintenance services?</strong> Sydney Roofing & Gutters provides comprehensive drainage services throughout the Hunter Region. Our experienced team understands Newcastle's unique climate challenges and can help you choose the perfect drainage solution for your home. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for a free consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule an inspection. For more information about our gutter services, visit our <a href="/gutter-repairs" style="color: #3498DB; text-decoration: none; font-weight: 500;">gutter repairs page</a> to learn about our comprehensive drainage solutions. Let us help you protect your investment with professional drainage services.</p>
`;

const postData = {
  title: "Professional Roof Drainage Newcastle: Essential Systems Guide",
  excerpt: "Complete guide to roof drainage systems in Newcastle. Gutters, downpipes, and water management solutions.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-24",
  category: "Maintenance",
  tags: ["roof drainage", "gutters", "downpipes", "water management", "roof guttering"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-drainage",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Professional Roof Drainage Newcastle | Essential Systems Guide"
        description="Complete guide to roof drainage systems in Newcastle. Discover the best gutters, downpipes, and water management solutions."
        keywords="roof drainage newcastle, gutters newcastle, downpipes, water management, roof guttering"
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
          { name: "Professional Roof Drainage Newcastle: Essential Systems Guide", url: "https://sydneyroofingandgutters.com.au/roof-drainage" }
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
                Professional Roof Drainage Newcastle: Essential Systems Guide
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
  path: "/roof-drainage/",
  element: <RoofWaterproofingPost />,
};

export default route;