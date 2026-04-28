'use client';

interface StepEducationProps {
  onNext: () => void;
}

const EDUCATION_LEVELS = ['SD', 'SMP', 'SMA / SMK', 'D1 / D2 / D3', 'S1', 'S2 / S3'];

export function StepEducation({ onNext }: StepEducationProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-xl font-semibold font-poppins text-gray-900 leading-snug">
          Latar belakang pendidikanmu
        </h2>
        <p className="text-sm text-gray-500 font-roboto">
          Ini membantu kami memahami fondasi yang sudah kamu miliki
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-600 font-poppins">
            Jenjang pendidikan terakhir
          </label>
          <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent appearance-none text-gray-700">
            <option value="">Pilih jenjang</option>
            {EDUCATION_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-600 font-poppins">
            Jurusan / Bidang studi
          </label>
          <input
            type="text"
            placeholder="Contoh: Keperawatan, Teknik Mesin"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-gray-600 font-poppins">Tahun lulus</label>
          <input
            type="number"
            placeholder="Contoh: 2022"
            min="1990"
            max="2030"
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
