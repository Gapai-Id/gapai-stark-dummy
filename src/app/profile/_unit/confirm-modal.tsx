'use client';

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({ onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-6">
      <div className="bg-white rounded-2xl p-5 w-full max-w-lg space-y-4">
        <div className="space-y-1.5">
          <p className="text-base font-semibold font-poppins text-gray-900">
            Konfirmasi perubahan
          </p>
          <p className="text-sm text-gray-500 font-roboto leading-relaxed">
            Perubahan nama atau tanggal lahir memengaruhi dokumenmu. Pastikan data yang kamu masukkan sesuai dengan KTP.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold font-poppins text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-primary-500 text-sm font-semibold font-poppins text-white hover:bg-primary-600 transition-colors"
          >
            Ya, simpan
          </button>
        </div>
      </div>
    </div>
  );
}
