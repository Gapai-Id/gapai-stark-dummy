'use client'

import React, { useState } from 'react'
import { ArrowLeft, Briefcase, GraduationCap, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/design-system/Button'

const inputClass = 'w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-[12px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-400)]'
const selectClass = 'w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-[12px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--brand-green-400)] appearance-none'
const labelClass = 'text-[12px] font-semibold text-[var(--text-secondary)] block mb-1.5'

export default function AssessmentExperienceFlow() {
  const [hasNoWork, setHasNoWork] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col pb-10 max-w-[375px] mx-auto">
      <div className="bg-white border-b border-[var(--border-subtle)] sticky top-0 z-10">
        <div className="h-[60px] flex items-center px-5 gap-3">
          <button
            type="button"
            onClick={() => console.log('Back to certificate upload')}
            className="text-[var(--text-muted)]"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-[14px] font-semibold text-[var(--text-primary)]">Riwayat Pengalaman</span>
        </div>
      </div>

      <div className="px-5 pt-6 space-y-6">
        <div>
          <h1 className="text-[20px] font-bold leading-[28px] text-[var(--text-primary)] mb-1.5">
            Ceritakan pengalamanmu
          </h1>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Ini membantu kami memahami latar belakangmu sebelum assessment dimulai. Jawab sejujurnya.
          </p>
        </div>

        {/* No work experience toggle */}
        <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={hasNoWork}
              onChange={e => setHasNoWork(e.target.checked)}
              className="w-5 h-5 rounded accent-[var(--brand-green-600)]"
            />
            <span className="text-[14px] text-[var(--text-secondary)]">
              Saya belum punya pengalaman kerja
            </span>
          </label>
        </div>

        {!hasNoWork && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-[var(--brand-green-600)]" />
              <h2 className="text-[14px] font-semibold text-[var(--text-primary)]">Pengalaman Kerja</h2>
            </div>

            <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[var(--brand-green-600)]">Pekerjaan 1</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className={labelClass}>Nama Perusahaan</label>
                  <input defaultValue="Hotel Santika Jakarta" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Jabatan / Posisi</label>
                  <input defaultValue="Housekeeping Staff" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Negara</label>
                  <input defaultValue="Indonesia" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Industri</label>
                  <select defaultValue="hospitality" className={selectClass}>
                    <option value="hospitality">Perhotelan & Pariwisata</option>
                    <option value="manufacturing">Manufaktur & Pabrik</option>
                    <option value="healthcare">Kesehatan & Perawatan</option>
                    <option value="construction">Konstruksi & Bangunan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Apa yang kamu kerjakan sehari-hari?</label>
                  <textarea
                    rows={2}
                    defaultValue="Membersihkan kamar tamu, mengganti linen, memastikan standar kebersihan hotel terpenuhi"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 border-2 border-dashed border-neutral-200 rounded-[16px] flex items-center justify-center gap-2 text-[14px] font-semibold text-[var(--text-muted)]"
              onClick={() => console.log('Add another job')}
            >
              <Plus size={16} />
              Tambah Pekerjaan Lain
            </button>
          </div>
        )}

        {/* Education section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-[var(--brand-green-600)]" />
            <h2 className="text-[14px] font-semibold text-[var(--text-primary)]">Pendidikan</h2>
          </div>

          <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4 space-y-3">
            <span className="text-[12px] font-semibold text-[var(--brand-green-600)]">Pendidikan 1</span>
            <div>
              <label className={labelClass}>Nama Sekolah / Institusi</label>
              <input defaultValue="SMK Pariwisata Paramitha" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Jenjang Pendidikan</label>
              <select defaultValue="sma_smk" className={selectClass}>
                <option value="sma_smk">SMA / SMK / Sederajat</option>
                <option value="diploma">Diploma (D1–D3)</option>
                <option value="bachelor">Sarjana (S1)</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Tahun Lulus</label>
              <select defaultValue="2021" className={selectClass}>
                {[2024, 2023, 2022, 2021, 2020, 2019, 2018].map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Button variant="primary" onClick={() => console.log('Save experience → AS-09 Certificate')}>
          Simpan & Lanjutkan
        </Button>
      </div>
    </div>
  )
}
