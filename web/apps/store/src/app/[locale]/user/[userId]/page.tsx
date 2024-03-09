import { Avatar, AvatarFallback, AvatarImage } from '@store/ui/components/avatar';
import { getScopedI18n, getStaticParams } from '~/locales/server';
import Image from 'next/image';

export function generateStaticParams() {
  return getStaticParams();
}

interface ProfilePageProps {
  params: {
    userId: string;
  };
}

const MOCK_USER = {
  name: 'wildbase',
  image:
    'https://cdn.discordapp.com/avatars/315899675028750337/9c93a44379df95561c5ed2ebc8e16bc3.png',
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const t = await getScopedI18n('index');

  return (
    <section className="relative flex shrink-0 flex-col">
      <div className="-z-1 absolute inset-0 overflow-hidden">
        <Image
          src={MOCK_USER.image}
          alt={MOCK_USER.name}
          fill
          sizes="100vw"
          className="object-cover opacity-40 blur-lg filter"
        />
      </div>
      <section className="bg-background relative z-10 mt-52 w-full">
        <section className="container grid max-w-6xl grid-cols-3 items-start gap-8 pb-8 md:py-8">
          <div className="-mt-28">
            <div className="flex flex-col items-center justify-center">
              <Avatar className="h-40 w-40">
                <AvatarImage src={MOCK_USER.image} alt={MOCK_USER.name} height={160} width={160} />
                <AvatarFallback>{MOCK_USER.name}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-center justify-center pt-4">
              <div className="text-2xl font-bold">wildbase</div>
              <div className="font-medium text-green-400">Online</div>
            </div>
            {/* <div className="border-1 my-4 flex justify-between rounded-lg border p-4">
              <div>buy counter</div>
              <div>sell counter</div>
            </div> */}
            {/* <div className="border-1 my-4 flex justify-between rounded-lg border p-4">
              <span>rating</span>
            </div> */}
            <div className="border-1 my-4 flex flex-col justify-between rounded-lg border p-4">
              <span>about</span>
              {/* <span>newbie</span> */}
              <span>registration date</span>
            </div>
          </div>
          <div className="col-span-2">
            {/* <div className="flex gap-2">
              <div>lots</div>
              <div>purchases</div>
              <div>sales</div>
              <div>messages</div>
              <div>reviews</div>
            </div>
            <div>table</div> */}
          </div>
        </section>
      </section>
    </section>
  );
}
