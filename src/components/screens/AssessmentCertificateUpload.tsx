'use client'

import React, { useState } from 'react'
import { FileText, Plus, Trash2, Upload, ChevronDown } from 'lucide-react'
import { Button } from '@/components/design-system/Button'

const MOCK_CERTIFICATES = [
  {
    id: '1',
    name: 'JLPT N4',
    issuingInstitution: 'Japan Foundation',
    category: 'Bahasa',
    issueDate: '2024-03-15',
    fileName: 'jlpt-n4-certificate.pdf',
    fileSize: 512000,
  },
]

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function AssessmentCertificateUpload() {
  const [showForm, setShowForm] = useState(false)
  const [certs, setCerts] = useState(MOCK_CERTIFICATES)
  const isPreAssessmentFlow = true

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Hero */}
      <div className="bg-[var(--brand-green-800)] px-5 pt-12 pb-10">
        <div className="text-center">
          <div className="text-[40px] mb-3">📄</div>
          <h1 className="text-[20px] font-bold leading-[28px] text-white mb-2">
            Lengkapi Profilmu dengan Sertifikat
          </h1>
          <p className="text-[14px] text-white/75 leading-[22px]">
            Sertifikat membantu employer mengenal kualifikasimu lebih baik. Langkah ini opsional.
          </p>
        </div>
      </div>

      <div className="flex-1 -mt-5 rounded-t-[28px] bg-neutral-50">
        <div className="px-5 pt-6 pb-28 space-y-4">
          {/* Info pill */}
          <div className="flex items-center gap-2 bg-blue-50 rounded-[10px] px-3 py-2.5">
            <span className="text-blue-500 text-base">ℹ️</span>
            <p className="text-[12px] text-blue-700 leading-[18px]">
              Sertifikat tidak mempengaruhi hasil assessment. Ini hanya dokumentasi pendukung untuk employer.
            </p>
          </div>

          {/* Existing certificates */}
          {certs.map(cert => (
            <div key={cert.id} className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[10px] bg-[var(--brand-green-50)] flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-[var(--brand-green-600)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-[var(--text-primary)] truncate">{cert.name}</p>
                  <p className="text-[12px] text-[var(--text-muted)] mt-0.5">{cert.issuingInstitution}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[var(--brand-green-100)] text-[var(--brand-green-700)]">
                      {cert.category}
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      {formatDate(cert.issueDate)}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] mt-1 truncate">
                    {cert.fileName} · {formatFileSize(cert.fileSize)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCerts(prev => prev.filter(c => c.id !== cert.id))}
                  className="text-neutral-300 hover:text-red-500 transition-colors shrink-0 mt-0.5"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Upload form or add button */}
          {showForm ? (
            <div className="bg-white rounded-[16px] border border-[var(--border-subtle)] p-4 space-y-3">
              <p className="text-[14px] font-semibold text-[var(--text-primary)]">Tambah Sertifikat</p>
              <div>
                <label className="text-[12px] font-semibold text-[var(--text-secondary)] block mb-1.5">Kategori *</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-[12px] text-[14px] appearance-none">
                    <option>Bahasa</option>
                    <option>Skill & Vokasional</option>
                    <option>Sertifikat Pelatihan</option>
                    <option>Lainnya</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-[12px] font-semibold text-[var(--text-secondary)] block mb-1.5">Nama Sertifikat *</label>
                <input placeholder="Contoh: JLPT N3, Sertifikat Caregiver" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-[12px] text-[14px]" />
              </div>
              <div>
                <label className="text-[12px] font-semibold text-[var(--text-secondary)] block mb-1.5">File Sertifikat *</label>
                <button
                  type="button"
                  className="w-full py-3 px-4 border-2 border-dashed border-neutral-200 rounded-[10px] flex items-center gap-3 text-left"
                >
                  <Upload size={18} className="text-neutral-400" />
                  <div>
                    <p className="text-[14px] text-neutral-500">Pilih file</p>
                    <p className="text-[12px] text-neutral-400">PDF, JPG, PNG · Maks. 5MB</p>
                  </div>
                </button>
              </div>
              <div className="flex gap-2 pt-1">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 rounded-[10px] border border-neutral-200 text-[14px] font-semibold text-neutral-500">
                  Batal
                </button>
                <button type="button" className="flex-1 py-3 rounded-[10px] bg-[var(--brand-green-600)] text-white text-[14px] font-semibold">
                  Upload
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 border-2 border-dashed border-neutral-200 rounded-[16px] flex items-center justify-center gap-2 text-[14px] font-semibold text-[var(--text-muted)]"
            >
              <Plus size={16} />
              Tambah Sertifikat
            </button>
          )}

          {/* CTAs */}
          <div className="space-y-3 pt-2">
            <Button
              variant="primary"
              onClick={() => console.log(isPreAssessmentFlow ? 'Continue to AS-01 Entry Briefing' : 'Go to Home')}
            >
              {isPreAssessmentFlow ? 'Lanjut ke Assessment' : 'Selesai'}
            </Button>
            <button
              type="button"
              onClick={() => console.log('Skip certificate upload')}
              className="w-full py-2.5 text-[14px] text-[var(--text-muted)]"
            >
              {isPreAssessmentFlow ? 'Lewati, lanjut ke assessment' : 'Lewati untuk sekarang'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
