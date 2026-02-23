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
    <p class="text-[#666666] leading-relaxed mb-6">Slate roof restoration in Newcastle preserves the architectural heritage and exceptional longevity of natural slate roofing systems found throughout the city's historic suburbs. Newcastle's heritage homes featuring slate roofing require specialised restoration expertise to maintain authenticity, structural integrity, and weather protection against coastal environmental challenges. Professional slate restoration addresses common issues including cracked slates, deteriorated pointing, ridge damage, and valley repairs while preserving the unique character and value of heritage properties. Expert restoration services ensure compliance with heritage regulations, maintain architectural authenticity, and deliver long-term performance across The Hill, Cooks Hill, Hamilton, and established Newcastle neighbourhoods.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Expert Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Slate Roof Restoration Process</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Comprehensive assessment begins slate restoration projects, examining structural condition, slate integrity, and identifying damage patterns specific to Newcastle's coastal exposure and heritage construction methods. Damaged slate replacement requires careful sourcing of compatible materials that match original specifications in thickness, colour, and texture to maintain architectural authenticity. Professional repointing involves removing deteriorated mortar and replacing with appropriate lime-based mortars compatible with heritage construction techniques and materials.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Ridge capping restoration addresses common failure points where traditional mortar bedding deteriorates under coastal weather conditions, requiring specialised repair techniques and appropriate materials. Valley restoration involves careful waterproofing and slate integration to prevent water penetration while maintaining heritage appearance. Lead work restoration includes repairing flashings, box gutters, and penetration seals essential for weather protection in slate roofing systems. Quality restoration maintains original installation methods while incorporating modern waterproofing techniques for enhanced performance.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Preserving Newcastle's Heritage Roofs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Heritage requirements in Newcastle's conservation areas mandate specific materials, techniques, and approvals for slate roof restoration to preserve architectural authenticity and historical significance. Matching slate specifications requires expert sourcing from approved quarries or salvaged materials that replicate original characteristics including colour, texture, and dimensional properties. Council approvals often require detailed restoration plans, heritage impact assessments, and specialist contractor certification for compliance with conservation regulations.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Architectural integrity preservation demands attention to original construction details, fixing methods, and installation patterns that define heritage roofing character. Professional restoration maintains traditional slate hanging techniques while incorporating appropriate modern fixings and waterproofing systems for enhanced performance. Documentation of restoration work provides valuable records for future maintenance and heritage compliance, ensuring long-term preservation of Newcastle's architectural legacy.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0">
        <thead>
          <tr style="background: #F9FAFB">
            <th class="text-left p-3 border-b-2 border-gray-200">Issue</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Repair Method</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Materials</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Specialist Required?</th>
          </tr>
        </thead>
        <tbody style="color: #666666">
          <tr>
            <td class="p-3 border-b border-gray-200">Cracked Slates</td>
            <td class="p-3 border-b border-gray-200">Individual replacement</td>
            <td class="p-3 border-b border-gray-200">Matching slate, copper nails</td>
            <td class="p-3 border-b border-gray-200">Yes - Heritage approved</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Deteriorated Pointing</td>
            <td class="p-3 border-b border-gray-200">Repointing with lime mortar</td>
            <td class="p-3 border-b border-gray-200">Heritage lime mortar</td>
            <td class="p-3 border-b border-gray-200">Yes - Traditional skills</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Ridge Damage</td>
            <td class="p-3 border-b border-gray-200">Re-bed and point</td>
            <td class="p-3 border-b border-gray-200">Clay tiles, lime mortar</td>
            <td class="p-3 border-b border-gray-200">Yes - Structural knowledge</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Valley Leaks</td>
            <td class="p-3 border-b border-gray-200">Lead work restoration</td>
            <td class="p-3 border-b border-gray-200">Lead sheet, appropriate fixings</td>
            <td class="p-3 border-b border-gray-200">Yes - Lead work certified</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left: 4px solid #3498DB; padding: 16px; border-radius: 8px; margin: 32px 0">
      <h4 style="margin: 0 0 6px 0; color: #2C3E50">Heritage Slate Roof Care Tips for Newcastle Homes</h4>
      <ul style="margin: 0; padding-left: 18px; color: #666666">
        <li>Schedule annual inspections to identify issues before major damage occurs</li>
        <li>Use only heritage-approved materials and specialist contractors for repairs</li>
        <li>Maintain gutters and downpipes to prevent water damage to slate edges</li>
        <li>Document all restoration work for heritage compliance and future reference</li>
        <li>Avoid walking on slate roofs due to fragility and potential damage risks</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Slate vs Modern Materials</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Natural slate longevity exceeds most modern materials with properly maintained systems lasting 100-200 years compared to 20-50 years for contemporary alternatives. Aesthetic superiority of natural slate provides unmatched character, colour variation, and texture that enhances heritage property values and architectural authenticity. Maintenance requirements for slate roofing demand specialised expertise and premium materials but deliver exceptional long-term value through extended lifespan and heritage preservation.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Investment value considerations include higher initial restoration costs offset by extended performance, heritage property premiums, and reduced replacement frequency compared to modern alternatives. Environmental benefits of slate restoration include material longevity reducing waste, natural material sustainability, and preservation of embodied energy in existing heritage construction. Professional assessment determines optimal restoration approaches balancing heritage requirements, performance expectations, and long-term investment objectives.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Specialist Restoration Costs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Premium pricing for slate restoration reflects specialised materials, expert craftsmanship, and heritage compliance requirements with costs typically 2-3 times standard roofing rates. Sourcing authentic slates requires specialist suppliers and often custom matching services to replicate original specifications and maintain architectural integrity. Skilled labour demands heritage restoration expertise, traditional techniques knowledge, and appropriate trade certifications for quality outcomes and regulatory compliance.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Preserving your Newcastle heritage slate roof with expert restoration?</strong> Sydney Roofing & Gutters specialises in heritage slate restoration throughout Newcastle's historic suburbs, combining traditional craftsmanship with modern performance standards. Our certified heritage contractors understand Newcastle's architectural legacy and deliver authentic restoration solutions that preserve character while ensuring long-term weather protection. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for specialist heritage assessment, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule your consultation. Discover our comprehensive <a href="/roof-restoration" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof restoration services</a> to learn how we preserve Newcastle's architectural heritage with expert care.</p>
`;

const postData = {
  title: "Slate Roof Restoration Newcastle: Heritage Roofing Guide",
  excerpt: "Expert slate roof restoration in Newcastle. Heritage preservation, professional repair process, and specialist restoration services.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-31",
  category: "Heritage",
  tags: ["slate roof restoration", "heritage roofing", "slate repair", "heritage homes"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "slate-roof-restoration-2",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Slate Roof Restoration Newcastle | Heritage Roofing Guide"
        description="Expert slate roof restoration in Newcastle. Learn about heritage preservation, professional restoration process, and specialist services."
        keywords="slate roof restoration newcastle, heritage roofing, slate repair, heritage homes, slate restoration specialist"
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
          { name: "Slate Roof Restoration Newcastle: Heritage Roofing Guide", url: "https://sydneyroofingandgutters.com.au/slate-roof-restoration-2" }
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
                Slate Roof Restoration Newcastle: Heritage Roofing Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>31 December 2024</span>
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
  path: "/slate-roof-restoration-2/",
  element: <RoofWaterproofingPost />,
};

export default route;