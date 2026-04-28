'use client';

interface StepProfileProps {
  onNext: () => void;
}

export function StepProfile({ onNext }: StepProfileProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-xl font-semibold font-poppins text-gray-900 leading-snug">
          Perkenalkan dirimu
        </h2>
        <p className="text-sm text-gray-500 font-roboto">
          Informasi ini membantu kami mempersiapkan jalur yang tepat untukmu
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-600 font-poppins">Nama lengkap</label>
          <input
            type="text"
            placeholder="Nama sesuai KTP"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-600 font-poppins">Tanggal lahir</label>
          <input
            type="date"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-gray-700"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-600 font-poppins">Domisili</label>
          <input
            type="text"
            placeholder="Kota / Kabupaten"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-primary-500 text-white font-poppins font-semibold text-sm py-3.5 rounded-xl hover:bg-primary-600 transition-colors"
      >
        Lanjutkan
      </button>
    </div>
  );
}
