'use client';
import { isEqual } from 'lodash';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GuestbookModal } from './Modals/Guestbook/GuestbookModal';

export enum PET_NAMES {
  LUNA = 'luna',
  DASH = 'dash',
}

type PetType = {
  link: string | null;
  name: PET_NAMES | null;
};

const PET_MAP: PetType[] = [
  {
    link: 'gifs/Luna-wag.gif',
    name: PET_NAMES.LUNA,
  },
  {
    link: 'gifs/dash-wag.gif',
    name: PET_NAMES.DASH,
  },
  {
    link: null,
    name: null,
  },
];

export function Pet({ defaultIndex }: { defaultIndex: number }) {
  const pathName = usePathname();
  const defaultPet = PET_MAP[defaultIndex];
  const [petToShow, setPetToShow] = useState<PetType>(defaultPet);
  const [modalDisplay, setModalDisplay] = useState<boolean>(false);

  const openModal = () => {
    setModalDisplay(true);
  };
  const closeModal = () => {
    if (modalDisplay) {
      setModalDisplay(false);
    }
  };

  useEffect(() => {
    const index = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    const newPet = PET_MAP[index];
    if (isEqual(defaultPet, newPet)) {
      setPetToShow(defaultPet);
    }
    setPetToShow(newPet);
  }, [pathName]);

  const gifPet = petToShow.link ? (
    <div className="grid justify-center justify-items-center">
      <button onClick={openModal}>
        <img src={petToShow.link} />
      </button>
    </div>
  ) : (
    <img />
  );

  return (
    <>
      {gifPet}
      {modalDisplay && (
        <GuestbookModal pet={petToShow.name} onClose={closeModal} />
      )}
    </>
  );
}
