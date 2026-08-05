// Service-area expansion (inner-loop + near-town areas). Same rule as the
// original 8: every area gets unique localContext + FAQs — no template shells.
export const expansionAreas1 = [
  {
    slug: 'the-heights',
    name: 'The Heights',
    headline: 'Clay Tile Roof Repair in the Houston Heights',
    description: 'The Heights\' historic districts hold some of Houston\'s oldest rooflines — and its scattered Mission Revival and 1920s brick homes carry original clay tile that deserves preservation-grade care.',
    features: [
      'Historic district approval experience',
      'Vintage tile sourcing and matching',
      'Bungalow and four-square expertise',
      'Careful work on century-old framing',
    ],
    areaInfo: 'The Heights rewards contractors who respect old houses. Between the historic districts, the century-old framing, and neighbors who notice everything, tile work here needs to be done right and done considerately.',
    localContext: [
      'Most of the Heights is Craftsman bungalow and Victorian territory, but scattered through the historic districts are the exceptions that need us: 1920s brick four-squares with clay tile hips, Mission Revival homes with barrel tile parapets, and church and commercial buildings whose tile roofs date to the neighborhood\'s streetcar era. These are some of the oldest tile installations in Houston, sitting on some of its oldest framing — which means repairs must account for what a century of settling has done to the deck beneath the tile.',
      'The Heights\' historic districts add a layer most roofers have never navigated: exterior changes visible from the street in designated districts can require a Certificate of Appropriateness from the Houston Archaeological and Historical Commission. Like-for-like repair is generally straightforward, but replacements and material changes need documentation — tile profiles, colors, photographs — prepared properly. We\'ve assembled these submissions before and know what the commission wants to see.',
      'Tile stock this old is irreplaceable in the literal sense, so our Heights work runs salvage-first: every original tile that can be saved is relaid, shortfalls come from reclaimed-tile suppliers who carry pre-war profiles, and new production tile goes only where it can\'t be seen from the street. On framing this age we also inspect decking and rafter condition honestly — sometimes the tile has outlived the wood holding it up.',
    ],
    faqs: [
      {
        question: 'Do I need city approval to repair a tile roof in a Heights historic district?',
        answer: 'In-kind repairs — replacing broken tiles with matching tiles — generally don\'t require a Certificate of Appropriateness. Full replacement or any visible material change in a designated historic district usually does. We prepare the documentation (profiles, colors, photos) and have taken Heights projects through the process without delays.',
      },
      {
        question: 'Can you match 100-year-old clay tile?',
        answer: 'Usually. Pre-war tile profiles survive in reclaimed-tile yards across Texas and the Gulf South, and for prominent slopes we relocate your original tile to face the street while placing sourced matches on secondary slopes. Exact color matching improves with weathering — a good match at installation becomes invisible within a year or two.',
      },
      {
        question: 'Is my old tile roof too heavy for my Heights home\'s framing?',
        answer: 'If the home was built for tile, the framing was sized for it — the question is the framing\'s condition after a century, not its design. We inspect decking and rafters during any significant repair and tell you honestly if structural work is needed before tile goes back on.',
      },
    ],
    median_home: '$800K+',
    zip: '77007, 77008',
    image: '/images/clay-tile-roof-repair.jpg',
  },
  {
    slug: 'montrose',
    name: 'Montrose',
    headline: 'Clay Tile Roofing for Montrose\'s Spanish Revival Homes',
    description: 'Montrose holds one of Houston\'s best collections of 1920s Spanish Revival and Mediterranean homes — original clay tile rooflines on streets like Courtlandt Place and around the museum corridor.',
    features: [
      'Spanish Revival restoration',
      'Original barrel tile preservation',
      'Renovation-phase tile protection',
      'Small-lot staging expertise',
    ],
    areaInfo: 'Montrose renovates constantly, and its historic tile roofs sit in the middle of that churn. We protect and restore original tile through remodels and bring neglected rooflines back rather than tearing them off.',
    localContext: [
      'Montrose was platted when Spanish Revival was the height of fashion, and it shows: stucco walls, arched openings, and genuine barrel and mission tile roofs from the 1920s survive across the neighborhood — from the grand homes of Courtlandt Place to modest Mediterranean cottages tucked between newer townhomes. Much of this tile is approaching its hundredth year, typically still sound as tile while the felt and flashings beneath it finish their working lives.',
      'The neighborhood\'s constant renovation cycle is the biggest threat to its tile. We\'re regularly called after another trade — painters, HVAC installers, solar surveyors — has walked a fragile field and left a trail of cracked tiles, or after a remodel contractor priced "just replacing all that old tile" because they didn\'t know how to work with it. Our renovation service protects the roof through construction: walk pads and access routes for other trades, tile salvage and storage during structural work, and relay when the project dries in.',
      'For the neglected examples — and Montrose has some, on homes that sat as rentals for decades — restoration usually beats replacement. A lift-and-relay with modern underlayment, renewed flashings, and reclaimed-tile infill returns a weathered 1920s roofline to service for decades, at a cost that preserves rather than erases what makes these houses worth owning.',
    ],
    faqs: [
      {
        question: 'We\'re remodeling a Montrose Spanish Revival. How do we protect the tile roof?',
        answer: 'Bring us in before other trades touch the roof. We set walk pads and defined access routes, remove and palletize tile from work zones, and relay it over new underlayment once the remodel dries in. Most cracked-tile damage we repair in Montrose was caused by other contractors walking the field unprotected.',
      },
      {
        question: 'Our 1920s tile roof looks rough. Does it need replacement?',
        answer: 'Usually not. Weathered appearance, biological staining, and a few broken tiles are all restorable. What matters is the underlayment and flashings beneath — if those have failed, a lift-and-relay (salvaging your tile, replacing what\'s under it) restores the roof for a fraction of replacement cost and keeps the original material.',
      },
      {
        question: 'Can you work on tight Montrose lots without wrecking the garden?',
        answer: 'Yes — small-lot staging is normal here. We use compact tile staging, protect landscaping and hardscape before work starts, and sequence tear-off and relay so material never sits piled on the property longer than a day or two.',
      },
    ],
    median_home: '$700K+',
    zip: '77006, 77019',
    image: '/images/clay-tile-repair-houston.jpg',
  },
  {
    slug: 'memorial',
    name: 'Memorial',
    headline: 'Clay Tile Roof Specialists for the Memorial Corridor',
    description: 'Beyond the Villages, the greater Memorial corridor — Frostwood, Nottingham, Wilchester, and the custom enclaves off Memorial Drive — carries a deep inventory of tile roofs under heavy tree canopy.',
    features: [
      'Canopy-zone maintenance programs',
      'Ranch and custom home tile work',
      'Storm limb damage response',
      'Underlayment renewal specialists',
    ],
    areaInfo: 'Memorial\'s neighborhoods pair large lots and mature trees with tile roofs from every decade since the 1960s. That combination — canopy over tile — defines the maintenance rhythm our Memorial clients rely on.',
    localContext: [
      'The Memorial corridor west of the Villages built out across four decades, and its tile inventory shows the range: 1960s–70s ranch homes where tile was the premium option, 1980s–90s two-story customs in Mediterranean and French styles, and current-generation rebuilds with engineered S-tile systems. Each generation is now at a different point in the underlayment lifecycle, which is why two Memorial neighbors with similar-looking roofs can need completely different work.',
      'What unifies Memorial is the canopy. The neighborhood\'s oaks and pines are its signature and its roofs\' steady adversary: leaf and needle accumulation in valleys, limb strikes after every storm line, and shaded slopes that hold moisture and grow organic staining. Our Memorial maintenance visits clear the water paths, replace impact-damaged tiles from safe access, and track each roof\'s condition over time so underlayment renewal gets planned rather than discovered through a ceiling stain.',
      'Memorial storm response is its own discipline — when a front drops limbs across the corridor, we triage active leaks with proper tile-safe dry-in (tarping tile incorrectly breaks more tile), then sequence permanent repairs with insurance documentation. Our crews carry the common Memorial-era tile profiles so most storm repairs finish in a single visit.',
    ],
    faqs: [
      {
        question: 'How is Memorial different from Memorial Villages for tile roofing?',
        answer: 'The Villages are their own municipalities with distinct permitting, and their estate roofs skew larger and more complex. The broader Memorial corridor spans more construction eras — 1960s ranches to new customs — so the work here is more varied: everything from first-ever underlayment renewals on 50-year-old tile to warranty corrections on recent builds. We serve both, and we quote based on your specific roof\'s era and condition.',
      },
      {
        question: 'A storm dropped a limb on our tile roof. What should we do first?',
        answer: 'Keep everyone off the roof and call us for tile-safe emergency dry-in — conventional tarping methods crack surrounding tiles and grow the claim. We stabilize the area, document the damage for insurance, and return with matching tile for a permanent, invisible repair.',
      },
      {
        question: 'Our 1970s Memorial ranch still has its original tile roof. What\'s its future?',
        answer: 'The tile likely has decades left; the original felt underneath almost certainly doesn\'t. An inspection grades the underlayment honestly. When it\'s time, a lift-and-relay keeps your original tile — which often can\'t be matched new — and resets the roof for another 40+ years.',
      },
    ],
    median_home: '$1.2M+',
    zip: '77024, 77079',
    image: '/images/clay-tile-repair-sugarland.jpg',
  },
  {
    slug: 'rice-military',
    name: 'Rice Military',
    headline: 'Tile Roof Repair for Rice Military Townhomes',
    description: 'Rice Military\'s three- and four-story townhomes include Mediterranean-styled builds with tile roofs and tile accents — compact, steep, and tightly packed, they demand a different kind of tile work.',
    features: [
      'Steep-slope townhome access',
      'HOA and shared-wall coordination',
      'Tile accent and parapet repair',
      'Zero-lot-line staging',
    ],
    areaInfo: 'Tile work in Rice Military is an access puzzle: steep roofs, zero-lot-line construction, and shared driveways. We\'ve built our townhome practice around exactly those constraints.',
    localContext: [
      'Rice Military rebuilt itself as Houston\'s townhome laboratory, and a meaningful slice of that construction wears tile — full S-tile roofs on Mediterranean-styled rows, barrel tile accents over entries and balconies, and tile-capped parapets on contemporary builds. Most of it went on fast during the boom years, and the shortcuts of fast production tile work (minimal fastening, thin underlayment, mortar-only details) are surfacing now as these buildings pass fifteen and twenty years old.',
      'The physical setting shapes everything. Three and four stories up on a steep pitch, with a neighbor\'s wall three feet away and nowhere to set a ladder, is not composition-shingle territory — it\'s rope-and-anchor access, compact staging in shared driveways coordinated with neighbors, and crews comfortable working small, tall roofs efficiently. We plan Rice Military jobs around those constraints because they are the job.',
      'Shared construction also means shared problems: a leak that shows in one unit can originate at a parapet or valley two units over, and HOA-maintained roofs need scope and documentation boards can act on. We trace leaks across rooflines properly, work with managers and boards on multi-unit repairs, and provide the per-unit documentation that keeps association decisions simple.',
    ],
    faqs: [
      {
        question: 'Water is staining our top-floor ceiling. Is it our roof or the neighbor\'s?',
        answer: 'On attached townhomes, possibly either — water travels along shared parapets and valleys before it shows inside. We inspect the full roofline across adjoining units when access allows, identify the true entry point, and document whose section needs work, which matters for HOA and neighbor cost conversations.',
      },
      {
        question: 'Our HOA maintains the roofs. Can you work with them?',
        answer: 'Yes — much of our Rice Military work is HOA-directed. We provide association-ready inspection reports, per-unit scopes, and scheduling that coordinates access across owners. If you\'re an owner seeing a problem, we can document it in the format your board needs to approve action.',
      },
      {
        question: 'How do you even access a four-story townhome roof?',
        answer: 'Rope access, properly anchored, plus compact lifts where driveways allow. It\'s routine for our crews. What we don\'t do is lean extension ladders on neighbors\' property or walk unprotected across steep tile — the access method is half of what makes townhome tile work safe and damage-free.',
      },
    ],
    median_home: '$650K+',
    zip: '77007',
    image: '/images/clay-tile-repair-pearland.jpg',
  },
  {
    slug: 'midtown',
    name: 'Midtown',
    headline: 'Tile Roofing Services for Midtown Houston',
    description: 'Midtown\'s townhome blocks and mixed-use buildings carry more tile than people expect — Mediterranean-styled rows, tile-accented commercial fronts, and rooflines managed by HOAs and property managers.',
    features: [
      'Townhome community repairs',
      'Property manager programs',
      'Tile accent and awning roofs',
      'Fast urban-lot mobilization',
    ],
    areaInfo: 'Midtown roofing is dense-urban work: coordinating access, protecting sidewalks and parked cars, and giving HOAs and property managers documentation they can act on quickly.',
    localContext: [
      'Midtown\'s redevelopment happened in waves of townhome construction, and the Mediterranean-styled waves brought tile — full tile roofs on some rows, tile-clad stair towers and entry canopies on others, and tile mansard and awning details on the district\'s mixed-use frontages. It\'s a smaller tile inventory than River Oaks, but it\'s concentrated in buildings where a roof problem immediately involves multiple owners, an association, or a commercial tenant.',
      'That ownership structure is why our Midtown practice is built around documentation and coordination as much as craft. For HOAs we inspect entire rows at once — catching the systemic issues (mortar-only ridge details, aging first-generation underlayment) that show up building-wide — and deliver per-unit findings boards can budget against. For property managers we handle tile repairs on retail and office frontages with certificates of insurance, off-hours scheduling, and sidewalk protection handled without being asked.',
      'The work itself is classic urban tile: steep small roofs, parapet and dead-wall flashings where townhomes meet, and staging in places where a pallet of tile can\'t sit on the street. We mobilize small crews fast, protect what\'s below, and leave no trace but the repair.',
    ],
    faqs: [
      {
        question: 'Our Midtown HOA suspects all our buildings have the same roof issue. Can you assess the whole community?',
        answer: 'Yes — that\'s the efficient way to do it. Townhome communities built in one construction wave usually share the same defects and the same timeline. We inspect the full property, separate urgent repairs from watch items, and deliver a per-building report your board can turn into a phased budget.',
      },
      {
        question: 'Do you handle commercial tile details — mansards, awnings, parapet caps?',
        answer: 'Yes. Midtown\'s mixed-use buildings use tile as facade roofing, and it fails the same ways roof tile does — cracked units, failed attachment, flashing gaps. We repair and re-secure these details with proper fastening, and we carry the insurance documentation commercial property managers require.',
      },
      {
        question: 'How disruptive is tile repair on an occupied urban block?',
        answer: 'Minimal when planned right. We schedule around business hours where tenants are affected, protect sidewalks and parking with overhead cover where needed, and stage compactly. Most Midtown repairs are one-day visits.',
      },
    ],
    median_home: '$450K+',
    zip: '77002, 77004',
    image: '/images/clay-tile-roof-repairs.jpg',
  },
  {
    slug: 'downtown-houston',
    name: 'Downtown Houston',
    headline: 'Clay Tile Roof Services for Downtown Houston Properties',
    description: 'Downtown\'s tile lives on its historic buildings and its residential fringe — tile parapets and mansards on early-1900s commercial architecture, and tile roofs on the townhomes ringing the core.',
    features: [
      'Historic commercial tile details',
      'Property management partnerships',
      'Certificate of insurance ready',
      'Engineered access planning',
    ],
    areaInfo: 'Downtown tile work is specialized: historic buildings with irreplaceable details, commercial owners who need documentation, and access that has to be engineered rather than improvised.',
    localContext: [
      'Downtown Houston\'s surviving early-1900s architecture — the buildings that escaped the demolition decades — carries clay tile where its architects put it a century ago: mansard slopes, parapet caps, tower roofs, and decorative tile courses on churches and institutional buildings. This tile is architectural fabric, often from long-closed kilns, and repairing it means preservation sourcing: reclaimed-tile networks, custom matching, and installation that respects how these assemblies were originally built.',
      'The residential tile inventory rings the core — townhome developments on downtown\'s east and south edges where Mediterranean styling brought S-tile roofs to multi-story rows. These share the urban-access challenges of all inner-city tile work, plus downtown\'s specific logistics: permitted sidewalk protection, loading-zone coordination, and work windows that respect residential and commercial neighbors stacked close together.',
      'For building owners and managers, we operate as a specialty trade partner: certificates of insurance issued before mobilization, engineered access plans for anything above walk-up height, photographic documentation before and after, and honest triage between "repair now," "monitor," and "budget for restoration." Downtown tile problems rarely improve with time — but they do wait politely while an owner gets proper documentation to act on.',
    ],
    faqs: [
      {
        question: 'Who handles tile on historic downtown buildings — a roofer or a restoration contractor?',
        answer: 'For the tile itself, you want a tile specialist with preservation sourcing — that\'s us. On landmarked buildings we work alongside preservation architects and follow approved specifications; on unlandmarked historic stock we bring the same salvage-first approach without the paperwork. Either way, the tile that comes off is treated as irreplaceable until proven otherwise.',
      },
      {
        question: 'What does a commercial tile repair engagement look like?',
        answer: 'Site walk and photographic condition survey, scoped proposal with access plan, COI to your management office, scheduled mobilization with sidewalk and tenant protection, and closeout documentation. We\'re used to working inside commercial property management processes.',
      },
      {
        question: 'Can you get to a tile mansard six floors up?',
        answer: 'Yes — with engineered access: swing stage, boom lift, or rope access depending on the building and street conditions, permitted as required. Access planning is part of every downtown proposal, not an afterthought.',
      },
    ],
    median_home: '$400K+',
    zip: '77002, 77010',
    image: '/images/clay-tile-roof-repair-services.jpg',
  },
  {
    slug: 'eado',
    name: 'EaDo',
    headline: 'Tile Roof Repair for EaDo\'s New Townhomes',
    description: 'East Downtown\'s townhome boom included Mediterranean-styled rows with tile roofs — young roofs that deserve to be corrected and maintained properly before small builder shortcuts become big problems.',
    features: [
      'New-construction defect correction',
      'Builder warranty documentation',
      'Townhome HOA programs',
      'Preventive maintenance plans',
    ],
    areaInfo: 'EaDo\'s tile roofs are mostly under 15 years old — the age where production-build shortcuts first show. Catching them now is dramatically cheaper than after the first major leak.',
    localContext: [
      'EaDo transformed faster than almost any Houston neighborhood, and its townhome construction included a real share of tile — S-tile roofs on Mediterranean-styled rows and tile accents across contemporary builds. Because nearly all of it was production construction on compressed schedules, EaDo\'s tile inventory shares a defect profile we know well: minimal field fastening, mortar-only hips and ridges, economy single-ply underlayment, and missing eave closures that invite wind-driven rain and pests under the field.',
      'The good news is timing. These roofs are young, and the defects that will cause leaks at year 18 are correctable at year 10 for a fraction of the eventual repair — mechanical ridge refastening, eave closure retrofits, and targeted underlayment work at the vulnerable transitions. Our EaDo inspections grade exactly these items and document them in reports owners have used with builders and warranty companies while coverage still applies.',
      'The neighborhood\'s density gives it the same multi-unit dynamics as Midtown and Rice Military: shared parapets, HOA-maintained rows, and leaks that cross unit lines. We inspect communities as systems, coordinate access across owners, and keep the paperwork clean for boards.',
    ],
    faqs: [
      {
        question: 'Our EaDo townhome is 10 years old. Why inspect a young tile roof?',
        answer: 'Because production-built tile roofs fail on a schedule set by their shortcuts, not by the tile. Ten years is when mortar-only ridges loosen and economy underlayment starts aging — and when corrections cost hundreds instead of thousands. One inspection tells you whether your builder cut the corners we commonly find.',
      },
      {
        question: 'Can builder shortcuts still be a warranty issue years later?',
        answer: 'Sometimes — it depends on your warranty terms and documentation. What we provide is the evidence: a written report identifying specific installation defects versus normal wear. Owners have used our documentation successfully with builders and structural warranty companies; the earlier it\'s documented, the stronger the position.',
      },
      {
        question: 'What does preventive maintenance on a townhome tile roof include?',
        answer: 'An annual or biennial visit: fastening checks at hips and ridges, debris clearing at valleys and parapet scuppers, sealant and flashing touch-ups, and a photo report. For HOAs we price it per-building across the community — it\'s the cheapest insurance a tile row can buy.',
      },
    ],
    median_home: '$450K+',
    zip: '77003',
    image: '/images/clay-tile-repair-sugar-land.jpg',
  },
  {
    slug: 'museum-district',
    name: 'Museum District',
    headline: 'Historic Clay Tile Restoration in the Museum District',
    description: 'The Museum District and its estate enclaves — Broadacres, Shadyside, Shadow Lawn — hold Houston\'s finest concentration of 1920s clay tile roofs. This is preservation-grade tile country.',
    features: [
      'Estate-grade tile restoration',
      'Historic enclave experience',
      'Preservation consultant coordination',
      'Museum-quality craftsmanship',
    ],
    areaInfo: 'Between Hermann Park and Rice University sit the private places where Houston\'s early elite built in tile — and where that tile, now a century old, is maintained rather than replaced.',
    localContext: [
      'The Museum District\'s estate enclaves — Broadacres, Shadyside, Shadow Lawn, and the surrounding boulevard blocks — were designed by Houston\'s founding architects in the 1910s and 20s, and clay tile crowns much of their work: Mediterranean villas, Georgian and Jacobean estates with tile accents, and institutional buildings whose rooflines were meant to last centuries. Much of the original tile — including product from the great American kilns of that era — is still in service, which is both remarkable and the point: this tile was made to be maintained, not consumed.',
      'Work here follows preservation logic. Original material is documented, salvaged, and returned to the roof; failures are corrected at the underlayment, flashing, and fastening layers hidden beneath; and any tile that must be added is sourced to match era, profile, and blend — from reclaimed stock first, custom reproduction when necessary. On estates governed by private-place deed restrictions or coordinated by preservation consultants, we produce the documentation and mockups that keep decisions well-informed.',
      'These are also working roofs on occupied homes near an active museum campus, so the practical standards hold alongside the preservation ones: protected staging on formal grounds, scheduling around events and institutional neighbors, and crews whose site conduct matches the addresses they work on.',
    ],
    faqs: [
      {
        question: 'Our Broadacres home has its original 1920s tile roof. Who should touch it?',
        answer: 'Only a tile specialist who works salvage-first — original tile from this era is effectively irreplaceable, and its value survives only if repairs preserve it. We document, salvage, and relay original material, correct the failed layers beneath, and source period-correct matches for any shortfall. Ask any contractor how they\'ll protect the existing tile before they set a ladder.',
      },
      {
        question: 'The tile looks fine but we\'ve found attic moisture. What\'s happening?',
        answer: 'Century-old underlayment. Tile sheds most water; the membrane beneath handles the rest, and at 90+ years it\'s done. The remedy is a lift-and-relay — original tile off, modern high-temperature membrane and new flashings on, original tile back — invisible from the street and good for another half-century.',
      },
      {
        question: 'Do you coordinate with preservation architects and consultants?',
        answer: 'Regularly. We provide condition surveys, tile documentation, and repair specifications that fit preservation frameworks, and we execute to approved specs with mockups where required. On significant properties, that collaboration produces the best outcomes for the building.',
      },
    ],
    median_home: '$900K+',
    zip: '77004, 77005',
    image: '/images/clay-tile-roof-repair.jpg',
  },
  {
    slug: 'upper-kirby',
    name: 'Upper Kirby',
    headline: 'Clay Tile Roof Repair in Upper Kirby',
    description: 'Upper Kirby bridges River Oaks and West U — older Mediterranean homes on its quiet streets, tile-roofed townhome communities off Kirby and Richmond, and commercial tile details along its corridors.',
    features: [
      'Mediterranean home restoration',
      'Townhome community service',
      'Mixed residential-commercial work',
      'River Oaks-grade standards',
    ],
    areaInfo: 'Upper Kirby\'s tile inventory spans 1930s originals to 2000s townhomes. We bring the same standard to both — the neighborhood sits between two of our core service areas and gets the same crews.',
    localContext: [
      'Upper Kirby inherited tile from both directions: on its interior streets, 1930s–50s Mediterranean and eclectic homes that match the River Oaks and West U stock a few blocks away; along its corridors, the townhome and patio-home communities of the 1990s and 2000s where S-tile roofs came standard with the stucco. Add the tile mansards and accent roofs on the district\'s retail frontages, and this small area holds every tile situation we service.',
      'The older homes follow the inner-loop pattern — sound original tile over aging underlayment — and get our salvage-first restoration approach: preserve the original material, renew what\'s beneath, match any infill from reclaimed stock. The townhome communities follow the production-build pattern instead: fastening and ridge details that need correction as they age, HOA coordination, and community-wide inspection efficiencies.',
      'Upper Kirby\'s redevelopment pressure adds one more service: pre-sale and pre-renovation roof documentation. With teardowns and remodels reshaping blocks, owners increasingly need honest condition reports — what the roof is worth, what it needs, what a buyer\'s inspector will find. We provide those with the same directness we\'d want buying a house ourselves.',
    ],
    faqs: [
      {
        question: 'We\'re selling our Upper Kirby home with an older tile roof. Should we repair first?',
        answer: 'Get a condition report first, then decide. Sometimes a modest repair-and-document package protects your price far beyond its cost; sometimes the right move is disclosing honestly with our report in hand so the roof doesn\'t become a negotiation surprise. We\'ll tell you which situation you\'re in.',
      },
      {
        question: 'Our townhome community off Kirby has recurring ridge tile problems. Why?',
        answer: 'Almost certainly mortar-only ridge attachment from original construction — it loosens under thermal and wind cycling and fails a few tiles at a time, forever. The permanent fix is mechanical refastening of hips and ridges. Done once across the community, the recurring repair cycle ends.',
      },
      {
        question: 'Do you handle the tile details on commercial buildings along Kirby?',
        answer: 'Yes — mansards, awning roofs, and parapet tile on retail and office frontages. We work with property managers on documentation, insurance certificates, and scheduling that doesn\'t disrupt tenants.',
      },
    ],
    median_home: '$800K+',
    zip: '77098, 77027',
    image: '/images/clay-tile-repair-houston.jpg',
  },
  {
    slug: 'galleria-uptown',
    name: 'Galleria/Uptown',
    headline: 'Tile Roofing Experts for the Galleria and Uptown Area',
    description: 'Around the Galleria\'s towers sit tile-roofed custom homes, gated patio-home communities, and St. George Place — a district where tower-driven wind patterns test every tile roof\'s attachment.',
    features: [
      'Wind-exposure hardening',
      'Gated community coordination',
      'Custom home tile service',
      'Patio home community programs',
    ],
    areaInfo: 'Uptown\'s residential pockets live in the towers\' wind shadow — accelerated gusts at roof level that find every weak fastener. Attachment quality decides which Galleria-area tile roofs survive storm season intact.',
    localContext: [
      'The Galleria area packs Houston\'s densest vertical skyline next to some of its most tile-rich residential pockets: the custom homes of St. George Place, gated patio-home enclaves off Post Oak and San Felipe, and Mediterranean customs on the streets shading into Tanglewood. What makes this district different is aerodynamic: high-rise clusters channel and accelerate wind at low level, so roofs near the towers see gust loads and turbulence that identical roofs a mile away never experience.',
      'That shows up in our Galleria-area work orders: displaced field tile on exposed corners, hip and ridge failures where original construction used mortar alone, and edge-zone damage after storms that left calmer neighborhoods untouched. Our response is attachment-focused — storm clips and supplemental fastening on exposed slopes, mechanically fastened ridge systems, and edge detailing to current wind standards — because in this wind environment, attachment is the whole game.',
      'The area\'s gated and patio-home communities also get our association services: community-wide condition surveys that catch shared original-construction defects, per-home documentation for boards, and coordinated scheduling that works within gate access and community rules.',
    ],
    faqs: [
      {
        question: 'Why does our Galleria-area roof lose tiles when friends\' roofs elsewhere don\'t?',
        answer: 'Tower-accelerated wind. High-rise clusters redirect and speed up wind at rooftop level nearby, so your roof sees stronger, more turbulent gusts than the same storm delivers elsewhere. The fix isn\'t different tile — it\'s better attachment: storm clips, supplemental fastening, and mechanical ridge systems rated for the exposure.',
      },
      {
        question: 'Can you harden our roof before hurricane season?',
        answer: 'Yes — a wind-hardening visit refastens vulnerable field zones, converts mortar-only hips and ridges to mechanical attachment, and corrects edge details. It\'s the highest-value preventive work available in this district, typically completed in one to two days.',
      },
      {
        question: 'Our gated community wants one contractor for all tile roofs. How does that work?',
        answer: 'We survey the community as a system — shared construction era means shared issues — then deliver per-home findings and a phased plan the board can budget. Ongoing, one crew that knows the community handles everything from storm calls to annual maintenance, coordinated through your management.',
      },
    ],
    median_home: '$700K+',
    zip: '77056, 77057',
    image: '/images/clay-tile-repair-katy.jpg',
  },
  {
    slug: 'garden-oaks',
    name: 'Garden Oaks',
    headline: 'Clay Tile Roof Care in Garden Oaks',
    description: 'Garden Oaks\' 1930s–40s cottages and ranches on oversized lots include original tile roofs worth preserving — and its new custom builds are adding tile back to the neighborhood.',
    features: [
      'Original cottage tile preservation',
      'New custom build installation',
      'Large-lot canopy maintenance',
      'Deed-restriction friendly work',
    ],
    areaInfo: 'Garden Oaks blends preservation and new construction like few Houston neighborhoods. We serve both sides: century-minded care for original tile, and correctly built systems on the new customs.',
    localContext: [
      'Garden Oaks was planned in the late 1930s as a garden suburb, and its original housing stock — brick cottages, early ranches, the occasional Spanish Revival — included clay tile on a meaningful share of homes. Those surviving original roofs are now 80+ years old and follow the classic pattern: tile with life left, underlayment without. The neighborhood\'s deed restrictions and active civic club culture mean exterior work gets noticed, so repairs that preserve original character land better than replacements that erase it.',
      'The neighborhood\'s other story is new construction: large lots have drawn custom builders, and Mediterranean and transitional designs are putting new tile roofs over Garden Oaks again. We install and inspect these systems to standards production builders often skip — proper fastening schedules, mechanically attached ridges, quality underlayment — because a tile roof built right in 2026 shouldn\'t need us until 2066.',
      'Between the eras sits the neighborhood\'s signature challenge: the mature oak and pine canopy that gives Garden Oaks its name. Our maintenance service handles what the trees deliver — valley clearing, limb-strike tile replacement, and shaded-slope treatment — on the schedule the canopy demands.',
    ],
    faqs: [
      {
        question: 'Our 1940s Garden Oaks cottage has original tile. Is it worth saving?',
        answer: 'Almost certainly yes. Pre-war tile was well-made, and original roofs contribute real value in a neighborhood that prizes its character homes. The economical path is preserving the tile and renewing the underlayment beneath it when inspection shows it\'s time — not replacing a roof whose visible half is fine.',
      },
      {
        question: 'We\'re building new in Garden Oaks with a tile roof. What should we watch for?',
        answer: 'Insist on the details that separate 60-year tile roofs from 15-year ones: upgraded underlayment (not minimum-spec felt), a real fastening schedule, mechanically attached hips and ridges, and proper eave closures. We can review your builder\'s roofing spec before installation — an hour of review prevents decades of correction.',
      },
      {
        question: 'How often does a tile roof under Garden Oaks\' canopy need attention?',
        answer: 'An annual visit covers most homes: clear the valleys and gutters, replace any limb-cracked tiles, check ridge attachment, and photograph condition. Under the heaviest canopy, twice a year. It\'s modest money that prevents the debris-dam leaks that account for most tile roof damage in tree-heavy neighborhoods.',
      },
    ],
    median_home: '$700K+',
    zip: '77018',
    image: '/images/clay-tile-roof-repairs.jpg',
  },
];
