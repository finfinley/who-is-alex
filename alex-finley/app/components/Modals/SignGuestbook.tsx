'use client';

import React from 'react';
import { SignGuestbookForm } from '../Forms/SignGuestbook.form';
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
  const [signed, setSigned] = React.useState<boolean>(false);
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
    <div className="modal">
      <div className="modal-content flex flex-row">
        <div>
          {signed ? (
            <>
              <div
                className="grid grid-row justify-center content-center justify-items-center"
                style={{ height: '100%' }}
              >
                <h1 style={{ fontSize: '2.5em' }}>Thanks for signing!</h1>
                <div className="p-3">
                  <input
                    className="closeBtn"
                    type="button"
                    value="Close"
                    onClick={onClose}
                  />
                </div>
              </div>
            </>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
