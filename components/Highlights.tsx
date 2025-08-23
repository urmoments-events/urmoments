export default function Highlights() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Why choose us</h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <li className="rounded-xl bg-white p-5 shadow ring-1 ring-slate-200">
            <div className="text-2xl">🎉</div>
            <h3 className="mt-2 font-semibold">Theme-ready packages</h3>
            <p className="text-sm text-slate-600">Pick a theme, we handle the rest.</p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow ring-1 ring-slate-200">
            <div className="text-2xl">🧹</div>
            <h3 className="mt-2 font-semibold">Set-up & clean-up included</h3>
            <p className="text-sm text-slate-600">We arrive on time and leave it spotless.</p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow ring-1 ring-slate-200">
            <div className="text-2xl">⏰</div>
            <h3 className="mt-2 font-semibold">On time, every time</h3>
            <p className="text-sm text-slate-600">Reliable and friendly professionals.</p>
          </li>
          <li className="rounded-xl bg-white p-5 shadow ring-1 ring-slate-200">
            <div className="text-2xl">📸</div>
            <h3 className="mt-2 font-semibold">Add-ons: photography, cake & more</h3>
            <p className="text-sm text-slate-600">One stop for everything you need.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}



