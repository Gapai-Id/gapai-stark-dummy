'use client';

import { useState } from 'react';
import { Pencil, Lock, ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ConfirmModal } from './confirm-modal';

type Section = 'personal' | 'education' | 'experience' | null;

const inputClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent';

const selectClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent appearance-none';

export function ProfileForm() {
  const [editing, setEditing] = useState<Section>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (section: Section) => {
    if (section === 'personal') {
      setShowConfirm(true);
    } else {
      commitSave();
    }
  };

  const commitSave = () => {
    setShowConfirm(false);
    setEditing(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-3 pb-8">
      {/* Save toast */}
      {saved && (
        <div className="fixed top-16 left-0 right-0 z-40 flex justify-center px-4">
          <div className="bg-gray-900 text-white text-sm font-poppins px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-lg">
            <Check className="w-4 h-4 text-primary-400" strokeWidth={2.5} />
            Perubahanmu sudah disimpan
          </div>
        </div>
      )}

      {/* Informasi Pribadi */}
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
            Informasi Pribadi
          </p>
          {editing !== 'personal' && (
            <button
              onClick={() => setEditing('personal')}
              className="flex items-center gap-1 text-primary-600 text-xs font-medium font-poppins"
            >
              <Pencil className="w-3.5 h-3.5" />
              Ubah
            </button>
          )}
        </div>

        <div className="px-4 py-4 space-y-4">
          {editing === 'personal' ? (
            <>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Nama lengkap</label>
                <input type="text" defaultValue="Sari Dewi" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Tanggal lahir</label>
                <input type="date" defaultValue="1998-05-14" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Domisili</label>
                <input type="text" defaultValue="Bandung" className={inputClass} />
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setEditing(null)}
                  className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold font-poppins text-gray-600"
                >
                  Batal
                </button>
                <button
                  onClick={() => handleSave('personal')}
                  className="flex-1 py-2.5 rounded-xl bg-primary-500 text-sm font-semibold font-poppins text-white"
                >
                  Simpan
                </button>
              </div>
            </>
          ) : (
            <>
              <Field label="Nama lengkap" value="Sari Dewi" />
              <Field label="Tanggal lahir" value="14 Mei 1998" />
              <Field label="Domisili" value="Bandung" />
            </>
          )}
        </div>
      </div>

      {/* Pendidikan */}
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
            Pendidikan
          </p>
          {editing !== 'education' && (
            <button
              onClick={() => setEditing('education')}
              className="flex items-center gap-1 text-primary-600 text-xs font-medium font-poppins"
            >
              <Pencil className="w-3.5 h-3.5" />
              Ubah
            </button>
          )}
        </div>
        <div className="px-4 py-4 space-y-4">
          {editing === 'education' ? (
            <>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Jenjang terakhir</label>
                <select defaultValue="D1 / D2 / D3" className={selectClass}>
                  {['SMA / SMK', 'D1 / D2 / D3', 'S1', 'S2 / S3'].map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Jurusan</label>
                <input type="text" defaultValue="Keperawatan" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Tahun lulus</label>
                <input type="number" defaultValue="2020" className={inputClass} />
              </div>
              <div className="flex gap-3 pt-1">
                <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold font-poppins text-gray-600">Batal</button>
                <button onClick={() => handleSave('education')} className="flex-1 py-2.5 rounded-xl bg-primary-500 text-sm font-semibold font-poppins text-white">Simpan</button>
              </div>
            </>
          ) : (
            <>
              <Field label="Jenjang terakhir" value="D3 Keperawatan" />
              <Field label="Tahun lulus" value="2020" />
            </>
          )}
        </div>
      </div>

      {/* Pengalaman Kerja */}
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
            Pengalaman Kerja
          </p>
          {editing !== 'experience' && (
            <button
              onClick={() => setEditing('experience')}
              className="flex items-center gap-1 text-primary-600 text-xs font-medium font-poppins"
            >
              <Pencil className="w-3.5 h-3.5" />
              Ubah
            </button>
          )}
        </div>
        <div className="px-4 py-4 space-y-4">
          {editing === 'experience' ? (
            <>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Bidang pekerjaan</label>
                <input type="text" defaultValue="Perawat" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-gray-600 font-poppins">Total pengalaman</label>
                <select defaultValue="1–2 tahun" className={selectClass}>
                  {['Kurang dari 1 tahun', '1–2 tahun', '3–5 tahun', 'Lebih dari 5 tahun'].map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-1">
                <button onClick={() => setEditing(null)} className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-semibold font-poppins text-gray-600">Batal</button>
                <button onClick={() => handleSave('experience')} className="flex-1 py-2.5 rounded-xl bg-primary-500 text-sm font-semibold font-poppins text-white">Simpan</button>
              </div>
            </>
          ) : (
            <>
              <Field label="Bidang pekerjaan" value="Perawat" />
              <Field label="Total pengalaman" value="1–2 tahun" />
            </>
          )}
        </div>
      </div>

      {/* Jalur Kerja — read only */}
      <div className="bg-white rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <Lock className="w-3.5 h-3.5 text-gray-400" />
          <p className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
            Jalur Kerja
          </p>
        </div>
        <div className="px-4 py-4 space-y-3">
          <Field label="Jalur aktif" value="Japan Caregiver 🇯🇵" />
          <div className="bg-gray-50 rounded-xl px-3 py-3 space-y-2">
            <p className="text-xs text-gray-500 font-roboto leading-relaxed">
              Jalur ini sudah dikonfirmasi melalui Asesmen. Jika ada perubahan yang diperlukan, hubungi Tim Gapai.
            </p>
            <Link href="/track-change" className="text-xs font-semibold font-poppins text-primary-600">
              Ajukan perubahan jalur →
            </Link>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal onConfirm={commitSave} onCancel={() => setShowConfirm(false)} />
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-0.5">
      <p className="text-xs text-gray-400 font-roboto">{label}</p>
      <p className="text-sm text-gray-800 font-roboto">{value}</p>
    </div>
  );
}
