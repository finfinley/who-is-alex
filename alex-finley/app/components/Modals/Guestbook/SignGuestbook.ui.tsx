'use client';
import React from 'react';
import { SignGuestbookForm } from '../../Forms/SignGuestbook.form';
import { Header } from '../../Page/Header';
import { Subheader } from '../../Page/Subheader';
import { PET_NAMES } from '../../Pet';

export function SignGuestbook({
  setSigned,
  onClose,
  pet,
}: {
  setSigned: any;
  onClose: () => void;
  pet: PET_NAMES | null;
}) {
  const [errors, setErrors] = React.useState<string[] | undefined>();

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
    <>
      <Header title={greeting} />
      <Subheader Subheader="Why not sign the guestbook?" />
      <div className="flex flex-col">
        <SignGuestbookForm
          onClose={onClose}
          setSigned={setSigned}
          setErrors={setErrors}
          pet={pet}
        />
        {errors?.length &&
          errors.map((error) => (
            <span className="flex justify-center">{error}</span>
          ))}
      </div>
    </>
  );
}
