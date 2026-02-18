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

// === LOCATION IMPORTS ===
import { route as roofingAbbotsburyRoute } from "./routes/locations/abbotsbury";
import { route as roofingAbbotsfordRoute } from "./routes/locations/abbotsford";
import { route as roofingAcaciaGardensRoute } from "./routes/locations/acacia-gardens";
import { route as roofingAgnesBanksRoute } from "./routes/locations/agnes-banks";
import { route as roofingAirdsRoute } from "./routes/locations/airds";
import { route as roofingAlexandriaRoute } from "./routes/locations/alexandria";
import { route as roofingAlfordsPointRoute } from "./routes/locations/alfords-point";
import { route as roofingAllambieHeightsRoute } from "./routes/locations/allambie-heights";
import { route as roofingAllawahRoute } from "./routes/locations/allawah";
import { route as roofingAmbarvaleRoute } from "./routes/locations/ambarvale";
import { route as roofingAnnandaleRoute } from "./routes/locations/annandale";
import { route as roofingAnnangroveRoute } from "./routes/locations/annangrove";
import { route as roofingArcadiaRoute } from "./routes/locations/arcadia";
import { route as roofingArncliffeRoute } from "./routes/locations/arncliffe";
import { route as roofingArndellParkRoute } from "./routes/locations/arndell-park";
import { route as roofingArtarmonRoute } from "./routes/locations/artarmon";
import { route as roofingAshburyRoute } from "./routes/locations/ashbury";
import { route as roofingAshcroftRoute } from "./routes/locations/ashcroft";
import { route as roofingAshfieldRoute } from "./routes/locations/ashfield";
import { route as roofingAsquithRoute } from "./routes/locations/asquith";
import { route as roofingAuburnRoute } from "./routes/locations/auburn";
import { route as roofingAustralRoute } from "./routes/locations/austral";
import { route as roofingAvalonBeachRoute } from "./routes/locations/avalon-beach";
import { route as roofingBadgerysCreekRoute } from "./routes/locations/badgerys-creek";
import { route as roofingBalgowlahRoute } from "./routes/locations/balgowlah";
import { route as roofingBalgowlahHeightsRoute } from "./routes/locations/balgowlah-heights";
import { route as roofingBalmainRoute } from "./routes/locations/balmain";
import { route as roofingBalmainEastRoute } from "./routes/locations/balmain-east";
import { route as roofingBangorRoute } from "./routes/locations/bangor";
import { route as roofingBanksiaRoute } from "./routes/locations/banksia";
import { route as roofingBanksmeadowRoute } from "./routes/locations/banksmeadow";
import { route as roofingBankstownRoute } from "./routes/locations/bankstown";
import { route as roofingBankstownAerodromeRoute } from "./routes/locations/bankstown-aerodrome";
import { route as roofingBarangarooRoute } from "./routes/locations/barangaroo";
import { route as roofingBardenRidgeRoute } from "./routes/locations/barden-ridge";
import { route as roofingBardiaRoute } from "./routes/locations/bardia";
import { route as roofingBardwellParkRoute } from "./routes/locations/bardwell-park";
import { route as roofingBardwellValleyRoute } from "./routes/locations/bardwell-valley";
import { route as roofingBassHillRoute } from "./routes/locations/bass-hill";
import { route as roofingBaulkhamHillsRoute } from "./routes/locations/baulkham-hills";
import { route as roofingBayviewRoute } from "./routes/locations/bayview";
import { route as roofingBeaumontHillsRoute } from "./routes/locations/beaumont-hills";
import { route as roofingBlacktownRoute } from "./routes/locations/blacktown";
import { route as roofingCastleHillRoute } from "./routes/locations/castle-hill";
import { route as roofingChatswoodRoute } from "./routes/locations/chatswood";
import { route as roofingCrowsNestRoute } from "./routes/locations/crows-nest";
import { route as roofingEasternSuburbsRoute } from "./routes/locations/eastern-suburbs";
import { route as roofingEastwoodRoute } from "./routes/locations/eastwood";
import { route as roofingGlebeRoute } from "./routes/locations/glebe";
import { route as roofingGlenhavenRoute } from "./routes/locations/glenhaven";
import { route as roofingHillsDistrictRoute } from "./routes/locations/hills-district";
import { route as roofingInnerWestSydneyRoute } from "./routes/locations/inner-west-sydney";
import { route as roofingKellyvilleRoute } from "./routes/locations/kellyville";
import { route as roofingMarayongRoute } from "./routes/locations/marayong";
import { route as roofingMaroubraRoute } from "./routes/locations/maroubra";
import { route as roofingMosmanRoute } from "./routes/locations/mosman";
import { route as roofingNorthShoreRoute } from "./routes/locations/north-shore";
import { route as roofingNorthernBeachesRoute } from "./routes/locations/northern-beaches";
import { route as roofingPaddingtonRoute } from "./routes/locations/paddington";
import { route as roofingParramattaRoute } from "./routes/locations/parramatta";
import { route as roofingPenrithRoute } from "./routes/locations/penrith";
import { route as roofingRedfernRoute } from "./routes/locations/redfern";
import { route as roofingRouseHillRoute } from "./routes/locations/rouse-hill";
import { route as roofingSouthWesternSydneyRoute } from "./routes/locations/south-western-sydney";
import { route as roofingStGeorgeAreaRoute } from "./routes/locations/st-george-area";
import { route as roofingSutherlandShireRoute } from "./routes/locations/sutherland-shire";
import { route as roofingSydneyCbdRoute } from "./routes/locations/sydney-cbd";
import { route as roofingWaterlooRoute } from "./routes/locations/waterloo";
import { route as roofingWesternSydneyRoute } from "./routes/locations/western-sydney";

// === GUIDE IMPORTS ===
import { route as guideRoofLeakCostRoute } from "./routes/guides/how-much-does-it-cost-to-fix-a-roof-leak";
import { route as guideRoofSarkingRoute } from "./routes/guides/what-is-roof-sarking";
import { route as guideSkillionRoofRoute } from "./routes/guides/what-is-a-skillion-roof";
import { route as guideRoofTrussRoute } from "./routes/guides/what-is-a-roof-truss";
import { route as guideLongestLastingRoofRoute } from "./routes/guides/what-type-of-roof-lasts-the-longest";
import { route as guideRoofInspectionsFrequencyRoute } from "./routes/guides/how-often-roof-inspections-should-be-conducted";
import { route as guideCleanMaintainMetalRoofsRoute } from "./routes/guides/how-to-clean-and-maintain-metal-roofs";
import { route as guideConcreteTilesLifespanRoute } from "./routes/guides/how-long-do-concrete-roof-tiles-last";
import { route as guideHowManyRoofVentsRoute } from "./routes/guides/how-many-roof-vents-should-i-have";
import { route as guideTileRoofRepairCostRoute } from "./routes/guides/how-much-does-tile-roof-repair-cost";
import { route as guideStopLeakingRoofHeavyRainsRoute } from "./routes/guides/how-to-stop-a-leaking-roof-during-heavy-rains";
import { route as guideCommonGutterProblemsRoute } from "./routes/guides/6-common-gutter-problems-and-how-to-fix-them";
import { route as guideInstallingMetalColorbondRoofRoute } from "./routes/guides/a-guide-to-installing-a-metal-colorbond-roof";
import { route as guideChooseBestRoofColourRoute } from "./routes/guides/how-to-choose-the-best-roof-colour-for-your-home";

// === SERVICE IMPORTS ===
import { route as roofRepairsRoute } from "./routes/roof-repairs";
import { route as roofReplacementRoute } from "./routes/roof-replacement";
import { route as roofRestorationRoute } from "./routes/services/roof-restoration";
import { route as newRoofInstallationRoute } from "./routes/new-roof-installation";
import { route as emergencyRoofRepairsRoute } from "./routes/emergency-roof-repairs";
import { route as roofInspectionsRoute } from "./routes/roof-inspections";
import { route as gutterRepairsRoute } from "./routes/gutter-repairs";
import { route as leakDetectionRoute } from "./routes/leak-detection";
import { route as roofPaintingRoute } from "./routes/roof-painting";
import { route as roofInstallationRoute } from "./routes/roof-installation";
import { route as roofInspectionRoute } from "./routes/roof-inspection";
import { route as roofCleaningRoute } from "./routes/roof-cleaning";
import { route as roofMaintenanceRoute } from "./routes/roof-maintenance";
import { route as metalRoofingRoute } from "./routes/services/metal-roofing";
import { route as residentialRoofingRoute } from "./routes/services/residential-roofing";
import { route as commercialRoofingRoute } from "./routes/commercial-roofing";
import { route as skylightRepairRoute } from "./routes/skylight-repair";
import { route as gutterRepairRoute } from "./routes/gutter-repair";
import { route as roofingServiceRoute } from "./routes/services/roofing-service";
import { route as commercialRoofingServiceRoute } from "./routes/services/commercial-roofing-service";
import { route as residentialMetalRoofingRoute } from "./routes/services/residential-metal-roofing";
import { route as downpipeInstallationRoute } from "./routes/services/downpipe-installation";
import { route as colorbondInstallationRoute } from "./routes/services/colorbond-installation";
import { route as roofCleaningServicesRoute } from "./routes/services/roof-cleaning-services";
import { route as reRoofingSydneyRoute } from "./routes/services/re-roofing-sydney";
import { route as roofPaintingSydneyRoute } from "./routes/services/roof-painting-sydney";
import { route as roofLeakDetectionAndRepairSydneyRoute } from "./routes/services/roof-leak-detection-and-repair-sydney";

// === BLOG IMPORTS ===
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

// === OTHER IMPORTS ===
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

      // === LOCATION ROUTES ===
      roofingAbbotsburyRoute,
      roofingAbbotsfordRoute,
      roofingAcaciaGardensRoute,
      roofingAgnesBanksRoute,
      roofingAirdsRoute,
      roofingAlexandriaRoute,
      roofingAlfordsPointRoute,
      roofingAllambieHeightsRoute,
      roofingAllawahRoute,
      roofingAmbarvaleRoute,
      roofingAnnandaleRoute,
      roofingAnnangroveRoute,
      roofingArcadiaRoute,
      roofingArncliffeRoute,
      roofingArndellParkRoute,
      roofingArtarmonRoute,
      roofingAshburyRoute,
      roofingAshcroftRoute,
      roofingAshfieldRoute,
      roofingAsquithRoute,
      roofingAuburnRoute,
      roofingAustralRoute,
      roofingAvalonBeachRoute,
      roofingBadgerysCreekRoute,
      roofingBalgowlahRoute,
      roofingBalgowlahHeightsRoute,
      roofingBalmainRoute,
      roofingBalmainEastRoute,
      roofingBangorRoute,
      roofingBanksiaRoute,
      roofingBanksmeadowRoute,
      roofingBankstownRoute,
      roofingBankstownAerodromeRoute,
      roofingBarangarooRoute,
      roofingBardenRidgeRoute,
      roofingBardiaRoute,
      roofingBardwellParkRoute,
      roofingBardwellValleyRoute,
      roofingBassHillRoute,
      roofingBaulkhamHillsRoute,
      roofingBayviewRoute,
      roofingBeaumontHillsRoute,
      roofingBlacktownRoute,
      roofingCastleHillRoute,
      roofingChatswoodRoute,
      roofingCrowsNestRoute,
      roofingEasternSuburbsRoute,
      roofingEastwoodRoute,
      roofingGlebeRoute,
      roofingGlenhavenRoute,
      roofingHillsDistrictRoute,
      roofingInnerWestSydneyRoute,
      roofingKellyvilleRoute,
      roofingMarayongRoute,
      roofingMaroubraRoute,
      roofingMosmanRoute,
      roofingNorthShoreRoute,
      roofingNorthernBeachesRoute,
      roofingPaddingtonRoute,
      roofingParramattaRoute,
      roofingPenrithRoute,
      roofingRedfernRoute,
      roofingRouseHillRoute,
      roofingSouthWesternSydneyRoute,
      roofingStGeorgeAreaRoute,
      roofingSutherlandShireRoute,
      roofingSydneyCbdRoute,
      roofingWaterlooRoute,
      roofingWesternSydneyRoute,

      // === GUIDE ROUTES ===
      guideRoofLeakCostRoute,
      guideRoofSarkingRoute,
      guideSkillionRoofRoute,
      guideRoofTrussRoute,
      guideLongestLastingRoofRoute,
      guideRoofInspectionsFrequencyRoute,
      guideCleanMaintainMetalRoofsRoute,
      guideConcreteTilesLifespanRoute,
      guideHowManyRoofVentsRoute,
      guideTileRoofRepairCostRoute,
      guideStopLeakingRoofHeavyRainsRoute,
      guideInstallingMetalColorbondRoofRoute,
      guideChooseBestRoofColourRoute,
      guideCommonGutterProblemsRoute,

      // === SERVICE ROUTES ===
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
      roofingServiceRoute,
      commercialRoofingServiceRoute,
      residentialMetalRoofingRoute,
      downpipeInstallationRoute,
      colorbondInstallationRoute,
      roofCleaningServicesRoute,
      reRoofingSydneyRoute,
      roofPaintingSydneyRoute,
      roofLeakDetectionAndRepairSydneyRoute,

      // === BLOG ROUTES ===
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

      // === OTHER ROUTES ===
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