import { DataTable, EmptyPlaceholder } from '@/components';
import { Button, Separator } from '@store/ui';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { api } from '@/utils/api';
import { categoriesColumns } from '@/components/columns';
import { Loader2 } from '@store/ui/icons';
import Link from 'next/link';

export default function Categories() {
  const { t } = useTranslation('common');

  const { data, isLoading, status } = api.category.list.useQuery({
    limit: 10,
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{t('categories-capitalized')}</h2>
        </div>
        <Link href="/categories/new">
          <Button size="sm" className="relative">
            {t('add')} {t('category_2')}
          </Button>
        </Link>
      </div>
      <Separator className="my-4" />
      {status === 'loading' || isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : data?.items ? (
        <DataTable data={data.items} columns={categoriesColumns} />
      ) : (
        <EmptyPlaceholder
          name={t('category')}
          title={t('empty_list_title')}
          description={`${t('add_your_first')} ${t('category')}`}
          link="/categories/new"
        />
      )}
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
