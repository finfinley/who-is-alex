'use client';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function GuestbookArchives() {
  const { data, error, isLoading } = useSWR(
    'http://localhost:3001/archives',
    fetcher,
  );

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return <div>Broken ❤️‍🩹</div>;
  }

  return (
    <ul>
      {data?.map((archive: any) => {
        return <li key={archive._id}>{archive.name}</li>;
      })}
    </ul>
  );
}
