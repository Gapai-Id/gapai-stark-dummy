import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Briefcase } from 'lucide-react';

export interface AlumniStory {
  id: string;
  name: string;
  track: string;
  country: string;
  countryFlag: string;
  jobTitle: string;
  batchYear: string;
  photo?: string;
  excerpt: string;
}

interface StoryCardProps {
  story: AlumniStory;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/dashboard/alumni/${story.id}`} className="block">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {/* Photo / hero */}
        <div className="h-44 relative">
          {story.photo ? (
            <Image
              src={story.photo}
              alt={story.name}
              fill
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900" />
          )}
          {/* Overlay gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold font-poppins text-white">{story.name}</p>
              <p className="text-xs text-white/70 font-sans">Batch {story.batchYear}</p>
            </div>
            <span className="text-2xl">{story.countryFlag}</span>
          </div>
        </div>

        <div className="p-4 space-y-2.5">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-sans">
              <Briefcase className="w-3.5 h-3.5" />{story.jobTitle}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-sans">
              <MapPin className="w-3.5 h-3.5" />{story.country}
            </span>
          </div>

          <p className="text-sm text-gray-600 font-sans leading-relaxed line-clamp-3">
            {story.excerpt}
          </p>

          <p className="text-xs font-semibold font-poppins text-primary-600">Baca selengkapnya →</p>
        </div>
      </div>
    </Link>
  );
}
