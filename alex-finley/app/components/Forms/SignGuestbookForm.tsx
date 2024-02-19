import { createArchive } from '@/app/api/actions';
import { PET_NAMES } from '../Pet';

export function SignGuestbookForm({
  onClose,
  pet,
}: {
  onClose: () => void;
  pet: PET_NAMES | null;
}) {
  const signGuestbook = createArchive.bind(null, pet!);

  return (
    <form action={signGuestbook} className="form-style flex flex-col">
      <div className="flex flex-row items-center">
        <label data-for="name">
          <span>Name: </span>
        </label>
        <input type="text" name="name" />
      </div>

      <div className="flex flex-row items-center">
        <label data-for="email">
          <span>Email:</span>
        </label>
        <input type="email" name="email" />
      </div>

      <div className="flex flex-row justify-center">
        <div className="p-3">
          <input type="submit" value="Sign!" />
        </div>
        <div className="p-3">
          <input type="button" value="Close" onClick={onClose} />
        </div>
      </div>
    </form>
  );
}
