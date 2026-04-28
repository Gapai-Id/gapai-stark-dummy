import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { ChevronLeft, Bell, Home, User, MapPin, Briefcase, Calendar } from 'lucide-react';
import { AlumniStory } from '../_unit/story-card';

interface FullStory extends AlumniStory {
  fullContent: string;
}

const MOCK_FULL_STORIES: FullStory[] = [
  {
    id: '1',
    name: 'Ainul Lia',
    track: 'Japan Caregiver',
    country: 'Jepang',
    countryFlag: '🇯🇵',
    jobTitle: 'Caregiver',
    batchYear: '2024',
    photo: '/assets/images/alumni/ainul-lia.jpeg',
    excerpt: 'Awalnya saya ragu bisa beradaptasi di Jepang — bahasa, budaya, semuanya terasa asing.',
    fullContent: `Awalnya saya ragu bisa beradaptasi di Jepang — bahasa, budaya, semuanya terasa asing. Saya bahkan sempat hampir mundur di minggu kedua Activation karena merasa tidak siap.

Tapi ada satu momen yang mengubah saya. Saya membaca cerita alumni di STARK — seorang perempuan dari Jawa Timur yang juga awalnya takut, dan sekarang sudah tiga tahun bekerja di Osaka. Saya pikir, kalau dia bisa, kenapa saya tidak?

Saya mulai lebih serius mengikuti semua konten di STARK — video budaya kerja, artikel tentang komunikasi, sampai webinar dengan alumni. Perlahan, rasa takut itu berubah jadi rasa siap.

Sekarang sudah tahun kedua saya di Jepang. Saya bekerja di sebuah panti jompo di Nagoya, merawat lansia yang sangat menghargai dedikasi saya. Gaji saya dua kali lipat dari apa yang pernah saya bayangkan bisa saya dapatkan.

Yang ingin saya sampaikan ke kamu yang sedang baca ini: proses persiapannya memang tidak mudah, tapi setiap langkah kecil yang kamu ambil selama Activation itu nyata. Jangan berhenti di tengah jalan.`,
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
    excerpt: 'Yang paling saya syukuri adalah persiapan dokumennya yang terstruktur.',
    fullContent: `Yang paling saya syukuri adalah persiapan dokumennya yang terstruktur. Saya tidak perlu pusing bolak-balik ngurusin berkas — semua sudah dipandu dari awal.

Jujur, saya orangnya tidak suka hal-hal administratif. Tapi Document Tracker di STARK benar-benar membantu — saya tahu persis dokumen apa yang sudah beres dan apa yang masih kurang. Tidak ada yang terlewat.

Begitu berangkat, pikiran sudah tenang. Tidak ada pikiran "aduh, lupa bawa apa ya." Semua sudah verified sebelum saya naik pesawat.

Sekarang saya sudah hampir dua tahun di pabrik elektronik di Fukushima. Lingkungan kerjanya disiplin tapi adil. Saya bahkan sudah bisa nabung untuk kirim uang ke keluarga setiap bulan.

Kalau ada yang tanya apa satu saran terpenting dari saya: jangan anggap remeh proses dokumennya. Itu fondasi segalanya.`,
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
    excerpt: 'Saya ingat pertama kali belajar bahasa Jepang — rasanya mustahil.',
    fullContent: `Saya ingat pertama kali belajar bahasa Jepang — rasanya mustahil. Huruf hiragana, katakana, belum lagi kanji. Saya sempat berpikir mungkin saya salah jalur.

Tapi saya paksa diri konsisten — setiap hari minimal satu konten di STARK, walaupun cuma 10 menit. Pelan-pelan, pola itu membentuk kebiasaan. Dan kebiasaan itu yang akhirnya membawa saya sampai ke sini.

Sekarang saya sudah dua setengah tahun bekerja di Osaka sebagai caregiver. Saya bisa ngobrol santai dengan lansia yang saya jaga — bukan hanya instruksi kerja, tapi cerita-cerita dari mereka. Itu pengalaman yang tidak bisa dinilai dengan uang.

Satu hal yang saya pelajari: konsistensi lebih kuat dari intensitas. Tidak perlu belajar 5 jam sehari. Tapi harus setiap hari.`,
  },
  {
    id: '4',
    name: 'Siti Aminah',
    track: 'Taiwan Factory',
    country: 'Taiwan',
    countryFlag: '🇹🇼',
    jobTitle: 'Operator Pabrik',
    batchYear: '2024',
    excerpt: 'Banyak teman yang tanya, "emang bisa perempuan kerja di pabrik Taiwan?"',
    fullContent: `Banyak teman yang tanya, "emang bisa perempuan kerja di pabrik Taiwan?" Bisa banget.

Lingkungan kerjanya sangat profesional. Saya bekerja di pabrik semikonduktor di Taichung — sebagian besar rekan kerja saya perempuan juga. Manajemennya menghargai kami, dan hak-hak pekerja benar-benar dilindungi.

Gaji saya jauh di atas ekspektasi. Setelah potong akomodasi dan makan, saya masih bisa menabung cukup signifikan setiap bulannya.

Yang bikin saya betah bukan hanya soal uang. Saya belajar banyak tentang disiplin, efisiensi, dan cara kerja yang sistematis. Skill-skill ini saya yakin akan berguna ke depannya, apapun yang saya lakukan setelah kontrak selesai.

Kalau ada yang ragu karena gender, jangan. Yang menentukan keberhasilanmu di sana adalah persiapan dan mentalmu — bukan jenis kelamin.`,
  },
  {
    id: '5',
    name: 'Nurul Hidayah',
    track: 'Japan Caregiver',
    country: 'Jepang',
    countryFlag: '🇯🇵',
    jobTitle: 'Caregiver',
    batchYear: '2024',
    excerpt: 'Hal terbaik dari pengalaman ini bukan hanya gajinya, tapi rasa percaya diri yang tumbuh.',
    fullContent: `Hal terbaik dari pengalaman ini bukan hanya gajinya, tapi rasa percaya diri yang tumbuh.

Saya tumbuh di keluarga yang sederhana. Mimpi pergi ke luar negeri terasa sangat jauh. Tapi setelah ikut program Gapai, langkah demi langkah mimpi itu jadi nyata.

Yang paling saya ingat dari masa Activation adalah event-event yang diadakan Growth. Ada satu webinar tentang persiapan mental kerja di luar negeri yang benar-benar mengubah cara pandang saya. Saya jadi mengerti bahwa tantangan di sana itu normal — dan ada cara menghadapinya.

Sekarang saya sudah hampir setahun di Jepang. Saya membuktikan pada diri sendiri dan keluarga bahwa saya bisa mandiri dan sukses. Ibu saya menangis bangga waktu pertama kali saya transfer gaji ke rekening beliau.

Kalau kamu sekarang sedang di fase persiapan dan merasa berat — percaya sama prosesnya. Setiap langkah kecil itu penting.`,
  },
];

export default function AlumniDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const story = MOCK_FULL_STORIES.find(s => s.id === id) ?? MOCK_FULL_STORIES[0];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="max-w-lg mx-auto w-full">
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <Link href="/dashboard/alumni" className="p-1 -ml-1">
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </Link>
            <Image src="/assets/images/gapai-logo-green.png" alt="Gapai" width={72} height={24} className="h-6 w-auto brightness-0 invert" />
            <Link href="/dashboard/notifications" className="relative p-1.5">
              <Bell className="w-5 h-5 text-white/70" />
            </Link>
          </div>

          <div className="px-4 pt-4 pb-8 space-y-4">
            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-white/30 shrink-0 overflow-hidden relative bg-white/20">
                {story.photo ? (
                  <Image src={story.photo} alt={story.name} fill className="object-cover object-top" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">{story.name[0]}</span>
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold font-poppins text-white">{story.name}</h1>
                <p className="text-sm text-white/60 font-sans">Batch {story.batchYear} {story.countryFlag}</p>
              </div>
            </div>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-white/80 font-sans">
                <Briefcase className="w-3.5 h-3.5" />{story.jobTitle}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-white/80 font-sans">
                <MapPin className="w-3.5 h-3.5" />{story.country}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-white/80 font-sans">
                <Calendar className="w-3.5 h-3.5" />{story.track}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="flex-1 -mt-5 rounded-t-[28px] bg-gray-50">
        <div className="max-w-lg mx-auto w-full px-4 pt-5 pb-28">
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <div className="space-y-4">
              {story.fullContent.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm text-gray-600 font-sans leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
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
