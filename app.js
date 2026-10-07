function ChevronDown({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
}
function Mic({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  }));
}
function Camera({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  }));
}
function QrCode({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "14",
    x2: "14",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "20",
    x2: "14",
    y2: "20.01"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "14",
    x2: "20",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "17",
    x2: "20",
    y2: "17"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17",
    y1: "20",
    x2: "20",
    y2: "20"
  }));
}
function X({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
}
function Minus({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
}
function Plus({
  size = 16,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
}
const {
  useState,
  useEffect,
  useRef
} = React;
// ---- Design tokens ----
// Packhouse logbook feel: cold-store steel base, kiwi-flesh green accent,
// hairline dividers instead of card shadows, stenciled status tags.
// Higher-contrast version (Oct 2026): darker background, brighter borders and
// muted text so boxes and labels stay readable in low light. Borders are
// 3:1 or better against the cards; muted text is about 8.8:1.
const colors = {
  bg: "#121413",
  surface: "#222622",
  surfaceRaised: "#2D322C",
  border: "#6B7366",
  borderLight: "#858D7F",
  text: "#F7F8F3",
  textMuted: "#C3C6BA",
  accent: "#A3C449",
  accentDim: "#63792E",
  gold: "#DE9F4C",
  rust: "#D6643F",
  green: "#8DB37F",
  greenDim: "#46543F"
};
const FIELD_BG = "#0C0E0D";
const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;800&family=Inter:wght@400;500;600&display=swap');
input::placeholder, textarea::placeholder { color: #9EA294; opacity: 1; }
@keyframes slideInRight {
  from { transform: translateX(28px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideInLeft {
  from { transform: translateX(-28px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes slideInDown {
  from { transform: translateY(-22px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes flashGold {
  0%, 100% { color: #DE9F4C; border-color: #DE9F4C; }
  50% { color: #C3C6BA; border-color: #6B7366; }
}
@keyframes flashRed {
  0%, 100% { color: #BC5238; border-color: #BC5238; }
  50% { color: #C3C6BA; border-color: #6B7366; }
}
@keyframes savedPop {
  0% { transform: scale(0.4); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
html, body { overflow-anchor: none; }`;
const STORAGE_KEY = "wrenchbook:entries";
const ID_KEY = "wrenchbook:nextId";
// A short random tag generated once per phone, the first time it's used.
// Entry ids are built as `${deviceId}-${nextId}`, because `nextId` alone is
// just a per-phone counter that both restart at the same number — without
// this tag, two phones will eventually create entries with the identical
// id, and the shared sheet (which treats matching ids as "update this row")
// silently overwrites one entry with the other instead of keeping both.
const DEVICE_ID_KEY = "wrenchbook:deviceId";
// A separate, second copy of each entry lives here purely for Team
// Activity/syncing. The Log tab (STORAGE_KEY above) is a personal record
// that never talks to the sheet at all — saving an entry writes one copy
// to each, and only this one ever gets pushed/pulled.
const TEAM_ENTRIES_KEY = "wrenchbook:teamEntries";
// How many Team Activity entries had been seen the last time that tab was
// open, so we can badge the tab with a "new since last seen" count.
const TEAM_LAST_SEEN_KEY = "wrenchbook:teamLastSeenCount";
const LIBRARY_KEY = "wrenchbook:descriptionLibrary";
const LAST_USED_KEY = "wrenchbook:lastUsed";
const PART_STOCK_KEY = "wrenchbook:part:nmrv063-25:stock";
const CHAINS_KEY = "wrenchbook:chains";
// Lube intervals are tracked in estimated *running hours*, not calendar
// days — a straight day-count badly over/under-estimates wear given how
// much shed usage swings between the kiwifruit season, the avocado season,
// and the quiet months. See seasonHoursForDate/hoursRunSince below.
// Lube interval is entered as a number + a unit, then converted to hours
// for storage/tracking — "2 weeks" is just a friendlier way to type 336.
const LUBE_INTERVAL_UNITS = [{
  key: "hrs",
  label: "Hrs",
  toHours: 1
}, {
  key: "days",
  label: "Days",
  toHours: 24
}, {
  key: "weeks",
  label: "Weeks",
  toHours: 24 * 7
}];
const SEASON_PROFILES_KEY = "wrenchbook:seasonProfiles";
// Parts Order tab: the sender (reply-to) and receiver addresses. Set from the
// gear/settings panel and shared across phones through the same Lists sync as
// season settings, so it only needs setting once.
const MAX_ORDER_PHOTOS = 6;
const emptyPartsForm = {
  item: "",
  steelType: "",
  qty: "",
  supplier: "",
  urgent: "No",
  codeDept: "",
  name: ""
};
// The three crew-editable dropdowns on the Parts order form. Each works like
// Area: a starting list plus whatever the crew adds/removes, synced through
// the Lists tab so every phone sees the same options.
const ORDER_LISTS_KEY = "wrenchbook:orderLists";
const ORDER_LIST_DEFS = {
  steelTypes: {
    label: "steel type",
    start: ["Stainless", "Mild steel", "Galvanised", "N/A"]
  },
  suppliers: {
    label: "supplier",
    start: []
  },
  codeDepts: {
    label: "code department",
    start: []
  }
};
const emptyOrderLists = {
  steelTypes: {
    custom: [],
    removed: []
  },
  suppliers: {
    custom: [],
    removed: []
  },
  codeDepts: {
    custom: [],
    removed: []
  }
};
const todayNZ = () => new Date().toLocaleDateString("en-NZ", {
  day: "numeric",
  month: "short",
  year: "numeric"
});

// The Excel log has always used the Forms wording ("10 minutes", "1 hour"),
// so convert the app's "10 min" / "1 hour" / "1.5 hours" to match.
function excelTimeOnJob(value) {
  const v = String(value || "").trim();
  const m = v.match(/^([\d.]+)\s*(min|mins|minutes?|h|hrs?|hours?)$/i);
  if (!m) return v;
  const n = parseFloat(m[1]);
  const mins = /^m/i.test(m[2]) ? n : n * 60;
  if (!(mins > 0)) return v;
  if (mins % 60 === 0) return mins === 60 ? "1 hour" : `${mins / 60} hours`;
  return `${Math.round(mins)} minutes`;
}

// ---- Duplicate-order check ----
// Compares a new order's description against open orders on the tracker.
// Part numbers (anything with a digit, e.g. "6205-2RS") count most: a shared
// part number is a match on its own. Otherwise it needs at least two shared
// meaningful words (or the one word, for a one-word description) making up
// half the shorter description. It's a nudge, not
// a block, so it errs slightly towards flagging.
const DUP_STOPWORDS = new Set("a an and the for of to on in at with x qty pcs pc off new need needed needs please replace replacement spare spares one two three four five six".split(" "));
function orderTokens(text) {
  const raw = String(text || "").toLowerCase().match(/[a-z0-9][a-z0-9\-\/\.]*/g) || [];
  const parts = new Set();
  const words = new Set();
  for (const t of raw) {
    if (/\d/.test(t)) {
      const joined = t.replace(/[\-\/\.]/g, "");
      if (joined.length >= 3) parts.add(joined);
      for (const piece of t.split(/[\-\/\.]/)) if (piece.length >= 3 && /\d/.test(piece)) parts.add(piece);
    } else {
      for (const piece of t.split(/[\-\/\.]/)) {
        const w = piece.replace(/(es|s)$/, "");
        if (w.length >= 3 && !DUP_STOPWORDS.has(piece)) words.add(w);
      }
    }
  }
  return {
    parts,
    words
  };
}
function findDuplicateOrders(item, openOrders) {
  const a = orderTokens(item);
  const hits = [];
  for (const o of openOrders || []) {
    const b = orderTokens(o.item);
    const sharedPart = [...a.parts].some(p => b.parts.has(p));
    const sharedWords = [...a.words].filter(w => b.words.has(w)).length;
    const smaller = Math.min(a.words.size, b.words.size) || 1;
    if (sharedPart || sharedWords >= Math.min(2, smaller) && sharedWords / smaller >= 0.5) hits.push(o);
  }
  return hits.slice(0, 3);
}
const ORDER_STATUS_STYLE = {
  Ordered: {
    label: "Ordered",
    color: "#7FA7D9"
  },
  Arrived: {
    label: "Arrived",
    color: "#8FAE3E"
  },
  "Needs follow-up": {
    label: "Follow-up",
    color: "#DE9F4C"
  },
  "Follow-up Engineer": {
    label: "Follow-up (us)",
    color: "#DE9F4C"
  },
  "Follow-up Supplier": {
    label: "Follow-up (supplier)",
    color: "#9A7BC4"
  },
  "": {
    label: "Waiting",
    color: "#C3C6BA"
  }
};
function orderStatusStyle(status) {
  return ORDER_STATUS_STYLE[status] || {
    label: status || "Waiting",
    color: "#C3C6BA"
  };
}
// Excel sends dates as a serial day number (or ISO text, depending on the
// flow's DateTime Format setting). Turn either into an ISO date.
function excelDateToIso(v) {
  if (v === null || v === undefined || v === "") return "";
  const n = Number(v);
  if (!isNaN(n) && n > 20000 && n < 80000) {
    const ms = Math.round((n - 25569) * 86400000);
    const d = new Date(ms);
    // Serial dates have no time zone: keep the calendar day as written.
    return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 12).toISOString();
  }
  const d = new Date(v);
  return isNaN(d) ? "" : d.toISOString();
}
// Team Activity keeps the last 90 days, newest 600 entries at most.
const TEAM_KEEP_DAYS = 90;
const TEAM_KEEP_MAX = 600;
// Reads a Time Submitted cell from the R&M log in any of the formats it has
// held: an Excel serial number, ISO text, "Fri, 12 Jun 2026 08:18:28 GMT",
// or NZ text like "07/10/2026 02:12 PM" / "06/10/2026 10:43".
function parseLogTime(v) {
  if (v === null || v === undefined || v === "") return "";
  const n = Number(v);
  if (!isNaN(n) && n > 20000 && n < 80000) {
    const d = new Date(Math.round((n - 25569) * 864e5));
    return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()).toISOString();
  }
  const sv = String(v).trim();
  const m = sv.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ T]+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?)?$/);
  if (m) {
    let h = Number(m[4] || 0);
    if (m[7]) {
      const pm = /p/i.test(m[7]);
      if (h === 12) h = pm ? 12 : 0;else if (pm) h += 12;
    }
    const d = new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]), h, Number(m[5] || 0), Number(m[6] || 0));
    return isNaN(d) ? "" : d.toISOString();
  }
  const d = new Date(sv);
  return isNaN(d) ? "" : d.toISOString();
}
// One row from a shed tab of the R&M log, as the flow returns it, into the
// shape Team Activity uses.
function logRowToEntry(r) {
  const pick = (...names) => {
    for (const n of names) {
      const val = r && r[n];
      if (val !== undefined && val !== null && String(val).trim() !== "") return String(val).trim();
    }
    return "";
  };
  return {
    id: pick("ID"),
    name: pick("Name"),
    contractor: pick("Contractor"),
    timeSubmitted: parseLogTime(pick("Time Submitted")),
    timeOnJob: pick("Time on job", "Time On Job"),
    shed: pick("Shed"),
    callStatus: pick("Call Status"),
    repairsReq: pick("Repairs Req'd", "Repairs Reqd"),
    area: pick("Area"),
    subCategory: pick("Sub Category"),
    description: pick("Description"),
    mechElectrical: pick("Mech-Electrical"),
    tools: pick("Tools", "Tool"),
    clean: pick("Clean"),
    verified: /^(true|yes)$/i.test(pick("Verified"))
  };
}
// The date window Team Activity syncs and shows: "week" = today and the
// six days before it, "custom" = the picked days (either end optional),
// "all" = the last TEAM_KEEP_DAYS days.
function dayStart(ymd) {
  const m = String(ymd || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : null;
}
function teamWindow(range, customStart, customEnd) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const endOfToday = today.getTime() + 864e5 - 1;
  const oldest = today.getTime() - (TEAM_KEEP_DAYS - 1) * 864e5;
  if (range === "today") return {
    from: today.getTime(),
    to: endOfToday
  };
  if (range === "2days") return {
    from: today.getTime() - 864e5,
    to: endOfToday
  };
  if (range === "week") return {
    from: today.getTime() - 6 * 864e5,
    to: endOfToday
  };
  if (range === "custom") {
    const s = dayStart(customStart);
    const e = dayStart(customEnd);
    let from = s ? s.getTime() : oldest;
    let to = e ? e.getTime() + 864e5 - 1 : endOfToday;
    if (from > to) [from, to] = [to - 864e5 + 1, from + 864e5 - 1];
    return {
      from,
      to
    };
  }
  return {
    from: oldest,
    to: endOfToday
  };
}
function shortDate(iso) {
  const d = new Date(iso);
  return isNaN(d) ? "" : d.toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "short"
  });
}
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Recurring (year-ignored) date windows used to estimate how many hours a
// shed ran on any given day. Kiwifruit season applies to every shed;
// avocado season only applies to whichever sheds are picked in Season
// settings. Editable in-app — these are just sensible starting defaults.
const DEFAULT_SEASON_PROFILES = {
  kiwifruit: {
    startMonth: 3,
    startDay: 1,
    endMonth: 6,
    endDay: 15,
    hoursPerDay: 21
  },
  avocado: {
    startMonth: 8,
    startDay: 1,
    endMonth: 10,
    endDay: 1,
    hoursPerDay: 8,
    sheds: []
  }
};
const DEMO_PART_QR_VALUE = "shedlog:part:nmrv063-25";
const CUSTOM_AREAS_KEY = "wrenchbook:customAreas";
const CUSTOM_SUBCATS_KEY = "wrenchbook:customSubCategories";
const CUSTOM_NAMES_KEY = "wrenchbook:customNames";
const REMOVED_NAMES_KEY = "wrenchbook:removedNames";
const CUSTOM_CONTRACTORS_KEY = "wrenchbook:customContractors";
const REMOVED_CONTRACTORS_KEY = "wrenchbook:removedContractors";
// Sharing is off until the flow links are pasted in the gear panel. Only
// the fields you can see on the forms are ever sent — no device info, no
// location, no analytics. (The Google Sheets backend was removed Oct 2026.)
// The Power Automate flow that adds each entry to the official R&M Excel log.
// Kept on this phone only: it's never synced, and never baked into the code,
// because anyone holding the link could add rows to the company spreadsheet.
const FLOW_URL_KEY = "wrenchbook:flowUrl";
// The Power Automate flow for parts orders: adds the order to the Parts Orders
// Excel sheet, emails it with photos, and returns the open orders. Phone-only,
// like the log flow link. It also carries team activity, lists and chains.
const PARTS_FLOW_URL_KEY = "wrenchbook:partsFlowUrl";
// The same flow also keeps the chain lube schedule (Chain Lube Excel sheet).
// Remembers which flow link this phone has already pushed all its chains to,
// so the first sync after connecting copies the whole schedule across.
const CHAINS_FLOW_PUSHED_KEY = "wrenchbook:chainsFlowPushed";
// Entries waiting to reach the Excel log (e.g. saved with no signal). A
// separate queue, so the Log tab itself still never touches the network.
const EXCEL_QUEUE_KEY = "wrenchbook:excelQueue";
// Remembers which flow link this phone has already copied its dropdown lists
// to, so the first sync after connecting fills the shared Lists table.
const LISTS_FLOW_PUSHED_KEY = "wrenchbook:listsFlowPushed";
const REMOVED_AREAS_KEY = "wrenchbook:removedAreas";
const REMOVED_SUBCATS_KEY = "wrenchbook:removedSubCategories";

// ---- Placeholder option lists ----
// Guessed from the sheet screenshot — swap these for your real lists whenever you're ready.
const NAMES = ["Emil Vergara", "Jeremy Dale", "Justin Scott", "Leon Lyttle", "Mike Hack-Rangi", "Shane Laing"];
const CONTRACTORS = ["None (in-house)"];
const SHEDS = ["Shed 0", "Shed 1", "Shed 2", "Shed 3", "Shed 4"];
const CALL_STATUSES = ["Preventative R&M", "Startup Procedure", "Reactive R&M", "Temporary Repair"];
const AREAS = ["Bin Handling", "Infeed", "Grading", "Class 1 Sizer", "Automation", "Bridge", "Class 2 Sizer", "QC", "DOCO", "EAN", "Strapping", "Pallet Trolley", "Bagging Machine", "Other"];
// Sub categories per area — filled in as photos of the real lists come through.
// Areas not yet done stay empty; use "+ Add sub category" in the app meanwhile.
const SUB_CATEGORIES_BY_AREA = {
  "Bin Handling": ["Infeed Rapid Door", "1st Stage Infeed Rollers", "2nd Stage Infeed Rollers", "De-Stacker", "First Weigh Section", "Tipper", "Tipper Rapid Door", "Bin Transfer", "Sanitizer", "Re-Stacker", "Outfeed", "Hydraulic Power Pack", "Security Fencing", "Electrical", "Class 3", "Undersize", "Rejects"],
  Infeed: ["Bin Blower", "Tipper Belt", "Soft Sorting", "Bottom Belt", "Riser", "Dust Extractor", "Brush Unit", "Dust / Leaf Belts", "Weigh Scales", "Electrical"],
  Grading: ["A-Belt Conveyors", "Grading Tables", "Flatometers", "B-Belt Conveyors", "Pooling Table", "Class 2 Conveyors", "Class 3 Conveyors"],
  "Class 1 Sizer": ["Compac System", "Efficient Packing Screens", "Main Drive", "All Tip", "Recycle Conveyor Belts", "Packer Return Belt", "Front Of Sizer", "Load Belts", "Spill Belts", "1st Set Rotation Belts", "2nd Set Rotation Belts", "Recycle Conveyors", "Undersize Conveyor", "Weigh Section", "Labeller", "Cross Belts", "Mid Section", "Maintenance Trolley", "Packing", "Trayline", "Safety", "EAN Printers", "Fans", "HVAC Tent", "Electrical"],
  Automation: [],
  Bridge: ["Bridge"],
  "Class 2 Sizer": ["Class 3", "Singulator", "Front Of Sizer", "Paddle Wheel", "Weigh Section", "TASC", "Labeller", "Mid Section", "Tray Line", "Packing Arms", "All Tip / Undersize Recycle Belt", "All Tip / Undersize", "Main Drive", "Safety", "EAN Printers", "Fans", "Electrical"],
  QC: ["QC"],
  DOCO: ["DOCO"],
  EAN: ["EAN", "Printers"],
  Strapping: ["Strapping Machine", "Manual Strapping"],
  "Pallet Trolley": ["Trollies"],
  "Bagging Machine": ["Bagging Machine"],
  Other: ["Other"]
};
const MECH_ELECTRICAL = ["Mechanical", "Electrical", "Both"];
const DURATIONS = ["10 min", "15 min", "20 min", "30 min", "45 min", "1 hour"];
function startupGreeting() {
  return new Date().getHours() < 12 ? "Morning startup complete" : "Night startup complete";
}
const emptyForm = {
  name: NAMES[0],
  contractor: CONTRACTORS[0],
  shed: "",
  callStatus: "",
  repairsReq: null,
  area: "",
  description: "",
  subCategory: "",
  mechElectrical: "",
  tools: null,
  clean: null,
  timeOnJob: "",
  timeOnJobCustom: "",
  timeOnJobCustomUnit: "min"
};
function Select({
  value,
  onChange,
  options,
  placeholder,
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative",
    style: {
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange(e.target.value),
    disabled: disabled,
    style: {
      backgroundColor: FIELD_BG,
      borderColor: colors.border,
      color: value ? colors.text : colors.textMuted
    },
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none appearance-none pr-9"
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      backgroundColor: FIELD_BG,
      color: colors.text
    }
  }, o))), /*#__PURE__*/React.createElement(ChevronDown, {
    size: 16,
    style: {
      color: colors.textMuted
    },
    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
  }));
}
function YesNo({
  value,
  onChange,
  disabled,
  yesColor
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2",
    style: {
      opacity: disabled ? 0.45 : 1
    }
  }, ["Yes", "No"].map(opt => {
    const active = value === opt;
    const activeColor = opt === "Yes" && yesColor ? yesColor : colors.accent;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: opt,
      disabled: disabled,
      onClick: () => onChange(opt),
      style: {
        backgroundColor: active ? activeColor : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? activeColor : colors.border,
        cursor: disabled ? "default" : "pointer"
      },
      className: "flex-1 border rounded py-2 text-sm font-medium transition-colors"
    }, opt);
  }));
}
function StatusTag({
  verified
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: verified ? colors.green : colors.textMuted,
      borderColor: verified ? colors.greenDim : colors.border,
      letterSpacing: "0.06em"
    },
    className: "text-[11px] font-semibold uppercase border rounded px-2 py-0.5 whitespace-nowrap"
  }, verified ? "Approved" : "Awaiting approval");
}
function Field({
  label,
  children,
  hint,
  error
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "block mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: error ? colors.rust : colors.textMuted
    },
    className: "block text-sm font-medium mb-1.5"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: error ? {
      outline: `1px solid ${colors.rust}`,
      borderRadius: "4px"
    } : undefined
  }, children), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      color: error ? colors.rust : colors.textMuted
    },
    className: "block text-xs mt-1"
  }, error ? "Required" : hint));
}
function RemoveList({
  items,
  onRemove,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.borderLight
    },
    className: "border rounded mt-2 p-2"
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs px-1 py-1"
  }, "Nothing left to remove.") : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1"
  }, items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    className: "flex items-center justify-between px-1 py-1"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.text
    },
    className: "text-sm"
  }, item), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onRemove(item),
    style: {
      color: colors.rust
    },
    className: "text-xs font-medium"
  }, "Remove")))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDone,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "w-full rounded py-1.5 text-xs font-semibold mt-2"
  }, "Done"));
}
function OpenOrderRow({
  order
}) {
  const st = orderStatusStyle(order.status);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border-t first:border-t-0 py-2.5 flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm leading-snug break-words"
  }, order.urgent === "Y" && /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.rust
    },
    className: "font-bold text-[11px] tracking-wide mr-1.5"
  }, "URGENT"), String(order.item || "").split("\n")[0], order.qty ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, " × ", order.qty) : null), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-0.5"
  }, order.name, order.date ? ` · ${shortDate(order.date)}` : "")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: st.color,
      borderColor: st.color
    },
    className: "shrink-0 text-[11px] font-semibold uppercase tracking-wide border rounded px-2 py-0.5 whitespace-nowrap"
  }, st.label));
}

// A dropdown the crew can add to and remove from, same pattern as Area.
function EditableSelect({
  value,
  onChange,
  items,
  onAdd,
  onRemove,
  noun,
  placeholder
}) {
  const [adding, setAdding] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [text, setText] = useState("");
  const addOpt = `+ Add ${noun}`;
  const removeOpt = `− Remove ${noun}`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    value: items.includes(value) ? value : "",
    onChange: v => {
      if (v === addOpt) return setAdding(true);
      if (v === removeOpt) return setRemoving(true);
      onChange(v);
    },
    options: [...items, addOpt, ...(items.length ? [removeOpt] : [])],
    placeholder: placeholder || (items.length ? `Select ${noun}` : `Add a ${noun} first`)
  }), removing && /*#__PURE__*/React.createElement(RemoveList, {
    items: items,
    onRemove: onRemove,
    onDone: () => setRemoving(false)
  }), adding && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    style: {
      backgroundColor: FIELD_BG,
      borderColor: colors.border,
      color: colors.text
    },
    className: "flex-1 min-w-[140px] border rounded px-3 py-2 text-sm outline-none focus:border-current",
    placeholder: `New ${noun}`,
    value: text,
    onChange: e => setText(e.target.value),
    autoCapitalize: "words"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      const t = text.trim();
      if (t) {
        onAdd(t);
        onChange(t);
      }
      setText("");
      setAdding(false);
    },
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "rounded px-3 text-sm font-semibold"
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setText("");
      setAdding(false);
    },
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "rounded px-3 border text-sm"
  }, "Cancel")));
}
const inputBase = {
  backgroundColor: FIELD_BG,
  borderColor: colors.border,
  color: colors.text
};
// Date fields: dark picker, a real tap target even when empty (iOS
// collapses an empty date input), and open the calendar on any tap.
const dateInputStyle = {
  ...inputBase,
  colorScheme: "dark",
  minHeight: 44,
  WebkitAppearance: "none",
  appearance: "none",
  textAlign: "left"
};
function openDatePicker(e) {
  try {
    if (e.currentTarget.showPicker) e.currentTarget.showPicker();
  } catch (err) {
    // some browsers only allow it from certain taps — the native tap still works
  }
}
function MaintenanceLog() {
  const [tab, setTab] = useState("new");
  const [slideDir, setSlideDir] = useState("right");
  const [formResetKey, setFormResetKey] = useState(0);

  // ---- Sync (Power Automate) ----
  // Deliberately simple and manual: no service worker, no background
  // fetch/notification permissions, no polling interval. A sync only ever
  // fires while this page is open and running — on load, right after a
  // save, when you switch to Log/Team Activity, or when you tap "Sync now".
  // Close the app and it goes completely silent; nothing runs in the
  // background and nothing is sent anywhere until a flow link is set below.
  const [showSyncSettings, setShowSyncSettings] = useState(false);
  const [flowUrl, setFlowUrl] = useState("");
  const [flowUrlInput, setFlowUrlInput] = useState("");
  const [partsFlowUrl, setPartsFlowUrl] = useState("");
  const [partsFlowUrlInput, setPartsFlowUrlInput] = useState("");
  // Everything shared (team activity, lists, chains, parts) now goes through
  // the parts & chains flow. Google Sheets has been removed.
  const syncUrl = partsFlowUrl;
  const listsBusyRef = useRef(false);
  const teamBusyRef = useRef(false);
  const teamAgainRef = useRef(false);
  const teamWindowRef = useRef(null);
  const [excelQueueCount, setExcelQueueCount] = useState(0);
  const excelSendingRef = useRef(false);
  const [partsForm, setPartsForm] = useState(emptyPartsForm);
  const [partsPhotos, setPartsPhotos] = useState([]);
  const [partsAttempted, setPartsAttempted] = useState(false);
  const [partsSending, setPartsSending] = useState(false);
  const [partsAddingPhotos, setPartsAddingPhotos] = useState(false);
  const partsFileRef = useRef(null);
  const [orderLists, setOrderLists] = useState(emptyOrderLists);
  const [openOrders, setOpenOrders] = useState([]);
  const [openOrdersState, setOpenOrdersState] = useState("idle"); // idle | loading | ok | error | unsupported
  const [showAllOpenOrders, setShowAllOpenOrders] = useState(false);
  const [dupMatches, setDupMatches] = useState(null);
  const [syncStatus, setSyncStatus] = useState("unconfigured"); // unconfigured | syncing | synced | offline | error
  const [lastSyncedAt, setLastSyncedAt] = useState(null);
  const syncingRef = useRef(false);
  const chainsFlowBusyRef = useRef(false);
  const TAB_ORDER = ["new", "log", "team", "chains", "parts"];
  const touchStart = useRef(null);
  const contentRef = useRef(null);

  // With five tabs the bar scrolls sideways on a phone — keep the selected
  // one in view (e.g. after swiping to Parts order).
  useEffect(() => {
    const btn = document.querySelector(`[data-tab="${tab}"]`);
    if (btn && btn.scrollIntoView) btn.scrollIntoView({
      inline: "center",
      block: "nearest"
    });
  }, [tab]);
  function goToTab(next) {
    const curIndex = TAB_ORDER.indexOf(tab);
    const nextIndex = TAB_ORDER.indexOf(next);
    if (nextIndex === curIndex) return;
    setSlideDir(nextIndex > curIndex ? "right" : "left");
    setTab(next);
    // Pick up anything the rest of the crew has logged while we're here —
    // still only while the app is open, never in the background.
    if (next === "log" || next === "team" || next === "chains") syncNow(undefined, {
      team: next === "team"
    });
    if (next === "parts") fetchOpenOrders();
  }
  const [entries, setEntries] = useState([]);
  const [teamEntries, setTeamEntries] = useState([]);
  const [teamLastSeenCount, setTeamLastSeenCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [toast, setToast] = useState(null);
  const [savedOverlay, setSavedOverlay] = useState(false);
  const [savedOverlayText, setSavedOverlayText] = useState("Entry saved");
  const [savedOverlaySubtext, setSavedOverlaySubtext] = useState("");
  const [nextId, setNextId] = useState(380);
  const [deviceId, setDeviceId] = useState("");
  const [library, setLibrary] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [listening, setListening] = useState(false);
  const [dictationSupported, setDictationSupported] = useState(false);
  const recognitionRef = useRef(null);
  const [showScanner, setShowScanner] = useState(false);
  const [showPartPage, setShowPartPage] = useState(false);
  const [showTestQR, setShowTestQR] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [partStock, setPartStock] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const scanIntervalRef = useRef(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [customAreas, setCustomAreas] = useState([]);
  const [customSubCats, setCustomSubCats] = useState({});
  const [addingArea, setAddingArea] = useState(false);
  const [newAreaText, setNewAreaText] = useState("");
  const [addingSubCat, setAddingSubCat] = useState(false);
  const [newSubCatText, setNewSubCatText] = useState("");
  const [customNames, setCustomNames] = useState([]);
  const [addingName, setAddingName] = useState(false);
  const [newNameText, setNewNameText] = useState("");
  const [customContractors, setCustomContractors] = useState([]);
  const [addingContractor, setAddingContractor] = useState(false);
  const [newContractorText, setNewContractorText] = useState("");
  const [removedContractors, setRemovedContractors] = useState([]);
  const [managingContractors, setManagingContractors] = useState(false);
  const [removedNames, setRemovedNames] = useState([]);
  const [removedAreas, setRemovedAreas] = useState([]);
  const [removedSubCats, setRemovedSubCats] = useState({});
  const [managingNames, setManagingNames] = useState(false);
  const [managingAreas, setManagingAreas] = useState(false);
  const [managingSubCats, setManagingSubCats] = useState(false);
  const [logShedFilter, setLogShedFilter] = useState("");
  const [teamShedFilter, setTeamShedFilter] = useState("");
  const [teamRangeFilter, setTeamRangeFilter] = useState("2days");
  const [teamCustomStart, setTeamCustomStart] = useState("");
  const [teamCustomEnd, setTeamCustomEnd] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [chains, setChains] = useState([]);
  const [chainShedFilter, setChainShedFilter] = useState("");
  const [addingChain, setAddingChain] = useState(false);
  const [newChainName, setNewChainName] = useState("");
  const [newChainShed, setNewChainShed] = useState("");
  const [newChainArea, setNewChainArea] = useState("");
  const [newChainIntervalValue, setNewChainIntervalValue] = useState("");
  const [newChainIntervalUnit, setNewChainIntervalUnit] = useState("hrs");
  const [seasonProfiles, setSeasonProfiles] = useState(DEFAULT_SEASON_PROFILES);
  const [showSeasonSettings, setShowSeasonSettings] = useState(false);
  const [seasonDraft, setSeasonDraft] = useState(null);
  useEffect(() => {
    setDictationSupported(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  // Viewing the Team Activity tab marks everything currently in it as
  // "seen" — the tab label badges only entries that arrived since.
  useEffect(() => {
    if (tab !== "team") return;
    if (teamLastSeenCount === teamEntries.length) return;
    setTeamLastSeenCount(teamEntries.length);
    window.storage.set(TEAM_LAST_SEEN_KEY, String(teamEntries.length), false);
  }, [tab, teamEntries.length]);
  useEffect(() => {
    (async () => {
      try {
        const stockRes = await window.storage.get(PART_STOCK_KEY, false);
        setPartStock(stockRes ? Number(stockRes.value) : 0);
      } catch (e) {
        setPartStock(0);
      }
      try {
        const chainsRes = await window.storage.get(CHAINS_KEY, false);
        setChains(chainsRes ? JSON.parse(chainsRes.value) : []);
      } catch (e) {
        setChains([]);
      }
      try {
        const seasonRes = await window.storage.get(SEASON_PROFILES_KEY, false);
        if (seasonRes && seasonRes.value) {
          const parsed = JSON.parse(seasonRes.value);
          setSeasonProfiles({
            ...DEFAULT_SEASON_PROFILES,
            ...parsed
          });
        }
      } catch (e) {
        // keep the defaults
      }
      try {
        const ol = await window.storage.get(ORDER_LISTS_KEY, false);
        if (ol && ol.value) setOrderLists({
          ...emptyOrderLists,
          ...JSON.parse(ol.value)
        });
      } catch (e) {
        // keep the starting lists
      }
    })();
    return () => {
      if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    };
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const res = await window.storage.get(STORAGE_KEY, false);
        const loaded = res ? JSON.parse(res.value) : [];
        // One-time cleanup: an earlier version of sync mistakenly mixed
        // other phones' entries into this local/personal list. Strip any
        // that were tagged as not-mine, so upgrading restores a clean
        // personal log. Harmless no-op for anyone who never hit that bug.
        const cleaned = loaded.filter(en => en.mine !== false);
        setEntries(cleaned);
        if (cleaned.length !== loaded.length) {
          window.storage.set(STORAGE_KEY, JSON.stringify(cleaned), false);
        }
      } catch (e) {
        setEntries([]);
      }
      try {
        const teamRes = await window.storage.get(TEAM_ENTRIES_KEY, false);
        setTeamEntries(teamRes ? JSON.parse(teamRes.value) : []);
      } catch (e) {
        setTeamEntries([]);
      }
      try {
        const lastSeenRes = await window.storage.get(TEAM_LAST_SEEN_KEY, false);
        if (lastSeenRes) setTeamLastSeenCount(Number(lastSeenRes.value) || 0);
      } catch (e) {
        // no stored count yet, keep default
      }
      try {
        const idRes = await window.storage.get(ID_KEY, false);
        if (idRes) setNextId(Number(idRes.value));
      } catch (e) {
        // no stored id yet, keep default
      }
      try {
        const deviceRes = await window.storage.get(DEVICE_ID_KEY, false);
        if (deviceRes && deviceRes.value) {
          setDeviceId(deviceRes.value);
        } else {
          const fresh = Math.random().toString(36).slice(2, 6);
          setDeviceId(fresh);
          await window.storage.set(DEVICE_ID_KEY, fresh, false);
        }
      } catch (e) {
        // fall back to a per-session tag so ids still don't collide
        setDeviceId(Math.random().toString(36).slice(2, 6));
      }
      try {
        const lastUsedRes = await window.storage.get(LAST_USED_KEY, false);
        if (lastUsedRes) {
          const lastUsed = JSON.parse(lastUsedRes.value);
          setForm(prev => ({
            ...prev,
            name: lastUsed.name || prev.name
          }));
        }
      } catch (e) {
        // no stored last-used name yet, keep default
      }
      try {
        const libRes = await window.storage.get(LIBRARY_KEY, false);
        setLibrary(libRes ? JSON.parse(libRes.value) : []);
      } catch (e) {
        setLibrary([]);
      }
      try {
        const areasRes = await window.storage.get(CUSTOM_AREAS_KEY, false);
        setCustomAreas(areasRes ? JSON.parse(areasRes.value) : []);
      } catch (e) {
        setCustomAreas([]);
      }
      try {
        const subCatsRes = await window.storage.get(CUSTOM_SUBCATS_KEY, false);
        setCustomSubCats(subCatsRes ? JSON.parse(subCatsRes.value) : {});
      } catch (e) {
        setCustomSubCats({});
      }
      try {
        const namesRes = await window.storage.get(CUSTOM_NAMES_KEY, false);
        setCustomNames(namesRes ? JSON.parse(namesRes.value) : []);
      } catch (e) {
        setCustomNames([]);
      }
      try {
        const rNamesRes = await window.storage.get(REMOVED_NAMES_KEY, false);
        setRemovedNames(rNamesRes ? JSON.parse(rNamesRes.value) : []);
      } catch (e) {
        setRemovedNames([]);
      }
      try {
        const contractorsRes = await window.storage.get(CUSTOM_CONTRACTORS_KEY, false);
        setCustomContractors(contractorsRes ? JSON.parse(contractorsRes.value) : []);
      } catch (e) {
        setCustomContractors([]);
      }
      try {
        const rContractorsRes = await window.storage.get(REMOVED_CONTRACTORS_KEY, false);
        setRemovedContractors(rContractorsRes ? JSON.parse(rContractorsRes.value) : []);
      } catch (e) {
        setRemovedContractors([]);
      }
      try {
        const rAreasRes = await window.storage.get(REMOVED_AREAS_KEY, false);
        setRemovedAreas(rAreasRes ? JSON.parse(rAreasRes.value) : []);
      } catch (e) {
        setRemovedAreas([]);
      }
      try {
        const rSubCatsRes = await window.storage.get(REMOVED_SUBCATS_KEY, false);
        setRemovedSubCats(rSubCatsRes ? JSON.parse(rSubCatsRes.value) : {});
      } catch (e) {
        setRemovedSubCats({});
      }
      let loadedFlowUrl = "";
      let loadedPartsFlowUrl = "";
      try {
        const fr = await window.storage.get(FLOW_URL_KEY, false);
        if (fr && fr.value) {
          loadedFlowUrl = fr.value;
          setFlowUrl(loadedFlowUrl);
          setFlowUrlInput(loadedFlowUrl);
        }
        const pf = await window.storage.get(PARTS_FLOW_URL_KEY, false);
        if (pf && pf.value) {
          loadedPartsFlowUrl = pf.value;
          setPartsFlowUrl(pf.value);
          setPartsFlowUrlInput(pf.value);
        }
        const q = await window.storage.get(EXCEL_QUEUE_KEY, false);
        setExcelQueueCount(q && q.value ? JSON.parse(q.value).length : 0);
      } catch (e) {
        // not set up on this phone
      }
      setLoading(false);
      // One sync on open, only if the parts & chains flow link is set up.
      if (loadedPartsFlowUrl) syncNow(loadedPartsFlowUrl);
      // And send anything still waiting for the Excel log.
      if (loadedFlowUrl) sendExcelQueue(loadedFlowUrl);
    })();
  }, []);
  function loadJsQR() {
    return new Promise((resolve, reject) => {
      if (window.jsQR) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load QR scanner library"));
      document.head.appendChild(script);
    });
  }
  function scanFrame() {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA || !window.jsQR) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = window.jsQR(imageData.data, imageData.width, imageData.height);
    if (code && code.data) {
      handleScanResult(code.data);
    }
  }
  function handleScanResult(data) {
    // Only one demo part exists right now — this is where real routing
    // to different parts would happen once a real parts catalog exists.
    if (data === DEMO_PART_QR_VALUE) {
      closeScanner();
      setShowPartPage(true);
    } else {
      setCameraError("That code isn't recognised yet — try the demo below instead.");
    }
  }
  async function openScanner() {
    setCameraError(null);
    setShowTestQR(false);
    setShowScanner(true);
    try {
      await loadJsQR();
    } catch (e) {
      setCameraError("Couldn't load the scanner. Check your connection and try again.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment"
        }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      scanIntervalRef.current = setInterval(scanFrame, 300);
    } catch (e) {
      setCameraError("Couldn't access the camera — you can still try the demo below.");
    }
  }
  function closeScanner() {
    if (scanIntervalRef.current) clearInterval(scanIntervalRef.current);
    if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    scanIntervalRef.current = null;
    setShowScanner(false);
    setCameraError(null);
    setShowTestQR(false);
  }
  async function adjustStock(delta) {
    const next = Math.max(0, partStock + delta);
    setPartStock(next);
    try {
      await window.storage.set(PART_STOCK_KEY, String(next), false);
    } catch (e) {
      showToast("Couldn't save the stock count — try again", "error");
    }
  }
  async function persistChains(next) {
    setChains(next);
    try {
      await window.storage.set(CHAINS_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save — try again", "error");
    }
  }
  async function addChain() {
    const missing = [];
    if (!newChainName.trim()) missing.push("Chain name");
    if (!newChainShed) missing.push("Shed");
    const unit = LUBE_INTERVAL_UNITS.find(u => u.key === newChainIntervalUnit) || LUBE_INTERVAL_UNITS[0];
    const intervalHours = Number(newChainIntervalValue) * unit.toHours;
    if (!intervalHours || intervalHours <= 0) missing.push("Lube interval");
    if (missing.length) {
      showToast(`Still needed: ${missing.join(", ")}`, "error");
      return;
    }
    const today = new Date();
    const chain = {
      id: `${Date.now()}`,
      chainName: newChainName.trim(),
      shed: newChainShed,
      area: newChainArea,
      intervalHours,
      lastLubed: today.toISOString(),
      lastLubedBy: form.name,
      synced: false
    };
    await persistChains([chain, ...chains]);
    setNewChainName("");
    setNewChainShed("");
    setNewChainArea("");
    setNewChainIntervalValue("");
    setNewChainIntervalUnit("hrs");
    setAddingChain(false);
    showToast("Chain added to the schedule");
    syncNow();
  }
  async function logLubeNow(id) {
    const chain = chains.find(c => c.id === id);
    const today = new Date();
    const next = chains.map(c => {
      if (c.id !== id) return c;
      return {
        ...c,
        lastLubed: today.toISOString(),
        lastLubedBy: form.name,
        synced: false
      };
    });
    await persistChains(next);
    setSavedOverlayText("Lube logged");
    setSavedOverlaySubtext("Don't forget to log it as an entry too — taking you there now…");
    setSavedOverlay(true);
    setTimeout(() => {
      setSavedOverlay(false);
      // Carry over what we already know from the chain so logging the
      // matching entry is mostly just a confirm-and-submit.
      if (chain) {
        setForm(prev => ({
          ...emptyForm,
          name: prev.name,
          shed: chain.shed || "",
          area: chain.area || "",
          callStatus: "Preventative R&M",
          mechElectrical: "Mechanical",
          description: `${chain.chainName} lubed`
        }));
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (contentRef.current) contentRef.current.scrollTop = 0;
        setFormResetKey(k => k + 1);
        goToTab("new");
      }
    }, 2000);
    syncNow();
  }
  async function removeChain(id) {
    await persistChains(chains.filter(c => c.id !== id));
    // Best-effort — tells the shared sheet this chain is gone too, so it
    // doesn't reappear on the next sync/pull from another phone.
    if (partsFlowUrl) {
      try {
        await fetch(partsFlowUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            kind: "removeChain",
            id: String(id)
          })
        });
      } catch (e) {
        // may come back on the next sync — just remove it again
      }
    }
  }

  // ---- Chain lube: estimated running hours, not calendar days ----
  // Usage swings hugely across the year here (21hr/day flat-out through the
  // kiwifruit season, ~8hr/day for the sheds that run avocados outside
  // that, near-zero the rest of the time), so a fixed "every N days"
  // interval either overdoes it in the quiet months or misses lubes badly
  // during the season. Instead each chain has a target in running hours,
  // and we estimate hours actually run since the last lube from the season
  // profiles set in Season settings.

  // Compares month/day only (year is ignored, so this is the same check
  // every year) and handles a window that wraps over the new year.
  function dateInRecurringRange(date, sMonth, sDay, eMonth, eDay) {
    const val = (date.getMonth() + 1) * 100 + date.getDate();
    const start = sMonth * 100 + sDay;
    const end = eMonth * 100 + eDay;
    if (start <= end) return val >= start && val <= end;
    return val >= start || val <= end;
  }
  function seasonHoursForDate(date, shed) {
    let hours = 0;
    const kiwi = seasonProfiles.kiwifruit;
    if (kiwi && kiwi.hoursPerDay && dateInRecurringRange(date, kiwi.startMonth, kiwi.startDay, kiwi.endMonth, kiwi.endDay)) {
      hours = Math.max(hours, kiwi.hoursPerDay);
    }
    const avo = seasonProfiles.avocado;
    if (avo && avo.hoursPerDay && (avo.sheds || []).includes(shed) && dateInRecurringRange(date, avo.startMonth, avo.startDay, avo.endMonth, avo.endDay)) {
      hours = Math.max(hours, avo.hoursPerDay);
    }
    return hours;
  }
  function hoursRunSince(lastLubedISO, shed) {
    const start = new Date(lastLubedISO);
    start.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let total = 0;
    const cursor = new Date(start);
    let guard = 0;
    while (cursor <= today && guard < 3650) {
      total += seasonHoursForDate(cursor, shed);
      cursor.setDate(cursor.getDate() + 1);
      guard++;
    }
    return total;
  }
  function chainHourStatus(c) {
    const used = hoursRunSince(c.lastLubed, c.shed);
    const target = c.intervalHours || 0;
    if (!target) {
      // Left over from before hour-based tracking — remove and re-add this
      // chain to give it a proper hours interval.
      return {
        label: "No hour interval set",
        color: colors.textMuted,
        animation: undefined,
        used,
        target: 0,
        pct: 0,
        remaining: Infinity
      };
    }
    const remaining = target - used;
    const pct = Math.max(0, Math.min(100, Math.round(used / target * 100)));
    if (remaining <= 0) {
      return {
        label: `Overdue by ~${Math.round(Math.abs(remaining))} hrs`,
        color: colors.rust,
        animation: "flashRed 1.4s ease-in-out infinite",
        used,
        target,
        pct: 100,
        remaining
      };
    }
    const dueSoon = used / target >= 0.85;
    const todayRate = seasonHoursForDate(new Date(), c.shed);
    const estDays = todayRate > 0 ? Math.ceil(remaining / todayRate) : null;
    const label = estDays != null ? `${dueSoon ? "Due soon — " : ""}~${estDays}d at current rate` : `${Math.round(remaining)} hrs left — not currently running`;
    return {
      label,
      color: dueSoon ? colors.gold : colors.green,
      animation: dueSoon ? "flashGold 1.4s ease-in-out infinite" : undefined,
      used,
      target,
      pct,
      remaining
    };
  }
  function monthDayToInputValue(month, day) {
    return `2024-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  function inputValueToMonthDay(v) {
    const parts = (v || "2024-01-01").split("-");
    return {
      month: Number(parts[1]) || 1,
      day: Number(parts[2]) || 1
    };
  }
  function openSeasonSettings() {
    setSeasonDraft({
      kiwifruit: {
        start: monthDayToInputValue(seasonProfiles.kiwifruit.startMonth, seasonProfiles.kiwifruit.startDay),
        end: monthDayToInputValue(seasonProfiles.kiwifruit.endMonth, seasonProfiles.kiwifruit.endDay),
        hoursPerDay: String(seasonProfiles.kiwifruit.hoursPerDay)
      },
      avocado: {
        start: monthDayToInputValue(seasonProfiles.avocado.startMonth, seasonProfiles.avocado.startDay),
        end: monthDayToInputValue(seasonProfiles.avocado.endMonth, seasonProfiles.avocado.endDay),
        hoursPerDay: String(seasonProfiles.avocado.hoursPerDay),
        sheds: seasonProfiles.avocado.sheds || []
      }
    });
    setShowSeasonSettings(true);
  }
  function toggleAvocadoShed(shed) {
    setSeasonDraft(prev => {
      const has = prev.avocado.sheds.includes(shed);
      const sheds = has ? prev.avocado.sheds.filter(s => s !== shed) : [...prev.avocado.sheds, shed];
      return {
        ...prev,
        avocado: {
          ...prev.avocado,
          sheds
        }
      };
    });
  }
  async function saveSeasonProfiles() {
    const kiwiStart = inputValueToMonthDay(seasonDraft.kiwifruit.start);
    const kiwiEnd = inputValueToMonthDay(seasonDraft.kiwifruit.end);
    const avoStart = inputValueToMonthDay(seasonDraft.avocado.start);
    const avoEnd = inputValueToMonthDay(seasonDraft.avocado.end);
    const next = {
      kiwifruit: {
        startMonth: kiwiStart.month,
        startDay: kiwiStart.day,
        endMonth: kiwiEnd.month,
        endDay: kiwiEnd.day,
        hoursPerDay: Number(seasonDraft.kiwifruit.hoursPerDay) || 0
      },
      avocado: {
        startMonth: avoStart.month,
        startDay: avoStart.day,
        endMonth: avoEnd.month,
        endDay: avoEnd.day,
        hoursPerDay: Number(seasonDraft.avocado.hoursPerDay) || 0,
        sheds: seasonDraft.avocado.sheds || []
      }
    };
    setSeasonProfiles(next);
    try {
      await window.storage.set(SEASON_PROFILES_KEY, JSON.stringify(next), false);
    } catch (e) {
      // non-fatal
    }
    setShowSeasonSettings(false);
    showToast("Season settings saved");
    pushList("seasonProfiles", next);
    syncNow();
  }
  function toggleDictation() {
    if (!dictationSupported) return;
    if (listening) {
      recognitionRef.current && recognitionRef.current.stop();
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-NZ";
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onresult = event => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      transcript = transcript.trim();
      if (!transcript) return;
      setForm(prev => {
        const existing = prev.description.trim();
        // Capitalize the new bit if it's starting a fresh sentence — either
        // there's nothing there yet, or the last bit ended with . ! or ?
        const startingNewSentence = !existing || /[.!?]$/.test(existing);
        const piece = startingNewSentence ? transcript.charAt(0).toUpperCase() + transcript.slice(1) : transcript;
        return {
          ...prev,
          description: existing ? `${existing} ${piece}` : piece
        };
      });
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }

  // Remembers phrases you've typed before so repetitive jobs can be filled
  // in a tap or two. This only learns from entries made on this phone —
  // it's a local match-up against your own history, not a shared or "smart"
  // model.
  async function rememberDescription(text, area, subCategory) {
    const norm = text.trim();
    if (!norm) return;
    const key = norm.toLowerCase();
    const existing = library.find(l => l.text.toLowerCase() === key && l.area === area && l.subCategory === subCategory);
    let next;
    if (existing) {
      next = library.map(l => l === existing ? {
        ...l,
        count: l.count + 1,
        lastUsed: Date.now()
      } : l);
    } else {
      next = [...library, {
        text: norm,
        area,
        subCategory,
        count: 1,
        lastUsed: Date.now()
      }];
    }
    setLibrary(next);
    try {
      await window.storage.set(LIBRARY_KEY, JSON.stringify(next), false);
    } catch (e) {
      // non-fatal — worst case, this phrase just isn't suggested next time
    }
  }
  async function addArea(name) {
    const trimmed = name.trim();
    if (!trimmed) return;
    if ([...AREAS, ...customAreas].some(a => a.toLowerCase() === trimmed.toLowerCase())) {
      setForm({
        ...form,
        area: trimmed,
        subCategory: ""
      });
      return;
    }
    const next = [...customAreas, trimmed];
    setCustomAreas(next);
    pushList("customAreas", next);
    try {
      await window.storage.set(CUSTOM_AREAS_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save the new area — try again", "error");
    }
    setForm({
      ...form,
      area: trimmed,
      subCategory: ""
    });
  }
  async function addSubCategory(name) {
    const trimmed = name.trim();
    if (!trimmed || !form.area) return;
    const existing = SUB_CATEGORIES_BY_AREA[form.area] || [];
    const existingCustom = customSubCats[form.area] || [];
    if ([...existing, ...existingCustom].some(s => s.toLowerCase() === trimmed.toLowerCase())) {
      setForm({
        ...form,
        subCategory: trimmed
      });
      return;
    }
    const next = {
      ...customSubCats,
      [form.area]: [...existingCustom, trimmed]
    };
    setCustomSubCats(next);
    pushList("customSubCats", next);
    try {
      await window.storage.set(CUSTOM_SUBCATS_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save the new sub category — try again", "error");
    }
    setForm({
      ...form,
      subCategory: trimmed
    });
  }
  async function addContractor(name) {
    const trimmed = name.trim();
    if (!trimmed) return;
    if ([...CONTRACTORS, ...customContractors].some(n => n.toLowerCase() === trimmed.toLowerCase())) {
      setForm({
        ...form,
        contractor: trimmed
      });
      return;
    }
    const next = [...customContractors, trimmed];
    setCustomContractors(next);
    pushList("customContractors", next);
    try {
      await window.storage.set(CUSTOM_CONTRACTORS_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save the new contractor — try again", "error");
    }
    setForm({
      ...form,
      contractor: trimmed
    });
  }
  async function removeContractor(name) {
    const lower = name.toLowerCase();
    if (customContractors.some(n => n.toLowerCase() === lower)) {
      const next = customContractors.filter(n => n.toLowerCase() !== lower);
      setCustomContractors(next);
      pushList("customContractors", next);
      try {
        await window.storage.set(CUSTOM_CONTRACTORS_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    } else {
      const next = [...removedContractors, lower];
      setRemovedContractors(next);
      pushList("removedContractors", next);
      try {
        await window.storage.set(REMOVED_CONTRACTORS_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    }
    if (form.contractor.toLowerCase() === lower) setForm({
      ...form,
      contractor: ""
    });
  }
  async function addEngineer(name) {
    const trimmed = name.trim();
    if (!trimmed) return;
    if ([...NAMES, ...customNames].some(n => n.toLowerCase() === trimmed.toLowerCase())) {
      setForm({
        ...form,
        name: trimmed
      });
      return;
    }
    const next = [...customNames, trimmed];
    setCustomNames(next);
    pushList("customNames", next);
    try {
      await window.storage.set(CUSTOM_NAMES_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save the new name — try again", "error");
    }
    setForm({
      ...form,
      name: trimmed
    });
  }
  async function rememberLastUsed(name) {
    try {
      await window.storage.set(LAST_USED_KEY, JSON.stringify({
        name
      }), false);
    } catch (e) {
      // non-fatal — worst case, next app open just falls back to the first name in the list
    }
  }
  async function removeEngineer(name) {
    const lower = name.toLowerCase();
    if (customNames.some(n => n.toLowerCase() === lower)) {
      const next = customNames.filter(n => n.toLowerCase() !== lower);
      setCustomNames(next);
      pushList("customNames", next);
      try {
        await window.storage.set(CUSTOM_NAMES_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    } else {
      const next = [...removedNames, lower];
      setRemovedNames(next);
      pushList("removedNames", next);
      try {
        await window.storage.set(REMOVED_NAMES_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    }
    if (form.name.toLowerCase() === lower) setForm({
      ...form,
      name: ""
    });
  }
  async function removeArea(area) {
    const lower = area.toLowerCase();
    if (customAreas.some(a => a.toLowerCase() === lower)) {
      const next = customAreas.filter(a => a.toLowerCase() !== lower);
      setCustomAreas(next);
      pushList("customAreas", next);
      try {
        await window.storage.set(CUSTOM_AREAS_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    } else {
      const next = [...removedAreas, lower];
      setRemovedAreas(next);
      pushList("removedAreas", next);
      try {
        await window.storage.set(REMOVED_AREAS_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    }
    if (form.area.toLowerCase() === lower) setForm({
      ...form,
      area: "",
      subCategory: ""
    });
  }
  async function removeSubCategory(area, subCat) {
    const lower = subCat.toLowerCase();
    const existingCustom = customSubCats[area] || [];
    if (existingCustom.some(s => s.toLowerCase() === lower)) {
      const next = {
        ...customSubCats,
        [area]: existingCustom.filter(s => s.toLowerCase() !== lower)
      };
      setCustomSubCats(next);
      pushList("customSubCats", next);
      try {
        await window.storage.set(CUSTOM_SUBCATS_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    } else {
      const existingRemoved = removedSubCats[area] || [];
      const next = {
        ...removedSubCats,
        [area]: [...existingRemoved, lower]
      };
      setRemovedSubCats(next);
      pushList("removedSubCats", next);
      try {
        await window.storage.set(REMOVED_SUBCATS_KEY, JSON.stringify(next), false);
      } catch (e) {
        showToast("Couldn't remove — try again", "error");
      }
    }
    if (form.area === area && form.subCategory.toLowerCase() === lower) setForm({
      ...form,
      subCategory: ""
    });
  }
  function showToast(msg, type = "success") {
    setToast({
      msg,
      type
    });
    setTimeout(() => setToast(null), type === "error" ? 3200 : 2200);
  }
  async function persist(next) {
    setEntries(next);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save — try again", "error");
    }
  }
  async function persistTeamEntries(next) {
    setTeamEntries(next);
    try {
      await window.storage.set(TEAM_ENTRIES_KEY, JSON.stringify(next), false);
    } catch (e) {
      // non-fatal — worst case Team Activity is a sync behind on this phone
    }
  }

  // Wipes this phone's local Team Activity (e.g. after the shared sheet was
  // cleared or cleaned up) and immediately re-pulls whatever's on the sheet
  // now. Doesn't touch the sheet itself, and doesn't touch the Log tab.
  async function clearTeamEntries() {
    await persistTeamEntries([]);
    showToast("Team activity cleared — resyncing…");
    await syncNow(undefined, {
      team: true
    });
  }

  // ---- Sync (Power Automate) ----
  // Only ever called explicitly (on open, after a save, on switching to
  // Log/Team Activity, or the "Sync now" button) — never on a timer, and
  // never from anything that could run while the app is closed. If no
  // flow link has been set up, this does nothing and sends nothing.
  // Team Activity reads the crew's entries straight from the R&M Excel log
  // (all five shed tabs) through the flow. Nothing is pushed from here: this
  // phone's own entries reach the log through the Excel queue, and stay in
  // the list as "on this phone" until they show up from the log.
  async function syncTeamEntries(url) {
    if (teamBusyRef.current) {
      // Range changed mid-sync: run once more when this one finishes.
      teamAgainRef.current = true;
      return;
    }
    teamBusyRef.current = true;
    const win = teamWindowRef.current || teamWindow("week");
    try {
      let current = teamEntries;
      try {
        const res = await window.storage.get(TEAM_ENTRIES_KEY, false);
        current = res ? JSON.parse(res.value) : teamEntries;
      } catch (e) {
        // fall back to whatever's already in memory
      }
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          kind: "entries",
          from: new Date(win.from).toISOString(),
          to: new Date(win.to).toISOString()
        })
      });
      if (!res.ok) throw new Error("entries failed");
      const data = await res.json();
      const rows = Array.isArray(data.entries) ? data.entries : [];
      const inWin = iso => {
        const t = new Date(iso).getTime();
        return t >= win.from && t <= win.to;
      };
      const remote = rows.map(logRowToEntry).filter(en => en.id && en.timeSubmitted && inWin(en.timeSubmitted));
      const byId = new Map();
      // Shed + ID: older tablet IDs restart per shed tab, so ID alone can clash.
      const keyOf = en => `${en.shed}|${en.id}`;
      remote.forEach(en => byId.set(keyOf(en), {
        ...en,
        synced: true
      }));
      // Keep this phone's entries that haven't appeared in the log yet.
      current.forEach(en => {
        const key = keyOf(en);
        if (!byId.has(key) && !en.synced && inWin(en.timeSubmitted)) byId.set(key, en);
      });
      const merged = Array.from(byId.values()).sort((a, b) => new Date(b.timeSubmitted) - new Date(a.timeSubmitted)).slice(0, TEAM_KEEP_MAX);
      setTeamEntries(merged);
      await window.storage.set(TEAM_ENTRIES_KEY, JSON.stringify(merged), false);
    } finally {
      teamBusyRef.current = false;
      if (teamAgainRef.current) {
        teamAgainRef.current = false;
        syncTeamEntries(url).catch(() => {});
      }
    }
  }

  // One sync = send waiting log entries, then chains, lists and (when asked,
  // or on the Team tab) team activity through the parts & chains flow.
  async function syncNow(urlOverride, opts = {}) {
    if (flowUrl) sendExcelQueue();
    const url = urlOverride || partsFlowUrl;
    if (!url) {
      setSyncStatus("unconfigured");
      return;
    }
    if (syncingRef.current) return;
    syncingRef.current = true;
    setSyncStatus("syncing");
    let hadError = false;
    try {
      await syncChainsFlow(url);
    } catch (e) {
      hadError = true;
    }
    try {
      await pullLists(url);
    } catch (e) {
      hadError = true;
    }
    if (opts.team || tab === "team") {
      try {
        await syncTeamEntries(url);
      } catch (e) {
        hadError = true;
      }
    }
    setSyncStatus(hadError ? "error" : "synced");
    if (!hadError) setLastSyncedAt(new Date());
    syncingRef.current = false;
  }

  // Push a single list (Name/Area/Sub category/Contractor, custom or
  // removed) to the sheet. Best-effort — the local state is already
  // updated regardless of whether this succeeds, and the next sync will
  // reconcile things either way.
  async function pushList(key, value) {
    if (!partsFlowUrl) return;
    try {
      await fetch(partsFlowUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          kind: "list",
          key,
          value: JSON.stringify(value)
        })
      });
    } catch (e) {
      // stays local-only until the next successful sync
    }
  }

  // Union rather than overwrite, so a pull can never silently drop
  // something this phone (or another phone) added/removed moments ago.
  function mergeListArrays(local, remote) {
    return Array.from(new Set([...(local || []), ...(remote || [])]));
  }
  function mergeSubCatMaps(local, remote) {
    const merged = {
      ...(local || {})
    };
    Object.keys(remote || {}).forEach(area => {
      merged[area] = mergeListArrays(merged[area], remote[area]);
    });
    return merged;
  }
  async function readStored(key, fallback) {
    try {
      const r = await window.storage.get(key, false);
      return r && r.value ? JSON.parse(r.value) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  // Shared dropdown lists live in the AppLists Excel table as Key + Value
  // (the value is JSON). Pull, merge with this phone (union, never drop),
  // and on the first sync after connecting, send this phone's merged lists up
  // so nothing that was only on Google or this phone is lost.
  async function pullLists(urlOverride) {
    const url = urlOverride || partsFlowUrl;
    if (!url || listsBusyRef.current) return;
    listsBusyRef.current = true;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          kind: "lists"
        })
      });
      if (!res.ok) throw new Error("lists failed");
      const data = await res.json();
      const remote = {};
      (Array.isArray(data.lists) ? data.lists : []).forEach(row => {
        const key = String(row && row.key || "").trim();
        if (!key) return;
        try {
          remote[key] = JSON.parse(String(row.value || ""));
        } catch (e) {
          // a cell edited by hand into something that isn't valid JSON is skipped
        }
      });
      const merged = {};
      const arrayKeys = [["customAreas", CUSTOM_AREAS_KEY, setCustomAreas], ["removedAreas", REMOVED_AREAS_KEY, setRemovedAreas], ["customNames", CUSTOM_NAMES_KEY, setCustomNames], ["removedNames", REMOVED_NAMES_KEY, setRemovedNames], ["customContractors", CUSTOM_CONTRACTORS_KEY, setCustomContractors], ["removedContractors", REMOVED_CONTRACTORS_KEY, setRemovedContractors]];
      for (const [key, storeKey, setter] of arrayKeys) {
        const local = await readStored(storeKey, []);
        const next = mergeListArrays(local, Array.isArray(remote[key]) ? remote[key] : []);
        merged[key] = next;
        setter(next);
        await window.storage.set(storeKey, JSON.stringify(next), false);
      }
      const mapKeys = [["customSubCats", CUSTOM_SUBCATS_KEY, setCustomSubCats], ["removedSubCats", REMOVED_SUBCATS_KEY, setRemovedSubCats]];
      for (const [key, storeKey, setter] of mapKeys) {
        const local = await readStored(storeKey, {});
        const next = mergeSubCatMaps(local, remote[key] && typeof remote[key] === "object" ? remote[key] : {});
        merged[key] = next;
        setter(next);
        await window.storage.set(storeKey, JSON.stringify(next), false);
      }
      // Season settings: whoever last saved wins.
      if (remote.seasonProfiles && typeof remote.seasonProfiles === "object") {
        setSeasonProfiles(remote.seasonProfiles);
        await window.storage.set(SEASON_PROFILES_KEY, JSON.stringify(remote.seasonProfiles), false);
        merged.seasonProfiles = remote.seasonProfiles;
      } else {
        merged.seasonProfiles = await readStored(SEASON_PROFILES_KEY, null);
      }
      // Parts order dropdowns: union, same as the other lists.
      const localOrder = {
        ...emptyOrderLists,
        ...(await readStored(ORDER_LISTS_KEY, {}))
      };
      const nextOrder = {};
      for (const k of Object.keys(ORDER_LIST_DEFS)) {
        nextOrder[k] = {
          custom: mergeListArrays(localOrder[k] && localOrder[k].custom, remote[`order_${k}_custom`]),
          removed: mergeListArrays(localOrder[k] && localOrder[k].removed, remote[`order_${k}_removed`])
        };
        merged[`order_${k}_custom`] = nextOrder[k].custom;
        merged[`order_${k}_removed`] = nextOrder[k].removed;
      }
      setOrderLists(nextOrder);
      await window.storage.set(ORDER_LISTS_KEY, JSON.stringify(nextOrder), false);

      // First sync on this link: send every merged list up once.
      let pushedAll = false;
      try {
        const r = await window.storage.get(LISTS_FLOW_PUSHED_KEY, false);
        pushedAll = !!(r && r.value === url);
      } catch (e) {
        // not pushed yet
      }
      if (!pushedAll) {
        let allOk = true;
        for (const [key, value] of Object.entries(merged)) {
          if (value === null || value === undefined) continue;
          const isEmpty = Array.isArray(value) ? !value.length : !Object.keys(value).length;
          if (isEmpty) continue;
          try {
            const r = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                kind: "list",
                key,
                value: JSON.stringify(value)
              })
            });
            if (!r.ok) allOk = false;
          } catch (e) {
            allOk = false;
          }
        }
        if (allOk) await window.storage.set(LISTS_FLOW_PUSHED_KEY, url, false);
      }
    } finally {
      listsBusyRef.current = false;
    }
  }

  // Power Automate version of the chain sync: push any chain added or lubed
  // on this phone (only cleared once the flow says OK), then pull the shared
  // schedule from the Chain Lube sheet. Same "latest lube wins" merge.
  async function syncChainsFlow(urlOverride) {
    const pfUrl = urlOverride || partsFlowUrl;
    if (!pfUrl || chainsFlowBusyRef.current) return;
    chainsFlowBusyRef.current = true;
    try {
      let current = chains;
      try {
        const r = await window.storage.get(CHAINS_KEY, false);
        current = r ? JSON.parse(r.value) : chains;
      } catch (e) {
        // use what's in memory
      }
      let pushedAll = false;
      try {
        const r = await window.storage.get(CHAINS_FLOW_PUSHED_KEY, false);
        pushedAll = !!(r && r.value === pfUrl);
      } catch (e) {
        // not pushed yet
      }
      let allOk = true;
      const pushedNow = new Set();
      for (const c of current) {
        if (c.synced && pushedAll) continue;
        try {
          const res = await fetch(pfUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              kind: "chain",
              id: String(c.id),
              chainName: c.chainName || "",
              shed: c.shed || "",
              area: c.area || "",
              intervalHours: String(c.intervalHours || ""),
              lastLubed: c.lastLubed || "",
              lastLubedBy: c.lastLubedBy || ""
            })
          });
          if (res.ok) {
            c.synced = true;
            pushedNow.add(String(c.id));
          } else allOk = false;
        } catch (e) {
          allOk = false;
        }
      }
      if (allOk) {
        try {
          await window.storage.set(CHAINS_FLOW_PUSHED_KEY, pfUrl, false);
        } catch (e) {
          // will push everything again next time; the flow updates, never duplicates
        }
      }
      const res = await fetch(pfUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          kind: "chains"
        })
      });
      const data = await res.json();
      const remote = (Array.isArray(data.chains) ? data.chains : []).map(rc => ({
        id: String(rc.id || ""),
        chainName: String(rc.chainName || ""),
        shed: String(rc.shed || ""),
        area: String(rc.area || ""),
        intervalHours: Number(rc.intervalHours) || 0,
        lastLubed: rc.lastLubed ? excelDateToIso(rc.lastLubed) || String(rc.lastLubed) : "",
        lastLubedBy: String(rc.lastLubedBy || "")
      })).filter(rc => rc.id && rc.chainName);
      // The sheet is the shared record: a chain this phone has already sent
      // takes the sheet's version (so edits made in Excel come through), and
      // one deleted from the sheet is dropped. A change still waiting to send
      // is kept unless the sheet has a newer lube.
      const remoteIds = new Set(remote.map(rc => rc.id));
      const byId = new Map();
      current.forEach(c => {
        const id = String(c.id);
        if (c.synced && remote.length && !remoteIds.has(id) && !pushedNow.has(id)) return;
        byId.set(id, c);
      });
      remote.forEach(rc => {
        const local = byId.get(rc.id);
        if (!local || local.synced || new Date(rc.lastLubed) > new Date(local.lastLubed)) {
          byId.set(rc.id, {
            ...rc,
            synced: true
          });
        }
      });
      const merged = Array.from(byId.values());
      setChains(merged);
      await window.storage.set(CHAINS_KEY, JSON.stringify(merged), false);
    } catch (e) {
      // stays as it is on this phone until the next sync
    } finally {
      chainsFlowBusyRef.current = false;
    }
  }

  // ---- Parts Order ----
  // Saves the sender/receiver addresses from the settings panel. Returns
  // false (and leaves the panel open) if either address doesn't look valid.
  // ---- Excel log (Power Automate) ----
  // Every saved entry is queued, then sent to the flow; anything that can't
  // go (no signal, flow off) stays queued and is retried on the next save,
  // sync or app open. Only removed from the queue once the flow says OK.
  async function readExcelQueue() {
    try {
      const q = await window.storage.get(EXCEL_QUEUE_KEY, false);
      return q && q.value ? JSON.parse(q.value) : [];
    } catch (e) {
      return [];
    }
  }
  async function writeExcelQueue(list) {
    setExcelQueueCount(list.length);
    try {
      await window.storage.set(EXCEL_QUEUE_KEY, JSON.stringify(list), false);
    } catch (e) {
      // non-fatal — worst case an entry is retried
    }
  }
  async function queueForExcel(entry) {
    const q = await readExcelQueue();
    await writeExcelQueue([...q, entry]);
  }
  async function sendExcelQueue(urlOverride) {
    const url = urlOverride || flowUrl;
    if (!url || excelSendingRef.current) return;
    excelSendingRef.current = true;
    try {
      const queue = await readExcelQueue();
      const remaining = [];
      for (const en of queue) {
        let ok = false;
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: en.id,
              name: en.name,
              contractor: en.contractor || "",
              timeSubmitted: en.timeSubmitted,
              timeOnJob: excelTimeOnJob(en.timeOnJob),
              shed: en.shed,
              callStatus: en.callStatus,
              repairsReq: en.repairsReq,
              area: en.area,
              subCategory: en.subCategory || "",
              description: en.description,
              mechElectrical: en.mechElectrical,
              tools: en.tools,
              clean: en.clean,
              verified: false
            })
          });
          ok = res.ok;
        } catch (e) {
          ok = false;
        }
        if (!ok) remaining.push(en);
      }
      // Keep anything queued while this was running, too.
      const latest = await readExcelQueue();
      const sentIds = new Set(queue.filter(en => !remaining.includes(en)).map(en => en.id));
      await writeExcelQueue(latest.filter(en => !sentIds.has(en.id)));
    } finally {
      excelSendingRef.current = false;
    }
  }
  async function saveFlowUrl() {
    const trimmed = flowUrlInput.trim();
    if (trimmed && !/^https:\/\/[^\s]+$/i.test(trimmed)) {
      showToast("That Excel log link doesn't look right — paste the whole HTTP URL", "error");
      return false;
    }
    if (trimmed === flowUrl) return true;
    setFlowUrl(trimmed);
    try {
      await window.storage.set(FLOW_URL_KEY, trimmed, false);
    } catch (e) {
      // non-fatal
    }
    if (trimmed) showToast("Excel log connected — new entries will go to it");
    return true;
  }
  async function savePartsFlowUrl() {
    const trimmed = partsFlowUrlInput.trim();
    if (trimmed && !/^https:\/\/[^\s]+$/i.test(trimmed)) {
      showToast("That parts order link doesn't look right — paste the whole HTTP URL", "error");
      return false;
    }
    if (trimmed === partsFlowUrl) return true;
    setPartsFlowUrl(trimmed);
    try {
      await window.storage.set(PARTS_FLOW_URL_KEY, trimmed, false);
    } catch (e) {
      // non-fatal
    }
    if (trimmed) {
      showToast("Connected — team activity, lists, chains and parts now go through Excel");
      syncNow(trimmed, {
        team: true
      });
    } else {
      setSyncStatus("unconfigured");
    }
    return true;
  }
  async function saveSettings() {
    if (!(await saveFlowUrl())) return;
    if (!(await savePartsFlowUrl())) return;
    setShowSyncSettings(false);
  }

  // Phone photos are often 3–10 MB each. Shrink them to a sensible size
  // (longest side 1600px, JPEG) before attaching, so orders send quickly on
  // a patchy connection and stay well under email attachment limits.
  function compressImage(file, maxSide = 1600, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.max(1, Math.round(img.naturalWidth * scale));
        const h = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("unreadable image"));
      };
      img.src = url;
    });
  }
  async function addPartsPhotos(fileList) {
    const files = Array.from(fileList || []);
    if (!files.length) return;
    const room = MAX_ORDER_PHOTOS - partsPhotos.length;
    if (room <= 0) {
      showToast(`Up to ${MAX_ORDER_PHOTOS} photos per order`, "error");
      return;
    }
    setPartsAddingPhotos(true);
    const added = [];
    let failed = 0;
    for (const f of files.slice(0, room)) {
      try {
        const dataUrl = await compressImage(f);
        added.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          dataUrl
        });
      } catch (e) {
        failed++;
      }
    }
    setPartsPhotos(prev => [...prev, ...added].slice(0, MAX_ORDER_PHOTOS));
    setPartsAddingPhotos(false);
    if (files.length > room) showToast(`Up to ${MAX_ORDER_PHOTOS} photos per order — the extras weren't added`, "error");else if (failed) showToast("Couldn't read one of those photos — try taking it again", "error");
  }
  function orderListItems(key) {
    const {
      custom,
      removed
    } = orderLists[key];
    return [...ORDER_LIST_DEFS[key].start, ...custom].filter(v => !removed.includes(v.toLowerCase()));
  }
  async function persistOrderLists(next, key, parts) {
    setOrderLists(next);
    try {
      await window.storage.set(ORDER_LISTS_KEY, JSON.stringify(next), false);
    } catch (e) {
      showToast("Couldn't save that change — try again", "error");
    }
    for (const part of parts) pushList(`order_${key}_${part}`, next[key][part]);
  }
  function addOrderListItem(key, value) {
    const lower = value.toLowerCase();
    let {
      custom,
      removed
    } = orderLists[key];
    const parts = [];
    if (removed.includes(lower)) {
      removed = removed.filter(r => r !== lower);
      parts.push("removed");
    }
    const known = [...ORDER_LIST_DEFS[key].start, ...custom].some(v => v.toLowerCase() === lower);
    if (!known) {
      custom = [...custom, value];
      parts.push("custom");
    }
    if (parts.length) persistOrderLists({
      ...orderLists,
      [key]: {
        custom,
        removed
      }
    }, key, parts);
  }
  function removeOrderListItem(key, value) {
    const lower = value.toLowerCase();
    const {
      custom,
      removed
    } = orderLists[key];
    // Drop it from the custom list and mark it removed, so another phone's
    // copy can't bring it back when the lists merge.
    const next = {
      custom: custom.filter(v => v.toLowerCase() !== lower),
      removed: removed.includes(lower) ? removed : [...removed, lower]
    };
    persistOrderLists({
      ...orderLists,
      [key]: next
    }, key, ["custom", "removed"]);
    const field = {
      steelTypes: "steelType",
      suppliers: "supplier",
      codeDepts: "codeDept"
    }[key];
    setPartsForm(prev => (prev[field] || "").toLowerCase() === lower ? {
      ...prev,
      [field]: ""
    } : prev);
  }

  // Open orders on the parts tracker (not yet signed off), so the crew can see
  // what's already been asked for. Read-only; only while the app is open.
  async function fetchOpenOrders() {
    if (!partsFlowUrl) return null;
    setOpenOrdersState(prev => prev === "ok" ? "ok" : "loading");
    try {
      let data;
      {
        const res = await fetch(partsFlowUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            kind: "openOrders"
          })
        });
        data = await res.json();
        // The flow returns sheet order (oldest first) and the raw cell values.
        if (Array.isArray(data.openOrders)) {
          data.openOrders = data.openOrders.map(o => ({
            ref: String(o.ref || ""),
            date: excelDateToIso(o.date),
            item: String(o.item || "").trim(),
            qty: String(o.qty || ""),
            urgent: /^y/i.test(String(o.urgent || "")) ? "Y" : "N",
            name: String(o.name || ""),
            status: String(o.status || "")
          })).filter(o => o.item).reverse().slice(0, 100);
        }
      }
      if (!Array.isArray(data.openOrders)) {
        setOpenOrdersState("unsupported");
        return null;
      }
      setOpenOrders(data.openOrders);
      setOpenOrdersState("ok");
      return data.openOrders;
    } catch (e) {
      setOpenOrdersState(prev => prev === "ok" ? "ok" : "error");
      return null;
    }
  }

  // Sends the order through the parts & chains flow, which adds it to the
  // Parts Orders sheet and emails it with the photos attached.
  async function sendPartsOrder(opts = {}) {
    if (partsSending) return;
    setPartsAttempted(true);
    const name = partsForm.name || form.name;
    const qty = Number(partsForm.qty);
    if (!partsForm.item.trim() || !(qty > 0) || !name) {
      showToast("Fill in the highlighted fields", "error");
      return;
    }
    if (!partsFlowUrl) {
      showToast("Paste the parts & chains link first (gear icon)", "error");
      return;
    }
    setPartsSending(true);
    if (!opts.skipDupCheck) {
      // Check against the latest open orders (falls back to the list already
      // on screen if the refresh fails) before anything is sent.
      const latest = (await fetchOpenOrders()) || openOrders;
      const dupes = findDuplicateOrders(partsForm.item, latest);
      if (dupes.length) {
        setDupMatches(dupes);
        setPartsSending(false);
        return;
      }
    }
    await sendPartsOrderToFlow(name, qty);
  }

  // Power Automate version: the flow adds the row to the Parts Orders sheet
  // (skipping it if this Ref is already there) and sends the email itself.
  // The To and Reply-To addresses are fixed in the flow, so the link can't be
  // used to email anyone else.
  async function sendPartsOrderToFlow(name, qty) {
    try {
      const ref = partsForm.ref || `${(deviceId || "ph").toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
      if (!partsForm.ref) setPartsForm(prev => ({
        ...prev,
        ref
      }));
      let data = null;
      try {
        const res = await fetch(partsFlowUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            kind: "partsOrder",
            ref,
            sentAt: new Date().toISOString(),
            item: partsForm.item.trim(),
            steelType: partsForm.steelType || "",
            qty: String(qty),
            supplier: partsForm.supplier || "",
            urgent: partsForm.urgent === "Yes" ? "Y" : "N",
            codeDept: partsForm.codeDept || "",
            name,
            photos: partsPhotos.map((p, i) => ({
              name: `photo-${i + 1}.jpg`,
              data: p.dataUrl.split(",")[1]
            }))
          })
        });
        data = await res.json();
      } catch (e) {
        throw new Error("Couldn't send — check your connection and try again. Your order is still here.");
      }
      if (!data || !data.sent) {
        throw new Error(data && data.error ? `Order not sent: ${data.error}` : "Order not sent — try again.");
      }
      rememberLastUsed(name);
      setPartsForm({
        ...emptyPartsForm,
        name
      });
      setPartsPhotos([]);
      setPartsAttempted(false);
      setSavedOverlayText("Order sent");
      setSavedOverlaySubtext(data.duplicate ? "Already on the parts sheet" : "Added to the parts sheet and emailed");
      setSavedOverlay(true);
      setTimeout(() => setSavedOverlay(false), 2200);
      fetchOpenOrders();
    } catch (e) {
      showToast(e.message, "error");
    } finally {
      setPartsSending(false);
    }
  }

  // ---- TODO: wire this up to your real Excel-backed database ----
  // This is the single place a future write belongs — likely the Microsoft
  // Graph API (if the sheet lives in OneDrive/SharePoint) or a middleware
  // endpoint your IT team exposes. Right now entries only live in this
  // device's local storage.
  // async function uploadToDatabase(entry) {
  //   const res = await fetch("YOUR_API_ENDPOINT", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(entry),
  //   });
  //   if (!res.ok) throw new Error("Upload failed");
  // }

  function missingFields() {
    const missing = [];
    if (!form.name) missing.push("Name");
    if (!form.shed) missing.push("Shed");

    // Startup Procedure is a quick log — nothing else is required for it.
    if (form.callStatus === "Startup Procedure") {
      return missing;
    }
    if (!form.callStatus) missing.push("Call status");
    if (!form.area) missing.push("Area");
    if (!form.subCategory) missing.push("Sub category");
    if (!form.mechElectrical) missing.push("Mech/electrical");
    if (!form.description.trim()) missing.push("Description");
    if (!form.repairsReq) missing.push("Repairs required");
    if (!form.timeOnJob) missing.push("Time on job");
    if (form.timeOnJob === "Custom" && !String(form.timeOnJobCustom).trim()) missing.push("Time on job");
    // Tools and Clean only matter when repairs were actually required.
    if (form.repairsReq === "Yes") {
      if (!form.tools) missing.push("Tools used");
      if (!form.clean) missing.push("Area left clean");
    }
    return missing;
  }
  async function saveEntry(e) {
    if (e && e.preventDefault) e.preventDefault();
    setAttemptedSubmit(true);
    const missing = missingFields();
    if (missing.length) {
      showToast(`Still needed: ${missing.join(", ")}`, "error");
      return;
    }
    const timeOnJob = form.timeOnJob === "Custom" ? `${form.timeOnJobCustom} ${form.timeOnJobCustomUnit === "hours" ? Number(form.timeOnJobCustom) === 1 ? "hour" : "hours" : "min"}` : form.timeOnJob;
    const entry = {
      id: `${deviceId || "x"}-${nextId}`,
      name: form.name,
      contractor: form.contractor,
      timeSubmitted: new Date().toISOString(),
      timeOnJob,
      shed: form.shed,
      callStatus: form.callStatus,
      repairsReq: form.repairsReq || "No",
      area: form.area,
      description: form.description,
      subCategory: form.subCategory,
      mechElectrical: form.mechElectrical,
      tools: form.tools || "No",
      clean: form.clean || "No",
      verified: false
    };
    const nextIdVal = nextId + 1;
    // One copy stays local forever, purely personal — the Log tab (never
    // synced, never touched by the network). A second copy goes to
    // teamEntries, which is the one that actually pushes/pulls to the
    // shared sheet for Team Activity.
    await persist([entry, ...entries]);
    await persistTeamEntries([{
      ...entry,
      synced: false
    }, ...teamEntries]);
    if (flowUrl) {
      await queueForExcel(entry);
      sendExcelQueue();
    }
    await rememberDescription(form.description, form.area, form.subCategory);
    setNextId(nextIdVal);
    try {
      await window.storage.set(ID_KEY, String(nextIdVal), false);
    } catch (e) {
      // non-fatal
    }
    setForm({
      ...emptyForm,
      name: form.name
    });
    setAttemptedSubmit(false);
    try {
      await window.storage.set(LAST_USED_KEY, JSON.stringify({
        name: form.name
      }), false);
    } catch (e) {
      // non-fatal — worst case, next app open just falls back to the first name in the list
    }
    setSavedOverlayText("Entry saved");
    setSavedOverlaySubtext("");
    setSavedOverlay(true);
    setTimeout(() => {
      setSavedOverlay(false);
      // Snap the scroll position back instantly (mobile browsers were
      // fighting/ignoring an animated scroll here) and instead give the
      // form a fresh remount — the exact same trick the tab-swipe uses
      // (a changed `key` + a CSS @keyframes animation on the wrapper),
      // which we already know animates reliably on the phone.
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (contentRef.current) contentRef.current.scrollTop = 0;
      setFormResetKey(k => k + 1);
    }, 1600);
    // Best-effort push of this entry while the app is still open. If it
    // fails (offline, no signal), it just stays queued as unsynced and
    // goes up next time the app is opened or synced.
    syncNow();
  }
  async function deleteEntry(id) {
    await persist(entries.filter(en => en.id !== id));
  }
  function toggleSelected(id) {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }
  function clearSelection() {
    setSelectedIds([]);
    setConfirmingDelete(false);
  }
  async function deleteSelected() {
    await persist(entries.filter(en => !selectedIds.includes(en.id)));
    showToast(`${selectedIds.length} entr${selectedIds.length === 1 ? "y" : "ies"} removed from this phone`);
    clearSelection();
  }

  // Top phrases used before for this exact Area + Sub category combo.
  const startupMode = form.callStatus === "Startup Procedure";
  const visibleNames = [...NAMES, ...customNames].filter(n => !removedNames.includes(n.toLowerCase())).sort((a, b) => a.localeCompare(b));
  const visibleContractors = [...CONTRACTORS, ...customContractors].filter(n => !removedContractors.includes(n.toLowerCase())).sort((a, b) => {
    if (a === CONTRACTORS[0]) return -1;
    if (b === CONTRACTORS[0]) return 1;
    return a.localeCompare(b);
  });
  const visibleAreas = [...AREAS, ...customAreas].filter(a => !removedAreas.includes(a.toLowerCase()));
  const visibleSubCats = form.area ? [...(SUB_CATEGORIES_BY_AREA[form.area] || []), ...(customSubCats[form.area] || [])].filter(s => !(removedSubCats[form.area] || []).includes(s.toLowerCase())) : [];
  const commonForThisJob = form.area && form.subCategory ? library.filter(l => l.area === form.area && l.subCategory === form.subCategory).sort((a, b) => b.count - a.count || b.lastUsed - a.lastUsed).slice(0, 4) : [];

  // Live matches as you type, from every past description.
  const typeahead = form.description.trim().length >= 2 ? library.filter(l => l.text.toLowerCase().includes(form.description.trim().toLowerCase()) && l.text.toLowerCase() !== form.description.trim().toLowerCase()).sort((a, b) => b.count - a.count || b.lastUsed - a.lastUsed).slice(0, 5) : [];

  // The Log tab is a purely personal, local-only record — it never syncs,
  // so `entries` here is exactly what's saved on this phone, nothing more.
  const logShedOptions = Array.from(new Set([...SHEDS, ...entries.map(en => en.shed)])).filter(Boolean);
  const chainShedOptions = Array.from(new Set([...SHEDS, ...chains.map(c => c.shed)])).filter(Boolean);
  const filteredChains = (chainShedFilter ? chains.filter(c => c.shed === chainShedFilter) : chains).slice().sort((a, b) => chainHourStatus(a).remaining - chainHourStatus(b).remaining);

  // Team Activity reads its own separate, synced record — `teamEntries` —
  // never the Log tab's local-only `entries`. A save writes one copy to
  // each; only this one ever pushes/pulls to the shared sheet.
  const teamShedOptions = Array.from(new Set([...SHEDS, ...teamEntries.map(en => en.shed)])).filter(Boolean);
  // Today or Today & yesterday (default). The phone only holds the last
  // couple of days — anything older is looked up in the log on a computer.
  const teamWin = teamWindow(teamRangeFilter, teamCustomStart, teamCustomEnd);
  teamWindowRef.current = teamWin;
  const teamWinKey = `${teamWin.from}-${teamWin.to}`;
  const lastTeamWinKey = useRef(teamWinKey);
  useEffect(() => {
    if (lastTeamWinKey.current === teamWinKey) return;
    lastTeamWinKey.current = teamWinKey;
    if (tab === "team" && partsFlowUrl) syncTeamEntries(partsFlowUrl).catch(() => {});
  }, [teamWinKey]);
  const filteredTeamEntries = teamEntries.filter(en => {
    if (teamShedFilter && en.shed !== teamShedFilter) return false;
    const t = new Date(en.timeSubmitted).getTime();
    return t >= teamWin.from && t <= teamWin.to;
  });
  function formatTeamDate(d) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = new Date(d);
    day.setHours(0, 0, 0, 0);
    const diffDays = Math.round((today - day) / (1000 * 60 * 60 * 24));
    const time = d.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit"
    });
    if (diffDays === 0) return `Today, ${time}`;
    if (diffDays === 1) return `Yesterday, ${time}`;
    return `${diffDays} days ago, ${time}`;
  }
  const filteredEntries = logShedFilter ? entries.filter(en => en.shed === logShedFilter) : entries;
  function formatTime(iso) {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.bg,
      color: colors.text,
      fontFamily: "Inter, sans-serif",
      // Pushes everything below the notch/status bar/camera cutout on
      // phones that have one (iPhones drawing edge-to-edge, mainly).
      // env() resolves to 0 on phones without a cutout, so this is a
      // no-op there — nothing to detect per-device.
      paddingTop: "env(safe-area-inset-top)"
    },
    className: "w-full min-h-full flex flex-col"
  }, /*#__PURE__*/React.createElement("style", null, FONT_IMPORT), /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border-b px-5 pt-6 pb-4 flex items-start justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.01em"
    },
    className: "text-2xl"
  }, "Maintenance Log"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm mt-1"
  }, syncStatus === "unconfigured" && "Saved on this phone — tap the gear to add the crew's links.", syncStatus === "syncing" && "Syncing…", syncStatus === "synced" && `Synced${lastSyncedAt ? " · " + lastSyncedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }) : ""}`, syncStatus === "offline" && "No connection — saved on this phone, will sync when back online.", syncStatus === "error" && "Couldn't reach Excel — saved on this phone, will retry.", flowUrl && excelQueueCount > 0 && ` · ${excelQueueCount} waiting for Excel`)), !showScanner && !showPartPage && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setFlowUrlInput(flowUrl);
      setPartsFlowUrlInput(partsFlowUrl);
      setShowSyncSettings(true);
    },
    "aria-label": "Sync settings",
    style: {
      borderColor: colors.accent,
      color: colors.accent
    },
    className: "w-9 h-9 border-2 rounded-full flex items-center justify-center active:opacity-70 transition-opacity"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: openScanner,
    "aria-label": "Scan a tag",
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "rounded-full shadow-lg flex items-center gap-1.5 px-3.5 py-2 active:opacity-80 transition-opacity"
  }, /*#__PURE__*/React.createElement(QrCode, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold"
  }, "QR Scan")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border-b flex px-5 overflow-x-auto"
  }, [{
    key: "new",
    label: "New entry"
  }, {
    key: "log",
    label: "Log"
  }, {
    key: "team",
    label: `Team activity${tab !== "team" && teamEntries.length > teamLastSeenCount ? ` (${teamEntries.length - teamLastSeenCount})` : ""}`
  }, {
    key: "chains",
    label: "Chain Lube"
  }, {
    key: "parts",
    label: "Parts order"
  }].map(t => {
    const chainAlert = t.key === "chains" ? chains.some(c => chainHourStatus(c).remaining <= 0) ? "overdue" : chains.some(c => {
      const s = chainHourStatus(c);
      return s.target > 0 && s.remaining > 0 && s.used / s.target >= 0.85;
    }) ? "due" : null : null;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      "data-tab": t.key,
      onClick: () => goToTab(t.key),
      style: {
        color: chainAlert ? undefined : tab === t.key ? colors.accent : colors.textMuted,
        borderColor: tab === t.key ? colors.accent : "transparent",
        animation: chainAlert ? chainAlert === "overdue" ? "flashRed 1.4s ease-in-out infinite" : "flashGold 1.4s ease-in-out infinite" : undefined
      },
      className: "py-3 mr-6 text-sm font-semibold border-b-2 -mb-px transition-colors whitespace-nowrap shrink-0"
    }, t.label);
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "shrink-0",
    style: {
      width: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: "flex-1 px-5 py-5 overflow-y-auto",
    onTouchStart: e => {
      const t = e.touches[0];
      touchStart.current = {
        x: t.clientX,
        y: t.clientY
      };
    },
    onTouchEnd: e => {
      if (!touchStart.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;
      touchStart.current = null;
      // Require a fairly horizontal, fairly deliberate swipe so vertical
      // scrolling never gets mistaken for a tab change.
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      const currentIndex = TAB_ORDER.indexOf(tab);
      const nextIndex = dx < 0 ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < TAB_ORDER.length) goToTab(TAB_ORDER[nextIndex]);
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: tab === "new" ? `new-${formResetKey}` : tab,
    style: {
      animation: tab === "new" && formResetKey > 0 ? "slideInDown 0.32s ease-out" : `${slideDir === "right" ? "slideInRight" : "slideInLeft"} 0.22s ease-out`
    }
  }, tab === "new" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.name,
    onChange: v => {
      if (v === "+ Add engineer") {
        setAddingName(true);
        return;
      }
      if (v === "− Remove engineer") {
        setManagingNames(true);
        return;
      }
      setForm({
        ...form,
        name: v
      });
      rememberLastUsed(v);
    },
    options: [...visibleNames, "+ Add engineer", "− Remove engineer"]
  }), managingNames && /*#__PURE__*/React.createElement(RemoveList, {
    items: visibleNames,
    onRemove: removeEngineer,
    onDone: () => setManagingNames(false)
  }), addingName && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    style: inputBase,
    className: "flex-1 min-w-[140px] border rounded px-3 py-2 text-sm outline-none focus:border-current",
    placeholder: "Engineer's name",
    value: newNameText,
    onChange: e => setNewNameText(e.target.value),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "words"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      addEngineer(newNameText);
      setNewNameText("");
      setAddingName(false);
    },
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "rounded px-3 text-sm font-semibold"
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setAddingName(false);
      setNewNameText("");
    },
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "rounded px-3 border text-sm"
  }, "Cancel"))), /*#__PURE__*/React.createElement(Field, {
    label: "Shed",
    error: attemptedSubmit && !form.shed
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.shed,
    onChange: v => setForm({
      ...form,
      shed: v
    }),
    options: SHEDS,
    placeholder: "Select Shed"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Contractor"
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.contractor,
    onChange: v => {
      if (v === "+ Add contractor") {
        setAddingContractor(true);
        return;
      }
      if (v === "− Remove contractor") {
        setManagingContractors(true);
        return;
      }
      setForm({
        ...form,
        contractor: v
      });
    },
    options: [...visibleContractors, "+ Add contractor", "− Remove contractor"]
  }), managingContractors && /*#__PURE__*/React.createElement(RemoveList, {
    items: visibleContractors,
    onRemove: removeContractor,
    onDone: () => setManagingContractors(false)
  }), addingContractor && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    style: inputBase,
    className: "flex-1 min-w-[140px] border rounded px-3 py-2 text-sm outline-none focus:border-current",
    placeholder: "Contractor / company name",
    value: newContractorText,
    onChange: e => setNewContractorText(e.target.value),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "words"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      addContractor(newContractorText);
      setNewContractorText("");
      setAddingContractor(false);
    },
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "rounded px-3 text-sm font-semibold"
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setAddingContractor(false);
      setNewContractorText("");
    },
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "rounded px-3 border text-sm"
  }, "Cancel"))), /*#__PURE__*/React.createElement(Field, {
    label: "Call status",
    error: attemptedSubmit && !startupMode && !form.callStatus,
    hint: startupMode ? "Startup logged — only Name and Shed are required below." : undefined
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.callStatus,
    onChange: v => {
      let description = form.description;
      if (v === "Startup Procedure") {
        description = startupGreeting();
      } else if (form.callStatus === "Startup Procedure") {
        description = "";
      }
      setForm({
        ...form,
        callStatus: v,
        description
      });
    },
    options: CALL_STATUSES,
    placeholder: "Call Type"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Area",
    error: attemptedSubmit && !startupMode && !form.area
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.area,
    onChange: v => {
      if (v === "+ Add area") {
        setAddingArea(true);
        return;
      }
      if (v === "− Remove area") {
        setManagingAreas(true);
        return;
      }
      const subOptions = [...(SUB_CATEGORIES_BY_AREA[v] || []), ...(customSubCats[v] || [])].filter(s => !(removedSubCats[v] || []).includes(s.toLowerCase()));
      setForm({
        ...form,
        area: v,
        subCategory: subOptions.length === 1 ? subOptions[0] : ""
      });
    },
    options: [...visibleAreas, "+ Add area", "− Remove area"],
    placeholder: "Select area"
  }), managingAreas && /*#__PURE__*/React.createElement(RemoveList, {
    items: visibleAreas,
    onRemove: removeArea,
    onDone: () => setManagingAreas(false)
  }), addingArea && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    style: inputBase,
    className: "flex-1 min-w-[140px] border rounded px-3 py-2 text-sm outline-none focus:border-current",
    placeholder: "New area name",
    value: newAreaText,
    onChange: e => setNewAreaText(e.target.value),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "words"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      addArea(newAreaText);
      setNewAreaText("");
      setAddingArea(false);
    },
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "rounded px-3 text-sm font-semibold"
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setAddingArea(false);
      setNewAreaText("");
    },
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "rounded px-3 border text-sm"
  }, "Cancel"))), /*#__PURE__*/React.createElement(Field, {
    label: "Sub category",
    error: attemptedSubmit && !startupMode && !form.subCategory
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.subCategory,
    onChange: v => {
      if (v === "+ Add sub category") {
        setAddingSubCat(true);
        return;
      }
      if (v === "− Remove sub category") {
        setManagingSubCats(true);
        return;
      }
      setForm({
        ...form,
        subCategory: v
      });
    },
    options: form.area ? [...visibleSubCats, "+ Add sub category", "− Remove sub category"] : [],
    placeholder: form.area ? "Select sub category" : "Select area first",
    disabled: !form.area
  }), managingSubCats && /*#__PURE__*/React.createElement(RemoveList, {
    items: visibleSubCats,
    onRemove: s => removeSubCategory(form.area, s),
    onDone: () => setManagingSubCats(false)
  }), addingSubCat && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    style: inputBase,
    className: "flex-1 min-w-[140px] border rounded px-3 py-2 text-sm outline-none focus:border-current",
    placeholder: "New sub category name",
    value: newSubCatText,
    onChange: e => setNewSubCatText(e.target.value),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "words"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      addSubCategory(newSubCatText);
      setNewSubCatText("");
      setAddingSubCat(false);
    },
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "rounded px-3 text-sm font-semibold"
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setAddingSubCat(false);
      setNewSubCatText("");
    },
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "rounded px-3 border text-sm"
  }, "Cancel")))), /*#__PURE__*/React.createElement(Field, {
    label: "Description",
    error: attemptedSubmit && !startupMode && !form.description.trim()
  }, commonForThisJob.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-2"
  }, commonForThisJob.map(s => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: s.text,
    onClick: () => setForm({
      ...form,
      description: s.text
    }),
    style: {
      borderColor: colors.accentDim,
      color: colors.accent,
      backgroundColor: "transparent"
    },
    className: "border rounded px-2.5 py-1 text-xs font-medium text-left"
  }, s.text))), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("textarea", {
    style: inputBase,
    className: `w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current min-h-[90px] ${dictationSupported ? "pr-11" : ""}`,
    placeholder: "Describe the repair or maintenance performed",
    value: form.description,
    onChange: e => setForm({
      ...form,
      description: e.target.value
    }),
    onFocus: () => setShowSuggestions(true),
    onBlur: () => setTimeout(() => setShowSuggestions(false), 150),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "sentences"
  }), dictationSupported && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleDictation,
    "aria-label": listening ? "Stop dictation" : "Start dictation",
    style: {
      backgroundColor: listening ? colors.rust : colors.accent,
      color: "#1A1917"
    },
    className: "absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Mic, {
    size: 14
  })), listening && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.accent
    },
    className: "text-xs mt-1 font-medium"
  }, "Listening… tap the mic again to stop."), showSuggestions && typeahead.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.borderLight
    },
    className: "absolute left-0 right-0 mt-1 border rounded overflow-hidden z-10"
  }, typeahead.map(s => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: s.text,
    onMouseDown: e => e.preventDefault(),
    onClick: () => {
      setForm({
        ...form,
        description: s.text
      });
      setShowSuggestions(false);
    },
    style: {
      color: colors.text,
      borderColor: colors.border
    },
    className: "w-full text-left px-3 py-2 text-sm border-b last:border-b-0 active:opacity-70"
  }, s.text))))), /*#__PURE__*/React.createElement(Field, {
    label: "Mech / electrical",
    error: attemptedSubmit && !startupMode && !form.mechElectrical
  }, /*#__PURE__*/React.createElement(Select, {
    value: form.mechElectrical,
    onChange: v => setForm({
      ...form,
      mechElectrical: v
    }),
    options: MECH_ELECTRICAL,
    placeholder: "Select one"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Repairs required",
    error: attemptedSubmit && !startupMode && !form.repairsReq
  }, /*#__PURE__*/React.createElement(YesNo, {
    value: form.repairsReq,
    onChange: v => setForm({
      ...form,
      repairsReq: v
    })
  })), form.repairsReq === "Yes" && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Tools used",
    error: attemptedSubmit && !startupMode && !form.tools
  }, /*#__PURE__*/React.createElement(YesNo, {
    value: form.tools,
    onChange: v => setForm({
      ...form,
      tools: v
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Area left clean",
    error: attemptedSubmit && !startupMode && !form.clean
  }, /*#__PURE__*/React.createElement(YesNo, {
    value: form.clean,
    onChange: v => setForm({
      ...form,
      clean: v
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Time on job",
    error: attemptedSubmit && !startupMode && (!form.timeOnJob || form.timeOnJob === "Custom" && !String(form.timeOnJobCustom).trim())
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, DURATIONS.map(d => {
    const active = form.timeOnJob === d;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: d,
      onClick: () => setForm({
        ...form,
        timeOnJob: d
      }),
      style: {
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? colors.accent : colors.border
      },
      className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
    }, d);
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setForm({
      ...form,
      timeOnJob: "Custom"
    }),
    style: {
      backgroundColor: form.timeOnJob === "Custom" ? colors.accent : "transparent",
      color: form.timeOnJob === "Custom" ? "#1A1917" : colors.textMuted,
      borderColor: form.timeOnJob === "Custom" ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, "Custom")), form.timeOnJob === "Custom" && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: "0",
    style: inputBase,
    className: "w-16 shrink-0 border rounded px-2 py-2.5 text-sm outline-none focus:border-current",
    placeholder: "90",
    value: form.timeOnJobCustom,
    onChange: e => setForm({
      ...form,
      timeOnJobCustom: e.target.value
    })
  }), ["min", "hours"].map(u => {
    const active = form.timeOnJobCustomUnit === u;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: u,
      onClick: () => setForm({
        ...form,
        timeOnJobCustomUnit: u
      }),
      style: {
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? colors.accent : colors.border
      },
      className: "flex-1 border rounded px-2 py-2.5 text-sm font-medium transition-colors"
    }, u === "min" ? "Min" : "Hours");
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: saveEntry,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "w-full rounded py-3 font-semibold text-sm mt-2 active:opacity-80 transition-opacity"
  }, "Save entry")), tab === "log" && /*#__PURE__*/React.createElement("div", null, loading ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "Loading entries…") : entries.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border border-dashed rounded px-4 py-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "No entries yet. Log your first repair to see it here.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setLogShedFilter(""),
    style: {
      backgroundColor: logShedFilter === "" ? colors.accent : "transparent",
      color: logShedFilter === "" ? "#1A1917" : colors.textMuted,
      borderColor: logShedFilter === "" ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, "All sheds"), logShedOptions.map(shed => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: shed,
    onClick: () => setLogShedFilter(shed),
    style: {
      backgroundColor: logShedFilter === shed ? colors.accent : "transparent",
      color: logShedFilter === shed ? "#1A1917" : colors.textMuted,
      borderColor: logShedFilter === shed ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, shed))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: clearSelection,
    style: {
      color: colors.textMuted
    },
    className: "text-sm font-medium"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setSelectedIds(selectedIds.length === filteredEntries.length ? [] : filteredEntries.map(en => en.id)),
    style: {
      color: colors.accent
    },
    className: "text-sm font-medium"
  }, selectedIds.length === filteredEntries.length ? "Deselect all" : "Select all")), selectedIds.length > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setConfirmingDelete(true),
    style: {
      backgroundColor: colors.rust,
      color: "#F3EFE6"
    },
    className: "rounded px-3 py-1.5 text-sm font-semibold"
  }, "Delete (", selectedIds.length, ")")), confirmingDelete && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.rust
    },
    className: "border rounded px-4 py-3 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm font-medium mb-1"
  }, "Delete ", selectedIds.length, " entr", selectedIds.length === 1 ? "y" : "ies", " from this phone?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-3"
  }, "This can't be undone. There's no database connected yet, so this is the only copy — once your real database is wired up, this becomes safe to use as a way to free up space without losing anything."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: deleteSelected,
    style: {
      backgroundColor: colors.rust,
      color: "#F3EFE6"
    },
    className: "flex-1 rounded py-2 text-sm font-semibold"
  }, "Delete"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setConfirmingDelete(false),
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "flex-1 border rounded py-2 text-sm font-medium"
  }, "Cancel"))), filteredEntries.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border border-dashed rounded px-4 py-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "No entries for ", logShedFilter, ".")) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, filteredEntries.map(en => /*#__PURE__*/React.createElement("div", {
    key: en.id,
    onClick: () => toggleSelected(en.id),
    style: {
      backgroundColor: colors.surface,
      borderColor: selectedIds.includes(en.id) ? colors.accent : colors.border,
      cursor: "pointer"
    },
    className: "border rounded px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selectedIds.includes(en.id),
    onChange: () => toggleSelected(en.id),
    onClick: e => e.stopPropagation(),
    style: {
      accentColor: colors.accent
    },
    className: "mt-1 w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-sm truncate"
  }, "#", en.id, " · ", en.shed), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-0.5"
  }, en.name, en.contractor && en.contractor !== CONTRACTORS[0] ? ` · ${en.contractor}` : "", " ·", " ", formatTime(en.timeSubmitted))), /*#__PURE__*/React.createElement(StatusTag, {
    verified: en.verified
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-2.5"
  }, "Description"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text,
      whiteSpace: "pre-line"
    },
    className: "text-sm mt-0.5 leading-snug"
  }, en.description), /*#__PURE__*/React.createElement("div", {
    style: {
      color: colors.textMuted
    },
    className: "flex flex-wrap gap-x-3 gap-y-1 text-xs mt-2"
  }, /*#__PURE__*/React.createElement("span", null, en.callStatus), /*#__PURE__*/React.createElement("span", null, en.area, en.subCategory ? ` · ${en.subCategory}` : ""), /*#__PURE__*/React.createElement("span", null, en.mechElectrical), en.timeOnJob && /*#__PURE__*/React.createElement("span", null, en.timeOnJob)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "flex items-center mt-3 pt-2.5 border-t"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: colors.textMuted
    },
    className: "flex gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("span", null, "Repairs: ", en.repairsReq), /*#__PURE__*/React.createElement("span", null, "Tools: ", en.tools), /*#__PURE__*/React.createElement("span", null, "Clean: ", en.clean)))))))), tab === "team" && /*#__PURE__*/React.createElement("div", null, !syncUrl && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.borderLight
    },
    className: "border rounded px-4 py-3 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm font-medium mb-1"
  }, "Only this phone's entries"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs"
  }, "Sync isn't set up on this phone (see the gear icon by the header), so this is only showing entries saved here — not the rest of the crew's.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs font-medium mb-1.5"
  }, "Shed"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setTeamShedFilter(""),
    style: {
      backgroundColor: teamShedFilter === "" ? colors.accent : "transparent",
      color: teamShedFilter === "" ? "#1A1917" : colors.textMuted,
      borderColor: teamShedFilter === "" ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, "All sheds"), teamShedOptions.map(shed => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: shed,
    onClick: () => setTeamShedFilter(shed),
    style: {
      backgroundColor: teamShedFilter === shed ? colors.accent : "transparent",
      color: teamShedFilter === shed ? "#1A1917" : colors.textMuted,
      borderColor: teamShedFilter === shed ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, shed))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs font-medium mb-1.5"
  }, "Date range"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-2"
  }, [{
    key: "today",
    label: "Today"
  }, {
    key: "2days",
    label: "Today & yesterday"
  }].map(r => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: r.key,
    onClick: () => setTeamRangeFilter(r.key),
    style: {
      backgroundColor: teamRangeFilter === r.key ? colors.accent : "transparent",
      color: teamRangeFilter === r.key ? "#1A1917" : colors.textMuted,
      borderColor: teamRangeFilter === r.key ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, r.label))), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }), filteredTeamEntries.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border border-dashed rounded px-4 py-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "No entries match that filter — try a wider date range.")) : filteredTeamEntries.map(en => /*#__PURE__*/React.createElement("div", {
    key: `${en.shed}|${en.id}`,
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.border
    },
    className: "border rounded px-4 py-3 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-sm truncate"
  }, en.shed, " · ", en.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-0.5"
  }, formatTeamDate(new Date(en.timeSubmitted))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text,
      whiteSpace: "pre-line"
    },
    className: "text-sm mt-2 leading-snug"
  }, en.description), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-2"
  }, en.callStatus)))), tab === "parts" && /*#__PURE__*/React.createElement("div", null, (partsFlowUrl || syncUrl) && openOrdersState !== "unsupported" && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.border
    },
    className: "border rounded-lg px-4 pt-3 pb-1 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold"
  }, "Open orders", openOrdersState === "ok" ? ` (${openOrders.length})` : ""), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: fetchOpenOrders,
    style: {
      color: colors.accent
    },
    className: "text-xs font-semibold py-1"
  }, openOrdersState === "loading" ? "Loading…" : "Refresh")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-1"
  }, "Check here before ordering — it might already be on its way."), openOrdersState === "error" && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm py-2"
  }, "Couldn't load open orders. Tap Refresh to try again."), openOrdersState === "ok" && openOrders.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm py-2"
  }, "No open orders right now."), openOrdersState === "ok" && (showAllOpenOrders ? openOrders : openOrders.slice(0, 4)).map(o => /*#__PURE__*/React.createElement(OpenOrderRow, {
    key: o.ref || `${o.date}-${o.item}`,
    order: o
  })), openOrdersState === "ok" && openOrders.length > 4 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowAllOpenOrders(v => !v),
    style: {
      color: colors.accent,
      borderColor: colors.border
    },
    className: "w-full border-t text-xs font-semibold py-2.5"
  }, showAllOpenOrders ? "Show fewer" : `Show all ${openOrders.length}`)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm mb-4"
  }, "Date: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.text
    }
  }, todayNZ())), /*#__PURE__*/React.createElement(Field, {
    label: "Item Description",
    error: partsAttempted && !partsForm.item.trim(),
    hint: "Part name, number and size — whatever the supplier will need."
  }, /*#__PURE__*/React.createElement("textarea", {
    style: inputBase,
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current min-h-[90px]",
    placeholder: "e.g. 6205-2RS bearing, tipper belt drive",
    value: partsForm.item,
    onChange: e => setPartsForm({
      ...partsForm,
      item: e.target.value
    }),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "sentences"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Steel Type",
    hint: "Optional"
  }, /*#__PURE__*/React.createElement(EditableSelect, {
    value: partsForm.steelType,
    onChange: v => setPartsForm(prev => ({
      ...prev,
      steelType: v
    })),
    items: orderListItems("steelTypes"),
    onAdd: v => addOrderListItem("steelTypes", v),
    onRemove: v => removeOrderListItem("steelTypes", v),
    noun: "steel type",
    placeholder: "Select"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Qty",
    error: partsAttempted && !(Number(partsForm.qty) > 0)
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: "1",
    style: inputBase,
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current",
    placeholder: "1",
    value: partsForm.qty,
    onChange: e => setPartsForm({
      ...partsForm,
      qty: e.target.value
    })
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred Supplier",
    hint: "Optional"
  }, /*#__PURE__*/React.createElement(EditableSelect, {
    value: partsForm.supplier,
    onChange: v => setPartsForm(prev => ({
      ...prev,
      supplier: v
    })),
    items: orderListItems("suppliers"),
    onAdd: v => addOrderListItem("suppliers", v),
    onRemove: v => removeOrderListItem("suppliers", v),
    noun: "supplier"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "URGENT?"
  }, /*#__PURE__*/React.createElement(YesNo, {
    value: partsForm.urgent,
    onChange: v => setPartsForm({
      ...partsForm,
      urgent: v
    }),
    yesColor: colors.rust
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Code Department",
    hint: "Optional — the parts department can fill it in later"
  }, /*#__PURE__*/React.createElement(EditableSelect, {
    value: partsForm.codeDept,
    onChange: v => setPartsForm(prev => ({
      ...prev,
      codeDept: v
    })),
    items: orderListItems("codeDepts"),
    onAdd: v => addOrderListItem("codeDepts", v),
    onRemove: v => removeOrderListItem("codeDepts", v),
    noun: "code department"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    error: partsAttempted && !(partsForm.name || form.name)
  }, /*#__PURE__*/React.createElement(Select, {
    value: partsForm.name || form.name,
    onChange: v => {
      setPartsForm({
        ...partsForm,
        name: v
      });
      rememberLastUsed(v);
    },
    options: visibleNames,
    placeholder: "Select name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "block text-sm font-medium mb-1.5"
  }, "Photos ", /*#__PURE__*/React.createElement("span", {
    className: "font-normal"
  }, "(optional, up to ", MAX_ORDER_PHOTOS, ")")), partsPhotos.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-2 mb-2"
  }, partsPhotos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "relative"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.dataUrl,
    alt: `Attached photo ${i + 1}`,
    style: {
      borderColor: colors.border,
      aspectRatio: "1 / 1"
    },
    className: "w-full object-cover rounded border"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Remove photo ${i + 1}`,
    onClick: () => setPartsPhotos(prev => prev.filter(x => x.id !== p.id)),
    style: {
      backgroundColor: "rgba(26,25,23,0.85)",
      color: colors.text
    },
    className: "absolute top-1 right-1 w-7 h-7 rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(X, {
    size: 14
  }))))), partsPhotos.length < MAX_ORDER_PHOTOS && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => partsFileRef.current && partsFileRef.current.click(),
    disabled: partsAddingPhotos,
    style: {
      borderColor: colors.borderLight,
      color: colors.text,
      opacity: partsAddingPhotos ? 0.6 : 1
    },
    className: "w-full border border-dashed rounded py-3 text-sm font-medium flex items-center justify-center gap-2 active:opacity-70"
  }, /*#__PURE__*/React.createElement(Camera, {
    size: 16
  }), partsAddingPhotos ? "Adding photos…" : partsPhotos.length ? "Add more photos" : "Attach photos"), /*#__PURE__*/React.createElement("input", {
    ref: partsFileRef,
    type: "file",
    accept: "image/*",
    multiple: true,
    className: "hidden",
    onChange: e => {
      addPartsPhotos(e.target.files);
      e.target.value = "";
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => sendPartsOrder(),
    disabled: partsSending,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917",
      opacity: partsSending ? 0.7 : 1
    },
    className: "w-full rounded py-3 font-semibold text-sm active:opacity-80 transition-opacity"
  }, partsSending ? "Sending…" : "Send order"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-2 text-center"
  }, partsFlowUrl ? "Goes to the Parts Orders sheet and is emailed to the parts department" : "Not connected yet — tap the gear and paste the parts & chains link.")), tab === "chains" && /*#__PURE__*/React.createElement("div", null, !syncUrl && !partsFlowUrl && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.borderLight
    },
    className: "border rounded px-4 py-3 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm font-medium mb-1"
  }, "Only this phone's schedule"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs"
  }, "Sync isn't set up on this phone (see the gear icon by the header), so chains added or logged here won't show up on anyone else's.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: openSeasonSettings,
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.accent
    },
    className: "border-2 rounded-lg px-4 py-3 w-full mb-4 flex items-center gap-3 text-left"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: colors.accent,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "shrink-0"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text,
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800
    },
    className: "text-sm"
  }, "Season settings"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-0.5 truncate"
  }, "Kiwifruit ", seasonProfiles.kiwifruit.hoursPerDay, "hr/day", seasonProfiles.avocado.sheds && seasonProfiles.avocado.sheds.length > 0 ? ` · Avocado ${seasonProfiles.avocado.hoursPerDay}hr/day` : "", " — used to estimate chain wear"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs font-medium mb-1.5"
  }, "Shed"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setChainShedFilter(""),
    style: {
      backgroundColor: chainShedFilter === "" ? colors.accent : "transparent",
      color: chainShedFilter === "" ? "#1A1917" : colors.textMuted,
      borderColor: chainShedFilter === "" ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, "All sheds"), chainShedOptions.map(shed => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: shed,
    onClick: () => setChainShedFilter(shed),
    style: {
      backgroundColor: chainShedFilter === shed ? colors.accent : "transparent",
      color: chainShedFilter === shed ? "#1A1917" : colors.textMuted,
      borderColor: chainShedFilter === shed ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, shed))), !addingChain ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAddingChain(true),
    style: {
      borderColor: colors.accent,
      color: colors.accent
    },
    className: "border rounded px-3 py-2.5 text-sm font-semibold w-full mb-4"
  }, "+ Add a chain to track") : /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.borderLight
    },
    className: "border rounded px-4 py-4 mb-4"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Chain name"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    style: inputBase,
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current",
    placeholder: "e.g. Elevator drive chain",
    value: newChainName,
    onChange: e => setNewChainName(e.target.value),
    spellCheck: "true",
    autoCorrect: "on",
    autoCapitalize: "words"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Shed"
  }, /*#__PURE__*/React.createElement(Select, {
    value: newChainShed,
    onChange: v => setNewChainShed(v),
    options: SHEDS,
    placeholder: "Select Shed"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Area",
    hint: "Optional"
  }, /*#__PURE__*/React.createElement(Select, {
    value: newChainArea,
    onChange: v => setNewChainArea(v),
    options: AREAS,
    placeholder: "Select area"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Lube every"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: "1",
    style: inputBase,
    className: "w-20 shrink-0 border rounded px-2 py-2.5 text-sm outline-none focus:border-current",
    placeholder: "100",
    value: newChainIntervalValue,
    onChange: e => setNewChainIntervalValue(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, LUBE_INTERVAL_UNITS.map(u => {
    const active = newChainIntervalUnit === u.key;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: u.key,
      onClick: () => setNewChainIntervalUnit(u.key),
      style: {
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? colors.accent : colors.border
      },
      className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
    }, u.label);
  }))), newChainIntervalUnit !== "hrs" && newChainIntervalValue && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-1.5"
  }, "= ", Number(newChainIntervalValue) * (LUBE_INTERVAL_UNITS.find(u => u.key === newChainIntervalUnit) || {}).toHours, " estimated running hrs")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: addChain,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "flex-1 rounded py-2.5 text-sm font-semibold"
  }, "Add chain"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAddingChain(false),
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "flex-1 border rounded py-2.5 text-sm font-medium"
  }, "Cancel"))), filteredChains.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border border-dashed rounded px-4 py-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "No chains being tracked yet. Add one above to get started.")) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, filteredChains.map(c => {
    const status = chainHourStatus(c);
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        backgroundColor: colors.surface,
        borderColor: colors.border
      },
      className: "border rounded px-4 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-sm truncate"
    }, c.chainName), /*#__PURE__*/React.createElement("p", {
      style: {
        color: colors.textMuted
      },
      className: "text-xs mt-0.5"
    }, c.shed, c.area ? ` · ${c.area}` : "")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: status.color,
        borderColor: status.color,
        animation: status.animation
      },
      className: "text-[11px] font-semibold uppercase border rounded px-2 py-0.5 whitespace-nowrap"
    }, status.label)), /*#__PURE__*/React.createElement("p", {
      style: {
        color: colors.textMuted
      },
      className: "text-xs mt-2"
    }, "Last lubed ", new Date(c.lastLubed).toLocaleDateString(), c.lastLubedBy ? ` by ${c.lastLubedBy}` : "", c.intervalHours ? ` · every ${c.intervalHours} hrs` : ""), c.intervalHours > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: colors.border
      },
      className: "h-1.5 rounded-full mt-2 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${status.pct}%`,
        backgroundColor: status.color
      },
      className: "h-full rounded-full"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        color: colors.textMuted
      },
      className: "text-[11px] mt-1"
    }, "~", Math.round(status.used), " of ", c.intervalHours, " estimated hrs run since last lube")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderColor: colors.border
      },
      className: "flex items-center justify-between mt-3 pt-2.5 border-t"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => removeChain(c.id),
      style: {
        color: colors.rust
      },
      className: "text-xs font-medium"
    }, "Remove"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => logLubeNow(c.id),
      style: {
        backgroundColor: colors.accent,
        color: "#1A1917"
      },
      className: "rounded px-3 py-1.5 text-xs font-semibold"
    }, "Log lube today")));
  }))))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: toast.type === "error" ? colors.rust : colors.accentDim,
      color: toast.type === "error" ? colors.rust : colors.text
    },
    className: "fixed left-1/2 -translate-x-1/2 top-4 border rounded px-4 py-2.5 text-sm font-medium shadow-lg z-20 max-w-[90%] text-center"
  }, toast.msg), dupMatches && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "rgba(26,25,23,0.85)"
    },
    className: "fixed inset-0 z-40 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0",
    onClick: () => setDupMatches(null)
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "dup-title",
    onClick: e => e.stopPropagation(),
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.gold
    },
    className: "w-full max-w-sm border rounded-lg p-5"
  }, /*#__PURE__*/React.createElement("h2", {
    id: "dup-title",
    style: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800,
      color: colors.gold
    },
    className: "text-lg mb-1"
  }, "Already ordered?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm mb-3"
  }, dupMatches.length === 1 ? "This looks like an order that's still open:" : "These look like orders that are still open:"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border rounded px-3 mb-4"
  }, dupMatches.map(o => /*#__PURE__*/React.createElement(OpenOrderRow, {
    key: o.ref || `${o.date}-${o.item}`,
    order: o
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setDupMatches(null),
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "flex-1 rounded py-2.5 text-sm font-semibold"
  }, "Don't send"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setDupMatches(null);
      sendPartsOrder({
        skipDupCheck: true
      });
    },
    style: {
      borderColor: colors.border,
      color: colors.text
    },
    className: "flex-1 border rounded py-2.5 text-sm font-medium"
  }, "Send anyway")))), savedOverlay && /*#__PURE__*/React.createElement("div", {
    onClick: () => setSavedOverlay(false),
    style: {
      backgroundColor: "rgba(26,25,23,0.96)"
    },
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.accent,
      animation: "savedPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"
    },
    className: "w-20 h-20 rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1A1917",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5l5 5L20 6"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text,
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800
    },
    className: "text-xl"
  }, savedOverlayText), savedOverlaySubtext && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm px-8 text-center"
  }, savedOverlaySubtext)), showSyncSettings && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "rgba(26,25,23,0.85)"
    },
    className: "fixed inset-0 z-40 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0",
    onClick: () => setShowSyncSettings(false)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.border
    },
    className: "w-full max-w-sm border rounded-lg p-5 max-h-[85vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800
    },
    className: "text-lg mb-1"
  }, "Settings"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm mb-4"
  }, "Two links connect this phone to the crew's Excel files. Leave them blank and everything stays on this phone only."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold mb-1"
  }, "Excel log (Power Automate)"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-2"
  }, "Paste the flow's HTTP URL so every new entry is also added to the R&M Excel log. Set on each phone — treat it like a password."), /*#__PURE__*/React.createElement("input", {
    id: "flow-url",
    style: inputBase,
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current mb-1",
    placeholder: "Paste the Power Automate HTTP URL",
    value: flowUrlInput,
    onChange: e => setFlowUrlInput(e.target.value),
    autoCapitalize: "none",
    autoCorrect: "off",
    spellCheck: "false"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-4"
  }, flowUrl ? excelQueueCount ? `${excelQueueCount} ${excelQueueCount === 1 ? "entry" : "entries"} waiting to go to the Excel log — they'll send next time there's signal.` : "Connected. All entries have reached the Excel log." : "Not connected — entries only go to the shared log above."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold mb-1"
  }, "Parts, chains, lists & team (Power Automate)"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-2"
  }, "Paste the parts & chains flow's HTTP URL so orders go to the Parts Orders Excel sheet (and are emailed from there) and the chain lube schedule is shared through Excel. Set on each phone — treat it like a password."), /*#__PURE__*/React.createElement("input", {
    id: "parts-flow-url",
    style: inputBase,
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current mb-1",
    placeholder: "Paste the Power Automate HTTP URL",
    value: partsFlowUrlInput,
    onChange: e => setPartsFlowUrlInput(e.target.value),
    autoCapitalize: "none",
    autoCorrect: "off",
    spellCheck: "false"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-4"
  }, partsFlowUrl ? "Connected. Team activity, dropdown lists, chain lube and parts orders go through Excel." : "Not connected — team activity, lists and chains stay on this phone, and parts orders can't be sent."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: saveSettings,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "flex-1 rounded py-2.5 text-sm font-semibold"
  }, "Save"), syncUrl && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => syncNow(undefined, {
      team: true
    }),
    disabled: syncStatus === "syncing",
    style: {
      borderColor: colors.border,
      color: colors.text,
      opacity: syncStatus === "syncing" ? 0.6 : 1
    },
    className: "flex-1 border rounded py-2.5 text-sm font-medium"
  }, syncStatus === "syncing" ? "Syncing…" : "Sync now"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowSyncSettings(false),
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "border rounded py-2.5 px-4 text-sm font-medium"
  }, "Close")), syncUrl && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: clearTeamEntries,
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "w-full border rounded py-2.5 text-sm font-medium mt-2"
  }, "Clear team activity & resync"), syncUrl && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-1.5"
  }, "Wipes this phone's local Team Activity and re-pulls it from the R&M Excel log. Doesn't touch the log or the Log tab."))), showSeasonSettings && seasonDraft && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "rgba(26,25,23,0.85)"
    },
    className: "fixed inset-0 z-40 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0",
    onClick: () => setShowSeasonSettings(false)
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.border
    },
    className: "w-full max-w-sm border rounded-lg p-5 max-h-[85vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800
    },
    className: "text-lg mb-1"
  }, "Season settings"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-4"
  }, "Used to estimate how many hours each chain has actually run since its last lube, so Chain Lube can flag it based on real usage instead of a flat day count."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold mb-1"
  }, "Kiwifruit season"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-2"
  }, "Applies to every shed. Dates repeat every year — the year shown doesn't matter."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: seasonDraft.kiwifruit.start,
    onChange: e => setSeasonDraft(prev => ({
      ...prev,
      kiwifruit: {
        ...prev.kiwifruit,
        start: e.target.value
      }
    })),
    onClick: openDatePicker,
    style: dateInputStyle,
    className: "flex-1 min-w-0 border rounded px-3 py-2 text-sm outline-none focus:border-current"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "to"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: seasonDraft.kiwifruit.end,
    onChange: e => setSeasonDraft(prev => ({
      ...prev,
      kiwifruit: {
        ...prev.kiwifruit,
        end: e.target.value
      }
    })),
    onClick: openDatePicker,
    style: dateInputStyle,
    className: "flex-1 min-w-0 border rounded px-3 py-2 text-sm outline-none focus:border-current"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: "0",
    max: "24",
    value: seasonDraft.kiwifruit.hoursPerDay,
    onChange: e => setSeasonDraft(prev => ({
      ...prev,
      kiwifruit: {
        ...prev.kiwifruit,
        hoursPerDay: e.target.value
      }
    })),
    style: inputBase,
    className: "w-20 border rounded px-2 py-2 text-sm outline-none focus:border-current"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "hrs/day while in season")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-semibold mb-1"
  }, "Avocado season"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-2"
  }, "Only applies to the sheds picked below."), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: seasonDraft.avocado.start,
    onChange: e => setSeasonDraft(prev => ({
      ...prev,
      avocado: {
        ...prev.avocado,
        start: e.target.value
      }
    })),
    onClick: openDatePicker,
    style: dateInputStyle,
    className: "flex-1 min-w-0 border rounded px-3 py-2 text-sm outline-none focus:border-current"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "to"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: seasonDraft.avocado.end,
    onChange: e => setSeasonDraft(prev => ({
      ...prev,
      avocado: {
        ...prev.avocado,
        end: e.target.value
      }
    })),
    onClick: openDatePicker,
    style: dateInputStyle,
    className: "flex-1 min-w-0 border rounded px-3 py-2 text-sm outline-none focus:border-current"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: "0",
    max: "24",
    value: seasonDraft.avocado.hoursPerDay,
    onChange: e => setSeasonDraft(prev => ({
      ...prev,
      avocado: {
        ...prev.avocado,
        hoursPerDay: e.target.value
      }
    })),
    style: inputBase,
    className: "w-20 border rounded px-2 py-2 text-sm outline-none focus:border-current"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "hrs/day while in season")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-5"
  }, SHEDS.map(shed => {
    const active = seasonDraft.avocado.sheds.includes(shed);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: shed,
      onClick: () => toggleAvocadoShed(shed),
      style: {
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? colors.accent : colors.border
      },
      className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
    }, shed);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: saveSeasonProfiles,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "flex-1 rounded py-2.5 text-sm font-semibold"
  }, "Save"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowSeasonSettings(false),
    style: {
      color: colors.textMuted,
      borderColor: colors.border
    },
    className: "border rounded py-2.5 px-4 text-sm font-medium"
  }, "Close")))), showScanner && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#080908"
    },
    className: "fixed inset-0 z-40 flex flex-col items-center justify-center px-5"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: closeScanner,
    "aria-label": "Close scanner",
    style: {
      color: colors.text,
      backgroundColor: colors.surfaceRaised
    },
    className: "absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(X, {
    size: 18
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm font-medium mb-3 text-center"
  }, "Point your camera at an equipment tag"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.accent
    },
    className: "relative w-full max-w-xs aspect-square rounded-lg overflow-hidden border-2"
  }, /*#__PURE__*/React.createElement("video", {
    ref: videoRef,
    className: "w-full h-full object-cover",
    playsInline: true,
    muted: true
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "hidden"
  })), cameraError && /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.rust
    },
    className: "text-xs mt-3 text-center max-w-xs"
  }, cameraError), /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.borderLight
    },
    className: "mt-6 pt-5 border-t w-full max-w-xs text-center"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-2"
  }, "No tag to scan yet? This is a preview of what's coming once your parts are tagged."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      closeScanner();
      setShowPartPage(true);
    },
    style: {
      borderColor: colors.accent,
      color: colors.accent
    },
    className: "border rounded px-3 py-2 text-sm font-medium w-full mb-2"
  }, "Preview example: Motovario gear reducer"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowTestQR(v => !v),
    style: {
      color: colors.textMuted
    },
    className: "text-xs underline"
  }, showTestQR ? "Hide test QR code" : "Show a test QR code to scan"), showTestQR && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(DEMO_PART_QR_VALUE)}`,
    alt: "Test QR code",
    width: "140",
    height: "140",
    style: {
      borderRadius: "6px"
    }
  })))), showPartPage && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.bg
    },
    className: "fixed inset-0 z-40 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderColor: colors.border
    },
    className: "border-b px-5 pt-6 pb-4 flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.accent
    },
    className: "text-xs font-semibold uppercase mb-1"
  }, "Preview — not a real parts catalog yet"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800
    },
    className: "text-xl"
  }, "Motovario NMRV063 25:1")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPartPage(false),
    "aria-label": "Close",
    style: {
      color: colors.text,
      backgroundColor: colors.surfaceRaised
    },
    className: "w-9 h-9 rounded-full flex items-center justify-center shrink-0"
  }, /*#__PURE__*/React.createElement(X, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-5 py-5"
  }, /*#__PURE__*/React.createElement("img", {
    src: "part-nmrv063.png",
    alt: "Motovario NMRV063 worm gear reducer",
    className: "w-full rounded mb-4",
    style: {
      backgroundColor: colors.surface
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.border
    },
    className: "border rounded px-4 py-3 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs font-medium mb-2"
  }, "Specs"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: colors.text
    },
    className: "text-sm flex flex-col gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Type"), /*#__PURE__*/React.createElement("span", null, "Worm gear reducer")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Frame size"), /*#__PURE__*/React.createElement("span", null, "063")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Ratio"), /*#__PURE__*/React.createElement("span", null, "25:1")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Mounting"), /*#__PURE__*/React.createElement("span", null, "Right angle, flange mount")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Input shaft"), /*#__PURE__*/React.createElement("span", null, "24 mm (IEC 90 motor)")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Output bore"), /*#__PURE__*/React.createElement("span", null, "25 mm")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Flange diameter"), /*#__PURE__*/React.createElement("span", null, "140 mm")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    }
  }, "Housing"), /*#__PURE__*/React.createElement("span", null, "Aluminium"))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-3"
  }, "Specs shown are general figures for this model/ratio from the manufacturer's published data — always confirm against the nameplate on the actual unit before ordering.")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surface,
      borderColor: colors.border
    },
    className: "border rounded px-4 py-3 mb-4"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs font-medium mb-2"
  }, "Stock on hand (this phone only, for now)"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => adjustStock(-1),
    style: {
      borderColor: colors.border,
      color: colors.text
    },
    className: "w-10 h-10 border rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Minus, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.text
    },
    className: "text-2xl font-semibold w-10 text-center"
  }, partStock), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => adjustStock(1),
    style: {
      borderColor: colors.border,
      color: colors.text
    },
    className: "w-10 h-10 border rounded-full flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 16
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-3 text-center"
  }, "Nobody's updating this automatically yet — it's just a shared number for the crew to keep honest until real stock tracking exists.")), /*#__PURE__*/React.createElement("a", {
    href: `mailto:?subject=${encodeURIComponent("Order request: Motovario NMRV063 25:1 worm gear reducer")}&body=${encodeURIComponent("Hi,\n\nCould we get a quote/order for a Motovario NMRV063 25:1 worm gear reducer please.\n\nThanks")}`,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "block text-center rounded py-3 font-semibold text-sm"
  }, "Email supplier to order"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mt-2 text-center"
  }, "Opens a pre-filled email in your phone's mail app — nothing is ordered automatically."))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(MaintenanceLog, null));
