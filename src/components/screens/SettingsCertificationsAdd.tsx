'use client'

import React, { useRef, useState } from 'react';
import { ArrowLeft, Upload, FileText, X } from 'lucide-react';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';
import { InputField } from '@/components/design-system/InputField';

type Category = 'language' | 'skill' | 'license';

const categories: { value: Category; label: string }[] = [
  { value: 'language', label: 'Bahasa' },
  { value: 'skill', label: 'Keahlian' },
  { value: 'license', label: 'Lisensi' },
];

const placeholdersByCategory: Record<Category, { name: string; level: string }> = {
  language: {
    name: 'Contoh: JLPT, TOEFL, IELTS',
    level: 'Contoh: N4, 500, 6.5',
  },
  skill: {
    name: 'Contoh: Sertifikat Caregiver',
    level: 'Contoh: Tingkat Lanjut',
  },
  license: {
    name: 'Contoh: SIM A, SIM B',
    level: 'Contoh: Aktif s/d 2028',
  },
};

export default function SettingsCertificationsAdd() {
  const [category, setCategory] = useState<Category>('language');
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [issuer, setIssuer] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSave = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Nama sertifikat wajib diisi';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Save certification → back to S-03', { category, name, level, issuer, file: uploadedFile?.name });
  };

  const placeholder = placeholdersByCategory[category];

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border-subtle)]">
        <div className="h-[60px] flex items-center px-5">
          <button
            onClick={() => console.log('Go back to S-03')}
            className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      <main className="flex-1 px-5 py-4 space-y-6 pb-10">
        <div>
          <h2 className="mb-1">Tambah Sertifikat</h2>
          <p className="text-[14px] text-[var(--text-secondary)]">
            Sertifikat yang kamu tambahkan akan memperkuat profilmu
          </p>
        </div>

        {/* Category selector */}
        <div>
          <p className="text-[13px] font-semibold text-[var(--text-secondary)] mb-2">Kategori</p>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => {
                  setCategory(cat.value);
                  setErrors({});
                }}
                className={`flex-1 py-2 rounded-[8px] text-[13px] font-semibold border transition-colors ${
                  category === cat.value
                    ? 'bg-[var(--brand-green-500)] text-white border-[var(--brand-green-500)]'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-default)] hover:border-[var(--brand-green-300)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form fields */}
        <Card variant="default">
          <div className="space-y-4">
            <InputField
              label="Nama sertifikat"
              type="text"
              value={name}
              onChange={val => {
                setName(val);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }}
              placeholder={placeholder.name}
              error={errors.name}
            />

            <InputField
              label="Level / Nilai (opsional)"
              type="text"
              value={level}
              onChange={setLevel}
              placeholder={placeholder.level}
            />

            <InputField
              label="Lembaga penerbit (opsional)"
              type="text"
              value={issuer}
              onChange={setIssuer}
              placeholder="Contoh: Japan Foundation, Kemenkes"
            />
          </div>
        </Card>

        {/* File upload */}
        <div>
          <p className="text-[13px] font-semibold text-[var(--text-secondary)] mb-2">
            Dokumen sertifikat <span className="font-normal text-[var(--text-muted)]">(opsional)</span>
          </p>

          {uploadedFile ? (
            <div className="flex items-center gap-3 px-4 py-3 bg-[var(--brand-green-50)] rounded-[10px] border border-[var(--brand-green-200)]">
              <FileText size={20} className="text-[var(--brand-green-600)] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[var(--brand-green-700)] truncate">
                  {uploadedFile.name}
                </p>
                <p className="text-[12px] text-[var(--text-muted)]">
                  {(uploadedFile.size / 1024).toFixed(0)} KB
                </p>
              </div>
              <button onClick={handleRemoveFile} className="text-[var(--text-muted)] hover:text-[var(--text-primary)] flex-shrink-0">
                <X size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex flex-col items-center gap-2 px-4 py-5 border-2 border-dashed border-[var(--border-default)] rounded-[10px] hover:border-[var(--brand-green-400)] hover:bg-[var(--brand-green-50)] transition-colors"
            >
              <Upload size={24} className="text-[var(--text-muted)]" />
              <div className="text-center">
                <p className="text-[13px] font-medium text-[var(--text-primary)]">Upload file sertifikat</p>
                <p className="text-[12px] text-[var(--text-muted)] mt-0.5">PDF, JPG, atau PNG · maks. 5 MB</p>
              </div>
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <Button variant="primary" onClick={handleSave}>
          Simpan Sertifikat
        </Button>
      </main>
    </div>
  );
}
