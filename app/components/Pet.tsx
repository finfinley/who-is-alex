"use client"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';

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

export function Pet() {
    const pathName = usePathname()

    const defaultIndex = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    const defaultPet = PET_MAP[defaultIndex]
    const [petToShow, setPetToShow] = useState<PetType>(defaultPet)
    useEffect(() => {
        console.log('Inside effect..')
        const index = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        if (defaultIndex === index) {
            return
        }
        setPetToShow(PET_MAP[index])
    }, [pathName])

    return (
        petToShow.link && (<img className='justify-self-center self-end' src={petToShow.link} />)
    )
}