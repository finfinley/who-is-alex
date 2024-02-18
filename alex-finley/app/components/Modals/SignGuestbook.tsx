import { Header } from '../Page/Header';
import { Subheader } from '../Page/Subheader';
import { PET_NAMES } from '../Pet';

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
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
