import { createArchive } from '@/app/api/actions';
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
  const signGuestbook = createArchive.bind(null, pet!);
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
            <form action={signGuestbook} className="flex flex-col">
              <div className="flex flex-row p-3">
                <label data-for="name">Name: </label>
                <input type="text" name="name" />
              </div>

              <div className="flex flex-row p-3">
                <label data-for="email">Email: </label>
                <input type="text" name="email" />
              </div>

              <div className="flex flex-row justify-center">
                <div className="p-3">
                  <button
                    className="p-3 rounded"
                    style={{
                      backgroundColor: '#E05263',
                      color: '#F2E9E4',
                      border: '0.15em solid #E05263',
                    }}
                    data-as="submit"
                  >
                    Sign!
                  </button>
                </div>
                <div className="p-3">
                  <button
                    className="p-3 btn rounded"
                    style={{ border: '0.15em solid #E05263' }}
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
