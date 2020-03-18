export const local = {
  code: "",
  minZoomMessageNoLayer: "No layer assigned",
  minZoomMessage: "Zoom in to load locations",
  capacity: "Capacity",
  playground: "For children",
  changing_table: "Has a changing table",
  bottle: "Refilling is possible",
  pump: "Pump",
  tools: "Tools",
  chainTool: "Chain tool",
  internet: "Internet",
  water: "Drinking water",
  bicycle: "Bicycle",
  park: "Park",
  charging: "Charging",
  car: "Car",
  mobile: "Mobile phone",
  smallElectronics: "Small Electronics",
  electronics: "Electronics",
  furniture: "Furniture",
  computer: "Computer",
  toy: "Toy",
  clothes: "Clothes",
  freeToGive: "Free to give",
  freeToTake: "Free to take",
  freeToTakeOrGive: "Free to take or give",
  borrow: "Borrow only",
  indoor: "Indoor",
  female: "Female",
  male: "Male",
  hoops: "Hoops",
  light: "Lit",
  covered: "Covered",
  wheelchairYes: "Wheelchair accessible",
  wheelchairLimited: "Limited wheelchair accessible",
  wheelchairNo: "Not wheelchair accessible",
  open: "Open",
  closed: "Closed",
  maybeOpen: "Maybe open",
  maybeOpens: "Maybe opens",
  maybeCloses: "Maybe closes",
  opens: "Opens",
  closes: "Closes",
  thatDependsOn: "That depends on",
  conditionalFee: "Only free at certain times.",
  route: "Route",
  difficulty: "Difficulty",
  floor: function(level: number) {
    return `(${level}F)`;
  },
  groundFloor: function(_level: number) {
    return `(GF)`;
  },
  basement: function(level: number) {
    return `(B${Math.abs(level)}F)`;
  },
  group: {
    culture: "Culture",
    education: "Education",
    natural: "Nature",
    object_of_utility: "Objects of utility",
    health: "Health",
    community: "Community",
    sport: "Sport",
    trip: "Trip",
    goods: "Goods"
  },
  amenity: {
    hunting_stand: "Hunting stand"
  },
  leisure: {
    bird_hide: "Place to observe birds",
    wildlife_hide: "Place to observe wildlife"
  },
  man_made: {
    water_well: "Water well",
    watermill: "Watermill",
    windmill: "Windmill",
    mineshaft: "Mineshaft",
    drinking_fountain: "Drinking fountain",
    tower: "Tower"
  },
  type: {
    artwork: { name: "Artwork", description: "" },
    fountain: { name: "Fountain", description: "" },
    "tourist-attraction": { name: "Tourist attraction", description: "" },
    "archaeological-site": { name: "Archaeological site", description: "" },
    trail: { name: "Educational trail", description: "" },
    "book-exchange": { name: "Book exchange", description: "" },
    castle: { name: "Castle", description: "" },
    mill: { name: "Mill", description: "" },
    history: { name: "History", description: "" },
    memorial: { name: "Memorial", description: "" },
    monument: { name: "Monument", description: "" },
    museum: { name: "Museum", description: "" },
    observatory: { name: "Observatory", description: "" },
    ruins: { name: "Ruins", description: "" },
    cave: { name: "Cave", description: "" },
    natural_monument: { name: "Natural monument", description: "" },
    pond: { name: "Pond", description: "" },
    rock: { name: "Rock", description: "" },
    viewpoint: { name: "Viewpoint", description: "" },
    waterfall: { name: "Waterfall", description: "" },
    assistance: { name: "Assistance", description: "" },
    "assisted-repair": {
      name: "Assisted repair",
      description:
        "Here you can repair broken things together with professionals. You'll meet new people and usually you'll also get coffee and cake. Well-known events are repair cafés."
    },
    barbecue: { name: "Barbecue", description: "" },
    "baking-oven": { name: "Baking oven", description: "" },
    "bicycle-rental": { name: "Bicycle rental", description: "" },
    "bicycle-self-repair": { name: "Bicycle self repair", description: "" },
    "charging-station": { name: "Charging station", description: "" },
    clock: { name: "Clock", description: "" },
    piano: { name: "Piano", description: "" },
    advertising: {
      name: "Advertising space",
      description: "Here you can hang up posters to advertise your concern."
    },
    "community-centre": { name: "Community centre", description: "" },
    "community-garden": {
      name: "Community garden",
      description:
        "Here is a garden which you can cultivate together with others. You can plant, water and harvest vegetables, herbs, flowers and so on and watch them grow."
    },
    "diaper-changing-table": { name: "Diaper-changing table", description: "" },
    "drinking-water": { name: "Drinking water", description: "" },
    "food-sharing": {
      name: "Food sharing",
      description:
        "At this place you can bring and take food. The conditions for bring and take food are very different, you can inform yourself about it on the website of the operator or on site."
    },
    counselling: {
      name: "Counselling",
      description: ""
    },
    "goods-exchange": {
      name: "Goods exchange",
      description:
        "Here you will find a table, a shelf or a shop to bring and take items. Well-known facilities are give-away shops and giveboxes."
    },
    hackerspace: { name: "Hackerspace", description: "" },
    coworking: { name: "Coworking", description: "" },
    contribute: { name: "Contribute", description: "" },
    map: { name: "Map", description: "" },
    openstreetmap: { name: "OpenStreetMap", description: "" },
    internet: { name: "Internet", description: "" },
    "public-shower": { name: "Public shower", description: "" },
    pump: { name: "Pump", description: "" },
    toilet: { name: "Public toilet", description: "" },
    basketball: { name: "Basketball", description: "" },
    bath: { name: "Bath", description: "" },
    bikepark: { name: "Bikepark", description: "" },
    skatepark: { name: "Skatepark", description: "" },
    chess: { name: "Street chess", description: "" },
    climbing: { name: "Climbing", description: "" },
    fitness: { name: "Fitness", description: "" },
    "fitness-trail": { name: "Fitness trail", description: "" },
    sledding: { name: "Sledding", description: "" },
    running: { name: "Running", description: "" },
    soccer: { name: "Soccer", description: "" },
    "table-tennis": { name: "Table tennis", description: "" },
    "table-soccer": { name: "Table soccer", description: "" },
    volleyball: { name: "Volleyball", description: "" },
    animal: { name: "Animal enclosure", description: "" },
    observation: { name: "Animal observation", description: "" },
    maze: { name: "Maze", description: "" },
    webcam: { name: "Webcam", description: "" },
    fireplace: { name: "Fireplace", description: "" },
    garden: { name: "Garden", description: "" },
    "garden-with-name": { name: "Garden (With name)", description: "" },
    "nature-park": { name: "Nature park", description: "" },
    park: { name: "Park", description: "" },
    "park-with-name": { name: "Park (With name)", description: "" },
    "picnic-site": { name: "Picnic site", description: "" },
    square: { name: "Square", description: "" },
    "square-with-name": { name: "Square (With name)", description: "" },
    playground: { name: "Playground", description: "" },
    lounger: { name: "Lounger", description: "" },
    clothes: { name: "Clothes", description: "" },
    "clothes-give": { name: "Clothes (Give)", description: "" },
    "clothes-take": { name: "Clothes (Take)", description: "" },
    "clothes-repair": { name: "Clothes (Repair)", description: "" },
    "mobile-phones": { name: "Phone", description: "" },
    "mobile-phones-give": { name: "Phone (Give)", description: "" },
    "mobile-phones-take": { name: "Phone (Take)", description: "" },
    "mobile-phones-repair": { name: "Phone (Repair)", description: "" },
    computers: { name: "Computer", description: "" },
    "computers-give": { name: "Computer (Give)", description: "" },
    "computers-take": { name: "Computer (Take)", description: "" },
    "computers-repair": { name: "Computer (Repair)", description: "" },
    toys: { name: "Toy", description: "" },
    "toys-give": { name: "Toy (Give)", description: "" },
    "toys-take": { name: "Toy (Take)", description: "" },
    "toys-repair": { name: "Toy (Repair)", description: "" },
    electronics: { name: "Electronic", description: "" },
    "electronics-give": { name: "Electronic (Give)", description: "" },
    "electronics-take": { name: "Electronic (Take)", description: "" },
    "electronics-repair": { name: "Electronic (Repair)", description: "" },
    furniture: { name: "Furniture", description: "" },
    "furniture-give": { name: "Furniture (Give)", description: "" },
    "furniture-take": { name: "Furniture (Take)", description: "" },
    "furniture-repair": { name: "Furniture (Repair)", description: "" },
    bicycle: { name: "Bicycle", description: "" },
    "bicycle-give": { name: "Bicycle (Give)", description: "" },
    "bicycle-rent": { name: "Bicycle (Rent)", description: "" },
    "bicycle-repair": { name: "Bicycle (Repair)", description: "" },
    "bicycle-pump": { name: "Bicycle (Pump)", description: "" },
    "bicycle-park": { name: "Bicycle (Park)", description: "" },
    "bicycle-charge": { name: "Bicycle (Charge)", description: "" }
  },
  "piste:difficulty": {
    novice: "Novice",
    easy: "Easy",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
    freeride: "Freeride",
    extreme: "Extreme"
  },
  fitness_station: {
    balance_beam: "Exercise Balance Beam",
    box: "Exercise Box",
    horizontal_bar: "Exercise Horizontal Bar",
    horizontal_ladder: "Exercise Monkey Bars",
    hyperextension: "Hyperextension Station",
    parallel_bars: "Parallel Bars",
    "push-up": "Push-Up Station",
    rings: "Exercise Rings",
    sign: "Exercise Instruction Sign",
    "sit-up": "Sit-Up Station",
    stairs: "Exercise Stairs",
    log_hop: "Log hop",
    stepping_blocks: "Stepping blocks",
    bench: "Bench",
    body_raise: "Body raise",
    slalom: "Slalom",
    post: "Post"
  },
  historic: {
    aircraft: "Aircraft",
    aqueduct: "Aqueduct",
    archaeological_site: "Archaeological site",
    battlefield: "Battlefield",
    boundary_stone: "Boundary stone",
    building: "Building",
    cannon: "Cannon",
    castle: "Castle",
    castle_wall: "Castle wall",
    church: "Church",
    city_gate: "City gate",
    citywalls: "Citywalls",
    farm: "Farm",
    fort: "Fort",
    gallows: "Gallows",
    highwater_mark: "Highwater mark",
    locomotive: "Locomotive",
    manor: "Manor",
    memorial: "Memorial",
    mine: "Mine",
    mine_shaft: "Mine shaft",
    milestone: "Milestone",
    monastery: "Monastery",
    monument: "Monument",
    optical_telegraph: "Optical telegraph",
    pillory: "Pillory",
    railway_car: "Railway car",
    ruins: "Ruins",
    rune_stone: "Rune stone",
    ship: "Ship",
    tomb: "Tomb",
    tower: "Tower",
    tree_shrine: "Tree shrine",
    wayside_cross: "Wayside cross",
    wayside_shrine: "Wayside shrine",
    wreck: "Wreck"
  },
  site_type: {
    megalith: "Megalith",
    bigstone: "Bigstone",
    tumulus: "Tumulus",
    fortification: "Fortification",
    petroglyph: "Petroglyph",
    geoglyph: "Geoglyph",
    city: "Historic city",
    settlement: "Settlement",
    hut_circle: "Hut circle",
    roman_villa: "Roman villa",
    domus: "Domus",
    roman_circus: "Roman circus",
    necropolis: "Necropolis"
  },
  castle_type: {
    defensive: "Defensive castle",
    palace: "Palace",
    stately: "Stately home",
    manor: "Manor house",
    fortress: "Fortress",
    castrum: "Roman fort ",
    shiro: "Shiro",
    kremlin: "Kremlin",
    hillfort: "Hillfort"
  },
  "public_bookcase:type": {
    building: "Public bookcase",
    glass_cabinet: "Public bookcase",
    metal_cabinet: "Public bookcase",
    movable_cabinet: "Public bookcase",
    phone_box: "Public bookcase",
    reading_box: "Public bookcase",
    sculpture: "Public bookcase",
    shelf: "Public bookcase",
    shelter: "Public bookcase",
    wooden_cabinet: "Public bookcase"
  },
  "garden:type": {
    botanical: "Botanical garden",
    community: "Community garden",
    residential: "Residential garden",
    roof_garden: "Roof garden"
  },
  "garden:style": {
    english: "English landscape garden",
    french: "Garden à la française",
    chinese: "Chinese garden",
    japanese: "Japanese garden",
    zen: "Zen garden",
    monastery: "Medieval monastery garden",
    rosarium: "Rose garden",
    herb_garden: "Herb garden",
    medical_garden: "Physic garden",
    kitchen: "Kitchen garden",
    flower_garden: "Flower garden",
    cottage_garden: "Cottage garden",
    walled_garden: "Walled garden"
  }
};
