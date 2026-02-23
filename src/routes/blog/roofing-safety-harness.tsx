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
    <p class="text-[#666666] leading-relaxed mb-6">Roofing safety harness systems provide essential fall protection for anyone working on Newcastle roofs, representing the critical difference between a safe job and potentially fatal accidents. Professional roofers rely on certified harness equipment to maintain safety standards while performing installations, repairs, and inspections on challenging coastal properties. In Newcastle's windy conditions and varied roof designs across suburbs like Merewether Beach and Hamilton East, proper fall protection becomes absolutely essential for both professional contractors and property maintenance personnel working at height.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Expert Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Types of Safety Harness Systems</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Full body harness systems represent the gold standard for roofing safety, distributing fall forces across chest, shoulders, and thighs to minimise injury risk during fall arrest situations. These comprehensive systems include adjustable straps, secure attachment points, and integrated safety features designed for professional roofing applications. Quality harnesses feature padded sections for extended wear comfort and corrosion-resistant hardware suitable for Newcastle's salt air environment.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Anchor point systems provide secure attachment locations for safety harnesses, including temporary roof anchors, permanent fall arrest systems, and mobile anchor points for different roofing scenarios. Lanyards and shock absorbers connect harnesses to anchor points, featuring energy-absorbing mechanisms that reduce fall impact forces while maintaining manageable working distances. Professional-grade systems incorporate self-retracting lifelines that automatically adjust to worker movement while providing immediate fall arrest protection throughout Charlestown and Bar Beach properties.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Australian Safety Standards & Regulations</h2>

    <p class="text-[#666666] leading-relaxed mb-6">AS/NZS 1891 standards govern fall protection equipment in Australia, establishing rigorous testing and certification requirements for safety harnesses, lanyards, and anchor systems used in roofing applications. These standards ensure equipment can withstand specified load limits and environmental conditions common in Newcastle's coastal climate. Compliance with Australian standards provides legal protection and insurance coverage while ensuring optimal safety performance for roofing professionals and property maintenance personnel.</p>

    <p class="text-[#666666] leading-relaxed mb-6">WorkSafe NSW regulations mandate specific fall protection requirements for roof work, including mandatory harness use for work above certain heights and prescribed safety procedures for different roofing scenarios. Understanding regulatory requirements helps property owners and contractors ensure compliance while protecting workers and avoiding potential liability issues. Regular equipment inspection and certification maintains compliance with evolving safety standards throughout Newcastle's diverse roofing environments.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Harness Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Height Limit</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Best For</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Compliance</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Full Body Harness</td>
            <td class="p-3 border-b border-gray-200">2m+ falls</td>
            <td class="p-3 border-b border-gray-200">All roof work</td>
            <td class="p-3 border-b border-gray-200">AS/NZS 1891</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Work Positioning</td>
            <td class="p-3 border-b border-gray-200">Prevents falls</td>
            <td class="p-3 border-b border-gray-200">Edge work</td>
            <td class="p-3 border-b border-gray-200">AS/NZS 1891.1</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Rescue Harness</td>
            <td class="p-3 border-b border-gray-200">Emergency use</td>
            <td class="p-3 border-b border-gray-200">Fall retrieval</td>
            <td class="p-3 border-b border-gray-200">AS/NZS 4142</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Essential Safety Requirements for Newcastle Roofing Work</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Certified equipment meeting AS/NZS standards for coastal environments</li>
        <li>Pre-use inspection protocols to identify wear or damage from salt air exposure</li>
        <li>Weather monitoring - never use harness systems during high wind or wet conditions</li>
        <li>Proper anchor point selection considering Newcastle's diverse roof structures</li>
        <li>Emergency procedures for fall arrest situations and rescue protocols</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Proper Installation & Inspection</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Correct harness fitting requires systematic adjustment of all straps and buckles to ensure proper load distribution and maximum safety effectiveness. Chest straps should sit centrally across the torso, leg straps positioned comfortably around thighs, and shoulder straps adjusted to maintain dorsal D-ring positioning between shoulder blades. Professional fitting ensures optimal comfort and safety performance while preventing equipment failure during critical fall arrest situations common in Newcastle's challenging roofing environments.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Pre-use inspection protocols examine all harness components for wear, damage, or deterioration that could compromise safety performance. Visual inspection includes checking stitching integrity, hardware condition, and strap wear patterns, while tactile examination identifies hidden damage or material degradation from salt air exposure. Monthly detailed inspections and annual professional certification maintain equipment reliability and regulatory compliance throughout Newcastle's demanding coastal conditions.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Safety vs DIY Risks</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Professional roofers undergo comprehensive safety training and maintain current certification in fall protection systems, ensuring proper equipment selection, installation, and emergency procedures. This expertise becomes crucial when working on Newcastle's diverse roof types, from heritage tiles in Hamilton to modern designs in Adamstown Heights. Professional safety protocols include redundant protection systems, emergency rescue procedures, and insurance coverage that DIY approaches cannot match.</p>

    <p class="text-[#666666] leading-relaxed mb-6">DIY roof work involving harness systems requires extensive training, proper equipment selection, and emergency backup plans that most property owners lack. The complexity of anchor point selection, weather assessment, and rescue procedures makes professional services the safer choice for significant roofing projects. Understanding these limitations helps property owners make informed decisions about when professional safety expertise becomes necessary for protecting both workers and property investments.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need professional roofing services with certified safety protocols?</strong> Sydney Roofing & Gutters maintains comprehensive safety standards and certified fall protection systems for all roofing projects throughout the Hunter Region. Our experienced team understands Newcastle's unique safety challenges and provides fully insured services with proper safety equipment. Call us at <a href="tel:0240894613" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for professional roofing services, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule a consultation. For comprehensive safety information, visit our <a href="/roof-inspections" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof inspections page</a> to learn about our professional safety protocols.</p>
`;

const postData = {
  title: "Roofing Safety Harness Newcastle: Essential Safety Guide",
  excerpt: "Complete guide to roofing safety harnesses in Newcastle. Types, regulations, and professional safety standards.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-20",
  category: "Safety",
  tags: ["safety harness", "roof safety", "fall protection", "safety equipment"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roofing-safety-harness",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roofing Safety Harness Newcastle | Essential Safety Guide"
        description="Complete guide to roofing safety harnesses in Newcastle. Learn about types, Australian standards, and professional safety requirements."
        keywords="roofing safety harness, fall protection, roof safety equipment, safety standards newcastle, AS/NZS harness"
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
          { name: "Roofing Safety Harness Newcastle: Essential Safety Guide", url: "https://sydneyroofingandgutters.com.au/roofing-safety-harness" }
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
                Roofing Safety Harness Newcastle: Essential Safety Guide
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[#666666] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>20 December 2024</span>
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
  path: "/roofing-safety-harness/",
  element: <RoofWaterproofingPost />,
};

export default route;