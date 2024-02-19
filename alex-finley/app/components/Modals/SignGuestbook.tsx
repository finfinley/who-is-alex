import { createArchive } from '@/app/api/actions';
import { Header } from '../Page/Header';
import { Subheader } from '../Page/Subheader';
import { PET_NAMES } from '../Pet';
import { SignGuestbookForm } from '../Forms/SignGuestbookForm';

export function SignGuestbook({
  onClose,
  pet,
}: {
  onClose: () => void;
  pet: PET_NAMES | null;
}) {
  let greeting = 'Cheers!';
  switch (pet) {
    case PET_NAMES.DASH:
      greeting = 'Meow...';
      break;

    case PET_NAMES.LUNA:
      greeting = 'Woof!';
      break;

    case null:
    default:
      greeting = 'Cheers!';
      break;
  }

  return (
    <div className="modal">
      <div className="modal-content flex flex-row">
        <div>
          <Header title={greeting} />
          <Subheader Subheader="Why not sign the guestbook?" />
          <div className="flex flex-col">
            <SignGuestbookForm onClose={onClose} pet={pet} />
          </div>
        </div>
      </div>
    </div>
  );
}
