// Makes window.storage work in a normal browser by backing it with
// localStorage, using the same shape the app already expects. This means
// the exact same app code works both inside Claude and as a standalone
// installed app -- no changes needed to the app itself.
(function () {
  if (window.storage) return;

  function k(key, shared) {
    return (shared ? "shedlog:shared:" : "shedlog:user:") + key;
  }

  window.storage = {
    async get(key, shared) {
      const raw = localStorage.getItem(k(key, shared));
      if (raw === null) return null;
      return { key, value: raw, shared: !!shared };
    },
    async set(key, value, shared) {
      localStorage.setItem(k(key, shared), value);
      return { key, value, shared: !!shared };
    },
    async delete(key, shared) {
      localStorage.removeItem(k(key, shared));
      return { key, deleted: true, shared: !!shared };
    },
    async list(prefix, shared) {
      const pfx = k(prefix || "", shared);
      const stripLen = (shared ? "shedlog:shared:" : "shedlog:user:").length;
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const full = localStorage.key(i);
        if (full && full.startsWith(pfx)) keys.push(full.slice(stripLen));
      }
      return { keys, prefix, shared: !!shared };
    },
  };
})();
