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
import { route as roofingMiddleDuralRoute } from "./routes/locations/middle-dural";
import { route as roofingMiddletonGrangeRoute } from "./routes/locations/middleton-grange";
import { route as roofingMinchinburyRoute } from "./routes/locations/minchinbury";
import { route as roofingMirandaRoute } from "./routes/locations/miranda";
import { route as roofingMoorebankRoute } from "./routes/locations/moorebank";
import { route as roofingMortdaleRoute } from "./routes/locations/mortdale";
import { route as roofingMortlakeRoute } from "./routes/locations/mortlake";
import { route as roofingNarellanRoute } from "./routes/locations/narellan";
import { route as roofingNelsonRoute } from "./routes/locations/nelson";
import { route as roofingNeutralBayRoute } from "./routes/locations/neutral-bay";
import { route as roofingNewtownRoute } from "./routes/locations/newtown";
import { route as roofingNorthRocksRoute } from "./routes/locations/north-rocks";
import { route as roofingNorthRydeRoute } from "./routes/locations/north-ryde";
import { route as roofingNorthSydneyRoute } from "./routes/locations/north-sydney";
import { route as roofingNorthmeadRoute } from "./routes/locations/northmead";
import { route as roofingOatlandsRoute } from "./routes/locations/oatlands";
import { route as roofingPadstowRoute } from "./routes/locations/padstow";
import { route as roofingPennantHillsRoute } from "./routes/locations/pennant-hills";
import { route as roofingPetershamRoute } from "./routes/locations/petersham";
import { route as roofingPleasurePointRoute } from "./routes/locations/pleasure-point";
import { route as roofingPrestonsRoute } from "./routes/locations/prestons";
import { route as roofingProspectRoute } from "./routes/locations/prospect";
import { route as roofingQuakersHillRoute } from "./routes/locations/quakers-hill";
import { route as roofingRandwickRoute } from "./routes/locations/randwick";
import { route as roofingRevesbyRoute } from "./routes/locations/revesby";
import { route as roofingRiverstoneRoute } from "./routes/locations/riverstone";
import { route as roofingRiverviewRoute } from "./routes/locations/riverview";
import { route as roofingRockdaleRoute } from "./routes/locations/rockdale";
import { route as roofingRoddPointRoute } from "./routes/locations/rodd-point";
import { route as roofingRoselandsRoute } from "./routes/locations/roselands";
import { route as roofingRossmoreRoute } from "./routes/locations/rossmore";
import { route as roofingRozelleRoute } from "./routes/locations/rozelle";
import { route as roofingRuseRoute } from "./routes/locations/ruse";
import { route as roofingRushcuttersBayRoute } from "./routes/locations/rushcutters-bay";
import { route as roofingRussellLeaRoute } from "./routes/locations/russell-lea";
import { route as roofingRydeRoute } from "./routes/locations/ryde";
import { route as roofingSadleirRoute } from "./routes/locations/sadleir";
import { route as roofingSandringhamRoute } from "./routes/locations/sandringham";
import { route as roofingSandyPointRoute } from "./routes/locations/sandy-point";
import { route as roofingSevenHillsRoute } from "./routes/locations/seven-hills";
import { route as roofingSilverwaterRoute } from "./routes/locations/silverwater";
import { route as roofingSmithfieldRoute } from "./routes/locations/smithfield";
import { route as roofingSouthWestSydneyRoute } from "./routes/locations/south-west-sydney";
import { route as roofingSpringFarmRoute } from "./routes/locations/spring-farm";
import { route as roofingStClairRoute } from "./routes/locations/st-clair";
import { route as roofingStMarysRoute } from "./routes/locations/st-marys";
import { route as roofingStanmoreRoute } from "./routes/locations/stanmore";
import { route as roofingStrathfieldRoute } from "./routes/locations/strathfield";
import { route as roofingSummerHillRoute } from "./routes/locations/summer-hill";
import { route as roofingSurryHillsRoute } from "./routes/locations/surry-hills";
import { route as roofingTarenPointRoute } from "./routes/locations/taren-point";
import { route as roofingThornleighRoute } from "./routes/locations/thornleigh";
import { route as roofingTurramurraRoute } from "./routes/locations/turramurra";
import { route as roofingVaucluseRoute } from "./routes/locations/vaucluse";
import { route as roofingVoyagerPointRoute } from "./routes/locations/voyager-point";
import { route as roofingWahroongaRoute } from "./routes/locations/wahroonga";
import { route as roofingWallaciaRoute } from "./routes/locations/wallacia";
import { route as roofingWareembaRoute } from "./routes/locations/wareemba";
import { route as roofingWarwickFarmRoute } from "./routes/locations/warwick-farm";
import { route as roofingWattleGroveRoute } from "./routes/locations/wattle-grove";
import { route as roofingWaverleyRoute } from "./routes/locations/waverley";
import { route as roofingWavertonRoute } from "./routes/locations/waverton";
import { route as roofingWentworthPointRoute } from "./routes/locations/wentworth-point";
import { route as roofingWestHoxtonRoute } from "./routes/locations/west-hoxton";
import { route as roofingWestPennantHillsRoute } from "./routes/locations/west-pennant-hills";
import { route as roofingWestRydeRoute } from "./routes/locations/west-ryde";
import { route as roofingWetherillParkRoute } from "./routes/locations/wetherill-park";
import { route as roofingWolliCreekRoute } from "./routes/locations/wolli-creek";
import { route as roofingWoodparkRoute } from "./routes/locations/woodpark";
import { route as roofingWooloowareRoute } from "./routes/locations/woolooware";
import { route as roofingWoronoraHeightsRoute } from "./routes/locations/woronora-heights";
import { route as roofingZetlandRoute } from "./routes/locations/zetland";
import { route as locBeaconHillRoute } from "./routes/locations/beacon-hill";
import { route as locBeaconsfieldRoute } from "./routes/locations/beaconsfield";
import { route as locBeecroftRoute } from "./routes/locations/beecroft";
import { route as locBelfieldRoute } from "./routes/locations/belfield";
import { route as locBellaVistaRoute } from "./routes/locations/bella-vista";
import { route as locBellevueHillRoute } from "./routes/locations/bellevue-hill";
import { route as locBelmoreRoute } from "./routes/locations/belmore";
import { route as locBelroseRoute } from "./routes/locations/belrose";
import { route as locBeralaRoute } from "./routes/locations/berala";
import { route as locBerkshireParkRoute } from "./routes/locations/berkshire-park";
import { route as locBerowraCreekRoute } from "./routes/locations/berowra-creek";
import { route as locBerowraHeightsRoute } from "./routes/locations/berowra-heights";
import { route as locBerowraWatersRoute } from "./routes/locations/berowra-waters";
import { route as locBerowraRoute } from "./routes/locations/berowra";
import { route as locBerrileeRoute } from "./routes/locations/berrilee";
import { route as locBeverleyParkRoute } from "./routes/locations/beverley-park";
import { route as locBeverlyHillsRoute } from "./routes/locations/beverly-hills";
import { route as locBexleyNorthRoute } from "./routes/locations/bexley-north";
import { route as locBexleyRoute } from "./routes/locations/bexley";
import { route as locBidwillRoute } from "./routes/locations/bidwill";
import { route as locBilgolaBeachRoute } from "./routes/locations/bilgola-beach";
import { route as locBilgolaPlateauRoute } from "./routes/locations/bilgola-plateau";
import { route as locBirchgroveRoute } from "./routes/locations/birchgrove";
import { route as locBirrongRoute } from "./routes/locations/birrong";
import { route as locBlackettRoute } from "./routes/locations/blackett";
import { route as locBlairAtholRoute } from "./routes/locations/blair-athol";
import { route as locBlairmountRoute } from "./routes/locations/blairmount";
import { route as locBlakehurstRoute } from "./routes/locations/blakehurst";
import { route as locBlighParkRoute } from "./routes/locations/bligh-park";
import { route as locBondiBeachRoute } from "./routes/locations/bondi-beach";
import { route as locBondiJunctionRoute } from "./routes/locations/bondi-junction";
import { route as locBondiRoute } from "./routes/locations/bondi";
import { route as locBonnetBayRoute } from "./routes/locations/bonnet-bay";
import { route as locBonnyriggHeightsRoute } from "./routes/locations/bonnyrigg-heights";
import { route as locBonnyriggRoute } from "./routes/locations/bonnyrigg";
import { route as locBossleyParkRoute } from "./routes/locations/bossley-park";
import { route as locBotanyRoute } from "./routes/locations/botany";
import { route as locBowBowingRoute } from "./routes/locations/bow-bowing";
import { route as locBoxHillRoute } from "./routes/locations/box-hill";
import { route as locBradburyRoute } from "./routes/locations/bradbury";
import { route as locBreakfastPointRoute } from "./routes/locations/breakfast-point";
import { route as locBrightonLeSandsRoute } from "./routes/locations/brighton-le-sands";
import { route as locBringellyRoute } from "./routes/locations/bringelly";
import { route as locBronteRoute } from "./routes/locations/bronte";
import { route as locBrooklynRoute } from "./routes/locations/brooklyn";
import { route as locBurwoodHeightsRoute } from "./routes/locations/burwood-heights";
import { route as locBurwoodRoute } from "./routes/locations/burwood";
import { route as locCabaritaRoute } from "./routes/locations/cabarita";
import { route as locCamdenRoute } from "./routes/locations/camden";
import { route as locCampbelltownRoute } from "./routes/locations/campbelltown";
import { route as locCanadaBayRoute } from "./routes/locations/canada-bay";
import { route as locCaringbahRoute } from "./routes/locations/caringbah";
import { route as locCarlingfordRoute } from "./routes/locations/carlingford";
import { route as locCarltonRoute } from "./routes/locations/carlton";
import { route as locCarnesHillRoute } from "./routes/locations/carnes-hill";
import { route as locCasulaRoute } from "./routes/locations/casula";
import { route as locCecilHillsRoute } from "./routes/locations/cecil-hills";
import { route as locCecilParkRoute } from "./routes/locations/cecil-park";
import { route as locCheltenhamRoute } from "./routes/locations/cheltenham";
import { route as locCherrybrookRoute } from "./routes/locations/cherrybrook";
import { route as locChesterHillRoute } from "./routes/locations/chester-hill";
import { route as locChifleyRoute } from "./routes/locations/chifley";
import { route as locChippendaleRoute } from "./routes/locations/chippendale";
import { route as locChippingNortonRoute } from "./routes/locations/chipping-norton";
import { route as locChiswickRoute } from "./routes/locations/chiswick";
import { route as locChurchPointRoute } from "./routes/locations/church-point";
import { route as locClarendonRoute } from "./routes/locations/clarendon";
import { route as locClarevilleRoute } from "./routes/locations/clareville";
import { route as locClaymoreRoute } from "./routes/locations/claymore";
import { route as locClemtonParkRoute } from "./routes/locations/clemton-park";
import { route as locClontarfRoute } from "./routes/locations/clontarf";
import { route as locClovellyWestRoute } from "./routes/locations/clovelly-west";
import { route as locClovellyRoute } from "./routes/locations/clovelly";
import { route as locCollaroyPlateauRoute } from "./routes/locations/collaroy-plateau";
import { route as locCollaroyRoute } from "./routes/locations/collaroy";
import { route as locColytonRoute } from "./routes/locations/colyton";
import { route as locComoRoute } from "./routes/locations/como";
import { route as locConcordWestRoute } from "./routes/locations/concord-west";
import { route as locConcordRoute } from "./routes/locations/concord";
import { route as locCondellParkRoute } from "./routes/locations/condell-park";
import { route as locConnellsPointRoute } from "./routes/locations/connells-point";
import { route as locCoogeeRoute } from "./routes/locations/coogee";
import { route as locCornwallisRoute } from "./routes/locations/cornwallis";
import { route as locCowanRoute } from "./routes/locations/cowan";
import { route as locCremornePointRoute } from "./routes/locations/cremorne-point";
import { route as locCremorneRoute } from "./routes/locations/cremorne";
import { route as locCromerRoute } from "./routes/locations/cromer";
import { route as locCronullaRoute } from "./routes/locations/cronulla";
import { route as locCroydonParkRoute } from "./routes/locations/croydon-park";
import { route as locCroydonRoute } from "./routes/locations/croydon";
import { route as locCurlCurlRoute } from "./routes/locations/curl-curl";
import { route as locCurransHillRoute } from "./routes/locations/currans-hill";
import { route as locCurrawongBeachRoute } from "./routes/locations/currawong-beach";
import { route as locDaceyvilleRoute } from "./routes/locations/daceyville";
import { route as locDarlingPointRoute } from "./routes/locations/darling-point";
import { route as locDarlinghurstRoute } from "./routes/locations/darlinghurst";
import { route as locDarlingtonRoute } from "./routes/locations/darlington";
import { route as locDawnFraserPoolRoute } from "./routes/locations/dawn-fraser-pool";
import { route as locDeanParkRoute } from "./routes/locations/dean-park";
import { route as locDeeWhyRoute } from "./routes/locations/dee-why";
import { route as locDenhamCourtRoute } from "./routes/locations/denham-court";
import { route as locDenistoneEastRoute } from "./routes/locations/denistone-east";
import { route as locDenistoneWestRoute } from "./routes/locations/denistone-west";
import { route as locDenistoneRoute } from "./routes/locations/denistone";
import { route as locDharrukRoute } from "./routes/locations/dharruk";
import { route as locDolansBayRoute } from "./routes/locations/dolans-bay";
import { route as locDollsPointRoute } from "./routes/locations/dolls-point";
import { route as locDoubleBayRoute } from "./routes/locations/double-bay";
import { route as locDoverHeightsRoute } from "./routes/locations/dover-heights";
import { route as locDrummoyneRoute } from "./routes/locations/drummoyne";
import { route as locDulwichHillRoute } from "./routes/locations/dulwich-hill";
import { route as locDundasValleyRoute } from "./routes/locations/dundas-valley";
import { route as locDundasRoute } from "./routes/locations/dundas";
import { route as locEagleValeRoute } from "./routes/locations/eagle-vale";
import { route as locEarlwoodRoute } from "./routes/locations/earlwood";
import { route as locEastHillsRoute } from "./routes/locations/east-hills";
import { route as locEastKillaraRoute } from "./routes/locations/east-killara";
import { route as locEastLindfieldRoute } from "./routes/locations/east-lindfield";
import { route as locEastRydeRoute } from "./routes/locations/east-ryde";
import { route as locEdensorParkRoute } from "./routes/locations/edensor-park";
import { route as locEdmondsonParkRoute } from "./routes/locations/edmondson-park";
import { route as locElderslieRoute } from "./routes/locations/elderslie";
import { route as locElizabethBayRoute } from "./routes/locations/elizabeth-bay";
import { route as locElizabethHillsRoute } from "./routes/locations/elizabeth-hills";
import { route as locEmertonRoute } from "./routes/locations/emerton";
import { route as locEmuHeightsRoute } from "./routes/locations/emu-heights";
import { route as locEmuPlainsRoute } from "./routes/locations/emu-plains";
import { route as locEnfieldRoute } from "./routes/locations/enfield";
import { route as locEngadineRoute } from "./routes/locations/engadine";
import { route as locEnmoreRoute } from "./routes/locations/enmore";
import { route as locEppingRoute } from "./routes/locations/epping";
import { route as locErmingtonRoute } from "./routes/locations/ermington";
import { route as locErskineParkRoute } from "./routes/locations/erskine-park";
import { route as locErskinevilleRoute } from "./routes/locations/erskineville";
import { route as locEveleighRoute } from "./routes/locations/eveleigh";
import { route as locFairfieldEastRoute } from "./routes/locations/fairfield-east";
import { route as locFairfieldHeightsRoute } from "./routes/locations/fairfield-heights";
import { route as locFairfieldWestRoute } from "./routes/locations/fairfield-west";
import { route as locFairfieldRoute } from "./routes/locations/fairfield";
import { route as locFairlightRoute } from "./routes/locations/fairlight";
import { route as locFiddletownRoute } from "./routes/locations/fiddletown";
import { route as locFiveDockRoute } from "./routes/locations/five-dock";
import { route as locFlemingtonRoute } from "./routes/locations/flemington";
import { route as locForestvilleRoute } from "./routes/locations/forestville";
import { route as locFrenchsForestRoute } from "./routes/locations/frenchs-forest";
import { route as locFreshwaterRoute } from "./routes/locations/freshwater";
import { route as locGalstonRoute } from "./routes/locations/galston";
import { route as locGeorgesHallRoute } from "./routes/locations/georges-hall";
import { route as locGirraweenRoute } from "./routes/locations/girraween";
import { route as locGladesvilleRoute } from "./routes/locations/gladesville";
import { route as locGlenAlpineRoute } from "./routes/locations/glen-alpine";
import { route as locGlendenningRoute } from "./routes/locations/glendenning";
import { route as locGlenfieldRoute } from "./routes/locations/glenfield";
import { route as locGlenmoreParkRoute } from "./routes/locations/glenmore-park";
import { route as locGlenwoodRoute } from "./routes/locations/glenwood";
import { route as locGordonRoute } from "./routes/locations/gordon";
import { route as locGranvilleRoute } from "./routes/locations/granville";
import { route as locGraysPointRoute } from "./routes/locations/grays-point";
import { route as locGreenValleyRoute } from "./routes/locations/green-valley";
import { route as locGreenacreRoute } from "./routes/locations/greenacre";
import { route as locGreendaleRoute } from "./routes/locations/greendale";
import { route as locGreenfieldParkRoute } from "./routes/locations/greenfield-park";
import { route as locGregoryHillsRoute } from "./routes/locations/gregory-hills";
import { route as locGreystanesRoute } from "./routes/locations/greystanes";
import { route as locGuildfordWestRoute } from "./routes/locations/guildford-west";
import { route as locGuildfordRoute } from "./routes/locations/guildford";
import { route as locGymeaBayRoute } from "./routes/locations/gymea-bay";
import { route as locGymeaRoute } from "./routes/locations/gymea";
import { route as locHaberfieldRoute } from "./routes/locations/haberfield";
import { route as locHammondvilleRoute } from "./routes/locations/hammondville";
import { route as locHarbordRoute } from "./routes/locations/harbord";
import { route as locHarringtonParkRoute } from "./routes/locations/harrington-park";
import { route as locHarrisParkRoute } from "./routes/locations/harris-park";
import { route as locHaymarketRoute } from "./routes/locations/haymarket";
import { route as locHeathcoteRoute } from "./routes/locations/heathcote";
import { route as locHebershamRoute } from "./routes/locations/hebersham";
import { route as locHeckenbergRoute } from "./routes/locations/heckenberg";
import { route as locHenleyRoute } from "./routes/locations/henley";
import { route as locHillsdaleRoute } from "./routes/locations/hillsdale";
import { route as locHinchinbrookRoute } from "./routes/locations/hinchinbrook";
import { route as locHobbysBayRoute } from "./routes/locations/hobbys-bay";
import { route as locHolroydRoute } from "./routes/locations/holroyd";
import { route as locHolsworthyRoute } from "./routes/locations/holsworthy";
import { route as locHomebushWestRoute } from "./routes/locations/homebush-west";
import { route as locHomebushRoute } from "./routes/locations/homebush";
import { route as locHorningseaParkRoute } from "./routes/locations/horningsea-park";
import { route as locHornsbyHeightsRoute } from "./routes/locations/hornsby-heights";
import { route as locHornsbyRoute } from "./routes/locations/hornsby";
import { route as locHorsleyParkRoute } from "./routes/locations/horsley-park";
import { route as locHoxtonParkRoute } from "./routes/locations/hoxton-park";
import { route as locHuntersHillRoute } from "./routes/locations/hunters-hill";
import { route as locHuntingwoodRoute } from "./routes/locations/huntingwood";
import { route as locHuntleysCoveRoute } from "./routes/locations/huntleys-cove";
import { route as locHuntleysPointRoute } from "./routes/locations/huntleys-point";
import { route as locHurlstoneParkRoute } from "./routes/locations/hurlstone-park";
import { route as locHurstvilleGroveRoute } from "./routes/locations/hurstville-grove";
import { route as locHurstvilleRoute } from "./routes/locations/hurstville";
import { route as locIngleburnRoute } from "./routes/locations/ingleburn";
import { route as locInglesideRoute } from "./routes/locations/ingleside";
import { route as locJamisontownRoute } from "./routes/locations/jamisontown";
import { route as locJanaliRoute } from "./routes/locations/janali";
import { route as locJordanSpringsRoute } from "./routes/locations/jordan-springs";
import { route as locKangarooPointRoute } from "./routes/locations/kangaroo-point";
import { route as locKareelaRoute } from "./routes/locations/kareela";
import { route as locKearnsRoute } from "./routes/locations/kearns";
import { route as locKempsCreekRoute } from "./routes/locations/kemps-creek";
import { route as locKensingtonRoute } from "./routes/locations/kensington";
import { route as locKenthurstRoute } from "./routes/locations/kenthurst";
import { route as locKentlynRoute } from "./routes/locations/kentlyn";
import { route as locKingsParkRoute } from "./routes/locations/kings-park";
import { route as locKingsfordRoute } from "./routes/locations/kingsford";
import { route as locKingsgroveRoute } from "./routes/locations/kingsgrove";
import { route as locKirribilliRoute } from "./routes/locations/kirribilli";
import { route as locKogarahRoute } from "./routes/locations/kogarah";
import { route as locKyeemaghRoute } from "./routes/locations/kyeemagh";
import { route as locLaneCoveRoute } from "./routes/locations/lane-cove";
import { route as locLeichhardtRoute } from "./routes/locations/leichhardt";
import { route as locLeppingtonRoute } from "./routes/locations/leppington";
import { route as locLewishamRoute } from "./routes/locations/lewisham";
import { route as locLibertyGroveRoute } from "./routes/locations/liberty-grove";
import { route as locLidcombeRoute } from "./routes/locations/lidcombe";
import { route as locLilyfieldRoute } from "./routes/locations/lilyfield";
import { route as locLiverpoolRoute } from "./routes/locations/liverpool";
import { route as locLurneaRoute } from "./routes/locations/lurnea";
import { route as locMacquarieParkRoute } from "./routes/locations/macquarie-park";
import { route as locMaraylyaRoute } from "./routes/locations/maraylya";
import { route as locMarrickvilleRoute } from "./routes/locations/marrickville";
import { route as locMarsfieldRoute } from "./routes/locations/marsfield";
import { route as locMascotRoute } from "./routes/locations/mascot";
import { route as locMatravilleRoute } from "./routes/locations/matraville";
import { route as locMerrylandsRoute } from "./routes/locations/merrylands";

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
import { route as guidesIndexRoute } from "./routes/guides-index";
import { route as testimonialsRoute } from "./routes/testimonials";
import { route as glossaryRoute } from "./routes/glossary";
import { route as guideInstallingMetalColorbondRoofRoute } from "./routes/guides/a-guide-to-installing-a-metal-colorbond-roof";
import { route as guideChooseBestRoofColourRoute } from "./routes/guides/how-to-choose-the-best-roof-colour-for-your-home";
import { route as guideAustralianRoofingVsAmericanRoofingRoute } from "./routes/guides/australian-roofing-vs-american-roofing";
import { route as guideCanIClaimRoofRepairsOnMyInsuranceRoute } from "./routes/guides/can-i-claim-roof-repairs-on-my-insurance";
import { route as guideCommonMetalRoofRepairsSydneyRoute } from "./routes/guides/common-metal-roof-repairs-sydney";
import { route as guideDoWhirlybirdsWorkRoute } from "./routes/guides/do-whirlybirds-work";
import { route as guideDoesHomeWarrantyCoverRoofLeaksRoute } from "./routes/guides/does-home-warranty-cover-roof-leaks";
import { route as guideDoesInsuranceCoverALeakingRoofRoute } from "./routes/guides/does-insurance-cover-a-leaking-roof";
import { route as guideGutterCleaningCostGuideHowMuchYouShouldExpectToPayRoute } from "./routes/guides/gutter-cleaning-cost-guide-how-much-you-should-expect-to-pay";
import { route as guideGutterReplacementCostRoute } from "./routes/guides/gutter-replacement-cost";
import { route as guideHipRoofVsGableRoofProsAndConsOfEachRoofTypeRoute } from "./routes/guides/hip-roof-vs-gable-roof-pros-and-cons-of-each-roof-type";
import { route as guideHowMuchDoesItCostToCleanARoofRoute } from "./routes/guides/how-much-does-it-cost-to-clean-a-roof";
import { route as guideHowMuchDoesItCostToReplaceACommercialRoofRoute } from "./routes/guides/how-much-does-it-cost-to-replace-a-commercial-roof";
import { route as guideHowMuchDoesItCostToReplaceRoofFlashingRoute } from "./routes/guides/how-much-does-it-cost-to-replace-roof-flashing";
import { route as guideHowMuchDoesProfessionalRoofPaintingCostRoute } from "./routes/guides/how-much-does-professional-roof-painting-cost";
import { route as guideHowMuchDoesSkylightInstallationCostRoute } from "./routes/guides/how-much-does-skylight-installation-cost";
import { route as guideHowOftenShouldGuttersBeCleanedGutterCleaningExplainedRoute } from "./routes/guides/how-often-should-gutters-be-cleaned-gutter-cleaning-explained";
import { route as guidePaintingColorbondRoofCanItBeDoneRoute } from "./routes/guides/painting-colorbond-roof-can-it-be-done";
import { route as guideRoofLeakShouldICallMyInsuranceCompanyRoute } from "./routes/guides/roof-leak-should-i-call-my-insurance-company";
import { route as guideRoofRepairCostSydneyWhatYouCanExpectToPayRoute } from "./routes/guides/roof-repair-cost-sydney-what-you-can-expect-to-pay";
import { route as guideRoofRestorationCostSydneyWhatYouShouldExpectToPayRoute } from "./routes/guides/roof-restoration-cost-sydney-what-you-should-expect-to-pay";
import { route as guideWhatCausesRoofLeaksRoute } from "./routes/guides/what-causes-roof-leaks";
import { route as guideWhatIsFasciaOnAHouseThePurposeOfFasciaInRoofingRoute } from "./routes/guides/what-is-fascia-on-a-house-the-purpose-of-fascia-in-roofing";
import { route as guideWhoDoYouCallWhenYourRoofIsLeakingYourRainyDayPlanRoute } from "./routes/guides/who-do-you-call-when-your-roof-is-leaking-your-rainy-day-plan";
import { route as guideWhoRepairsSkylightsRoute } from "./routes/guides/who-repairs-skylights";
import { route as guideWhyToHaveAParapetRoofRoute } from "./routes/guides/why-to-have-a-parapet-roof";
import { route as guideYourUltimateGuideToDecramasticRoofsRoute } from "./routes/guides/your-ultimate-guide-to-decramastic-roofs";
import { route as guideIsALeakingSkylightCoveredByInsuranceRoute } from "./routes/guides/is-a-leaking-skylight-covered-by-insurance";
import { route as guideCleaningYourColorbondRoofEverythingYouShouldKnowRoute } from "./routes/guides/cleaning-your-colorbond-roof-everything-you-should-know";
import { route as guideAGuideToAustralianRoofTypesRoute } from "./routes/guides/a-guide-to-australian-roof-types";
import { route as guideFactsAboutRoofingInsulationForColorbondRoofsRoute } from "./routes/guides/facts-about-roofing-insulation-for-colorbond-roofs";
import { route as guideChoosingAColorbondRoofRoute } from "./routes/guides/choosing-a-colorbond-roof";
import { route as guideLookingToCleanYourRoofHeresWhatYouShouldRememberRoute } from "./routes/guides/looking-to-clean-your-roof-heres-what-you-should-remember";
import { route as guideLetsTalkColorbondRoofRestorationsRoute } from "./routes/guides/lets-talk-colorbond-roof-restorations";
import { route as guideWhyIsMyWhirlybird5MisconceptionsAboutWhirlybirdsRoute } from "./routes/guides/why-is-my-whirlybird-noisy-5-misconceptions-about-whirlybirds";
import { route as guideHowToTackleRustOnYourRoofRoute } from "./routes/guides/how-to-tackle-rust-on-your-roof";
import { route as guideColorbondRoofsVsConcreteTilesRoute } from "./routes/guides/colorbond-roofs-vs-concrete-tiles";
import { route as guideCommercialRoofingVsResidentialRoofingTheDifferencesRoute } from "./routes/guides/commercial-roofing-vs-residential-roofing-the-differences";
import { route as guideHowLongDoesARoofLastRoute } from "./routes/guides/how-long-does-a-roof-last";
import { route as guideWhatToDoIfYourGuttersOrDownpipesAreBlockedRoute } from "./routes/guides/what-to-do-if-your-gutters-or-downpipes-are-blocked";
import { route as guideChoosingBetweenColorbondRoofingColoursRoute } from "./routes/guides/choosing-between-colorbond-roofing-colours";
import { route as guideColorbondVsTileRoofWhichIsBestForYourHomeRoute } from "./routes/guides/colorbond-vs-tile-roof-which-is-best-for-your-home";
import { route as guideFasciasSoffitsAndRoofCarpentryRoute } from "./routes/guides/fascias-soffits-and-roof-carpentry";
import { route as guideAustraliaStateByStateYourBestInsulationOptionsRoute } from "./routes/guides/australia-state-by-state-your-best-insulation-options";
import { route as guideHowToMakeAmazingChristmasRooftopDisplaysRoute } from "./routes/guides/how-to-make-amazing-christmas-rooftop-displays";
import { route as guideTheBestRoofingOptionsForSuburbanHomesWhichOneIsRightForYouRoute } from "./routes/guides/the-best-roofing-options-for-suburban-homes-which-one-is-right-for-you";
import { route as guideHowToSafelyInspectYourRoofAfterAStormRoute } from "./routes/guides/how-to-safely-inspect-your-roof-after-a-storm";
import { route as guideSignsItsTimeToReplaceYourRoofRoute } from "./routes/guides/signs-its-time-to-replace-your-roof";
import { route as guideTheUltimateGuideToRoofBeddingAndPointingRoute } from "./routes/guides/the-ultimate-guide-to-roof-bedding-and-pointing";
import { route as guideWhatAreTheSignsOfALeakingRoofRoute } from "./routes/guides/what-are-the-signs-of-a-leaking-roof";
import { route as guideTopSignsOfStormDamageOnYourRoofRoute } from "./routes/guides/top-signs-of-storm-damage-on-your-roof";
import { route as guideTheDesignEyeqVisualizerRoute } from "./routes/guides/the-design-eyeq-visualizer";
import { route as guideReasonsWhyProperAtticVentilationIsImportantRoute } from "./routes/guides/reasons-why-proper-attic-ventilation-is-important-to-your-roof-and-home";
import { route as guideShouldIRepairRoofOrReplaceItRoute } from "./routes/guides/should-i-repair-roof-or-replace-it";
import { route as guideHowMuchDoesGutterCleaningCost2023PricingGuideRoute } from "./routes/guides/how-much-does-gutter-cleaning-cost-2023-pricing-guide";
import { route as guideHowToEfficientlyCleanYourRoofGuttersRoute } from "./routes/guides/how-to-efficiently-clean-your-roof-gutters";
import { route as guideRoofFlashingLeaksAndHowToPreventThemRoute } from "./routes/guides/roof-flashing-leaks-and-how-to-prevent-them";
import { route as guideProblemsThatResultFromNotCleaningGuttersRoute } from "./routes/guides/problems-that-result-from-not-cleaning-gutters";
import { route as guideHowMuchDoesItCostToCleanARoof2Route } from "./routes/guides/how-much-does-it-cost-to-clean-a-roof-2";
import { route as guideHowMuchRainCanICollectFromMyRoofRainwaterHarvestingRoute } from "./routes/guides/how-much-rain-can-i-collect-from-my-roof-rainwater-harvesting";
import { route as guideHowLongDoesARoofRestorationTake2Route } from "./routes/guides/how-long-does-a-roof-restoration-take-2";
import { route as guideAreThereBenefitsOfMetalRoofingThatOutweighItsCostRoute } from "./routes/guides/are-there-benefits-of-metal-roofing-that-outweigh-its-cost";
import { route as guide3WaysToCleanATileRoofRoute } from "./routes/guides/3-ways-to-clean-a-tile-roof";
import { route as guide8RoofDesignIdeasForExtensionsRoute } from "./routes/guides/8-roof-design-ideas-for-extensions";
import { route as guideCorrugatedMetalRoofingPricesRoute } from "./routes/guides/corrugated-metal-roofing-prices";
import { route as guideHowMuchDoPatioCoversCosteRoute } from "./routes/guides/how-much-do-patio-covers-cost-in-2022";
import { route as guideHowMuchDoesANewRoofCostHowToSaveRoute } from "./routes/guides/how-much-does-a-new-roof-cost-how-to-save-in-2023";
import { route as guideHowMuchDoesAPergolaCosteRoute } from "./routes/guides/how-much-does-a-pergola-cost";
import { route as guideHowMuchDoesItCostToRepairRoofLeaksInAustraliaRoute } from "./routes/guides/how-much-does-it-cost-to-repair-roof-leaks-in-australia";
import { route as guideHowMuchItCostsToPaintYourRoofRoute } from "./routes/guides/how-much-it-costs-to-paint-your-roof";
import { route as guideHowToBuildAPergolaAndRoofItFromStartToFinishRoute } from "./routes/guides/how-to-build-a-pergola-and-roof-it-from-start-to-finish";
import { route as guideHowToBuildAPergolaAttachedToAHouseRoute } from "./routes/guides/how-to-build-a-pergola-attached-to-a-house";
import { route as guideHowToBuildAPergolaFrameDiyRoute } from "./routes/guides/how-to-build-a-pergola-frame-diy";
import { route as guideHowToInstallPostsAndBeamsForACarportRoute } from "./routes/guides/how-to-install-posts-and-beams-for-a-carport";
import { route as guideHowToInstallPullDownAtticStairsRoute } from "./routes/guides/how-to-install-pull-down-attic-stairs";
import { route as guideHowToReplaceAFasciaBoardStepsByStepsRoute } from "./routes/guides/how-to-replace-a-fascia-board-steps-by-steps";
import { route as guideHowToSetUpPostSupportsForACarportRoute } from "./routes/guides/how-to-set-up-post-supports-for-a-carport";
import { route as guideRoofPaintingCostsHowMuchDoesRoofCoatingCostRoute } from "./routes/guides/roof-painting-costs-how-much-does-roof-coating-cost";
import { route as guideSafeAndEfficientInstallationOfManholeUnitRoute } from "./routes/guides/safe-and-efficient-installation-of-manhole-unit";
import { route as guideSolarRoofVentilationForHomesAndShedsRoute } from "./routes/guides/solar-roof-ventilation-for-homes-and-sheds";
import { route as guideWhatIsPolycarbonateRoofingRoute } from "./routes/guides/what-is-polycarbonate-roofing";

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
import { route as serviceCommercialMetalRoofingRoute } from "./routes/services/commercial-metal-roofing";
import { route as serviceRoofFlashingRoute } from "./routes/services/roof-flashing";
import { route as serviceSlateRoofingRoute } from "./routes/services/slate-roofing";
import { route as serviceGutterInstallationRoute } from "./routes/services/gutter-installation";
import { route as serviceGutterReplacementRoute } from "./routes/services/gutter-replacement";
import { route as serviceGutterRepairsRoute } from "./routes/services/gutter-repairs";
import { route as serviceGutterCleaningRoute } from "./routes/services/gutter-cleaning";
import { route as serviceCorrugatedRoofingSydneyRoute } from "./routes/services/corrugated-roofing-sydney";
import { route as serviceGutterProtectionRoute } from "./routes/services/gutter-protection";
import { route as serviceAluminiumGutterInstallationRoute } from "./routes/services/aluminium-gutter-installation";
import { route as serviceGutteringServicesRoute } from "./routes/services/guttering-services";

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

import NotFound from "./pages/NotFound";
import { route as calculatorIndexRoute } from "./routes/calculator/index";
import { route as calculatorReroofCostRoute } from "./routes/calculator/reroof-cost-calculator";
import { route as calculatorInsulationRoute } from "./routes/calculator/roofing-insulation-calculator";
import { route as calculatorPitchRoute } from "./routes/calculator/roofing-pitch-calculator";
import { route as calculatorColourRoute } from "./routes/calculator/colour-visualiser";

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
      guidesIndexRoute,
      testimonialsRoute,
      glossaryRoute,
guideAustralianRoofingVsAmericanRoofingRoute,
      guideCanIClaimRoofRepairsOnMyInsuranceRoute,
      guideCommonMetalRoofRepairsSydneyRoute,
      guideDoWhirlybirdsWorkRoute,
      guideDoesHomeWarrantyCoverRoofLeaksRoute,
      guideDoesInsuranceCoverALeakingRoofRoute,
      guideGutterCleaningCostGuideHowMuchYouShouldExpectToPayRoute,
      guideGutterReplacementCostRoute,
      guideHipRoofVsGableRoofProsAndConsOfEachRoofTypeRoute,
      guideHowMuchDoesItCostToCleanARoofRoute,
      guideHowMuchDoesItCostToReplaceACommercialRoofRoute,
      guideHowMuchDoesItCostToReplaceRoofFlashingRoute,
      guideHowMuchDoesProfessionalRoofPaintingCostRoute,
      guideHowMuchDoesSkylightInstallationCostRoute,
      guideHowOftenShouldGuttersBeCleanedGutterCleaningExplainedRoute,
      guidePaintingColorbondRoofCanItBeDoneRoute,
      guideRoofLeakShouldICallMyInsuranceCompanyRoute,
      guideRoofRepairCostSydneyWhatYouCanExpectToPayRoute,
      guideRoofRestorationCostSydneyWhatYouShouldExpectToPayRoute,
      guideWhatCausesRoofLeaksRoute,
      guideWhatIsFasciaOnAHouseThePurposeOfFasciaInRoofingRoute,
      guideWhoDoYouCallWhenYourRoofIsLeakingYourRainyDayPlanRoute,
      guideWhoRepairsSkylightsRoute,
      guideWhyToHaveAParapetRoofRoute,
      guideYourUltimateGuideToDecramasticRoofsRoute,
      guideIsALeakingSkylightCoveredByInsuranceRoute,
      guideCleaningYourColorbondRoofEverythingYouShouldKnowRoute,
      guideAGuideToAustralianRoofTypesRoute,
      guideFactsAboutRoofingInsulationForColorbondRoofsRoute,
      guideChoosingAColorbondRoofRoute,
      guideLookingToCleanYourRoofHeresWhatYouShouldRememberRoute,
      guideLetsTalkColorbondRoofRestorationsRoute,
      guideWhyIsMyWhirlybird5MisconceptionsAboutWhirlybirdsRoute,
      guideHowToTackleRustOnYourRoofRoute,
      guideColorbondRoofsVsConcreteTilesRoute,
      guideCommercialRoofingVsResidentialRoofingTheDifferencesRoute,
      guideHowLongDoesARoofLastRoute,
      guideWhatToDoIfYourGuttersOrDownpipesAreBlockedRoute,
      guideChoosingBetweenColorbondRoofingColoursRoute,
      guideColorbondVsTileRoofWhichIsBestForYourHomeRoute,
      guideFasciasSoffitsAndRoofCarpentryRoute,
      guideAustraliaStateByStateYourBestInsulationOptionsRoute,
      guideHowToMakeAmazingChristmasRooftopDisplaysRoute,
      guideTheBestRoofingOptionsForSuburbanHomesWhichOneIsRightForYouRoute,
      guideHowToSafelyInspectYourRoofAfterAStormRoute,
      guideSignsItsTimeToReplaceYourRoofRoute,
      guideTheUltimateGuideToRoofBeddingAndPointingRoute,
      guideWhatAreTheSignsOfALeakingRoofRoute,
      guideTopSignsOfStormDamageOnYourRoofRoute,
      guideTheDesignEyeqVisualizerRoute,
      guideReasonsWhyProperAtticVentilationIsImportantRoute,
      guideShouldIRepairRoofOrReplaceItRoute,
      guideHowMuchDoesGutterCleaningCost2023PricingGuideRoute,
      guideHowToEfficientlyCleanYourRoofGuttersRoute,
      guideRoofFlashingLeaksAndHowToPreventThemRoute,
      guideProblemsThatResultFromNotCleaningGuttersRoute,
      guideHowMuchDoesItCostToCleanARoof2Route,
      guideHowMuchRainCanICollectFromMyRoofRainwaterHarvestingRoute,
      guideHowLongDoesARoofRestorationTake2Route,
      guideAreThereBenefitsOfMetalRoofingThatOutweighItsCostRoute,
      guide3WaysToCleanATileRoofRoute,
      guide8RoofDesignIdeasForExtensionsRoute,
      guideCorrugatedMetalRoofingPricesRoute,
      guideHowMuchDoPatioCoversCosteRoute,
      guideHowMuchDoesANewRoofCostHowToSaveRoute,
      guideHowMuchDoesAPergolaCosteRoute,
      guideHowMuchDoesItCostToRepairRoofLeaksInAustraliaRoute,
      guideHowMuchItCostsToPaintYourRoofRoute,
      guideHowToBuildAPergolaAndRoofItFromStartToFinishRoute,
      guideHowToBuildAPergolaAttachedToAHouseRoute,
      guideHowToBuildAPergolaFrameDiyRoute,
      guideHowToInstallPostsAndBeamsForACarportRoute,
      guideHowToInstallPullDownAtticStairsRoute,
      guideHowToReplaceAFasciaBoardStepsByStepsRoute,
      guideHowToSetUpPostSupportsForACarportRoute,
      guideRoofPaintingCostsHowMuchDoesRoofCoatingCostRoute,
      guideSafeAndEfficientInstallationOfManholeUnitRoute,
      guideSolarRoofVentilationForHomesAndShedsRoute,
      guideWhatIsPolycarbonateRoofingRoute,

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
      roofingMiddleDuralRoute,
      roofingMiddletonGrangeRoute,
      roofingMinchinburyRoute,
      roofingMirandaRoute,
      roofingMoorebankRoute,
      roofingMortdaleRoute,
      roofingMortlakeRoute,
      roofingNarellanRoute,
      roofingNelsonRoute,
      roofingNeutralBayRoute,
      roofingNewtownRoute,
      roofingNorthRocksRoute,
      roofingNorthRydeRoute,
      roofingNorthSydneyRoute,
      roofingNorthmeadRoute,
      roofingOatlandsRoute,
      roofingPadstowRoute,
      roofingPennantHillsRoute,
      roofingPetershamRoute,
      roofingPleasurePointRoute,
      roofingPrestonsRoute,
      roofingProspectRoute,
      roofingQuakersHillRoute,
      roofingRandwickRoute,
      roofingRevesbyRoute,
      roofingRiverstoneRoute,
      roofingRiverviewRoute,
      roofingRockdaleRoute,
      roofingRoddPointRoute,
      roofingRoselandsRoute,
      roofingRossmoreRoute,
      roofingRozelleRoute,
      roofingRuseRoute,
      roofingRushcuttersBayRoute,
      roofingRussellLeaRoute,
      roofingRydeRoute,
      roofingSadleirRoute,
      roofingSandringhamRoute,
      roofingSandyPointRoute,
      roofingSevenHillsRoute,
      roofingSilverwaterRoute,
      roofingSmithfieldRoute,
      roofingSouthWestSydneyRoute,
      roofingSpringFarmRoute,
      roofingStClairRoute,
      roofingStMarysRoute,
      roofingStanmoreRoute,
      roofingStrathfieldRoute,
      roofingSummerHillRoute,
      roofingSurryHillsRoute,
      roofingTarenPointRoute,
      roofingThornleighRoute,
      roofingTurramurraRoute,
      roofingVaucluseRoute,
      roofingVoyagerPointRoute,
      roofingWahroongaRoute,
      roofingWallaciaRoute,
      roofingWareembaRoute,
      roofingWarwickFarmRoute,
      roofingWattleGroveRoute,
      roofingWaverleyRoute,
      roofingWavertonRoute,
      roofingWentworthPointRoute,
      roofingWestHoxtonRoute,
      roofingWestPennantHillsRoute,
      roofingWestRydeRoute,
      roofingWetherillParkRoute,
      roofingWolliCreekRoute,
      roofingWoodparkRoute,
      roofingWooloowareRoute,
      roofingWoronoraHeightsRoute,
      roofingZetlandRoute,
      roofRestorationServicesRoute,
      serviceCommercialMetalRoofingRoute,
      serviceRoofFlashingRoute,
      serviceSlateRoofingRoute,
      serviceGutterInstallationRoute,
      serviceGutterReplacementRoute,
      serviceGutterRepairsRoute,
      serviceGutterCleaningRoute,
      serviceCorrugatedRoofingSydneyRoute,
      serviceGutterProtectionRoute,
      serviceAluminiumGutterInstallationRoute,
      serviceGutteringServicesRoute,
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
      locBeaconHillRoute,
      locBeaconsfieldRoute,
      locBeecroftRoute,
      locBelfieldRoute,
      locBellaVistaRoute,
      locBellevueHillRoute,
      locBelmoreRoute,
      locBelroseRoute,
      locBeralaRoute,
      locBerkshireParkRoute,
      locBerowraCreekRoute,
      locBerowraHeightsRoute,
      locBerowraWatersRoute,
      locBerowraRoute,
      locBerrileeRoute,
      locBeverleyParkRoute,
      locBeverlyHillsRoute,
      locBexleyNorthRoute,
      locBexleyRoute,
      locBidwillRoute,
      locBilgolaBeachRoute,
      locBilgolaPlateauRoute,
      locBirchgroveRoute,
      locBirrongRoute,
      locBlackettRoute,
      locBlairAtholRoute,
      locBlairmountRoute,
      locBlakehurstRoute,
      locBlighParkRoute,
      locBondiBeachRoute,
      locBondiJunctionRoute,
      locBondiRoute,
      locBonnetBayRoute,
      locBonnyriggHeightsRoute,
      locBonnyriggRoute,
      locBossleyParkRoute,
      locBotanyRoute,
      locBowBowingRoute,
      locBoxHillRoute,
      locBradburyRoute,
      locBreakfastPointRoute,
      locBrightonLeSandsRoute,
      locBringellyRoute,
      locBronteRoute,
      locBrooklynRoute,
      locBurwoodHeightsRoute,
      locBurwoodRoute,
      locCabaritaRoute,
      locCamdenRoute,
      locCampbelltownRoute,
      locCanadaBayRoute,
      locCaringbahRoute,
      locCarlingfordRoute,
      locCarltonRoute,
      locCarnesHillRoute,
      locCasulaRoute,
      locCecilHillsRoute,
      locCecilParkRoute,
      locCheltenhamRoute,
      locCherrybrookRoute,
      locChesterHillRoute,
      locChifleyRoute,
      locChippendaleRoute,
      locChippingNortonRoute,
      locChiswickRoute,
      locChurchPointRoute,
      locClarendonRoute,
      locClarevilleRoute,
      locClaymoreRoute,
      locClemtonParkRoute,
      locClontarfRoute,
      locClovellyWestRoute,
      locClovellyRoute,
      locCollaroyPlateauRoute,
      locCollaroyRoute,
      locColytonRoute,
      locComoRoute,
      locConcordWestRoute,
      locConcordRoute,
      locCondellParkRoute,
      locConnellsPointRoute,
      locCoogeeRoute,
      locCornwallisRoute,
      locCowanRoute,
      locCremornePointRoute,
      locCremorneRoute,
      locCromerRoute,
      locCronullaRoute,
      locCroydonParkRoute,
      locCroydonRoute,
      locCurlCurlRoute,
      locCurransHillRoute,
      locCurrawongBeachRoute,
      locDaceyvilleRoute,
      locDarlingPointRoute,
      locDarlinghurstRoute,
      locDarlingtonRoute,
      locDawnFraserPoolRoute,
      locDeanParkRoute,
      locDeeWhyRoute,
      locDenhamCourtRoute,
      locDenistoneEastRoute,
      locDenistoneWestRoute,
      locDenistoneRoute,
      locDharrukRoute,
      locDolansBayRoute,
      locDollsPointRoute,
      locDoubleBayRoute,
      locDoverHeightsRoute,
      locDrummoyneRoute,
      locDulwichHillRoute,
      locDundasValleyRoute,
      locDundasRoute,
      locEagleValeRoute,
      locEarlwoodRoute,
      locEastHillsRoute,
      locEastKillaraRoute,
      locEastLindfieldRoute,
      locEastRydeRoute,
      locEdensorParkRoute,
      locEdmondsonParkRoute,
      locElderslieRoute,
      locElizabethBayRoute,
      locElizabethHillsRoute,
      locEmertonRoute,
      locEmuHeightsRoute,
      locEmuPlainsRoute,
      locEnfieldRoute,
      locEngadineRoute,
      locEnmoreRoute,
      locEppingRoute,
      locErmingtonRoute,
      locErskineParkRoute,
      locErskinevilleRoute,
      locEveleighRoute,
      locFairfieldEastRoute,
      locFairfieldHeightsRoute,
      locFairfieldWestRoute,
      locFairfieldRoute,
      locFairlightRoute,
      locFiddletownRoute,
      locFiveDockRoute,
      locFlemingtonRoute,
      locForestvilleRoute,
      locFrenchsForestRoute,
      locFreshwaterRoute,
      locGalstonRoute,
      locGeorgesHallRoute,
      locGirraweenRoute,
      locGladesvilleRoute,
      locGlenAlpineRoute,
      locGlendenningRoute,
      locGlenfieldRoute,
      locGlenmoreParkRoute,
      locGlenwoodRoute,
      locGordonRoute,
      locGranvilleRoute,
      locGraysPointRoute,
      locGreenValleyRoute,
      locGreenacreRoute,
      locGreendaleRoute,
      locGreenfieldParkRoute,
      locGregoryHillsRoute,
      locGreystanesRoute,
      locGuildfordWestRoute,
      locGuildfordRoute,
      locGymeaBayRoute,
      locGymeaRoute,
      locHaberfieldRoute,
      locHammondvilleRoute,
      locHarbordRoute,
      locHarringtonParkRoute,
      locHarrisParkRoute,
      locHaymarketRoute,
      locHeathcoteRoute,
      locHebershamRoute,
      locHeckenbergRoute,
      locHenleyRoute,
      locHillsdaleRoute,
      locHinchinbrookRoute,
      locHobbysBayRoute,
      locHolroydRoute,
      locHolsworthyRoute,
      locHomebushWestRoute,
      locHomebushRoute,
      locHorningseaParkRoute,
      locHornsbyHeightsRoute,
      locHornsbyRoute,
      locHorsleyParkRoute,
      locHoxtonParkRoute,
      locHuntersHillRoute,
      locHuntingwoodRoute,
      locHuntleysCoveRoute,
      locHuntleysPointRoute,
      locHurlstoneParkRoute,
      locHurstvilleGroveRoute,
      locHurstvilleRoute,
      locIngleburnRoute,
      locInglesideRoute,
      locJamisontownRoute,
      locJanaliRoute,
      locJordanSpringsRoute,
      locKangarooPointRoute,
      locKareelaRoute,
      locKearnsRoute,
      locKempsCreekRoute,
      locKensingtonRoute,
      locKenthurstRoute,
      locKentlynRoute,
      locKingsParkRoute,
      locKingsfordRoute,
      locKingsgroveRoute,
      locKirribilliRoute,
      locKogarahRoute,
      locKyeemaghRoute,
      locLaneCoveRoute,
      locLeichhardtRoute,
      locLeppingtonRoute,
      locLewishamRoute,
      locLibertyGroveRoute,
      locLidcombeRoute,
      locLilyfieldRoute,
      locLiverpoolRoute,
      locLurneaRoute,
      locMacquarieParkRoute,
      locMaraylyaRoute,
      locMarrickvilleRoute,
      locMarsfieldRoute,
      locMascotRoute,
      locMatravilleRoute,
      locMerrylandsRoute,
      calculatorIndexRoute,
      calculatorReroofCostRoute,
      calculatorInsulationRoute,
      calculatorPitchRoute,
      calculatorColourRoute,

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