"use client";

type AddOn = { label: string; icon?: string };

export default function AddOnsChips({ addOns }: { addOns: AddOn[] }) {
  if (!addOns || addOns.length === 0) return null;
  const onToggle = () => {
    const root = document.getElementById("addons-chips");
    if (!root) return;
    const selected = Array.from(root.querySelectorAll('button[aria-pressed="true"] span')).map((s) => s.textContent).filter(Boolean) as string[];
    const desc = document.getElementById("description") as HTMLTextAreaElement | null;
    if (desc) {
      const base = desc.value.replace(/\n?Add-ons:.*/i, '').trim();
      const addonsLine = selected.length ? `\nAdd-ons: ${selected.join(', ')}` : '';
      desc.value = base + addonsLine;
    }
  };
  return (
    <div id="addons-chips" className="mt-6 flex flex-wrap gap-2">
      {addOns.map(({ label, icon }) => (
        <button
          key={label}
          type="button"
          className="select-none inline-flex items-center gap-1 px-3 py-2 rounded-full ring-1 ring-slate-200 bg-slate-50 text-slate-700 text-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          aria-pressed={false}
          onClick={(e) => {
            const btn = e.currentTarget;
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', String(!pressed));
            btn.classList.toggle('bg-rose-50');
            btn.classList.toggle('text-rose-700');
            onToggle();
          }}
        >
          {icon ? <span aria-hidden>{icon}</span> : null}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
