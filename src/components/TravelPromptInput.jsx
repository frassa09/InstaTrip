import { useState } from "react";
import { colorsInstaTrip } from "../constants/colors";

const nonSelectedButtonStyles = `border-2 flex-1 h-15 rounded-2xl cursor-pointer`
const selectedButtonStyles = `border-2 flex-1 h-15 rounded-2xl cursor-pointer border-[#732EE4] bg-[#D2BBFF]`

export default function TravelPromptInput({ theme }) {

    const [selected, setSelected] = useState('null')
    const botoes = ['Econômico', 'Moderado', 'Luxo']


    return (
        <div className={`flex flex-col h-125 w-100 rounded-2xl shadow-sm border border-gray-100 shadow-black`} style={{ backgroundColor: colorsInstaTrip.card }}>

            <p className="font-instatrip font-bold text-2xl m-8">Planeje sua Aventura</p>

            <div className="flex items-center flex-col justify-center w-full">

                <div className="flex flex-col w-80 justify-center items-center">
                    <div className="flex flex-col text-sm">
                        <label className="font-instatrip">Destino (ex: Paris)</label>
                        <input className="font-instatrip h-10 border-2 rounded-md w-80" style={{ borderColor: colorsInstaTrip.bordaInput }}></input>
                    </div>
                    <div className="flex flex-col text-sm mt-8">
                        <label className="font-instatrip">Quantos dias?</label>
                        <input className="font-instatrip h-10 border-2 rounded-md w-80" style={{ borderColor: colorsInstaTrip.bordaInput }}></input>
                    </div>
                </div>

                <div className="flex flex-col w-80 justify-center mt-6">
                    <p className="font-instatrip text-sm">Orçamento</p>
                    <div className="flex flex-row gap-1 w-full mt-1">
                        {botoes.map((botao) => {
                            return (
                                <button key={botao} className={botao == selected ? selectedButtonStyles : nonSelectedButtonStyles} onClick={() => setSelected(botao)}>{botao}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}