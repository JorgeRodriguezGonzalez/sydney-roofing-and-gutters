import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";
import { route as homeRoute } from "./routes/home";
import { route as aboutUsRoute } from "./routes/about-us";
import { route as aboutRoute } from "./routes/about";
import { route as servicesRoute } from "./routes/services";
import { route as contactUsRoute } from "./routes/contact-us";
import { route as contactRoute } from "./routes/contact";
import { route as TermsAndConditionsRoute } from "./routes/terms-and-conditions";
import { route as privacyPolicyRoute } from "./routes/privacy-policy";
import { route as roofingSydneyCbdRoute } from "./routes/roofing-sydney-cbd";
import { route as roofingMarayongRoute } from "./routes/locations/marayong";
import { route as guideRoofLeakCostRoute } from "./routes/guides/how-much-does-it-cost-to-fix-a-roof-leak";

import { route as roofRepairsRoute } from "./routes/roof-repairs";
import { route as roofReplacementRoute } from "./routes/roof-replacement";
import { route as roofRestorationRoute } from "./routes/services/roof-restoration";
import { route as newRoofInstallationRoute } from "./routes/new-roof-installation";
import { route as emergencyRoofRepairsRoute } from "./routes/emergency-roof-repairs";
import { route as roofInspectionsRoute } from "./routes/roof-inspections";
import { route as gutterRepairsRoute } from "./routes/gutter-repairs";
import { route as leakDetectionRoute } from "./routes/leak-detection";
import { route as roofPaintingRoute } from "./routes/roof-painting";
import { route as metalRoofingRoute } from "./routes/metal-roofing";
import { route as roofInstallationRoute } from "./routes/roof-installation";
import { route as roofInspectionRoute } from "./routes/roof-inspection";
import { route as roofCleaningRoute } from "./routes/roof-cleaning";
import { route as roofMaintenanceRoute } from "./routes/roof-maintenance";
import { route as residentialRoofingRoute } from "./routes/residential-roofing";
import { route as commercialRoofingRoute } from "./routes/commercial-roofing";
import { route as skylightRepairRoute } from "./routes/skylight-repair";
import { route as gutterRepairRoute } from "./routes/gutter-repair";
import { route as blogRoute } from "./routes/blog";
import { route as roofWindDamagePostRoute } from "./routes/blog/roof-wind-damage-newcastle";
import standingSeamRoofingRoute from "./routes/blog/standing-seam-roofing";
import solarRoofPanelsRoute from "./routes/blog/solar-roof-panels";
import roofCoatingTypesRoute from "./routes/blog/roof-coating-types";
import roofWaterproofingRoute from "./routes/blog/roof-waterproofing";
import flatRoofSystemsRoute from "./routes/blog/flat-roof-systems";
import roofVentilationSystemsRoute from "./routes/blog/roof-ventilation-systems";
import roofInsulationMaterialsRoute from "./routes/blog/roof-insulation-materials";
import roofShinglesRoute from "./routes/blog/roof-shingles";
import roofTrussesRoute from "./routes/blog/roof-trusses";
import roofUnderlaymentRoute from "./routes/blog/roof-underlayment";
import roofDrainageRoute from "./routes/blog/roof-drainage";
import roofSheathingRoute from "./routes/blog/roof-sheathing";
import roofingRepairKitsRoute from "./routes/blog/roofing-repair-kits";
import roofingSafetyHarnessRoute from "./routes/blog/roofing-safety-harness";
import roofingTilesInstallationRoute from "./routes/blog/roofing-tiles-installation";
import roofingMaterialCostsRoute from "./routes/blog/roofing-material-costs";
import roofingLeakDetectionRoute from "./routes/blog/roofing-leak-detection";
import roofTileMaintenanceRoute from "./routes/blog/roof-tile-maintenance";
import roofMaintenanceTipsRoute from "./routes/blog/roof-maintenance-tips";
import roofRepairToolsRoute from "./routes/blog/roof-repair-tools";
import roofingInspectionChecklistRoute from "./routes/blog/roofing-inspection-checklist";
import roofVentInstallationRoute from "./routes/blog/roof-vent-installation";
import roofValleyRepairsRoute from "./routes/blog/roof-valley-repairs";
import roofFlashingInstallationRoute from "./routes/blog/roof-flashing-installation";
import roofGutterGuardsRoute from "./routes/blog/roof-gutter-guards";
import roofWaterproofMembraneRoute from "./routes/blog/roof-waterproof-membrane";
import roofSealingRoute from "./routes/blog/roof-sealing";
import roofSafetyEquipmentRoute from "./routes/blog/roof-safety-equipment";
import roofStormDamageRoute from "./routes/blog/roof-storm-damage";
import roofWarrantyRoute from "./routes/blog/roof-warranty";
import roofSkylightsRoute from "./routes/blog/roof-skylights";
import roofSoffitsRoute from "./routes/blog/roof-soffits";
import roofFasciaBoardRoute from "./routes/blog/roof-fascia-board";
import roofDormersRoute from "./routes/blog/roof-dormers";
import roofSlopeRoute from "./routes/blog/roof-slope";
import roofingContractorsRoute from "./routes/blog/roofing-contractors";
import roofRestorationServicesRoute from "./routes/blog/roof-restoration-services";
import roofReplacementCostRoute from "./routes/blog/roof-replacement-cost";
import slateRoofRestorationRoute from "./routes/blog/slate-roof-restoration";
import copperHalfRoundGuttersRoute from "./routes/blog/copper-half-round-gutters-and-downpipes";
import shingleRoofInstallationRoute from "./routes/blog/shingle-roof-installation";
import roofWithLeadParapetWallsRoute from "./routes/blog/roof-with-lead-parapet-walls";
import svkSlateRoofRoute from "./routes/blog/svk-slate-roof";
import terracotaRidgeRoute from "./routes/blog/terracota-ridge";
import copperStandingSeanRoofRoute from "./routes/blog/copper-standing-sean-roof";
import leadApronAndCoverFlashingRoute from "./routes/blog/lead-apron-and-cover-flashing";
import svkDiamondPatternSlatesRoute from "./routes/blog/svk-diamond-pattern-slates";
import { route as galleryRoute } from "./routes/gallery";
import { route as projectsRoute } from "./routes/projects";
import { route as locationsRoute } from "./routes/locations";
import { route as roofersAdamstownHeightsRoute } from "./routes/roofers-adamstown-heights";
import { route as roofersBarBeachRoute } from "./routes/roofers-bar-beach";
import { route as roofersCarringtonRoute } from "./routes/roofers-carrington";
import { route as roofersCatherineHillBayRoute } from "./routes/roofers-catherine-hill-bay";
import { route as roofersCoalPointRoute } from "./routes/roofers-coal-point";
import { route as roofersCooksHillRoute } from "./routes/roofers-cooks-hill";
import { route as roofersFingalBayRoute } from "./routes/roofers-fingal-bay";
import { route as roofersGeorgetownRoute } from "./routes/roofers-georgetown";
import { route as roofersHamiltonRoute } from "./routes/roofers-hamilton";
import { route as roofersHamiltonEastRoute } from "./routes/roofers-hamilton-east";
import { route as roofersHamiltonSouthRoute } from "./routes/roofers-hamilton-south";
import { route as roofersIslingtonRoute } from "./routes/roofers-islington";
import { route as roofersJesmondRoute } from "./routes/roofers-jesmond";
import { route as roofersKotaraRoute } from "./routes/roofers-kotara";
import { route as roofersLambtonRoute } from "./routes/roofers-lambton";
import { route as roofersMayfieldRoute } from "./routes/roofers-mayfield";
import { route as roofersMerewetherRoute } from "./routes/roofers-merewether";
import { route as roofersMerewetherHeightsRoute } from "./routes/roofers-merewether-heights";
import { route as roofersNewLambtonRoute } from "./routes/roofers-new-lambton";
import { route as roofersNewcastleEastRoute } from "./routes/roofers-newcastle-east";
import { route as roofersRedheadRoute } from "./routes/roofers-redhead";
import { route as roofersSoldiersPointRoute } from "./routes/roofers-soldiers-point";
import { route as roofersStocktonRoute } from "./routes/roofers-stockton";
import { route as roofersTheHillNewcastleRoute } from "./routes/roofers-the-hill-newcastle";
import { route as roofersTheJunctionNewcastleRoute } from "./routes/roofers-the-junction-newcastle";
import { route as roofersTighesHillRoute } from "./routes/roofers-tighes-hill";
import { route as roofersValentineRoute } from "./routes/roofers-valentine";
import { route as roofersWaratahRoute } from "./routes/roofers-waratah";
import { route as roofersWarnersBayRoute } from "./routes/roofers-warners-bay";
import { route as roofersWickhamRoute } from "./routes/roofers-wickham";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Locations from "./pages/Locations";
import About from "./pages/About";


const queryClient = new QueryClient();

// Create router with routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      homeRoute,
      aboutUsRoute,
      aboutRoute,
      servicesRoute,
      contactUsRoute,
      contactRoute,
      TermsAndConditionsRoute,
      privacyPolicyRoute,
      roofingSydneyCbdRoute,
      roofingMarayongRoute,
      guideRoofLeakCostRoute,
      roofRepairsRoute,
      roofReplacementRoute,
      roofRestorationRoute,
      newRoofInstallationRoute,
      emergencyRoofRepairsRoute,
      roofInspectionsRoute,
      gutterRepairsRoute,
      leakDetectionRoute,
      roofPaintingRoute,
      metalRoofingRoute,
      roofInstallationRoute,
      roofInspectionRoute,
      roofCleaningRoute,
      roofMaintenanceRoute,
      residentialRoofingRoute,
      commercialRoofingRoute,
      skylightRepairRoute,
      gutterRepairRoute,
      blogRoute,
      roofWindDamagePostRoute,
      standingSeamRoofingRoute,
      solarRoofPanelsRoute,
      roofCoatingTypesRoute,
      roofWaterproofingRoute,
      flatRoofSystemsRoute,
      roofVentilationSystemsRoute,
      roofInsulationMaterialsRoute,
      roofShinglesRoute,
      roofTrussesRoute,
      roofUnderlaymentRoute,
      roofDrainageRoute,
      roofSheathingRoute,
      roofingRepairKitsRoute,
      roofingSafetyHarnessRoute,
      roofingTilesInstallationRoute,
      roofingMaterialCostsRoute,
      roofingLeakDetectionRoute,
      roofTileMaintenanceRoute,
      roofMaintenanceTipsRoute,
      roofRepairToolsRoute,
      roofingInspectionChecklistRoute,
      roofVentInstallationRoute,
      roofValleyRepairsRoute,
      roofFlashingInstallationRoute,
      roofGutterGuardsRoute,
      roofWaterproofMembraneRoute,
      roofSealingRoute,
      roofSafetyEquipmentRoute,
      roofStormDamageRoute,
      roofWarrantyRoute,
      roofSkylightsRoute,
      roofSoffitsRoute,
      roofFasciaBoardRoute,
      roofDormersRoute,
      roofSlopeRoute,
      roofingContractorsRoute,
      roofRestorationServicesRoute,
      roofReplacementCostRoute,
      slateRoofRestorationRoute,
      copperHalfRoundGuttersRoute,
      shingleRoofInstallationRoute,
      roofWithLeadParapetWallsRoute,
      svkSlateRoofRoute,
      terracotaRidgeRoute,
      copperStandingSeanRoofRoute,
      leadApronAndCoverFlashingRoute,
      svkDiamondPatternSlatesRoute,
      galleryRoute,
      projectsRoute,
      locationsRoute,
      roofersAdamstownHeightsRoute,
      roofersBarBeachRoute,
      roofersCarringtonRoute,
      roofersCatherineHillBayRoute,
      roofersCoalPointRoute,
      roofersCooksHillRoute,
      roofersFingalBayRoute,
      roofersGeorgetownRoute,
      roofersHamiltonRoute,
      roofersHamiltonEastRoute,
      roofersHamiltonSouthRoute,
      roofersIslingtonRoute,
      roofersJesmondRoute,
      roofersKotaraRoute,
      roofersLambtonRoute,
      roofersMayfieldRoute,
      roofersMerewetherRoute,
      roofersMerewetherHeightsRoute,
      roofersNewLambtonRoute,
      roofersNewcastleEastRoute,
      roofersRedheadRoute,
      roofersSoldiersPointRoute,
      roofersStocktonRoute,
      roofersTheHillNewcastleRoute,
      roofersTheJunctionNewcastleRoute,
      roofersTighesHillRoute,
      roofersValentineRoute,
      roofersWaratahRoute,
      roofersWarnersBayRoute,
      roofersWickhamRoute,
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
