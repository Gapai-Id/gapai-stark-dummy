import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Bell, Home, User } from 'lucide-react';
import { StoryCard, AlumniStory } from './_unit/story-card';

const MOCK_STORIES: AlumniStory[] = [
  {
    id: '1',
    name: 'Ainul Lia',
    track: 'Japan Caregiver',
    country: 'Jepang',
    countryFlag: '🇯🇵',
    jobTitle: 'Caregiver',
    batchYear: '2024',
    photo: '/assets/images/alumni/ainul-lia.jpeg',
    excerpt: 'Awalnya saya ragu bisa beradaptasi di Jepang — bahasa, budaya, semuanya terasa asing. Tapi ternyata tiga bulan persiapan di STARK benar-benar membantu. Sekarang sudah tahun kedua saya di sini, dan saya tidak pernah menyesal.',
  },
  {
    id: '2',
    name: 'Rizki Ardianto',
    track: 'Japan Manufacturing',
    country: 'Jepang',
    countryFlag: '🇯🇵',
    jobTitle: 'Operator Produksi',
    batchYear: '2023',
    photo: '/assets/images/alumni/rizki-ardianto.jpeg',
    excerpt: 'Yang paling saya syukuri adalah persiapan dokumennya yang terstruktur. Saya tidak perlu pusing bolak-balik ngurusin berkas — semua sudah dipandu dari awal. Begitu berangkat, pikiran sudah tenang.',
  },
  {
    id: '3',
    name: 'Abi Ichsan',
    track: 'Japan Caregiver',
    country: 'Jepang',
    countryFlag: '🇯🇵',
    jobTitle: 'Caregiver',
    batchYear: '2024',
    photo: '/assets/images/alumni/abi-ichsan.jpeg',
    excerpt: 'Saya ingat pertama kali belajar bahasa Jepang — rasanya mustahil. Tapi pelan-pelan, dengan rutinitas belajar yang konsisten selama Activation, akhirnya bisa juga. Sekarang saya bahkan bisa ngobrol santai dengan lansia yang saya jaga.',
  },
  {
    id: '4',
    name: 'Siti Aminah',
    track: 'Taiwan Factory',
    country: 'Taiwan',
    countryFlag: '🇹🇼',
    jobTitle: 'Operator Pabrik',
    batchYear: '2024',
    excerpt: 'Banyak teman yang tanya, "emang bisa perempuan kerja di pabrik Taiwan?" Bisa banget. Lingkungan kerjanya sangat profesional dan gajinya jauh di atas ekspektasi saya.',
  },
  {
    id: '5',
    name: 'Nurul Hidayah',
    track: 'Japan Caregiver',
    country: 'Jepang',
    countryFlag: '🇯🇵',
    jobTitle: 'Caregiver',
    batchYear: '2024',
    excerpt: 'Hal terbaik dari pengalaman ini bukan hanya gajinya, tapi rasa percaya diri yang tumbuh. Saya membuktikan pada diri sendiri dan keluarga bahwa saya bisa mandiri dan sukses di luar negeri.',
  },
];

export default function AlumniStoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          <div className="px-4 pt-4 pb-8 space-y-2">
            <p className="text-sm text-white/60 font-sans">Inspirasi dari yang sudah sampai</p>
            <h1 className="text-2xl font-bold font-poppins text-white">Cerita Alumni</h1>
            <p className="text-sm text-white/60 font-sans">
              Mereka pernah di posisimu. Baca pengalaman mereka.
            </p>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28 space-y-4">
          {MOCK_STORIES.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* ── Bottom Nav ───────────────────────────────────── */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-lg mx-auto flex">
          <Link href="/dashboard" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <Home className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Beranda</span>
          </Link>
          <Link href="/profile" className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-gray-400">
            <User className="w-5 h-5" strokeWidth={2} />
            <span className="text-2xs font-poppins">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
