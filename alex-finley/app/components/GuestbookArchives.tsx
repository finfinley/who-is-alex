'use client';
import useSWR from 'swr';
import { archivesFetcher } from '../api/fetchers';
import { StoredArchive } from '../api/types';

export function GuestbookArchives() {
  const { data, error, isLoading } = useSWR(process.env.CHRONICLER_URL, archivesFetcher);

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return <div>Broken ❤️‍🩹</div>;
  }

  return (
    <ul>
      {data?.map((archive: StoredArchive) => {
        return <li key={archive._id}>{archive.name}</li>;
      })}
    </ul>
  );
}
