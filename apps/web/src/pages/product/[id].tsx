import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@store/ui';
import {
  MarketPreview,
  PaymentMethodSwitcher,
  ProductPreview,
  ReviewPreview,
  ReviewsViewer,
} from '@/components';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticPaths } from 'next';

export default function Product() {
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col py-12">
        <div className="grid gap-6 pb-6 md:grid-cols-3">
          <div className="col-span-2">
            <p className="pb-4 text-lg font-medium">Product name</p>
            <Image
              src="https://placehold.co/180x180.png"
              alt="product image"
              className="rounded pb-4"
              width={180}
              height={180}
            />
            <div className="pb-4">
              <p className="pb-4 text-lg font-medium">Information</p>
              <div className="grid md:grid-cols-3">
                <div>
                  <p className="font-medium">Delivery speed</p>
                  <p className="text-sm text-gray-400">Instant</p>
                </div>
                <div>
                  <p className="font-medium">Delivery method</p>
                  <p className="text-sm text-gray-400">Auto delivery</p>
                </div>
                <div>
                  <p className="font-medium">Category</p>
                  <p className="text-sm text-gray-400">Game Top Up</p>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <p className="pb-4 text-lg font-medium">Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est accusantium
                quisquam laborum, similique animi suscipit. Ducimus aliquam ipsum suscipit impedit
                inventore doloribus quod quasi ad illo itaque, minima reiciendis.
              </p>
            </div>
          </div>
          <div>
            <Link href="/market/1">
              <MarketPreview
                name="Market name"
                rating={4.8}
                reviewsCount={4.6}
                image="https://placehold.co/80x80"
              />
            </Link>
            <p className="pb-3 pt-2 text-sm">Payment method</p>
            <PaymentMethodSwitcher />
            <p className="pt-6 font-medium">Total price: 1 200 ₽</p>
            <div className="flex flex-col">
              {/* TODO: implement later */}
              {/* <Button variant="secondary" className="mb-4 w-full">
                <span className="font-medium">Add to cart</span>
              </Button> */}
              <Button className="my-6 w-full">
                <span className="font-medium">Buy now</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="pb-4">
          <div className="flex flex-row items-start justify-between pb-4">
            <p className="text-lg font-medium">Ratings and Reviews</p>
            <ReviewsViewer />
          </div>
          <div className="flex flex-row items-end">
            <div className="flex flex-row items-end pr-4">
              <p className="pr-1 text-5xl font-medium">4.8</p>
              <p className="font-medium text-gray-400">out of 5</p>
            </div>
            <p>4.6K Ratings</p>
          </div>
          <div className="grid gap-3 py-4 md:grid-cols-3">
            {new Array(3).fill('').map((_, index) => (
              <ReviewPreview />
            ))}
          </div>
        </div>

        <p className="pb-4 text-lg font-medium">More By This Market</p>
        <div className="grid gap-6 md:grid-cols-6">
          {new Array(6).fill('').map((_, index) => (
            <ProductPreview
              key={index}
              id={String(index)}
              name="Product name"
              price={1200}
              reviewsCount={64}
              image="https://placehold.co/180x180.png"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
