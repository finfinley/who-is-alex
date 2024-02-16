import { Header } from '@/app/components/Page/Header';
import { MainContent } from '../components/Page/MainContent';
import { GuestbookArchives } from '../components/GuestbookArchives';

export default function Guestbook() {
  return (
    <>
      <Header title="Guestbook" />
      <MainContent content="CONTENT" />
      <GuestbookArchives />
    </>
  );
}
