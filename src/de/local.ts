export const local = {
  code: "de",
  minZoomMessageNoLayer: "Keine Ebene zugewiesen",
  minZoomMessage: "Vergrössern, um Standorte zu laden",
  capacity: "Kapazität",
  playground: "Für Kinder",
  changing_table: "Hat einen Wickeltisch",
  bottle: "Nachfüllen ist möglich",
  pump: "Pumpe",
  tools: "Werkzeuge",
  chainTool: "Kettennietdrücker",
  internet: "Internet",
  water: "Trinkwasser",
  bicycle: "Velo",
  park: "Park",
  charging: "Aufladen",
  car: "Auto",
  mobile: "Smartphone",
  smallElectronics: "Kleine Elektrongeräte",
  electronics: "Elektrongeräte",
  furniture: "Möbel",
  computer: "Computer",
  toy: "Spielzeug",
  clothes: "Kleider",
  freeToGive: "Nur bringen",
  freeToTake: "Nur mitnehmen",
  freeToTakeOrGive: "Mitnehmen und bringen",
  borrow: "Nur ausleihen",
  indoor: "Drinnen",
  female: "Frau",
  male: "Mann",
  hoops: "Körbe",
  light: "Beleuchtet",
  covered: "Überdacht",
  wheelchairYes: "Rollstuhlgerecht",
  wheelchairLimited: "Limitiert Rollstuhlgerecht",
  wheelchairNo: "Nicht Rollstuhlgerecht",
  open: "Geöffnet",
  closed: "Geschlossen",
  maybeOpen: "Vielleicht geöffnet",
  maybeOpens: "Öffnet vielleicht",
  maybeCloses: "Schliesst vielleicht",
  opens: "Öffnet",
  closes: "Schliesst",
  thatDependsOn: "Das hängt ab von",
  conditionalFee: "Nur zu bestimmten Zeiten kostenlos.",
  route: "Routen",
  difficulty: "Schwierigkeitsgrad",
  floor: function(level: number) {
    return `(${level}. OG)`;
  },
  groundFloor: function(_level: number) {
    return `(EG)`;
  },
  basement: function(level: number) {
    return `(${Math.abs(level)}. UG)`;
  },
  group: {
    culture: "Kultur",
    education: "Bildung",
    natural: "Natur",
    object_of_utility: "Hilfsmittel",
    health: "Gesundheit",
    community: "Gemeinschaft",
    sport: "Sport",
    trip: "Ausflug",
    goods: "Gegenstände"
  },
  man_made: {
    water_well: "Brunnen",
    watermill: "Wassermühle",
    windmill: "Windmühle",
    mineshaft: "Schacht",
    drinking_fountain: "Trinkbrunnen"
  },
  type: {
    artwork: { name: "Strassenkunst", description: "" },
    fountain: { name: "Springbrunnen", description: "" },
    "tourist-attraction": { name: "Sehenswürdigkeit", description: "" },
    "archaeological-site": { name: "Archäologische Stätte", description: "" },
    trail: { name: "Lehrpfad", description: "" },
    "book-exchange": { name: "Bücher Tausch", description: "" },
    castle: { name: "Burg", description: "" },
    mill: { name: "Mühle", description: "" },
    history: { name: "Geschichte", description: "" },
    memorial: { name: "Gedenkstätte", description: "" },
    monument: { name: "Monument", description: "" },
    museum: { name: "Museum", description: "" },
    observatory: { name: "Observatorium", description: "" },
    ruins: { name: "Ruine", description: "" },
    cave: { name: "Höhle", description: "" },
    natural_monument: { name: "Naturdenkmal", description: "" },
    pond: { name: "Teich", description: "" },
    rock: { name: "Fels", description: "" },
    viewpoint: { name: "Aussichtpunkt", description: "" },
    waterfall: { name: "Wasserfall", description: "" },
    assistance: { name: "Unterstützung", description: "" },
    "assisted-repair": {
      name: "Begleitete Reparatur",
      description:
        "Hier kannst du defekte Gegenstände gemeinsam mit Profis reparieren. Du triffts neue Leute und meistens gibt es auch Kaffee und Kuchen. Bekannte Veranstaltungen sind Repair Cafés."
    },
    barbecue: { name: "Grill", description: "" },
    "baking-oven": { name: "Backofen", description: "" },
    "bicycle-rental": { name: "Velo Verleih", description: "" },
    "bicycle-self-repair": { name: "Velo Selbstreparatur", description: "" },
    "charging-station": { name: "Ladestation", description: "" },
    clock: { name: "Uhr", description: "" },
    piano: { name: "Klavier", description: "" },
    advertising: {
      name: "Werbefläche",
      description:
        "Hier kannst du Plakate anbringen um für deine Sache zu werben."
    },
    "community-centre": { name: "Gemeinschaftscenter", description: "" },
    "community-garden": {
      name: "Gemeinschaftsgarten",
      description:
        "Hier ist ein Garten, welcher du gemeinsam mit anderen bewirtschaften kannst. Du kannst Gemüse, Kräuter, Blumen etc. anpflanzen, giessen und ernten und beim Wachsen zuschauen."
    },
    "diaper-changing-table": { name: "Wickeltische", description: "" },
    "drinking-water": { name: "Trinkwasser", description: "" },
    "food-sharing": {
      name: "Lebensmittel teilen",
      description:
        "An diesem Ort kannst du Lebensmittel abgeben und holen. Die Bedienungen für das abgeben und holen sind sehr unterschiedlich, über die Webseite des Betreibers oder vor Ort kannst du dich darüber informieren."
    },
    counselling: {
      name: "Beratung",
      description: ""
    },
    "goods-exchange": {
      name: "Waren Tausch",
      description:
        "Hier findest du einen Tisch, ein Regal oder ein Laden um Gegenstände zu bringen und zu holen. Bekannte Einrichtungen sind Umsonstläden und Giveboxen."
    },
    hackerspace: { name: "Offene Werkstatt", description: "" },
    coworking: { name: "Zusammenarbeit", description: "" },
    contribute: { name: "Beitragen", description: "" },
    map: { name: "Karte", description: "" },
    openstreetmap: { name: "OpenStreetMap", description: "" },
    internet: { name: "Internet", description: "" },
    "public-shower": { name: "Öffentliche Dusche", description: "" },
    pump: { name: "Pumpe", description: "" },
    toilet: { name: "Öffentliche Toilette", description: "" },
    basketball: { name: "Basketball", description: "" },
    bath: { name: "Bad", description: "" },
    bikepark: { name: "Bikepark", description: "" },
    skatepark: { name: "Skatepark", description: "" },
    chess: { name: "Strassenschach", description: "" },
    climbing: { name: "Klettern", description: "" },
    fitness: { name: "Fitness", description: "" },
    "fitness-trail": { name: "Vitaparcours", description: "" },
    sledding: { name: "Schlitteln", description: "" },
    running: { name: "Laufsport", description: "" },
    soccer: { name: "Fussball", description: "" },
    "table-tennis": { name: "Tischtennis", description: "" },
    "table-soccer": { name: "Tischfussball", description: "" },
    volleyball: { name: "Volleyball", description: "" },
    animal: { name: "Tiere", description: "" },
    maze: { name: "Irrgarten", description: "" },
    webcam: { name: "Webcam", description: "" },
    fireplace: { name: "Feuerstelle", description: "" },
    garden: { name: "Garten", description: "" },
    "garden-with-name": { name: "Garten (Mit Name)", description: "" },
    "nature-park": { name: "Naturpark", description: "" },
    park: { name: "Park", description: "" },
    "park-with-name": { name: "Park (Mit Name)", description: "" },
    "picnic-site": { name: "Picknickplatz", description: "" },
    square: { name: "Platz", description: "" },
    "square-with-name": { name: "Platz (Mit Name)", description: "" },
    playground: { name: "Spielplatz", description: "" },
    lounger: { name: "Liege", description: "" },
    clothes: { name: "Kleider", description: "" },
    "clothes-give": { name: "Kleider (Geben)", description: "" },
    "clothes-take": { name: "Kleider (Bekommen)", description: "" },
    "clothes-repair": { name: "Kleider (Reparieren)", description: "" },
    "mobile-phones": { name: "Handy", description: "" },
    "mobile-phones-give": { name: "Handy (Geben)", description: "" },
    "mobile-phones-take": { name: "Handy (Bekommen)", description: "" },
    "mobile-phones-repair": { name: "Handy (Reparieren)", description: "" },
    computers: { name: "Computer", description: "" },
    "computers-give": { name: "Computer (Geben)", description: "" },
    "computers-take": { name: "Computer (Bekommen)", description: "" },
    "computers-repair": { name: "Computer (Reparieren)", description: "" },
    toys: { name: "Spielzeug", description: "" },
    "toys-give": { name: "Spielzeug (Geben)", description: "" },
    "toys-take": { name: "Spielzeug (Bekommen)", description: "" },
    "toys-repair": { name: "Spielzeug (Reparieren)", description: "" },
    electronics: { name: "Elektrogerät", description: "" },
    "electronics-give": { name: "Elektrogerät (Geben)", description: "" },
    "electronics-take": { name: "Elektrogerät (Bekommen)", description: "" },
    "electronics-repair": {
      name: "Elektrogerät (Reparieren)",
      description: ""
    },
    furniture: { name: "Möbel", description: "" },
    "furniture-give": { name: "Möbel (Geben)", description: "" },
    "furniture-take": { name: "Möbel (Bekommen)", description: "" },
    "furniture-repair": { name: "Möbel (Reparieren)", description: "" },
    bicycle: { name: "Velo", description: "" },
    "bicycle-give": { name: "Velo (Geben)", description: "" },
    "bicycle-rent": { name: "Velo (Ausleihen)", description: "" },
    "bicycle-repair": { name: "Velo (Reparieren)", description: "" },
    "bicycle-pump": { name: "Velo (Aufpumpen)", description: "" },
    "bicycle-park": { name: "Velo (Park)", description: "" },
    "bicycle-charge": { name: "Velo (Aufladen)", description: "" }
  },
  "piste:difficulty": {
    novice: "Sehr leicht",
    easy: "Leicht",
    intermediate: "Mittel",
    advanced: "Schwer",
    expert: "Sehr schwer",
    freeride: "Freeride",
    extreme: "Extrem schwer"
  },
  fitness_station: {
    balance_beam: "Schwebebalken",
    box: "Sprungbox",
    horizontal_bar: "Reck",
    horizontal_ladder: "Hangelleiter",
    hyperextension: "Hyperextension-Bank",
    parallel_bars: "Parallelbarren",
    "push-up": "Liegestützstation",
    rings: "Ringe",
    sign: "Übungsanleitungstafel",
    "sit-up": "Sit-Up-Station",
    stairs: "Übungsstiege",
    log_hop: "Hüpfbalken",
    stepping_blocks: "Stepper Blöcke",
    bench: "Bank",
    body_raise: "Körper heben",
    slalom: "Slalom",
    post: "Pfosten"
  },
  historic: {
    aircraft: "Flugzeug",
    aqueduct: "Aquädukt",
    archaeological_site: "Ausgrabungsstätte",
    battlefield: "Schlachtfeld",
    boundary_stone: "Grenzstein",
    building: "Gebäude",
    cannon: "Kanone",
    castle: "Burg",
    castle_wall: "Stadtmauer",
    church: "Kirche",
    city_gate: "Stadttor",
    citywalls: "Stadtmauer",
    farm: "Farm",
    fort: "Fort",
    gallows: "Galgen",
    highwater_mark: "Hochwassermarke",
    locomotive: "Lokomotive",
    manor: "Herrenhaus",
    memorial: "Denkmal",
    mine: "Mine",
    mine_shaft: "Schacht",
    milestone: "Meilenstein",
    monastery: "Kloster",
    monument: "Monument",
    optical_telegraph: "Optischer Telegraf",
    pillory: "Pranger",
    railway_car: "Eisenbahnwagen",
    ruins: "Ruine",
    rune_stone: "Runenstein",
    ship: "Schiff",
    tomb: "Grab",
    tower: "Turm",
    tree_shrine: "Baum",
    wayside_cross: "Wegkreuz",
    wayside_shrine: "Schrein",
    wreck: "Wrack"
  },
  site_type: {
    megalith: "Steinsetzung",
    bigstone: "Bearbeiteter Grossstein",
    tumulus: "Hügelgrab",
    fortification: "Befestigungsanlage",
    petroglyph: "Felsbild",
    geoglyph: "Erdzeichnung",
    city: "Historische Stadt",
    settlement: "Siedlung",
    hut_circle: "Hüttenkreis",
    roman_villa: "Römische Villa",
    domus: "Domus",
    roman_circus: "Zirkus (Antikes Rom)",
    necropolis: "Totenstadt, Nekropolis"
  },
  castle_type: {
    defensive: "Burg",
    palace: "Palast",
    stately: "Schloss ",
    manor: "Herrenhaus",
    fortress: "Festung",
    castrum: "Römische Militärlager",
    shiro: "Shiro",
    kremlin: "Kreml",
    hillfort: "Hügelfort"
  },
  "public_bookcase:type": {
    building: "Öffentliche Tauschbibliothek",
    glass_cabinet: "Öffentlicher Bücherschrank",
    metal_cabinet: "Öffentlicher Bücherschrank",
    movable_cabinet: "Öffentlicher Bücherschrank",
    phone_box: "Öffentliche Buchkabine",
    reading_box: "Öffentliche Bücherbox",
    sculpture: "Öffentlicher Bücherschrank",
    shelf: "Öffentliches Bücherregal",
    shelter: "Öffentliches Bücherregal",
    wooden_cabinet: "Öffentlicher Bücherschrank"
  },
  "garden:type": {
    botanical: "Botanischer Garten",
    community: "Gemeinschaftsgarten",
    residential: "Hausgarten",
    roof_garden: "Dachgarten"
  },
  "garden:style": {
    english: "Englischer Garten",
    french: "Französischer Garten",
    chinese: "Chinesischer Garten",
    japanese: "Japanischer Garten",
    zen: "Zen Garten",
    monastery: "Klostergarten",
    rosarium: "Rosengarten",
    herb_garden: "Kräutergarten",
    medical_garden: "Apothekergarten",
    kitchen: "Nutzgarten",
    flower_garden: "Ziergarten",
    cottage_garden: "Bauerngarten"
  }
};
