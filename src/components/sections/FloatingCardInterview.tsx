'use client';

import Image, { StaticImageData } from 'next/image';
import fileIcon from '@/assets/Social_Media.svg';
import paperClip from '@/assets/paper_clip.webp';
import emliy from '@/assets/Emily.avif';
import avtarBadge from '@/assets/svgexport-14.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FloatingCardInterviewProps {}

export const FloatingCardInterview: React.FC<FloatingCardInterviewProps> = () => {
  return (
    <div className="absolute z-10 -bottom-12 right-16 md:-bottom-24 md:-right-10 rotate-[-12deg]">
      <div style={{ opacity: 1, transform: 'scale(1) rotate(0deg)' }}>
        <div className="scale-90 md:scale-100">
          <div className="relative w-[260px] h-[320px] md:w-[400px] md:h-[439px]">
            <Image
              alt="Social Media"
              src={fileIcon}
              layout="fill"
              className="absolute -z-10 top-0 left-0 object-cover h-full"
              priority
            />

            <Image
              alt="Paper Clip"
              src={paperClip}
              width={70}
              height={70}
              className="absolute left-4 -top-8 z-10 rotate-[8deg]"
              priority
            />

            <div className="absolute left-6 md:left-12 mt-12 md:mt-24 flex flex-col gap-4 w-[240px] md:w-[300px]">
              <Card
                name="Shashank's Interview"
                description="Candidate is good."
                avatar={emliy}
                badge={avtarBadge}
              />
              <Card
                name="Emily's Interview"
                description="Candidate is Top 1% out of 10000."
                avatar={emliy}
                badge={avtarBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Card({ name, description, avatar, badge }: { name: string; description: string; avatar: StaticImageData; badge: StaticImageData }) {
  return (
    <div className="flex items-center justify-between p-3 md:p-4 w-full h-18 md:h-20 bg-white rounded-xl shadow-md">
      <div className="flex items-center">
        <div className="relative w-[40px] h-[40px] md:w-[50px] md:h-[50px]">
          <Image
            alt="Avatar"
            src={avatar}
            width={50}
            height={50}
            className="rounded-full object-cover"
            priority
          />
          <Image
            alt="Badge"
            src={badge}
            width={15}
            height={15}
            className="absolute bottom-0 right-0"
            priority
          />
        </div>
        <div className="ml-3 md:ml-4">
          <h1 className="font-semibold text-xs md:text-sm">{name}</h1>
          <p className="font-normal text-xs text-gray-600">{description}</p>
        </div>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-400"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5461 7.54623C13.6507 7.54623 14.5461 6.6508 14.5461 5.54623C14.5461 4.44166 13.6507 3.54623 12.5461 3.54623C11.4416 3.54623 10.5461 4.44166 10.5461 5.54623C10.5461 6.6508 11.4416 7.54623 12.5461 7.54623Z"
          fill="#7A7A9D"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5461 14.5462C13.6507 14.5462 14.5461 13.6508 14.5461 12.5462C14.5461 11.4417 13.6507 10.5462 12.5461 10.5462C11.4416 10.5462 10.5461 11.4417 10.5461 12.5462C10.5461 13.6508 11.4416 14.5462 12.5461 14.5462Z"
          fill="#7A7A9D"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5461 21.5462C13.6507 21.5462 14.5461 20.6508 14.5461 19.5462C14.5461 18.4417 13.6507 17.5462 12.5461 17.5462C11.4416 17.5462 10.5461 18.4417 10.5461 19.5462C10.5461 20.6508 11.4416 21.5462 12.5461 21.5462Z"
          fill="#7A7A9D"
        ></path>
      </svg>
    </div>
  );
}
