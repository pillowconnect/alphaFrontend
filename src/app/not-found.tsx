import Link from 'next/link';
import Image from 'next/image';
import pillowLogo from '@/assets/pillow.svg';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-[100dvh]">
            <div className="max-w-md space-y-8 p-4 text-center">
                <div className="flex justify-center">
                    <Image src={pillowLogo} alt="PillowConnect" width={80} height={80} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                    Dude Work In Progress :)
                </h1>
                <p className="text-base text-gray-500">
                    Sry! For the inconvenience We&apos;re Working to make it Live ASAP.
                    Till Then Join our Waitlist to get Early Access. Don&apos;t worry we will not spam you :)
                </p>
                <Link
                    href="/"
                    className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02577a]"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}