'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/design-system/Card';
import { Button } from '@/components/design-system/Button';
import { InputField } from '@/components/design-system/InputField';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const PROVINCES = ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten', 'Sumatera Utara', 'Sulawesi Selatan'];
const CITIES: Record<string, string[]> = {
  'DKI Jakarta': ['Jakarta Selatan', 'Jakarta Pusat', 'Jakarta Utara', 'Jakarta Timur', 'Jakarta Barat'],
  'Jawa Barat': ['Bandung', 'Bogor', 'Bekasi', 'Depok', 'Cimahi'],
  'Jawa Tengah': ['Semarang', 'Solo', 'Yogyakarta', 'Magelang'],
  'Jawa Timur': ['Surabaya', 'Malang', 'Sidoarjo', 'Gresik'],
  'Banten': ['Tangerang', 'Serang', 'Cilegon'],
  'Sumatera Utara': ['Medan', 'Binjai', 'Deli Serdang'],
  'Sulawesi Selatan': ['Makassar', 'Gowa', 'Maros'],
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 60 }, (_, i) => CURRENT_YEAR - 18 - i);

const ITEM_H = 44;

function WheelColumn({
  items,
  selected,
  onSelect,
  formatItem,
}: {
  items: number[];
  selected: number;
  onSelect: (v: number) => void;
  formatItem?: (v: number) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const idx = items.indexOf(selected);
    if (ref.current && idx >= 0) {
      ref.current.scrollTop = idx * ITEM_H;
    }
  }, []);

  const handleScroll = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (!ref.current) return;
      const idx = Math.round(ref.current.scrollTop / ITEM_H);
      const clamped = Math.max(0, Math.min(idx, items.length - 1));
      if (items[clamped] !== selected) onSelect(items[clamped]);
    }, 80);
  };

  return (
    <div className="relative flex-1 overflow-hidden" style={{ height: ITEM_H * 5 }}>
      <div
        className="absolute inset-x-0 top-0 z-10 pointer-events-none"
        style={{ height: ITEM_H * 2, background: 'linear-gradient(to bottom, white 20%, transparent 100%)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{ height: ITEM_H * 2, background: 'linear-gradient(to top, white 20%, transparent 100%)' }}
      />
      <div
        className="absolute inset-x-0 z-10 pointer-events-none border-t border-b border-[var(--neutral-300)]"
        style={{ top: ITEM_H * 2, height: ITEM_H }}
      />
      <div
        ref={ref}
        onScroll={handleScroll}
        className="absolute inset-0 overflow-y-scroll"
        style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none' } as React.CSSProperties}
      >
        <div style={{ height: ITEM_H * 2 }} />
        {items.map((item) => (
          <div
            key={item}
            className={`flex items-center justify-center select-none ${
              item === selected
                ? 'text-[17px] font-semibold text-[var(--text-primary)]'
                : 'text-[15px] text-[var(--text-muted)]'
            }`}
            style={{ height: ITEM_H, scrollSnapAlign: 'center' } as React.CSSProperties}
          >
            {formatItem ? formatItem(item) : item}
          </div>
        ))}
        <div style={{ height: ITEM_H * 2 }} />
      </div>
    </div>
  );
}

function DatePickerSheet({
  day, month, year,
  onDayChange, onMonthChange, onYearChange,
  onDone, onCancel,
}: {
  day: number; month: number; year: number;
  onDayChange: (v: number) => void;
  onMonthChange: (v: number) => void;
  onYearChange: (v: number) => void;
  onDone: () => void;
  onCancel: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onCancel}
      />
      {/* Sheet */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] z-50 bg-white rounded-t-[20px] shadow-xl">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[var(--neutral-300)]" />
        </div>
        {/* Toolbar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-subtle)]">
          <button
            onClick={onCancel}
            className="text-[15px] text-[var(--text-muted)]"
          >
            Batal
          </button>
          <p className="text-[14px] font-semibold text-[var(--text-primary)]">Tanggal Lahir</p>
          <button
            onClick={onDone}
            className="text-[15px] font-semibold text-[var(--text-brand)]"
          >
            Selesai
          </button>
        </div>
        {/* Wheels */}
        <div className="flex px-4 py-2">
          <WheelColumn
            items={DAYS}
            selected={day}
            onSelect={onDayChange}
            formatItem={(d) => String(d).padStart(2, '0')}
          />
          <WheelColumn
            items={MONTHS}
            selected={month}
            onSelect={onMonthChange}
            formatItem={(m) => MONTH_NAMES[m - 1]}
          />
          <WheelColumn
            items={YEARS}
            selected={year}
            onSelect={onYearChange}
          />
        </div>
        {/* Safe area spacer */}
        <div className="h-6" />
      </div>
    </>
  );
}

export default function RegisterDemographics() {
  const [birthDay, setBirthDay] = useState(1);
  const [birthMonth, setBirthMonth] = useState(1);
  const [birthYear, setBirthYear] = useState(CURRENT_YEAR - 25);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDay, setTempDay] = useState(1);
  const [tempMonth, setTempMonth] = useState(1);
  const [tempYear, setTempYear] = useState(CURRENT_YEAR - 25);
  const [dateSelected, setDateSelected] = useState(false);
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [ktpSameAsDomicile, setKtpSameAsDomicile] = useState(true);
  const [ktpProvince, setKtpProvince] = useState('');
  const [ktpCity, setKtpCity] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const openDatePicker = () => {
    setTempDay(birthDay);
    setTempMonth(birthMonth);
    setTempYear(birthYear);
    setShowDatePicker(true);
  };

  const handleDateDone = () => {
    setBirthDay(tempDay);
    setBirthMonth(tempMonth);
    setBirthYear(tempYear);
    setDateSelected(true);
    setShowDatePicker(false);
  };

  const handleDateCancel = () => {
    setShowDatePicker(false);
  };

  const handleProvinceChange = (val: string) => {
    setProvince(val);
    setCity('');
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!dateSelected) newErrors.birthDate = 'Tanggal lahir wajib diisi';
    if (!gender) newErrors.gender = 'Jenis kelamin wajib dipilih';
    if (!province) newErrors.province = 'Provinsi wajib dipilih';
    if (!city) newErrors.city = 'Kota wajib dipilih';
    if (!ktpSameAsDomicile && !ktpProvince) newErrors.ktpProvince = 'Provinsi KTP wajib dipilih';
    if (!ktpSameAsDomicile && !ktpCity) newErrors.ktpCity = 'Kota KTP wajib dipilih';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Submit demographics → R-04', {
      gender, province, city,
      birthDate: `${birthDay} ${MONTH_NAMES[birthMonth - 1]} ${birthYear}`,
    });
  };

  return (
    <div className="min-h-screen bg-[var(--surface-page)] max-w-[375px] mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[60px] flex items-center px-5">
        <button
          onClick={() => console.log('Go back')}
          className="flex items-center gap-1 text-[14px] text-[var(--text-brand)]"
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <main className="flex-1 px-5 pb-10 space-y-5">
        <div>
          <h2 className="mb-1">Tentang Kamu</h2>
          <p className="text-[14px] leading-[22px] text-[var(--text-secondary)]">
            Beberapa detail untuk melengkapi profilmu.
          </p>
        </div>

        <Card variant="default">
          <div className="space-y-4">
            {/* Date field — tappable row */}
            <div>
              <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">
                Tanggal Lahir
              </label>
              <button
                onClick={openDatePicker}
                className={`w-full h-[52px] px-4 flex items-center justify-between border-[1.5px] rounded-[8px] transition-colors ${
                  errors.birthDate ? 'border-red-400' : 'border-[var(--border-default)]'
                } bg-white`}
              >
                <span className={`text-[14px] ${dateSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                  {dateSelected
                    ? `${birthDay} ${MONTH_NAMES[birthMonth - 1]} ${birthYear}`
                    : 'Pilih tanggal lahir'}
                </span>
                <ChevronRight size={18} className="text-[var(--text-muted)]" />
              </button>
              {errors.birthDate && (
                <p className="text-[12px] text-red-500 mt-1">{errors.birthDate}</p>
              )}
            </div>

            <div>
              <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-2">
                Jenis Kelamin
              </label>
              <div className="flex gap-3">
                {(['L', 'P'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 h-[52px] rounded-[8px] border-[1.5px] font-medium transition-colors ${
                      gender === g
                        ? 'border-[var(--border-brand)] bg-[var(--brand-green-50)] text-[var(--text-brand)]'
                        : 'border-[var(--border-default)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {g === 'L' ? 'Laki-laki' : 'Perempuan'}
                  </button>
                ))}
              </div>
              {errors.gender && (
                <p className="text-[12px] text-red-500 mt-1">{errors.gender}</p>
              )}
            </div>
          </div>
        </Card>

        {/* Domicile */}
        <div>
          <h4 className="mb-3">Domisili Saat Ini</h4>
          <Card variant="default">
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">Provinsi</label>
                <select
                  value={province}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  className={`w-full h-[52px] px-4 bg-white border-[1.5px] rounded-[8px] text-[14px] focus:border-[var(--border-brand)] focus:outline-none ${errors.province ? 'border-red-400' : 'border-[var(--border-default)]'}`}
                >
                  <option value="">Pilih provinsi</option>
                  {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.province && <p className="text-[12px] text-red-500 mt-1">{errors.province}</p>}
              </div>

              <div>
                <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">Kota/Kabupaten</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!province}
                  className={`w-full h-[52px] px-4 bg-white border-[1.5px] rounded-[8px] text-[14px] focus:border-[var(--border-brand)] focus:outline-none disabled:opacity-50 ${errors.city ? 'border-red-400' : 'border-[var(--border-default)]'}`}
                >
                  <option value="">Pilih kota</option>
                  {(CITIES[province] || []).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.city && <p className="text-[12px] text-red-500 mt-1">{errors.city}</p>}
              </div>
            </div>
          </Card>
        </div>

        {/* KTP Address */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4>Alamat KTP</h4>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={ktpSameAsDomicile}
                onChange={(e) => setKtpSameAsDomicile(e.target.checked)}
                className="w-4 h-4 rounded accent-[var(--brand-green-500)]"
              />
              <span className="text-[13px] text-[var(--text-secondary)]">Sama dengan domisili</span>
            </label>
          </div>

          {!ktpSameAsDomicile && (
            <Card variant="default">
              <div className="space-y-4">
                <div>
                  <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">Provinsi KTP</label>
                  <select
                    value={ktpProvince}
                    onChange={(e) => { setKtpProvince(e.target.value); setKtpCity(''); }}
                    className={`w-full h-[52px] px-4 bg-white border-[1.5px] rounded-[8px] text-[14px] focus:border-[var(--border-brand)] focus:outline-none ${errors.ktpProvince ? 'border-red-400' : 'border-[var(--border-default)]'}`}
                  >
                    <option value="">Pilih provinsi</option>
                    {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.ktpProvince && <p className="text-[12px] text-red-500 mt-1">{errors.ktpProvince}</p>}
                </div>

                <div>
                  <label className="block text-[12px] leading-[18px] text-[var(--text-muted)] mb-1">Kota/Kabupaten KTP</label>
                  <select
                    value={ktpCity}
                    onChange={(e) => setKtpCity(e.target.value)}
                    disabled={!ktpProvince}
                    className={`w-full h-[52px] px-4 bg-white border-[1.5px] rounded-[8px] text-[14px] focus:border-[var(--border-brand)] focus:outline-none disabled:opacity-50 ${errors.ktpCity ? 'border-red-400' : 'border-[var(--border-default)]'}`}
                  >
                    <option value="">Pilih kota</option>
                    {(CITIES[ktpProvince] || []).map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.ktpCity && <p className="text-[12px] text-red-500 mt-1">{errors.ktpCity}</p>}
                </div>
              </div>
            </Card>
          )}
        </div>

        <Button variant="primary" onClick={handleSubmit}>
          Lanjutkan
        </Button>
      </main>

      {/* Date Picker Bottom Sheet */}
      {showDatePicker && (
        <DatePickerSheet
          day={tempDay}
          month={tempMonth}
          year={tempYear}
          onDayChange={setTempDay}
          onMonthChange={setTempMonth}
          onYearChange={setTempYear}
          onDone={handleDateDone}
          onCancel={handleDateCancel}
        />
      )}
    </div>
  );
}
