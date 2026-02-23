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
    <p class="text-[#666666] leading-relaxed mb-6">Roof flashing installation forms the cornerstone of effective waterproofing for Newcastle homes, providing critical protection at vulnerable junction points where water infiltration most commonly occurs. These specialised metal components create weatherproof seals around chimneys, vents, skylights, and roof transitions, preventing moisture from penetrating your home's structure. Newcastle's challenging coastal environment, with its combination of driving rain, salt air exposure, and temperature fluctuations, demands expert flashing installation using premium materials and proven techniques. Understanding flashing types and professional installation methods helps Newcastle homeowners across suburbs like Merewether, Hamilton, and Charlestown protect their most valuable investment.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Looking for professional roofing services? <a href="/" class="text-[#3498DB] hover:text-[#2C7CB5] font-semibold underline">Expert Newcastle Roofers</a> provides expert solutions across Newcastle and the Hunter Region.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Essential Flashing Types for Newcastle Roofs</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Valley flashing channels water flow at roof intersections, representing the most critical waterproofing component for complex roof designs common in Bar Beach and New Lambton homes. Chimney flashing systems require multiple components including base flashings, step flashings, and cap flashings that work together to create comprehensive moisture barriers around these prominent roof penetrations. Vent flashing accommodates plumbing vents, exhaust fans, and other penetrations with flexible boots or rigid collars that maintain seals despite thermal movement.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Step flashing protects roof-to-wall intersections with individual pieces that overlap like scales, ensuring water cannot penetrate behind the flashing system. Apron flashing directs water away from vulnerable areas where roofs meet walls or other structures, while counter flashing provides additional protection by covering the top edges of base flashings. Each flashing type serves specific purposes, and professional assessment determines optimal combinations for your Newcastle home's unique architectural features.</p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full border-collapse" style="margin: 20px 0;">
        <thead>
          <tr style="background: #F9FAFB;">
            <th class="text-left p-3 border-b-2 border-gray-200">Flashing Type</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Location</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Material</th>
            <th class="text-left p-3 border-b-2 border-gray-200">Lifespan</th>
          </tr>
        </thead>
        <tbody style="color:#666666;">
          <tr>
            <td class="p-3 border-b border-gray-200">Valley Flashing</td>
            <td class="p-3 border-b border-gray-200">Roof intersections</td>
            <td class="p-3 border-b border-gray-200">Colorbond/Copper</td>
            <td class="p-3 border-b border-gray-200">25-50 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Chimney Flashing</td>
            <td class="p-3 border-b border-gray-200">Around chimneys</td>
            <td class="p-3 border-b border-gray-200">Lead/Aluminium</td>
            <td class="p-3 border-b border-gray-200">20-40 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Vent Flashing</td>
            <td class="p-3 border-b border-gray-200">Pipe penetrations</td>
            <td class="p-3 border-b border-gray-200">Rubber/Metal</td>
            <td class="p-3 border-b border-gray-200">15-25 years</td>
          </tr>
          <tr>
            <td class="p-3 border-b border-gray-200">Step Flashing</td>
            <td class="p-3 border-b border-gray-200">Wall intersections</td>
            <td class="p-3 border-b border-gray-200">Galvanised steel</td>
            <td class="p-3 border-b border-gray-200">20-30 years</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Professional Installation Techniques</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Expert flashing installation begins with meticulous preparation, ensuring surfaces are clean, dry, and properly primed for optimal adhesion and sealing. Professional techniques emphasise proper overlap patterns, with each flashing piece lapping over the next in a shingle-like fashion that directs water away from vulnerable joints. Quality sealants and fastening methods ensure long-term performance despite Newcastle's coastal weather challenges.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Installation expertise extends to precise cutting, forming, and fitting of flashing components to match your roof's specific geometry and architectural details. Professional installers understand thermal expansion requirements, allowing for material movement while maintaining waterproof seals. Expert workmanship includes proper integration with existing roof materials, ensuring flashing systems enhance rather than compromise overall roof integrity and appearance.</p>

    <div style="background: rgba(52,152,219,.08); border-left:4px solid #3498DB; padding:16px; border-radius:8px; margin: 32px 0;">
      <h4 style="margin:0 0 6px 0; color:#2C3E50;">Quality Flashing Installation Benefits for Coastal Newcastle</h4>
      <ul style="margin:0; padding-left:18px; color:#666666;">
        <li>Superior protection against wind-driven rain and salt air exposure</li>
        <li>Enhanced durability through proper material selection and installation</li>
        <li>Reduced maintenance requirements with quality components and techniques</li>
        <li>Improved home value through professional waterproofing systems</li>
        <li>Long-term cost savings by preventing water damage and structural issues</li>
      </ul>
    </div>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Common Flashing Failure Points</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Poor installation techniques represent the primary cause of flashing failures in Newcastle homes, often resulting from inadequate overlap, insufficient sealing, or improper fastening methods. Corrosion from coastal salt air accelerates deterioration of inferior materials, while thermal expansion and contraction can compromise inadequately designed installations. Storm damage frequently affects improperly secured flashings, leading to immediate water infiltration and long-term structural problems.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Age-related deterioration affects all flashing systems eventually, particularly in harsh coastal environments where UV exposure, temperature cycling, and salt air create ongoing challenges. Professional assessment identifies early warning signs of flashing failure, allowing timely intervention before costly damage occurs. Understanding failure patterns helps homeowners prioritise maintenance and replacement scheduling for optimal protection throughout Newcastle's variable weather conditions.</p>

    <h2 class="text-3xl font-bold text-[#2C3E50] mt-12 mb-6">Material Selection for Newcastle Climate</h2>

    <p class="text-[#666666] leading-relaxed mb-6">Copper flashing provides premium performance and distinctive appearance, developing an attractive patina that enhances both protection and aesthetic appeal for heritage homes in Adamstown and Jesmond. Aluminium offers excellent corrosion resistance at moderate cost, making it suitable for most Newcastle applications where appearance and longevity matter. Galvanised steel provides reliable performance for standard applications, though coastal conditions may require upgraded materials for extended service life.</p>

    <p class="text-[#666666] leading-relaxed mb-6">Material selection considers factors including roof design, environmental exposure, aesthetic requirements, and budget constraints. Professional consultation ensures optimal material choices that balance performance, appearance, and value for your specific Newcastle location and architectural style. Quality materials combined with expert installation provide decades of reliable protection against water infiltration and weather-related damage.</p>

    <p class="text-[#666666] leading-relaxed mb-6"><strong>Need professional flashing installation services?</strong> Sydney Roofing & Gutters provides expert flashing solutions throughout the Hunter Region. Our skilled team understands Newcastle's coastal challenges and delivers superior waterproofing systems for lasting protection. Call us at <a href="tel:1300796024" style="color: #3498DB; text-decoration: none; font-weight: 500;">(02) 4089 4613</a> for comprehensive flashing assessment, or visit our <a href="/contact-us" style="color: #3498DB; text-decoration: none; font-weight: 500;">contact page</a> to schedule installation services. For more information about our waterproofing services, visit our <a href="/roof-repairs" style="color: #3498DB; text-decoration: none; font-weight: 500;">roof repairs page</a> to explore our complete protection solutions.</p>
`;

const postData = {
  title: "Roof Flashing Installation Newcastle: Complete Guide",
  excerpt: "Expert guide to roof flashing installation in Newcastle. Types, techniques, materials, and coastal climate considerations.",
  author: "Sydney Roofing & Gutters",
  publishDate: "2024-12-27",
  category: "Installation",
  tags: ["roof flashing", "flashing installation", "waterproofing", "leak prevention"],
  readingTime: "5 min",
  featuredImage: "/images/roof-repair-and-restoration-1.jpg",
  slug: "roof-flashing-installation",
  content: generatePostContent()
};

const RoofWaterproofingPost = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{fontFamily: "'Inter', sans-serif"}}>
      <SEOHead 
        title="Roof Flashing Installation Newcastle | Complete Guide"
        description="Expert guide to roof flashing installation in Newcastle. Learn about flashing types, professional techniques, and material selection."
        keywords="roof flashing installation newcastle, flashing types, waterproofing, leak prevention, chimney flashing"
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
          { name: "Roof Flashing Installation Newcastle: Complete Guide", url: "https://sydneyroofingandgutters.com.au/roof-flashing-installation" }
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
                Roof Flashing Installation Newcastle: Complete Guide
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
  path: "/roof-flashing-installation/",
  element: <RoofWaterproofingPost />,
};

export default route;