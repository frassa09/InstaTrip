import Logo from '../assets/logo_instatrip.png'
import TravelPromptInput from '../components/TravelPromptInput'
import { colorsInstaTrip } from '../constants/colors'

export default function Home() {


    return (
        <div className={`flex flex-col min-h-screen bg-[${colorsInstaTrip.fundo}]`}>
            <header className={`flex w-full h-20 border-b-2 border-b-[${colorsInstaTrip.roxoMarca}] bg-[${colorsInstaTrip.roxoMarca}] items-center`} style={{ backgroundColor: colorsInstaTrip.roxoMarca, borderBottomColor: colorsInstaTrip.roxoMarca }}>
                <div className='flex items-center'>
                    <img src={Logo} className='scale-[0.5]'></img>
                </div>
            </header>
            <main className={`flex h-full`} style={{ backgroundColor: colorsInstaTrip.fundo }}>
                <div className='flex flex-1 mt-20 justify-center items-center'>
                    <TravelPromptInput></TravelPromptInput>
                </div>
            </main>
        </div>
    )
}