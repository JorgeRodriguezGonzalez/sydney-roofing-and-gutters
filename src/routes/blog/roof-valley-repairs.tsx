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
    <p class="text-[#666666] leading-relaxed mb-6">Roof valleys represent critical junction points where two roof planes meet, channelling substantial water flow during Newcastle's frequent rainfall and coastal storms. These vulnerable areas require specialised attention and expert repair techniques to prevent water infiltration that could damage your home's structure and interior. Newcastle's challenging climate, with its combination of salt air, high humidity, and seasonal weather extremes, places additional stress on valley systems throughout suburbs like Merewether, Hamilton, and Charlestown. Understanding valley problems and professional repair methods helps homeowners protect their most valuable investment and maintain roof integrity.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Top Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Common Valley Problems in Newcastle Roofs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Water infiltration through compromised valley systems creates the most serious roofing problems facing Newcastle homes, particularly during heavy rainfall and storm events. Corroded valley irons, common in older homes throughout Bar Beach and New Lambton, allow water to seep beneath roofing materials, causing structural damage and interior leaks. Debris accumulation in valleys creates blockages that force water backup under tiles or sheets, leading to widespread moisture damage.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Flashing failures around valley edges compromise waterproof seals, while improper installation during previous repairs often exacerbates existing problems. Newcastle's coastal salt air accelerates metal corrosion, making regular valley inspection and maintenance essential for long-term roof protection. Poor drainage design or inadequate valley capacity during heavy rainfall can overwhelm even properly maintained systems, requiring professional assessment and potential upgrades.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Issue</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Repair Method</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Urgency</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Avg Cost</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Corroded Valley Iron</td>
            <td class="p-3 border-b border-gray-200">Complete replacement</td>
            <td class="p-3 border-b border-gray-200">High</td>
            <td class="p-3 border-b border-gray-200">$200-500/m</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Debris Blockage</td>
            <td class="p-3 border-b border-gray-200">Cleaning & prevention</td>
            <td class="p-3 border-b border-gray-200">Medium</td>
            <td class="p-3 border-b border-gray-200">$150-300</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Flashing Failure</td>
            <td class="p-3 border-b border-gray-200">Seal & reattach</td>
            <td class="p-3 border-b border-gray-200">High</td>
            <td class="p-3 border-b border-gray-200">$300-600</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Inadequate Capacity</td>
            <td class="p-3 border-b border-gray-200">Valley upgrade</td>
            <td class="p-3 border-b border-gray-200">Medium</td>
            <td class="p-3 border-b border-gray-200">$400-800/m</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Valley Repair Methods</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional valley repair begins with comprehensive assessment to determine the extent of damage and optimal repair approach. Complete valley iron replacement involves careful removal of surrounding roofing materials, installation of new corrosion-resistant metal components, and proper integration with existing roof systems. Advanced sealing techniques using modern waterproof membranes provide enhanced protection against Newcastle's coastal moisture conditions.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Expert repairs include upgrading inadequate valley systems to handle increased water flow, ensuring proper drainage gradients, and installing quality flashing systems that withstand Newcastle's variable weather. Professional techniques prioritise long-term performance over temporary fixes, using premium materials and proven installation methods that extend valley lifespan and protect your home's structural integrity.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Signs Your Roof Valleys Need Immediate Attention</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Visible rust or corrosion on valley irons or flashings</li>
        <li>Water stains on interior ceilings near valley areas</li>
        <li>Debris accumulation causing water backup during rain</li>
        <li>Loose or damaged flashing around valley edges</li>
        <li>Cracked or deteriorated sealant along valley joints</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Valley Types & Materials</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Open valleys feature exposed metal channels that efficiently direct water flow, making them ideal for Newcastle's high rainfall areas and homes in Adamstown and Jesmond. These systems provide excellent drainage capacity and easy maintenance access, though they require quality materials to withstand coastal corrosion. Closed valleys hide metal components beneath overlapping roof materials, offering improved aesthetic appeal while maintaining effective water management.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Material selection significantly impacts valley performance and longevity in Newcastle's coastal environment. Colorbond steel provides excellent corrosion resistance and colour matching options, while aluminium offers lightweight durability for specific applications. Copper valleys deliver premium longevity and distinctive appearance, making them suitable for heritage homes or high-end installations requiring superior performance and visual appeal.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Preventive Maintenance for Valleys</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Regular valley maintenance prevents costly repairs and extends system lifespan through proactive care and early problem detection. Quarterly cleaning removes debris accumulation that could cause water backup, while annual professional inspections identify developing issues before they compromise roof integrity. Newcastle's tree-lined suburbs require more frequent debris removal, particularly during autumn leaf fall periods.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Preventive measures include gutter guard installation to reduce debris entry, regular flashing inspection and maintenance, and prompt attention to minor issues before they escalate. Professional maintenance programs provide systematic care that protects your valley investment and ensures optimal performance throughout Newcastle's challenging weather conditions, preventing emergency repairs and extending overall roof lifespan.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need expert valley repair services?</strong> Sydney Roofing & Gutters provides comprehensive valley repair and maintenance throughout the Hunter Region. Our experienced team understands Newcastle's unique coastal challenges and delivers lasting solutions for valley problems. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for immediate valley assessment, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule repair services. For more information about our repair services, visit our <a href="/roof-repairs" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof repairs page</a> to explore our comprehensive repair solutions.</p>
`;

const postData = {
  title: "Roof Valley Repairs Newcastle: Expert Repair Guide",
  excerpt: "Complete guide to roof valley repairs in Newcastle. Common problems, repair methods, and preventive maintenance.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-27",
  category: "Repairs",
  tags: ["roof valley repairs", "valley leaks", "roof repairs", "flashing repairs"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-valley-repairs",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Valley Repairs Newcastle | Expert Repair Guide"
        description="Complete guide to roof valley repairs in Newcastle. Learn about common problems, professional repair methods, and maintenance."
        keywords="roof valley repairs newcastle, valley leaks, roof repair, flashing repair, valley maintenance"
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
          { name: "Roof Valley Repairs Newcastle: Expert Repair Guide", url: "https://sydneyroofingandgutters.com.au/roof-valley-repairs" }
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
                Roof Valley Repairs Newcastle: Expert Repair Guide
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
  path: "/roof-valley-repairs/",
  element: <RoofWaterproofingPost />,
};

export default route;