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
    <p class="text-[#666666] leading-relaxed mb-6">Roof trusses form the structural backbone of Newcastle homes, providing essential support that distributes weight loads evenly while creating the framework for your roof covering system. These engineered components represent a critical investment in your property's structural integrity, designed to withstand Newcastle's challenging coastal conditions including strong winds, heavy rainfall, and salt air exposure. Understanding truss design, materials, and installation requirements ensures optimal performance and long-term structural reliability for your most valuable asset.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Best Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Top Truss Types for Newcastle Homes</h2>

    <p class="text-[#666666] leading-relaxed mb-6">King post trusses offer the simplest and most cost-effective solution for smaller Newcastle properties, featuring a central vertical post that provides excellent load distribution for spans up to 8 metres. Queen post trusses accommodate larger spans while maintaining structural efficiency, utilising two vertical posts connected by a horizontal straining beam that creates additional strength for medium-sized residential applications. These traditional designs prove particularly effective for heritage properties throughout areas like Hamilton and Merewether where maintaining architectural character remains essential.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Fink trusses dominate modern Newcastle construction due to their exceptional span capabilities and material efficiency, featuring a web configuration that optimises load distribution while minimising timber requirements. Attic trusses provide valuable storage space within the roof structure, incorporating additional web members that create accessible areas perfect for Newcastle homes where maximising usable space becomes crucial. Professional truss design ensures compliance with Australian building codes while optimising performance for your specific property requirements.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0">
        <thead>
          <tr style="background: #F9FAFB">
            <th class="text-left p-3 border-b-2 border-gray-200">Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Max Span</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Wind Rating</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best For</th>
          </tr>
        </thead>
        <tbody style="color: #666666">
          <tr>
            <td class="p-3 border-b border-gray-200">King Post</td>
            <td class="p-3 border-b border-gray-200">8 metres</td>
            <td class="p-3 border-b border-gray-200">N2-N3</td>
            <td class="p-3 border-b border-gray-200">Small homes</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Queen Post</td>
            <td class="p-3 border-b border-gray-200">12 metres</td>
            <td class="p-3 border-b border-gray-200">N2-N4</td>
            <td class="p-3 border-b border-gray-200">Medium homes</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Fink</td>
            <td class="p-3 border-b border-gray-200">15 metres</td>
            <td class="p-3 border-b border-gray-200">N3-N5</td>
            <td class="p-3 border-b border-gray-200">Large homes</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Attic</td>
            <td class="p-3 border-b border-gray-200">12 metres</td>
            <td class="p-3 border-b border-gray-200">N2-N4</td>
            <td class="p-3 border-b border-gray-200">Storage needs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Benefits of Trusses vs Rafters</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Engineered roof trusses deliver superior structural integrity compared to traditional rafter construction, providing precisely calculated load paths that ensure optimal weight distribution throughout your Newcastle home's structure. The factory-controlled manufacturing environment guarantees consistent quality and dimensional accuracy that field-built rafters cannot match. Trusses also offer significant cost advantages through reduced labour requirements and material optimisation, making them the preferred choice for most residential applications.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Design flexibility represents another key advantage, with trusses accommodating complex roof configurations, cathedral ceilings, and architectural features that would prove challenging with conventional framing. The speed of installation reduces weather exposure during construction, particularly valuable in Newcastle's variable coastal conditions. Professional truss installation typically completes roof framing in days rather than weeks, minimising project delays and weather-related complications that commonly affect traditional construction methods.</p>

    <div style="background: rgba(52,152,219,.08); border-left: 4px solid #3498DB; padding: 16px; border-radius: 8px; margin: 32px 0">
      <h4 style="margin: 0 0 6px 0; color: #2C3E50">Essential Safety Benefits</h4>
      <ul style="margin: 0; padding-left: 18px; color: #666666">
        <li>Engineered load calculations ensure structural safety compliance</li>
        <li>Factory quality control eliminates field construction variables</li>
        <li>Professional installation reduces workplace safety risks significantly</li>
        <li>Certified designs meet all Australian building code requirements</li>
        <li>Faster installation minimises weather exposure during construction</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Newcastle Wind Load Requirements</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Newcastle's coastal location subjects residential properties to significant wind loads that require careful consideration during truss design and specification. The Australian Building Code classifies Newcastle as wind region B, with ultimate wind speeds reaching 45 m/s that generate substantial uplift and lateral forces on roof structures. Properties in elevated areas like Charlestown, Bar Beach, and Adamstown face even higher exposure categories that demand enhanced structural provisions and connection details.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional truss design incorporates these wind load requirements through enhanced connection systems, increased member sizes, and specialised bracing configurations that ensure structural integrity during severe weather events. Compliance with AS 4440 and AS 1720 standards ensures your Newcastle home meets all regulatory requirements while providing the safety margins necessary for long-term structural performance. Regular inspection and maintenance of truss connections, particularly in coastal areas, helps maintain optimal wind resistance throughout the structure's service life.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">When Trusses Need Replacement</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Truss replacement becomes necessary when age, damage, or structural modifications compromise the system's load-carrying capacity and safety performance. Signs requiring professional assessment include visible sagging, cracked or split members, loose or damaged connections, and evidence of moisture damage or insect infestation. Newcastle's coastal environment can accelerate deterioration through salt air exposure and moisture infiltration, making regular professional inspections essential for early problem identification.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Professional structural assessment determines replacement timing based on engineering analysis rather than arbitrary age limits. Modern trusses designed and installed to current standards can provide decades of reliable service, while older systems or those affected by damage may require earlier replacement to ensure continued safety and performance.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert truss design or replacement services?</strong> Best Newcastle Roofers provides comprehensive structural roofing solutions throughout Newcastle and the Hunter Region. Our qualified engineers ensure your truss system meets all current building codes while optimising performance for your specific requirements. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for professional consultation, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your structural assessment. For comprehensive roof evaluation services, explore our <a href="/roof-inspections" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof inspection solutions</a> designed specifically for Newcastle's challenging coastal conditions.</p>
`;

const postData = {
  title: "Top Roof Trusses Newcastle: Expert Design & Installation Guide",
  excerpt: "Professional guide to roof trusses in Newcastle. Types, design, structural integrity, and when to replace.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-23",
  category: "Structure",
  tags: ["roof trusses", "roof structure", "truss design", "structural roofing"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-trusses",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Top Roof Trusses Newcastle | Expert Design & Installation"
        description="Professional guide to roof trusses in Newcastle. Learn about the best truss types, design considerations, and structural integrity."
        keywords="roof trusses newcastle, truss design, roof structure, structural roofing, truss installation, roof framing"
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
          { name: "Top Roof Trusses Newcastle: Expert Design & Installation Guide", url: "https://sydneyroofingandgutters.com.au/roof-trusses" }
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
                Top Roof Trusses Newcastle: Expert Design & Installation Guide
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
  path: "/roof-trusses/",
  element: <RoofWaterproofingPost />,
};

export default route;