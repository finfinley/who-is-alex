'use client';

import React from 'react';
import { PET_NAMES } from '../../Pet';
import { SignGuestbook } from './SignGuestbook.ui';
import { ThankYou } from './ThankYou.ui';

export function GuestbookModal({
  onClose,
  pet,
}: {
  onClose: () => void;
  pet: PET_NAMES | null;
}) {
  const [signed, setSigned] = React.useState<boolean>(false);

  return (
    <div className="modal">
      <div className="modal-content flex flex-row">
        <div>
          {!signed ? (
            <SignGuestbook onClose={onClose} pet={pet} setSigned={setSigned} />
          ) : (
            <ThankYou onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
