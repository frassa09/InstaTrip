import { useState } from 'react'
import Logo from '../assets/logo_instatrip.png'
import TravelPromptInput from '../components/TravelPromptInput'
import { colorsInstaTrip } from '../constants/colors'
import { AnimatePresence, motion } from 'motion/react'
import TravelBoard from '../components/TravelBoard'

const mainDivInitialStyles = 'flex flex-1 justify-center items-center'
const mainDivStyles = 'flex flex-1 flex-row justify-between mx-45 items-center'

export default function Home() {

    const [clicado, setClicado] = useState(false)


    return (
        <div className={`flex flex-col min-h-screen bg-[${colorsInstaTrip.fundo}]`}>
            <header className={`flex w-full h-20 border-b-2 border-b-[${colorsInstaTrip.roxoMarca}] bg-[${colorsInstaTrip.roxoMarca}] items-center`} style={{ backgroundColor: colorsInstaTrip.roxoMarca, borderBottomColor: colorsInstaTrip.roxoMarca }}>
                <div className='flex items-center'>
                    <img src={Logo} className='scale-[0.5]'></img>
                </div>
            </header>

            <main className={`flex flex-col flex-1`} style={{ backgroundColor: colorsInstaTrip.fundo }}>
                <div className={!clicado ? mainDivInitialStyles : mainDivStyles}>
                    <AnimatePresence>
                        <motion.div layout key='travel-prompt' animate={{ scale: clicado ? 1.2 : 1 }} style={{transformOrigin: 'top center'}} transition={{ duration: 0.2 }}>
                            <TravelPromptInput></TravelPromptInput>
                        </motion.div>
                        {clicado ?
                            <motion.div layout key='travel-board' initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                                <TravelBoard></TravelBoard>
                            </motion.div>
                            : null}
                    </AnimatePresence>

                </div>
            </main>


            <button onClick={() => setClicado(!clicado)}>oi</button>
        </div>
    )
}