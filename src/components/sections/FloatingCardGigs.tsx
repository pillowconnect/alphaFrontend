'use client';

import Image from 'next/image';
import fileIcon from '@/assets/Social_Media.svg';

interface JobCardProps {
  title: string;
  location: string;
  price: string;
  postedDate: string;
}
{/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */}
interface FloatingCardJobsProps {}

export const FloatingCardJobs: React.FC<FloatingCardJobsProps> = () => {
  return (
    <div className="absolute z-10 md:-bottom-28 md:-left-16 -bottom-16 left-24 rotate-[8deg]">
      <div style={{ opacity: 1, transform: 'scale(1) rotate(0deg)' }}>
        <div className="md:[&>*]:scale-100 [&>*]:scale-75">
          <div className="relative w-[300px] md:w-[400px] h-[350px] md:h-[439px]">
            <Image
              alt="Background Icon"
              src={fileIcon}
              layout="fill"
              className="absolute -z-10 top-0 left-0 object-cover h-full"
              priority
            />

            <div className="absolute left-8 md:left-12 mt-16 md:mt-24 flex flex-col gap-4 w-[260px] md:w-[300px]">
              <JobCard
                title="Frontend Developer"
                location="San Francisco, CA"
                price="$50/hr"
                postedDate="2 days ago"
              />
              <JobCard
                title="UI/UX Designer"
                location="Remote"
                price="$60/hr"
                postedDate="5 days ago"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function JobCard({ title, location, price, postedDate }: JobCardProps) {
  return (
    <div className="flex items-center justify-between p-4 w-full h-20 bg-white rounded-xl shadow-md">
      <div className="flex items-center">
        <div className="ml-4">
          <h1 className="font-semibold text-sm md:text-base">{title}</h1>
          <p className="font-normal text-xs md:text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-[#02577a]">{price}</p>
        <p className="text-xs text-gray-500">{postedDate}</p>
      </div>
    </div>
  );
}
