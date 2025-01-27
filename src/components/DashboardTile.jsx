export default function DashboardTile({ label, number, description }) {
  return (
    <div className="m-2 p-4 text-center bg-white border rounded-md shadow">
      <label className="mb-4 font-bold text-2xl">{label}</label>
      <p className="font-bold text-6xl bg-gradient-to-b from-black to-slate-400 text-transparent bg-clip-text">
        {number}
      </p>
      <p className="">{description}</p>
    </div>
  );
}
