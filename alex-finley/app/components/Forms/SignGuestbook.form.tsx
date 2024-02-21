import { createArchive } from '@/app/api/actions';
import { PET_NAMES } from '../Pet';

export function SignGuestbookForm({
  onClose,
  setSigned,
  setErrors,
  pet,
}: {
  onClose: () => void;
  setSigned: any;
  setErrors: any;
  pet: PET_NAMES | null;
}) {
  const signGuestbook = async (formData: FormData) => {
    const res = await createArchive(pet!, formData);
    if (!res.success) {
      console.log(res.errors);
      setErrors(res.errors);
      return;
    }
    setSigned(true);
    console.log('Guestbook signed');
  };

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
