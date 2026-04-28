'use client';

import { useState, useRef } from 'react';
import { FileText, Upload, AlertCircle, Calendar } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface UploadSheetProps {
  isOpen: boolean;
  onClose: () => void;
  documentName: string;
  hasExpiry: boolean;
}

type UploadError = 'format' | 'connection' | null;

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

const ERROR_COPY: Record<Exclude<UploadError, null>, string> = {
  format: 'Format tidak didukung. Gunakan JPG, PNG, atau PDF.',
  connection: 'Upload gagal karena koneksi terputus — coba lagi.',
};

export function UploadSheet({ isOpen, onClose, documentName, hasExpiry }: UploadSheetProps) {
  const [file, setFile] = useState<File | null>(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [uploadError, setUploadError] = useState<UploadError>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (!ACCEPTED_TYPES.includes(selected.type)) {
      setUploadError('format');
      setFile(null);
      return;
    }
    setUploadError(null);
    setFile(selected);
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsUploading(false);
    handleClose();
  };

  const handleClose = () => {
    setFile(null);
    setExpiryDate('');
    setUploadError(null);
    setIsUploading(false);
    onClose();
  };

  const canSubmit = !!file && !isUploading && (!hasExpiry || !!expiryDate);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <SheetContent side="bottom" className="rounded-t-[28px] max-w-lg mx-auto" showCloseButton={false}>
        <SheetHeader className="px-4 pt-6 pb-0">
          <SheetTitle className="text-left font-poppins text-base font-semibold text-gray-800">
            Upload {documentName}
          </SheetTitle>
        </SheetHeader>

        <div className="px-4 pb-8 pt-4 space-y-4">
          {/* File picker area */}
          <div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                'w-full border-2 border-dashed rounded-2xl p-6 flex flex-col items-center gap-3 transition-colors',
                file
                  ? 'border-primary-400 bg-primary-50'
                  : 'border-gray-200 bg-gray-50 hover:border-primary-300 hover:bg-gray-100'
              )}
            >
              {file ? (
                <>
                  <FileText className="w-8 h-8 text-primary-600" />
                  <p className="text-sm font-medium font-poppins text-primary-700 text-center break-all px-2">{file.name}</p>
                  <p className="text-xs text-primary-500">Ketuk untuk ganti file</p>
                </>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400" />
                  <div className="space-y-1 text-center">
                    <p className="text-sm font-medium font-poppins text-gray-600">Ketuk untuk pilih file</p>
                    <p className="text-xs text-gray-400 font-sans">JPG, PNG, atau PDF</p>
                  </div>
                </>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            {uploadError && (
              <div className="flex items-start gap-2 mt-2.5">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 font-sans">{ERROR_COPY[uploadError]}</p>
              </div>
            )}
          </div>

          {/* Expiry date — conditional */}
          {hasExpiry && (
            <div className="space-y-2">
              <label className="block text-xs font-semibold font-poppins text-gray-600">
                Tanggal kedaluwarsa
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  value={expiryDate}
                  onChange={e => setExpiryDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm font-sans text-gray-700 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-white"
                />
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            type="button"
            onClick={handleUpload}
            disabled={!canSubmit}
            className="w-full py-3.5 rounded-2xl bg-primary-600 text-white font-semibold font-poppins text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
          >
            {isUploading ? 'Mengunggah...' : 'Upload Dokumen'}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={handleClose}
            className="w-full py-2 text-sm font-medium font-poppins text-gray-400 hover:text-gray-600 transition-colors"
          >
            Batal
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
