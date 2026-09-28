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
const colors = {
  bg: "#1B1D1C",
  surface: "#232624",
  surfaceRaised: "#2B2E2B",
  border: "#3A3D39",
  borderLight: "#484C46",
  text: "#EEEFE9",
  textMuted: "#9A9C92",
  accent: "#8FAE3E",
  accentDim: "#566B29",
  gold: "#C68A3D",
  rust: "#BC5238",
  green: "#7A9D6E",
  greenDim: "#3E4A38"
};
const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@600;800&family=Inter:wght@400;500;600&display=swap');
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
  0%, 100% { color: #C68A3D; border-color: #C68A3D; }
  50% { color: #9A9C92; border-color: #3A3D39; }
}
@keyframes flashRed {
  0%, 100% { color: #BC5238; border-color: #BC5238; }
  50% { color: #9A9C92; border-color: #3A3D39; }
}
@keyframes savedPop {
  0% { transform: scale(0.4); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
html, body { overflow-anchor: none; }`;
const STORAGE_KEY = "wrenchbook:entries";
const ID_KEY = "wrenchbook:nextId";
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
const LUBE_INTERVALS = [{
  label: "Weekly",
  days: 7
}, {
  label: "Fortnightly",
  days: 14
}, {
  label: "Monthly",
  days: 30
}, {
  label: "3-Monthly",
  days: 90
}];
const DEMO_PART_QR_VALUE = "shedlog:part:nmrv063-25";
const CUSTOM_AREAS_KEY = "wrenchbook:customAreas";
const CUSTOM_SUBCATS_KEY = "wrenchbook:customSubCategories";
const CUSTOM_NAMES_KEY = "wrenchbook:customNames";
const REMOVED_NAMES_KEY = "wrenchbook:removedNames";
const CUSTOM_CONTRACTORS_KEY = "wrenchbook:customContractors";
const REMOVED_CONTRACTORS_KEY = "wrenchbook:removedContractors";
// Google Sheets sync — off by default. The crew pastes their own Apps
// Script Web App URL into the in-app Sync settings panel; nothing is sent
// anywhere until that's configured. Only the maintenance-log fields you can
// see on the form are ever sent — no device info, no location, no analytics.
const SYNC_URL_KEY = "wrenchbook:syncUrl";
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
      backgroundColor: "#1A1917",
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
      backgroundColor: "#1A1917",
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
  disabled
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2",
    style: {
      opacity: disabled ? 0.45 : 1
    }
  }, ["Yes", "No"].map(opt => {
    const active = value === opt;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: opt,
      disabled: disabled,
      onClick: () => onChange(opt),
      style: {
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? colors.accent : colors.border,
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
const inputBase = {
  backgroundColor: "#1A1917",
  borderColor: colors.border,
  color: colors.text
};
function MaintenanceLog() {
  const [tab, setTab] = useState("new");
  const [slideDir, setSlideDir] = useState("right");
  const [formResetKey, setFormResetKey] = useState(0);

  // ---- Google Sheets sync ----
  // Deliberately simple and manual: no service worker, no background
  // fetch/notification permissions, no polling interval. A sync only ever
  // fires while this page is open and running — on load, right after a
  // save, when you switch to Log/Team Activity, or when you tap "Sync now".
  // Close the app and it goes completely silent; nothing runs in the
  // background and nothing is sent anywhere until a Sheets URL is set below.
  const [syncUrl, setSyncUrl] = useState("");
  const [showSyncSettings, setShowSyncSettings] = useState(false);
  const [syncUrlInput, setSyncUrlInput] = useState("");
  const [syncStatus, setSyncStatus] = useState("unconfigured"); // unconfigured | syncing | synced | offline | error
  const [lastSyncedAt, setLastSyncedAt] = useState(null);
  const syncingRef = useRef(false);
  const TAB_ORDER = ["new", "log", "team", "chains"];
  const touchStart = useRef(null);
  const contentRef = useRef(null);
  function goToTab(next) {
    const curIndex = TAB_ORDER.indexOf(tab);
    const nextIndex = TAB_ORDER.indexOf(next);
    if (nextIndex === curIndex) return;
    setSlideDir(nextIndex > curIndex ? "right" : "left");
    setTab(next);
    // Pick up anything the rest of the crew has logged while we're here —
    // still only while the app is open, never in the background.
    if (next === "log" || next === "team" || next === "chains") syncNow();
  }
  const [entries, setEntries] = useState([]);
  const [teamEntries, setTeamEntries] = useState([]);
  const [teamLastSeenCount, setTeamLastSeenCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [toast, setToast] = useState(null);
  const [savedOverlay, setSavedOverlay] = useState(false);
  const [nextId, setNextId] = useState(380);
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
  const [teamRangeFilter, setTeamRangeFilter] = useState("week");
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
  const [newChainInterval, setNewChainInterval] = useState(30);
  const [newChainIntervalCustom, setNewChainIntervalCustom] = useState("");
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
      let loadedSyncUrl = "";
      try {
        const syncUrlRes = await window.storage.get(SYNC_URL_KEY, false);
        if (syncUrlRes && syncUrlRes.value) {
          loadedSyncUrl = syncUrlRes.value;
          setSyncUrl(loadedSyncUrl);
          setSyncUrlInput(loadedSyncUrl);
        }
      } catch (e) {
        // no sync url saved yet
      }
      setLoading(false);
      // One sync on open, only if a Sheets URL has actually been set up.
      if (loadedSyncUrl) syncNow(loadedSyncUrl);
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
    const intervalDays = newChainInterval === "custom" ? Number(newChainIntervalCustom) : newChainInterval;
    if (!intervalDays || intervalDays <= 0) missing.push("Lube interval");
    if (missing.length) {
      showToast(`Still needed: ${missing.join(", ")}`, "error");
      return;
    }
    const today = new Date();
    const due = new Date(today);
    due.setDate(due.getDate() + intervalDays);
    const chain = {
      id: `${Date.now()}`,
      chainName: newChainName.trim(),
      shed: newChainShed,
      area: newChainArea,
      intervalDays,
      lastLubed: today.toISOString(),
      lastLubedBy: form.name,
      nextDue: due.toISOString(),
      synced: false
    };
    await persistChains([chain, ...chains]);
    setNewChainName("");
    setNewChainShed("");
    setNewChainArea("");
    setNewChainInterval(30);
    setNewChainIntervalCustom("");
    setAddingChain(false);
    showToast("Chain added to the schedule");
    syncNow();
  }
  async function logLubeNow(id) {
    const today = new Date();
    const next = chains.map(c => {
      if (c.id !== id) return c;
      const due = new Date(today);
      due.setDate(due.getDate() + c.intervalDays);
      return {
        ...c,
        lastLubed: today.toISOString(),
        lastLubedBy: form.name,
        nextDue: due.toISOString(),
        synced: false
      };
    });
    await persistChains(next);
    showToast("Logged — nice work");
    syncNow();
  }
  async function removeChain(id) {
    await persistChains(chains.filter(c => c.id !== id));
    // Best-effort — tells the shared sheet this chain is gone too, so it
    // doesn't reappear on the next sync/pull from another phone.
    if (syncUrl) {
      try {
        await fetch(syncUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify({
            kind: "removeChain",
            id
          })
        });
      } catch (e) {
        // if this fails, the chain may come back on the next sync from
        // wherever it's still on record — just remove it again
      }
    }
  }
  function daysUntil(dateStr) {
    const d = new Date(dateStr);
    d.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((d - today) / (1000 * 60 * 60 * 24));
  }
  function chainStatus(c) {
    const d = daysUntil(c.nextDue);
    if (d < 0) return {
      label: `Overdue by ${Math.abs(d)}d`,
      color: colors.rust,
      animation: "flashRed 1.4s ease-in-out infinite"
    };
    if (d === 0) return {
      label: "Due today",
      color: colors.gold,
      animation: "flashGold 1.4s ease-in-out infinite"
    };
    if (d <= 7) return {
      label: `Due in ${d}d`,
      color: colors.gold,
      animation: "flashGold 1.4s ease-in-out infinite"
    };
    return {
      label: `Due in ${d}d`,
      color: colors.green,
      animation: undefined
    };
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

  // ---- Google Sheets sync ----
  // Only ever called explicitly (on open, after a save, on switching to
  // Log/Team Activity, or the "Sync now" button) — never on a timer, and
  // never from anything that could run while the app is closed. If no
  // Sheets URL has been set up, this does nothing and sends nothing.
  async function syncTeamEntries(url) {
    // This is the ONLY entry-related state that ever talks to the sheet.
    // The Log tab's `entries`/STORAGE_KEY is a separate, purely local
    // record and is never read or written here.
    let current = teamEntries;
    try {
      const res = await window.storage.get(TEAM_ENTRIES_KEY, false);
      current = res ? JSON.parse(res.value) : teamEntries;
    } catch (e) {
      // fall back to whatever's already in memory
    }

    // Push anything saved locally that hasn't reached the sheet yet.
    for (const en of current) {
      if (en.synced) continue;
      try {
        const {
          synced,
          ...payload
        } = en;
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        });
        en.synced = true;
      } catch (e) {
        // stays unsynced — picked up again next time this runs
      }
    }

    // Pull the shared log and merge in anything this phone doesn't have.
    const res = await fetch(url, {
      method: "GET"
    });
    const data = await res.json();
    const remoteEntries = Array.isArray(data.entries) ? data.entries : [];
    const byId = new Map(current.map(en => [String(en.id), en]));
    remoteEntries.forEach(re => {
      const key = String(re.id);
      if (!byId.has(key)) byId.set(key, {
        ...re,
        synced: true
      });
    });
    const merged = Array.from(byId.values()).sort((a, b) => new Date(b.timeSubmitted) - new Date(a.timeSubmitted));
    setTeamEntries(merged);
    await window.storage.set(TEAM_ENTRIES_KEY, JSON.stringify(merged), false);
  }
  async function syncNow(urlOverride) {
    const url = urlOverride || syncUrl;
    if (!url) {
      setSyncStatus("unconfigured");
      return;
    }
    if (syncingRef.current) return;
    syncingRef.current = true;
    setSyncStatus("syncing");

    // Each of these three is independently try/caught, so a hiccup on one
    // (say the Chains tab isn't set up yet) never blocks the others from
    // still going through. `navigator.onLine` is deliberately NOT checked
    // here — it's unreliable in installed/PWA contexts and can get stuck
    // reporting "offline" even with a working connection, which would
    // otherwise silently block every sync attempt. We just try the fetch
    // and let a real network failure surface on its own.
    let hadError = false;
    try {
      await syncTeamEntries(url);
    } catch (e) {
      hadError = true;
    }
    try {
      await pullLists();
    } catch (e) {
      hadError = true;
    }
    try {
      await syncChains(url);
    } catch (e) {
      hadError = true;
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
    if (!syncUrl) return;
    try {
      await fetch(syncUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          kind: "list",
          key,
          value
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
  async function pullLists() {
    if (!syncUrl) return;
    try {
      const res = await fetch(`${syncUrl}?type=lists`, {
        method: "GET"
      });
      const data = await res.json();
      const remote = data.lists || {};
      const nextCustomAreas = mergeListArrays(customAreas, remote.customAreas);
      setCustomAreas(nextCustomAreas);
      window.storage.set(CUSTOM_AREAS_KEY, JSON.stringify(nextCustomAreas), false);
      const nextRemovedAreas = mergeListArrays(removedAreas, remote.removedAreas);
      setRemovedAreas(nextRemovedAreas);
      window.storage.set(REMOVED_AREAS_KEY, JSON.stringify(nextRemovedAreas), false);
      const nextCustomSubCats = mergeSubCatMaps(customSubCats, remote.customSubCats);
      setCustomSubCats(nextCustomSubCats);
      window.storage.set(CUSTOM_SUBCATS_KEY, JSON.stringify(nextCustomSubCats), false);
      const nextRemovedSubCats = mergeSubCatMaps(removedSubCats, remote.removedSubCats);
      setRemovedSubCats(nextRemovedSubCats);
      window.storage.set(REMOVED_SUBCATS_KEY, JSON.stringify(nextRemovedSubCats), false);
      const nextCustomNames = mergeListArrays(customNames, remote.customNames);
      setCustomNames(nextCustomNames);
      window.storage.set(CUSTOM_NAMES_KEY, JSON.stringify(nextCustomNames), false);
      const nextRemovedNames = mergeListArrays(removedNames, remote.removedNames);
      setRemovedNames(nextRemovedNames);
      window.storage.set(REMOVED_NAMES_KEY, JSON.stringify(nextRemovedNames), false);
      const nextCustomContractors = mergeListArrays(customContractors, remote.customContractors);
      setCustomContractors(nextCustomContractors);
      window.storage.set(CUSTOM_CONTRACTORS_KEY, JSON.stringify(nextCustomContractors), false);
      const nextRemovedContractors = mergeListArrays(removedContractors, remote.removedContractors);
      setRemovedContractors(nextRemovedContractors);
      window.storage.set(REMOVED_CONTRACTORS_KEY, JSON.stringify(nextRemovedContractors), false);
    } catch (e) {
      // lists just stay as they are locally until the next successful sync
    }
  }
  async function syncChains(url) {
    try {
      let currentChains = chains;
      try {
        const chainsRes = await window.storage.get(CHAINS_KEY, false);
        currentChains = chainsRes ? JSON.parse(chainsRes.value) : chains;
      } catch (e) {
        // fall back to whatever's already in memory
      }

      // Push any new chain, or any chain whose lube was just logged.
      for (const c of currentChains) {
        if (c.synced) continue;
        try {
          const {
            synced,
            ...payload
          } = c;
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
              kind: "chain",
              ...payload
            })
          });
          c.synced = true;
        } catch (e) {
          // stays unsynced — picked up again next time this runs
        }
      }

      // Pull the shared schedule. For a chain that exists on both sides,
      // whichever has the more recent "last lubed" wins — that's always
      // the true, most up-to-date status regardless of which phone it
      // came from.
      const res = await fetch(`${url}?type=chains`, {
        method: "GET"
      });
      const data = await res.json();
      const remoteChains = Array.isArray(data.chains) ? data.chains : [];
      const byId = new Map(currentChains.map(c => [String(c.id), c]));
      remoteChains.forEach(rc => {
        const key = String(rc.id);
        const local = byId.get(key);
        if (!local || new Date(rc.lastLubed) > new Date(local.lastLubed)) {
          byId.set(key, {
            ...rc,
            synced: true
          });
        }
      });
      const merged = Array.from(byId.values());
      setChains(merged);
      await window.storage.set(CHAINS_KEY, JSON.stringify(merged), false);
    } catch (e) {
      // chains just stay as they are locally until the next successful sync
    }
  }
  async function saveSyncUrl() {
    const trimmed = syncUrlInput.trim();
    setSyncUrl(trimmed);
    try {
      await window.storage.set(SYNC_URL_KEY, trimmed, false);
    } catch (e) {
      // non-fatal
    }
    setShowSyncSettings(false);
    if (trimmed) {
      showToast("Sync connected");
      syncNow(trimmed);
    } else {
      setSyncStatus("unconfigured");
      showToast("Sync turned off — entries stay on this phone only");
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
      id: nextId,
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
  const filteredChains = (chainShedFilter ? chains.filter(c => c.shed === chainShedFilter) : chains).slice().sort((a, b) => new Date(a.nextDue) - new Date(b.nextDue));

  // Team Activity reads its own separate, synced record — `teamEntries` —
  // never the Log tab's local-only `entries`. A save writes one copy to
  // each; only this one ever pushes/pulls to the shared sheet.
  const teamShedOptions = Array.from(new Set([...SHEDS, ...teamEntries.map(en => en.shed)])).filter(Boolean);
  const teamRangeStart = (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    if (teamRangeFilter === "day") return d;
    if (teamRangeFilter === "week") {
      d.setDate(d.getDate() - 6);
      return d;
    }
    if (teamRangeFilter === "month") {
      d.setDate(d.getDate() - 29);
      return d;
    }
    if (teamRangeFilter === "year") {
      return new Date(d.getFullYear(), 0, 1);
    }
    return null; // custom/all — handled separately below
  })();
  const filteredTeamEntries = teamEntries.filter(en => {
    if (teamShedFilter && en.shed !== teamShedFilter) return false;
    if (teamRangeFilter === "all") return true;
    const enDate = new Date(en.timeSubmitted);
    if (teamRangeFilter === "custom") {
      const enDay = new Date(enDate);
      enDay.setHours(0, 0, 0, 0);
      if (teamCustomStart) {
        const start = new Date(teamCustomStart);
        start.setHours(0, 0, 0, 0);
        if (enDay < start) return false;
      }
      if (teamCustomEnd) {
        const end = new Date(teamCustomEnd);
        end.setHours(0, 0, 0, 0);
        if (enDay > end) return false;
      }
      return true;
    }
    return enDate >= teamRangeStart;
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
      fontFamily: "Inter, sans-serif"
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
  }, syncStatus === "unconfigured" && "Saved on this phone — tap the sync icon to connect the shared log.", syncStatus === "syncing" && "Syncing…", syncStatus === "synced" && `Synced${lastSyncedAt ? " · " + lastSyncedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }) : ""}`, syncStatus === "offline" && "No connection — saved on this phone, will sync when back online.", syncStatus === "error" && "Couldn't reach the shared log — saved on this phone.")), !showScanner && !showPartPage && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setSyncUrlInput(syncUrl);
      setShowSyncSettings(true);
    },
    "aria-label": "Sync settings",
    style: {
      borderColor: colors.border,
      color: colors.textMuted
    },
    className: "w-9 h-9 border rounded-full flex items-center justify-center active:opacity-70 transition-opacity"
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
  }].map(t => {
    const chainAlert = t.key === "chains" ? chains.some(c => daysUntil(c.nextDue) < 0) ? "overdue" : chains.some(c => {
      const d = daysUntil(c.nextDue);
      return d >= 0 && d <= 7;
    }) ? "due" : null : null;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => goToTab(t.key),
      style: {
        color: chainAlert ? undefined : tab === t.key ? colors.accent : colors.textMuted,
        borderColor: tab === t.key ? colors.accent : "transparent",
        animation: chainAlert ? chainAlert === "overdue" ? "flashRed 1.4s ease-in-out infinite" : "flashGold 1.4s ease-in-out infinite" : undefined
      },
      className: "py-3 mr-6 text-sm font-semibold border-b-2 -mb-px transition-colors whitespace-nowrap shrink-0"
    }, t.label);
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
  }, /*#__PURE__*/React.createElement("span", null, "Repairs: ", en.repairsReq), /*#__PURE__*/React.createElement("span", null, "Tools: ", en.tools), /*#__PURE__*/React.createElement("span", null, "Clean: ", en.clean)))))))), tab === "team" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: colors.surfaceRaised,
      borderColor: colors.borderLight
    },
    className: "border rounded px-4 py-3 mb-4"
  }, syncUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm font-medium mb-1"
  }, "Everyone's entries"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs"
  }, "Synced from the shared log — includes entries from any phone connected to it, not just this one.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.text
    },
    className: "text-sm font-medium mb-1"
  }, "Only this phone's entries"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs"
  }, "Sync isn't set up on this phone (see the gear icon by the header), so this is only showing entries saved here — not the rest of the crew's."))), /*#__PURE__*/React.createElement("p", {
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
    key: "day",
    label: "Day"
  }, {
    key: "week",
    label: "Week"
  }, {
    key: "month",
    label: "Month"
  }, {
    key: "year",
    label: "This year"
  }, {
    key: "all",
    label: "All time"
  }, {
    key: "custom",
    label: "Custom date"
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
  }, r.label))), teamRangeFilter === "custom" && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: teamCustomStart,
    onChange: e => setTeamCustomStart(e.target.value),
    style: inputBase,
    className: "flex-1 border rounded px-3 py-2 text-sm outline-none focus:border-current"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "to"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: teamCustomEnd,
    onChange: e => setTeamCustomEnd(e.target.value),
    style: inputBase,
    className: "flex-1 border rounded px-3 py-2 text-sm outline-none focus:border-current"
  })), teamRangeFilter !== "custom" && /*#__PURE__*/React.createElement("div", {
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
    key: en.id,
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
  }, en.callStatus)))), tab === "chains" && /*#__PURE__*/React.createElement("div", null, !syncUrl && /*#__PURE__*/React.createElement("div", {
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
  }, "Sync isn't set up on this phone (see the gear icon by the header), so chains added or logged here won't show up on anyone else's.")), /*#__PURE__*/React.createElement("p", {
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
    className: "flex flex-wrap gap-2"
  }, LUBE_INTERVALS.map(opt => {
    const active = newChainInterval === opt.days;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: opt.label,
      onClick: () => setNewChainInterval(opt.days),
      style: {
        backgroundColor: active ? colors.accent : "transparent",
        color: active ? "#1A1917" : colors.textMuted,
        borderColor: active ? colors.accent : colors.border
      },
      className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
    }, opt.label);
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setNewChainInterval("custom"),
    style: {
      backgroundColor: newChainInterval === "custom" ? colors.accent : "transparent",
      color: newChainInterval === "custom" ? "#1A1917" : colors.textMuted,
      borderColor: newChainInterval === "custom" ? colors.accent : colors.border
    },
    className: "border rounded px-3 py-1.5 text-sm font-medium transition-colors"
  }, "Custom")), newChainInterval === "custom" && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    inputMode: "numeric",
    min: "1",
    style: inputBase,
    className: "w-20 shrink-0 border rounded px-2 py-2.5 text-sm outline-none focus:border-current",
    placeholder: "30",
    value: newChainIntervalCustom,
    onChange: e => setNewChainIntervalCustom(e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm"
  }, "days"))), /*#__PURE__*/React.createElement("div", {
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
    const status = chainStatus(c);
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
    }, "Last lubed ", new Date(c.lastLubed).toLocaleDateString(), c.lastLubedBy ? ` by ${c.lastLubedBy}` : "", " · every ", c.intervalDays, " days"), /*#__PURE__*/React.createElement("div", {
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
  }, toast.msg), savedOverlay && /*#__PURE__*/React.createElement("div", {
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
  }, "Entry saved")), showSyncSettings && /*#__PURE__*/React.createElement("div", {
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
    className: "w-full max-w-sm border rounded-lg p-5"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Archivo, sans-serif",
      fontWeight: 800
    },
    className: "text-lg mb-1"
  }, "Sync"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-sm mb-4"
  }, "Paste the Google Sheets link from IT/setup to share entries with the rest of the crew. Leave this blank and entries stay on this phone only — nothing is sent anywhere."), /*#__PURE__*/React.createElement("input", {
    style: inputBase,
    className: "w-full border rounded px-3 py-2.5 text-sm outline-none focus:border-current mb-2",
    placeholder: "Paste the Apps Script Web App URL",
    value: syncUrlInput,
    onChange: e => setSyncUrlInput(e.target.value),
    autoCapitalize: "none",
    autoCorrect: "off",
    spellCheck: "false"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: colors.textMuted
    },
    className: "text-xs mb-4"
  }, "Only saves the same fields already on this form — nothing else about you or this phone is shared."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: saveSyncUrl,
    style: {
      backgroundColor: colors.accent,
      color: "#1A1917"
    },
    className: "flex-1 rounded py-2.5 text-sm font-semibold"
  }, "Save"), syncUrl && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => syncNow(),
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
  }, "Close")))), showScanner && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "#0E0F0D"
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