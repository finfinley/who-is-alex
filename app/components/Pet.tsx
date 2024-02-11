"use client"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { isEqual } from 'lodash';


type PetType = {
    link: string | null,
    name: 'Luna' | 'Dash' | null
}

const PET_MAP: PetType[] = [{
    link: 'gifs/Luna-wag.gif',
    name: 'Luna'
}, {

    link: 'gifs/dash-wag.gif',
    name: 'Dash'

}, {

    link: null,
    name: null

}]

export function Pet({ defaultIndex }: { defaultIndex: number }) {
    const pathName = usePathname()
    const defaultPet = PET_MAP[defaultIndex]
    const [petToShow, setPetToShow] = useState<PetType>(defaultPet)
    useEffect(() => {
        const index = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        const newPet = PET_MAP[index]
        if (isEqual(defaultPet, newPet)) {
            setPetToShow(defaultPet)
        }
        setPetToShow(newPet)
    }, [pathName])

    const gifPet = petToShow.link ? <img className='justify-self-center self-end' src={petToShow.link} /> : <img />

    return (
        <>
            {gifPet}
        </>

    )

}
